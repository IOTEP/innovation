package com.iotep.free.controller;

import com.iotep.free.bean.Pagination;
import com.iotep.free.bean.ResponseData;
import com.iotep.free.bean.ResponsePageData;
import com.iotep.free.constant.ResponseCode;
import com.iotep.free.constant.ReturnCode;
import com.iotep.free.entity.*;
import com.iotep.free.service.ActivityService;
import com.iotep.free.util.ParamUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Created by yongwei7 on 2019/3/28.
 */
@RestController
@RequestMapping(value = "/activity")
public class ActivityController {
    @Autowired
    private ActivityService activityService;

    /**************2.1 获取活动列表***************/
    @RequestMapping(value = "/list", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData getActivityList(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();
        int userId = 0;
        if (!map.containsKey("userId")){
            userId = Integer.parseInt(map.get("userId").toString());
        }

        try {
            int sort = -1;
            if (!map.containsKey("sort")){
                sort = Integer.parseInt(map.get("sort").toString());
            }
            int page = 1;
            if (map.containsKey("page")) {
                page = Integer.parseInt(map.get("page").toString());
            }
            int size = 10;
            if (map.containsKey("size")) {
                size = Integer.parseInt(map.get("size").toString());
            }
            Pagination pagination = ParamUtil.filterPagination(page, size);
            ResponsePageData responsePageData = new ResponsePageData<>();

            List<ActivityListEntity> dataList = activityService.findActivityList(userId, sort, pagination.getStart(), pagination.getLimit());

            responsePageData.setDataList(dataList);
            responsePageData.setPage(pagination.getPage());
            responsePageData.setSize(pagination.getSize());
            int total = activityService.findActivityListCount(sort);
            responsePageData.setTotal(total);
            ResponseData.setData(responsePageData);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }
        return ResponseData;
    }

    /**************2.2 获取活动详情页***************/
    @RequestMapping(value = "/info", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData getActivityInfo(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();
        if (!map.containsKey("activityId") ) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }
        int activityId = Integer.parseInt(map.get("activityId").toString());
        int userId = 0;
        if (!map.containsKey("userId")){
            userId = Integer.parseInt(map.get("userId").toString());
        }

        try {
            ActivityInfoEntity data = activityService.findActivityInfo(userId,activityId);
            ResponseData.setData(data);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }
        return ResponseData;
    }

    /**************2.3 获取活动参与人列表***************/
    @RequestMapping(value = "/userList", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData getActivityUserList(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();
        if (!map.containsKey("activityId") ) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }
        int activityId = Integer.parseInt(map.get("activityId").toString());

        try {
            int sort = -1;
            if (!map.containsKey("sort")){
                sort = Integer.parseInt(map.get("sort").toString());
            }
            int page = 1;
            if (map.containsKey("page")) {
                page = Integer.parseInt(map.get("page").toString());
            }
            int size = 10;
            if (map.containsKey("size")) {
                size = Integer.parseInt(map.get("size").toString());
            }
            Pagination pagination = ParamUtil.filterPagination(page, size);
            ResponsePageData responsePageData = new ResponsePageData<>();

            List<UserEntity> dataList = activityService.findActivityUserList(activityId, sort, pagination.getStart(), pagination.getLimit());

            responsePageData.setDataList(dataList);
            responsePageData.setPage(pagination.getPage());
            responsePageData.setSize(pagination.getSize());
            int total = activityService.findActivityUserListCount(activityId);
            responsePageData.setTotal(total);
            ResponseData.setData(responsePageData);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }
        return ResponseData;
    }

    /**************2.4 获取活动评论详情页（评论+点赞）***************/
    @RequestMapping(value = "/commentAndLikeInfo", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData getActivityCommentList(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();
        if (!map.containsKey("activityId") ) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }
        int activityId = Integer.parseInt(map.get("activityId").toString());
        int userId = 0;
        if (!map.containsKey("userId")){
            userId = Integer.parseInt(map.get("userId").toString());
        }

        try {
            int sort = -1;
            if (!map.containsKey("sort")){
                sort = Integer.parseInt(map.get("sort").toString());
            }
            int page = 1;
            if (map.containsKey("page")) {
                page = Integer.parseInt(map.get("page").toString());
            }
            int size = 10;
            if (map.containsKey("size")) {
                size = Integer.parseInt(map.get("size").toString());
            }
            Pagination pagination = ParamUtil.filterPagination(page, size);
            ResponsePageData responsePageData = new ResponsePageData<>();

            List<CommentEntity> dataList = activityService.findActivityCommentList(userId,activityId, sort, pagination.getStart(), pagination.getLimit());

            responsePageData.setDataList(dataList);
            responsePageData.setPage(pagination.getPage());
            responsePageData.setSize(pagination.getSize());
            int total = activityService.findActivityCommentListCount(activityId);
            responsePageData.setTotal(total);
            ResponseData.setData(responsePageData);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }
        return ResponseData;
    }


    /**************2.5 获取活动评论回复详情页（评论+点赞）***************/
    @RequestMapping(value = "/replyAndLikeInfo", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData getActivityCommentReplyList(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();
        if (!map.containsKey("commentId") ) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }
        int commentId = Integer.parseInt(map.get("commentId").toString());
        int userId = 0;
        if (!map.containsKey("userId")){
            userId = Integer.parseInt(map.get("userId").toString());
        }

        try {
            int sort = -1;
            if (!map.containsKey("sort")){
                sort = Integer.parseInt(map.get("sort").toString());
            }
            int page = 1;
            if (map.containsKey("page")) {
                page = Integer.parseInt(map.get("page").toString());
            }
            int size = 10;
            if (map.containsKey("size")) {
                size = Integer.parseInt(map.get("size").toString());
            }
            Pagination pagination = ParamUtil.filterPagination(page, size);
            ResponsePageData responsePageData = new ResponsePageData<>();

            List<ReplyEntity> dataList = activityService.findActivityCommentReplyList(userId,commentId, sort, pagination.getStart(), pagination.getLimit());

            responsePageData.setDataList(dataList);
            responsePageData.setPage(pagination.getPage());
            responsePageData.setSize(pagination.getSize());
            int total = activityService.findActivityCommentReplyListCount(commentId);
            responsePageData.setTotal(total);
            ResponseData.setData(responsePageData);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }
        return ResponseData;
    }
}
