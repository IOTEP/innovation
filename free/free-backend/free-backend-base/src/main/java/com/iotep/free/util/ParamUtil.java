package com.iotep.free.util;

import com.iotep.free.bean.Pagination;
import com.iotep.free.bean.ResponseData;
import com.iotep.free.constant.ReturnCode;


/**
 * Created by yongwei7 on 2019/3/28.
 */
public class ParamUtil {
    public static ResponseData filterParamTime(String startTime, String endTime) {
        ResponseData ResponseData = new ResponseData();
        startTime = TimeUtil.checkTimeFormat(startTime);
        endTime = TimeUtil.checkTimeFormat(endTime);

        if (startTime == null || endTime == null) {
            ResponseData.setErrNo(ReturnCode.REQUEST_TIME_IS_NOT_VALID_1.getK());
            ResponseData.setErrMessage(ReturnCode.REQUEST_TIME_IS_NOT_VALID_1.getV());
            return ResponseData;
        }

        if (startTime.compareTo(endTime) > 0) {
            ResponseData.setErrNo(ReturnCode.REQUEST_TIME_IS_NOT_VALID_2.getK());
            ResponseData.setErrMessage(ReturnCode.REQUEST_TIME_IS_NOT_VALID_2.getV());
            return ResponseData;
        }
        return ResponseData;
    }

    /*
    public static ResponseData filterParam(String adType, String startTime, String endTime) {
        ResponseData ResponseData = new ResponseData();
        startTime = TimeUtil.checkTimeFormat(startTime);
        endTime = TimeUtil.checkTimeFormat(endTime);
        System.out.println(adType + "-----------------------");
        if (ProductFormat.getProductName(adType).equals(adType) && !adType.equals("Wax")) {
            ResponseData.setErrNo(ReturnCode.REQUEST_TIME_IS_NOT_VALID_3.getK());
            ResponseData.setErrMessage(ReturnCode.REQUEST_TIME_IS_NOT_VALID_3.getV());
            return ResponseData;
        }

        if (startTime == null || endTime == null) {
            ResponseData.setErrNo(ReturnCode.REQUEST_TIME_IS_NOT_VALID_1.getK());
            ResponseData.setErrMessage(ReturnCode.REQUEST_TIME_IS_NOT_VALID_1.getV());
            return ResponseData;
        }

        if (startTime.compareTo(endTime) > 0) {
            ResponseData.setErrNo(ReturnCode.REQUEST_TIME_IS_NOT_VALID_2.getK());
            ResponseData.setErrMessage(ReturnCode.REQUEST_TIME_IS_NOT_VALID_2.getV());
            return ResponseData;
        }
        return ResponseData;
    }

    public static ResponseData filterParamAdTypeTime(String adType, String time) {
        ResponseData ResponseData = new ResponseData();
        System.out.println(adType);
        time = TimeUtil.checkTimeFormat(time);
        if (time == null) {
            ResponseData.setErrNo(ReturnCode.REQUEST_TIME_IS_NOT_VALID_1.getK());
            ResponseData.setErrMessage(ReturnCode.REQUEST_TIME_IS_NOT_VALID_1.getV());
            return ResponseData;
        }

        if (ProductFormat.getProductName(adType).equals(adType) && !adType.equals("Wax")) {
            ResponseData.setErrNo(ReturnCode.REQUEST_TIME_IS_NOT_VALID_3.getK());
            ResponseData.setErrMessage(ReturnCode.REQUEST_TIME_IS_NOT_VALID_3.getV());
            return ResponseData;
        }

        return ResponseData;
    }
    */


    public static ResponseData filterParam(String time) {
        ResponseData ResponseData = new ResponseData();
        time = TimeUtil.checkTimeFormat(time);
        if (time == null) {
            ResponseData.setErrNo(ReturnCode.REQUEST_TIME_IS_NOT_VALID_1.getK());
            ResponseData.setErrMessage(ReturnCode.REQUEST_TIME_IS_NOT_VALID_1.getV());
            return ResponseData;
        }
        return ResponseData;
    }


    public static Pagination filterPagination(int page, int size) {
        Pagination pagination = new Pagination();
        if (page < 0) {
            page = 1;
        }

        if (size < 0) {
            size = 20;
        }

        int start = (page - 1) * size;
        int limit = size;

        pagination.setLimit(limit);
        pagination.setPage(page);
        pagination.setSize(size);
        pagination.setStart(start);
        return pagination;
    }
}
