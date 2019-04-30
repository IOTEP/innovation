#!/usr/bin/env python
# -*- coding: utf-8 -*-

'''
useage:    广告曝光历史数据导入脚本
author:    yongwei
email:
date:      2019.04.26
'''

import urllib
import urllib2
import httplib
import cookielib
import json
import time
import datetime
import MySQLdb
import sys


User = "daihao"
Pwd = "123456"
INTERFACE = 'http://archon.biz.weibo.com/grafana/api/datasources/proxy/14/render'
TSDELTA = 86400

DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASSWD = '123456'
DB_NAME = 'interface_cache'
TABLE_NAME = 'ad_ecpm'

DIC_PRODUCT = {}

class GrafanaTools:

    def __init__(self, conn, startts, endts):
        self.opener = self.get_opener(User, Pwd)
        self.conn = conn
        self.cur = conn.cursor()
        self.startts = startts
        self.endts = endts
        #print '__init__ successfully'

    def run_ecpm(self):
        #print 'run_ecpm start'
        days = self.get_days_ts()
        dic = {}
        global DIC_PRODUCT

        for t in days:
            from_ts, until_ts = t[0], t[1]
            str_day = self.get_day_time_str(from_ts)
            dic[str_day] = []

            for k in DIC_PRODUCT:
                target = DIC_PRODUCT[k]['target']
                if target == '':
                    continue

                id = DIC_PRODUCT[k]['id']
                format = DIC_PRODUCT[k]['format']
                maxDataPoints = DIC_PRODUCT[k]['maxDataPoints']

                body = {
                    'target': target,
                    'format': format,
                    'from': from_ts,
                    'until': until_ts,
                    'maxDataPoints': maxDataPoints,
                }
                headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json, text/plain, */*'
                }

                ret = self.get_post_resp(headers, body)
                if len(ret['datapoints']) == 1:
                    continue

                tmp = ret['datapoints']
                flag = 0
                for i in tmp:
                    if i[0] is not None:
                        flag = 1
                        break
                if flag == 0:
                    continue

                ecpm, ts = self.get_max_item(ret['datapoints'])
                if ecpm == 0:
                    continue
                dic_item = {
                    'id': id,
                    'ecpm': ecpm,
                    'ts': ts,
                }
                dic[str_day].append(dic_item)

        if dic:
            self.insert_history_ecpm(dic)
        #print 'run_ecpmsuccess'

    def insert_history_ecpm(self, dic):
        lis = []
        for k, v in dic.items():
            time = k
            for i in v:
                pid = i['id']
                ecmp = i['ecpm']
                ts = i['ts']
                if time and pid and ecmp and ts:
                    lis.append((time, pid, ecmp, ts))

        sql = "insert into " + TABLE_NAME + "(time, pid, ecpm, ts) VALUES (%s, %s, %s, %s)"
        try:
            lis.sort(key=lambda obj: obj[0])
            self.cur.executemany(sql, lis)
            self.conn.commit()
        except MySQLdb.Error, e:
            self.conn.rollback()
            print sys.argv[0], ': insert_history_ecpm error:'
            print e

    def get_post_resp(self, headers, data):
        body = urllib.urlencode(data)
        request = urllib2.Request(INTERFACE, body, headers)

        try:
            result = self.opener.open(request)
        except urllib2.URLError as e:
            print sys.argv[0], 'get_post_resp error:', e.code
        else:
            response = json.loads(result.read())
            result.close()
            return response[0]

    def get_opener(self, user, passwd):
        cookie = cookielib.CookieJar()
        opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookie))
        request = self.user_login(user, passwd)

        try:
            result = opener.open(request)
        except urllib2.URLError as e:
            print sys.argv[0], 'get_opener error:', e.code
        else:
            result.close()
            return opener

    def user_login(self, user, passwd):
        postUrl = 'http://archon.biz.weibo.com/grafana/login'
        headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept'      : 'application/json, text/plain, */*'
        }
        body_raw = {
            'user'    : user,
            'password': passwd
        }
        body = json.dumps(body_raw)
        request = urllib2.Request(postUrl, body, headers)
        return request

    def get_day_time_str(self, ts):
        return time.strftime("%Y-%m-%d", time.localtime(ts))

    def get_days_ts(self):
        ret = []
        for ts in xrange(self.startts, self.endts, TSDELTA):
            from_ts = ts
            until_ts = ts + TSDELTA - 1
            ret.append((from_ts, until_ts))
            # print datetime.datetime.fromtimestamp(from_ts)
            # print datetime.datetime.fromtimestamp(until_ts)
        return ret

    def get_max_item(self, list_item):
        max_item = list_item[0][0]
        max_ts = list_item[0][1]

        for i in list_item:
            item, ts = i[0], i[1]
            if item and ts and item > max_item:
                max_item = item
                max_ts = ts

        return max_item, ts

    def __del__(self):
        self.cur.close()
        self.conn.close()

def init():
    global DIC_PRODUCT

    # 超级粉丝通
    DIC_PRODUCT['fst'] = {
        'id': 1,
        'target': "alias(scale(divideSeries(scale(derivative(sfst.settle.consume.ad.bid.finance.cost), 0.01), alias(sumSeries(sfst.settle.wb_ad_sfstbimpjs.bid_type.*.pv.*), '财务消耗')), 1000), '财务消耗')",
        #'target': '',
        'format': 'json',
        'maxDataPoints': 1440, #10 #683
    }
    # 博文推广
    DIC_PRODUCT['bidfeed'] = {
        'id': 2,
        'target': "alias(scale(divideSeries(derivative(fst.settle.8.consumer), fst.settle.8.pv), 1000), 'ECPM')",
        #'target': '',
        'format': 'json',
        'maxDataPoints': 1440, #10 #683
    }
    # 品牌速递
    DIC_PRODUCT['brand'] = {
        'id': 3,
        'target': '',
        'format': 'json',
        'maxDataPoints': 0,
    }
    # 应用家
    DIC_PRODUCT['apploft'] = {
        'id': 4,
        'target': "alias(scale(divideSeries(scale(fst.settle.wb_ad_apploftimpjs.consume.count, 0.0001), fst.settle.wb_ad_apploftimpjs.total_pv.count), 1000), 'ECPM')",
        #'target': '',
        'format': 'json',
        'maxDataPoints': 1440, #10 #683
    }
    # 微博精选
    DIC_PRODUCT['aim'] = {
        'id': 5,
        'target': '',
        'format': 'json',
        'maxDataPoints': 0,
    }

def mysql_connect():
    """
    Return a MySQL database connection
    """
    try:
        conn = MySQLdb.connect(DB_HOST,
                               DB_USER,
                               DB_PASSWD,
                               DB_NAME,
                               charset="utf8",
                               use_unicode=True)
        return conn
    except MySQLdb.Error, e:
        sys.stderr.write("Error %d: %s\n" % (e.args[0], e.args[1]))
        sys.exit(1)

def main():
    init()
    t =  time.localtime()
    today = datetime.datetime(year=t.tm_year, month=t.tm_mon, day=t.tm_mday)
    ts_start = int(time.mktime((today + datetime.timedelta(days=-1)).timetuple()))
    ts_end = int(time.mktime(today.timetuple()))

    conn = mysql_connect()
    base = GrafanaTools(conn, ts_start, ts_end)
    base.run_ecpm()

if __name__ == "__main__":
    main()



#ECPM:
# 超级粉丝通-2017-03-23开始有数据
#   博文推广-2017-04-19开始有数据
#     应用家-2017-06-20开始有数据
#   品牌速递-没有ECPM指标-固定25元
#   微博精选-没有ECPM指标-固定400元
