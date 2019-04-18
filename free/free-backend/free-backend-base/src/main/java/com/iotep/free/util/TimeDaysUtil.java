package com.iotep.free.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by yongwei7 on 2019/3/28.
 */
public class TimeDaysUtil {
    public static Date dateFormat(String time, SimpleDateFormat format) {
        Date date = null;
        try {
            date = format.parse(time);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    public static int days(String startTime, String endTime) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        int days = 1;
        Date sDate = dateFormat(startTime, format);
        Date eDate = dateFormat(endTime, format);
        days = (int) ((eDate.getTime() - sDate.getTime()) / (1000 * 60 * 60 * 24) + 1);
        return days;
    }

    public static String daysBefore(String time, int days) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Calendar c = Calendar.getInstance();
        Date date = dateFormat(time, format);
        c.setTime(date);
        c.set(Calendar.DATE, c.get(Calendar.DATE) - days);
        date = c.getTime();
        return format.format(date);
    }

    public static String yearBefore(String time) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date date = dateFormat(time, format);
        date.setYear(date.getYear() - 1);
        return format.format(date);
    }

    public static String date() {
        String sDate = null;
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        sDate = format.format(date);
        Calendar cal = Calendar.getInstance();
        int week = cal.get(Calendar.DAY_OF_WEEK);
        if (week > 4) {
            sDate = daysBefore(sDate, week - 4) + "," + sDate;
        } else {
            sDate = daysBefore(sDate, week + 3) + "," + sDate;
        }
        return sDate;
    }
}
