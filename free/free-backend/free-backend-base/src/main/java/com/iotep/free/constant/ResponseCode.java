package com.iotep.free.constant;

/**
 * Created by yaqiang on 2018/12/26 上午10:13
 */

public enum ResponseCode {
    ILLEGAL_TIMESTAMP(1000, "请求时间戳不合法"),
    ILLEGAL_ACCESSKEY(1001, "加密KEY不合法"),
    REQUEST_TIMEOUT(1002, "请求超时"),
    SIGN_ERROR(1003, "签名错误"),
    PRAME_ERROR(1004, "参数错误"),
    SERVICE_RESULT_ERROR(1005, "请求service错误");

    private Integer code;
    private String msg;

    ResponseCode(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
