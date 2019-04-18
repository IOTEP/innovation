package com.iotep.free.util;

import com.alibaba.druid.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by yongwei7 on 2019/3/28.
 */
public class TimeUtil {
    private static final Logger logger = LoggerFactory.getLogger(TimeUtil.class);
    private static SimpleDateFormat format_1 = new SimpleDateFormat("yyyy-MM-dd");
    private static SimpleDateFormat format_2 = new SimpleDateFormat("yyyy/MM/dd");

    public static String formatTime(String time) {
        return format(time, format_1, format_2);
    }

    public static String checkTimeFormat(String time) {
        return format(time, format_1, format_1);
    }

    private synchronized static String format(String time, SimpleDateFormat formatFrom, SimpleDateFormat formatTo) {
        try {
            if (time == null || time.equals("")) {
                return "";
            }
            Date date = formatFrom.parse(time);
            return formatTo.format(date);
        } catch (ParseException e) {
            logger.error("change time falied", e);
        }
        return "";
    }

    /**
     * 获取当前时间
     *
     */
    public static String getNowTime() {
        Calendar cal = Calendar.getInstance();
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMMdd");
        String lastMonth = dft.format(cal.getTime());
        return lastMonth;
    }

    /**
     * 判断当天是否为本月第一天
     *
     * @return
     */
    public static boolean isFirstDayOfMonth() {
        boolean flag = false;
        Calendar calendar = Calendar.getInstance();
        int today = calendar.get(calendar.DAY_OF_MONTH);
        if (1 == today) {
            flag = true;
        }
        return flag;
    }

    /**
     * 获取当前月份最后一天
     *
     * param date
     * @return
     * @throws ParseException
     */
    public static String getMaxMonthDate() {
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMMdd");
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        // calendar.add(Calendar.MONTH, -1);
        calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
        return dft.format(calendar.getTime());
    }

