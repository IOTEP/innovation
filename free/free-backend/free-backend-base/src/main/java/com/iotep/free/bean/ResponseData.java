package com.iotep.free.bean;

import com.iotep.free.constant.ResponseCode;

import java.io.Serializable;

public class ResponseData implements Serializable {
    private Object data = null;
    private String errMessage = "";
    private Integer errNo = 0;

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getErrMessage() {
        return errMessage;
    }

    public void setErrMessage(String errMessage) {
        this.errMessage = errMessage;
    }

    public Integer getErrNo() {
        return errNo;
    }

    public void setErrNo(Integer errNo) {
        this.errNo = errNo;
    }

    public ResponseData() {
        this.errNo = 0;
        this.errMessage = "请求成功";
        this.data = null;
    }

    public ResponseData(Integer errNo, String errMessage, Object data) {
        this.errNo = errNo;
        this.errMessage = errMessage;
        this.data = data;
    }

    public static ResponseData build(Integer errNo, String errMessage, Object data) {
        return new ResponseData(errNo, errMessage, data);
    }

    public static ResponseData build(ResponseCode rc, Object data) {
        return new ResponseData(rc.getCode(), rc.getMsg(), data);
    }

    public static ResponseData build(ResponseCode rc) {
        return new ResponseData(rc.getCode(), rc.getMsg(), null);
    }

    public static ResponseData build(Integer errNo, String errMessage) {
        return new ResponseData(errNo, errMessage, null);
    }

    @Override
    public String toString() {
        return "ResponseData{" +
                "data=" + data +
                ", errMessage='" + errMessage + '\'' +
                ", errNo=" + errNo +
                '}';
    }
}
