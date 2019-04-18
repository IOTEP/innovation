package com.iotep.free.constant;

import com.iotep.free.util.Tuple;

/**
 * Created by yongwei7 on 2019/3/28.
 */
public class ReturnCode {
    static final public Tuple<Integer, String> PARAM_IS_NOT_VALID = new Tuple<>(-1001, "param is not valid");
    static final public Tuple<Integer, String> REQUEST_TIME_IS_NOT_VALID_1 = new Tuple<>(-1002, "time format is not valid");
    static final public Tuple<Integer, String> REQUEST_TIME_IS_NOT_VALID_2 = new Tuple<>(-1003, "start time  is max than end time");
    static final public Tuple<Integer, String> REQUEST_TIME_IS_NOT_VALID_3 = new Tuple<>(-1004, "adType is not valid");
    static final public Tuple<Integer, String> DB_EXCEPTION = new Tuple<>(-2001, "data deal with exception");
}
