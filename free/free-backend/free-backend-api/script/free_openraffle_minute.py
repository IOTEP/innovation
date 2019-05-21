#!/usr/bin/python
# -*- coding: utf-8 -*-

import pymysql
import sys
import datetime
import requests
import logger


mylog = logger.Logger("debug")

DB_HOST = '47.105.105.90'
DB_USER = 'root'
DB_PASSWD = '0c73f6b6fa'
DB_NAME = 'lottery'

TIME_SPACE = 10*60

headers = {'accept': 'application/json',
           'Content-Type': 'application/json'}

#reload(sys)
#sys.setdefaultencoding('utf-8')

class Runner:
    @property
    def mysqlconnect(self):
        """
        Return a MySQL database connection
        """
        try:
            conn = pymysql.connect(DB_HOST,
                                   DB_USER,
                                   DB_PASSWD,
                                   DB_NAME,
                                   charset="utf8",
                                   use_unicode=True)
            return conn
        except Exception as e:
            sys.stderr.write("Error %d: %s\n" % (e.args[0], e.args[1]))
            sys.exit(1)

    def __init__(self):
        self.conn = self.mysqlconnect
        self.cur = self.conn.cursor()

    def run(self):
        sql = """ select id,raffle_mode,upper_limit,join_limit,user_id,end_time from t_activity WHERE status=1 and is_end=0 and ( (raffle_mode=2  or raffle_mode=1) ) """
        self.cur.execute(sql)
        rst = self.cur.fetchall()
        now = datetime.datetime.now()
        lis = []
        raffle_mode2_id_list = []
        raffle_mode2_limit_list = {}
        for item in rst:
            id = item[0]
            raffle_mode = item[1]
            upper_limit = item[2]
            end_time = item[5]
            print(end_time.timestamp())
            print((end_time.timestamp()-now.timestamp()))
            if raffle_mode == 1:
                time_gap = now.timestamp()-end_time.timestamp()
                print(time_gap)

                if(time_gap >0 and time_gap <= TIME_SPACE):
                    #调用开奖接口
                    requests_body = {
                        'activityId': id,
                        'myUserId':1
                    }
                    self.requestopenraffle(requests_body)
                elif(time_gap >0 and time_gap > TIME_SPACE):
                    mylog.error('activityId:'+str(id)+' 超过开奖时间间隔')

            elif (raffle_mode == 2 and upper_limit >0):
                raffle_mode2_id_list.append(id)
                raffle_mode2_limit_list[id] = upper_limit
            else:
                mylog.info("id:"+str(id)+"  raffle_mode:"+raffle_mode+" skip")

        if(len(raffle_mode2_id_list)>0):
            id_str = ','.join(raffle_mode2_id_list)
            sql = """ select activity_id,count(*) as number from t_user_activity WHERE activityId IN('%s') group by activityId """ %(id_str)
            self.cur.execute(sql)
            rst = self.cur.fetchall()
            for item in rst:
                activity_id = item[0]
                number = item[1]
                if (number>0 and activity_id in raffle_mode2_limit_list and number >= raffle_mode2_limit_list[activity_id]):
                    requests_body = {
                        'activityId': id,
                        'myUserId': 1
                    }
                    self.requestopenraffle(requests_body)
                else:
                    print(activity_id)

    def requestopenraffle(self, requests_body):
        # 调用开奖接口
        url = 'http://localhost:2023/free/action/openRaffle'
        response = requests.post(url, json=requests_body)
        # r = requests.post(url, data=json.dumps(params), headers=headers)
        print(response)

        if response.status_code == 200:
            data = response.json()
            print(data)
        else:
            print(id)

    def modify(self, id,lis):
        sql = """update hubble_system.user set role='%s' where id='%s'""" % (lis,id)
	    #print(sql)
        self.cur.execute(sql)
      #  self.cur.executemany(pymysql.escape_string(sql), lis)

    def __del__(self):
        self.conn.commit()
        self.cur.close()
        self.conn.close()


if __name__ == '__main__':
    r = Runner()
    r.run()