    /**
     *
     * 描述:获取下一个月的第一天.
     *
     * @return
     */
    public static String getPerFirstDayOfMonth() {
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMMdd");
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MONTH, 1);
        calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMinimum(Calendar.DAY_OF_MONTH));
        return dft.format(calendar.getTime());
    }

    /**
     *
     * 描述:获取上个月的最后一天.
     *
     * @return
     */
    public static String getLastMaxMonthDate() {
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMMdd");
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.MONTH, -1);
        calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
        return dft.format(calendar.getTime());
    }

    /**
     * 获取上一个月
     *
     * @return
     */
    public static String getLastMonth() {
        Calendar cal = Calendar.getInstance();
        cal.add(cal.MONTH, -1);
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMM");
        String lastMonth = dft.format(cal.getTime());
        return lastMonth;
    }

    /**
     * 获取本月
     *
     * @return
     */
    public static String getNowMonth() {
        Calendar cal = Calendar.getInstance();
        cal.add(cal.MONTH, 0);
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMM");
        String lastMonth = dft.format(cal.getTime());
        return lastMonth;
    }

    /**
     *
     * 描述:获取下一个月.
     *
     * @return
     */
    public static String getPreMonth() {
        Calendar cal = Calendar.getInstance();
        cal.add(cal.MONTH, 1);
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMM");
        String preMonth = dft.format(cal.getTime());
        return preMonth;
    }

    /**
     *
     * 描述:获取相差多少月.
     *
     * @return
     */
    public static int getDifferMonth(String befMonth, String aftMonth) {

        SimpleDateFormat dft = new SimpleDateFormat("yyyyMM");
        if(StringUtils.isEmpty(aftMonth)){
            Calendar cal = Calendar.getInstance();
            cal.add(cal.MONTH, 0);
            aftMonth = dft.format(cal.getTime());
        }

        //SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
        Calendar bef = Calendar.getInstance();
        Calendar aft = Calendar.getInstance();
        try {
            bef.setTime(dft.parse(befMonth));
            aft.setTime(dft.parse(aftMonth));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        int result = aft.get(Calendar.MONTH) - bef.get(Calendar.MONTH);
        int month = (aft.get(Calendar.YEAR) - bef.get(Calendar.YEAR)) * 12;

        return Math.abs(month + result);
    }

    /**
     *
     * 描述:获取相差给定月份n的月份.
     *
     * @return
     */
    public static String getMonthIntervalNumber(String month, int n) {
        Calendar cal = Calendar.getInstance();
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMM");
        if(!StringUtils.isEmpty(month)){
            try {
                cal.setTime(dft.parse(month));
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
        cal.add(cal.MONTH, n*(-1));

        String lastMonth = dft.format(cal.getTime());
        return lastMonth;
    }

    // 是否是最后一天
    public static boolean isLastDayOfMonth() {
        boolean flag = false;
        if (/*StringUtils.isNotBlank(getNowTime()) && StringUtils.isNotBlank(getMaxMonthDate()) &&*/ StringUtils.equals(getNowTime(), getMaxMonthDate())) { // getMaxMonthDate().equals(getNowTime())
            flag = true;
        }
        return flag;
    }

    /**
     * 获取任意时间的下一个月
     * 描述:<描述函数实现的功能>.
     * @param repeatDate
     * @return
     */
    public static String getPreMonth(String repeatDate) {
        String lastMonth = "";
        Calendar cal = Calendar.getInstance();
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMM");
        int year = Integer.parseInt(repeatDate.substring(0, 4));
        String monthsString = repeatDate.substring(4, 6);
        int month;
        if ("0".equals(monthsString.substring(0, 1))) {
            month = Integer.parseInt(monthsString.substring(1, 2));
        } else {
            month = Integer.parseInt(monthsString.substring(0, 2));
        }
        cal.set(year,month,Calendar.DATE);
        lastMonth = dft.format(cal.getTime());
        return lastMonth;
    }

    /**
     * 获取任意时间的上一个月
     * 描述:<描述函数实现的功能>.
     * @param repeatDate
     * @return
     */
    public static String getLastMonth(String repeatDate) {
        String lastMonth = "";
        Calendar cal = Calendar.getInstance();
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMM");
        int year = Integer.parseInt(repeatDate.substring(0, 4));
        String monthsString = repeatDate.substring(4, 6);
        int month;
        if ("0".equals(monthsString.substring(0, 1))) {
            month = Integer.parseInt(monthsString.substring(1, 2));
        } else {
            month = Integer.parseInt(monthsString.substring(0, 2));
        }
        cal.set(year,month-2,Calendar.DATE);
        lastMonth = dft.format(cal.getTime());
        return lastMonth;
    }

    /**
     * 获取任意时间的周数
     * 描述:<描述函数实现的功能>.
     * @param date
     * @return
     */
    public static String getWeekFromDate(String date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Calendar cl = Calendar.getInstance();
        try {
            cl.setTime(sdf.parse(date));
        }catch (ParseException e) {
            e.printStackTrace();
        }
        int week = cl.get(Calendar.WEEK_OF_YEAR);
        System.out.println(week);
        cl.add(Calendar.DAY_OF_MONTH, -7);
        int year = cl.get(Calendar.YEAR);
        if(week<cl.get(Calendar.WEEK_OF_YEAR)){
            year+=1;
        }
        System.out.println(year+"年第"+week+"周");
        return String.valueOf(year)+String.valueOf(week);
    }

    /**
     * 获取任意时间为自定义月的第几周数
     * 描述:<描述函数实现的功能>.
     * @param date
     * @return
     */
    public static int getSelfWeekOfMonth(String date) {
        int week = 0;
        int day = 0;
        if(date.contains("-")) {
            day = Integer.parseInt(date.substring(8, date.length()));
        }else{
            day = Integer.parseInt(date.substring(6, date.length()));
        }
        if(day <= 7){
            week = 1;
        }else if(day <= 14){
            week = 2;
        }else if(day <= 21){
            week = 3;
        }else{
            week = 4;
        }

        return week;
    }

    /**
     * 获取任意时间的月的最后一天
     * 描述:<描述函数实现的功能>.
     * @param repeatDate
     * @return
     */
    public static String getMaxMonthDate(String repeatDate) {
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMMdd");
        Calendar calendar = Calendar.getInstance();
        try {
            if (!"null".equals(repeatDate)) {
                calendar.setTime(dft.parse(repeatDate));
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        // calendar.add(Calendar.MONTH, -1);
        calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
        return dft.format(calendar.getTime());
    }

    /**
     * 获取任意时间的月第一天
     * 描述:<描述函数实现的功能>.
     * @param repeatDate
     * @return
     */
    private static String getMinMonthDate(String repeatDate){
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMMdd");
        Calendar calendar = Calendar.getInstance();
        try {
            if(/*StringUtils.isNotBlank(repeatDate) &&*/ !"null".equals(repeatDate)){
                calendar.setTime(dft.parse(repeatDate));
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        // calendar.add(Calendar.MONTH, -1);
        calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMinimum(Calendar.DAY_OF_MONTH));
        return dft.format(calendar.getTime());
    }
    /**
     * 不论是当前时间，还是历史时间  皆是时间点的前天
     * repeatDate  任意时间
     */
    public static String getModify2DaysAgo(String repeatDate) {
        Calendar cal = Calendar.getInstance();
        String daysAgo = "";
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMMdd");
        if (repeatDate == null || "".equals(repeatDate)) {
            cal.set(Calendar.DATE, cal.get(Calendar.DATE) - 2);

        } else {
            int year = Integer.parseInt(repeatDate.substring(0, 4));
            String monthsString = repeatDate.substring(4, 6);
            int month;
            if ("0".equals(monthsString.substring(0, 1))) {
                month = Integer.parseInt(monthsString.substring(1, 2));
            } else {
                month = Integer.parseInt(monthsString.substring(0, 2));
            }
            String dateString = repeatDate.substring(6, 8);
            int date;
            if ("0".equals(dateString.subSequence(0, 1))) {
                date = Integer.parseInt(dateString.substring(1, 2));
            } else {
                date = Integer.parseInt(dateString.substring(0, 2));
            }
            cal.set(year, month-1, date - 1);
            System.out.println(dft.format(cal.getTime()));
        }
        daysAgo = dft.format(cal.getTime());
        return daysAgo;
    }

    /**
     * 不论是当前时间，还是历史时间  皆是时间点的T-N天
     * repeatDate 任意时间    param 数字 可以表示前几天
     */
    public static String getModifyNumDaysAgo(String repeatDate,int param) {
        Calendar cal = Calendar.getInstance();
        String daysAgo = "";
        SimpleDateFormat dft = new SimpleDateFormat("yyyyMMdd");
        if (repeatDate == null || "".equals(repeatDate)) {
            cal.set(Calendar.DATE, cal.get(Calendar.DATE) - param);

        } else {
            int year = Integer.parseInt(repeatDate.substring(0, 4));
            String monthsString = repeatDate.substring(4, 6);
            int month;
            if ("0".equals(monthsString.substring(0, 1))) {
                month = Integer.parseInt(monthsString.substring(1, 2));
            } else {
                month = Integer.parseInt(monthsString.substring(0, 2));
            }
            String dateString = repeatDate.substring(6, 8);
            int date;
            if ("0".equals(dateString.subSequence(0, 1))) {
                date = Integer.parseInt(dateString.substring(1, 2));
            } else {
                date = Integer.parseInt(dateString.substring(0, 2));
            }
            cal.set(year, month-1, date - param+1);
            System.out.println(dft.format(cal.getTime()));
        }
        daysAgo = dft.format(cal.getTime());
        return daysAgo;
    }
}
