package com.iotep.free.util;


import com.alibaba.druid.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashSet;
import java.util.List;

/**
 * Created by yongwei7 on 2019/3/28.
 */
public class StringUtil {
    static final Logger logger = LoggerFactory.getLogger(TimeUtil.class);

    public static String listToString(List<String> formatFrom) {
        try {
            String formatFromStr = "";
            for (String str : formatFrom) {
                formatFromStr +=  "'" + str +"',";
            }
            if(!StringUtils.isEmpty(formatFromStr)) {
                formatFromStr = formatFromStr.substring(0, formatFromStr.length() - 1);
            }
            return formatFromStr;
        } catch (Exception e) {
            logger.error("change time falied", e);
        }
        return "";
    }

    public static String listIntToString(List<Integer> formatFrom) {
        try {
            String formatFromStr = "";
            for (Integer str : formatFrom) {
                formatFromStr +=   str + ",";
            }
            if(!StringUtils.isEmpty(formatFromStr)) {
                formatFromStr = formatFromStr.substring(0, formatFromStr.length() - 1);
            }
            return formatFromStr;
        } catch (Exception e) {
            logger.error("change time falied", e);
        }
        return "";
    }

    public static String hashsetIntToString(HashSet<Integer> formatFrom) {
        try {
            String formatFromStr = "";
            for (Integer value : formatFrom) {
                formatFromStr +=   value + ",";
            }
            if(!StringUtils.isEmpty(formatFromStr)) {
                formatFromStr = formatFromStr.substring(0, formatFromStr.length() - 1);
            }
            return formatFromStr;
        } catch (Exception e) {
            logger.error("change time falied", e);
        }
        return "";
    }
}
