#!/usr/bin/python
# -*- coding: utf-8 -*-

import MySQLdb
import mysql.connector
import sys

DB_HOST = '10.77.31.234'
DB_USER = 'root'
DB_PASSWD = '123456'
DB_NAME = 'hubble_system'

reload(sys)
sys.setdefaultencoding('utf-8')

class Runner:
    @property
    def mysqlconnect(self):
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

    def __init__(self):
        self.conn = self.mysqlconnect
        self.cur = self.conn.cursor()

    def run(self):
        sql = """select u.id, u.role from hubble_system.user u where  role not like \"%10%\""""
        self.cur.execute(sql)
        rst = self.cur.fetchall()
        lis = []
        for item in rst:
            id = item[0]
            val = item[1]
	    print "old:"
	    print val
            if not val or val == '[]':
                val = '[\"10\"]'
            else:
	        print "replace:";
		val = val.replace("]",",\"10\"]");
	    print val;
            if val and len(val) > 0:
                self.modify(id,val)

    def modify(self, id,lis):
        sql = """update hubble_system.user set role='%s' where id='%s'""" % (lis,id)
	print sql
        self.cur.execute(sql)
      #  self.cur.executemany(MySQLdb.escape_string(sql), lis)

    def __del__(self):
        self.conn.commit()
        self.cur.close()
        self.conn.close()


if __name__ == '__main__':
    r = Runner()
    r.run()
