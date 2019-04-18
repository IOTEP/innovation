package com.iotep.free.controller;

import com.iotep.free.bean.Pagination;
import com.iotep.free.bean.ResponseData;
import com.iotep.free.bean.ResponsePageData;
import com.iotep.free.constant.ResponseCode;
import com.iotep.free.constant.ReturnCode;
import com.iotep.free.entity.UserEntity;
import com.iotep.free.service.UserService;
import com.iotep.free.util.ParamUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Created by yaqiang on 2019/3/24 下午3:21
 */

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData login(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();
        if (!map.containsKey("accessToken") || !map.containsKey("appType") || !map.containsKey("appUserId")  ) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }
        UserEntity user = new UserEntity();
        user.setAccessToken(map.get("accessToken").toString());
        user.setAppType(Integer.parseInt(map.get("appType").toString()));
        user.setAppUserId(map.get("appUserId").toString());
        user.setId(0);

        //校验accessToken

        if (map.containsKey("nick")){
            user.setNick(map.get("nick").toString());
        }
        if (map.containsKey("photo")){
            user.setNick(map.get("photo").toString());
        }
        UserEntity u = userService.loginUser(user);

        ResponseData.setData(u);
        return ResponseData;
    }

    @RequestMapping(value = "/getone", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData getOne(@RequestBody UserEntity userEntity) {
        ResponseData ResponseData = new ResponseData();
        UserEntity u = userService.findUser(userEntity);
        ResponseData.setData(u);
        return ResponseData;
    }

    @RequestMapping(value = "/info", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData getOneInfo(@RequestBody UserEntity userEntity) {
        ResponseData ResponseData = new ResponseData();
        int myUserId = 0;  //待修改
        UserEntity u = userService.findUserInfo(userEntity,myUserId);
        ResponseData.setData(u);
        return ResponseData;
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData saveUser(@RequestBody UserEntity userEntity) {
        ResponseData ResponseData = new ResponseData();
        userService.saveUser(userEntity);
        ResponseData.setData(userEntity);
        return ResponseData;
    }


    @RequestMapping(value = "/getall", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData getAll() {
        ResponseData ResponseData = new ResponseData();
        ResponseData.setData(userService.findUsers());
        return ResponseData;
    }

    @RequestMapping(value = "/attention/list", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData getAttentionList(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();

        int userId = Integer.parseInt(map.get("userId").toString());
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

            List<UserEntity> dataList = userService.userAttentionList(userId, sort, pagination.getStart(), pagination.getLimit());

            responsePageData.setDataList(dataList);
            responsePageData.setPage(pagination.getPage());
            responsePageData.setSize(pagination.getSize());
            int total = userService.userAttentionCount(userId);
            responsePageData.setTotal(total);
            ResponseData.setData(responsePageData);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }

        return ResponseData;
    }

    @RequestMapping(value = "/fans/list", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData getFansList(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();

        int userId = Integer.parseInt(map.get("userId").toString());
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

            List<UserEntity> dataList = userService.userFansList(userId, sort, pagination.getStart(), pagination.getLimit());

            responsePageData.setDataList(dataList);
            responsePageData.setPage(pagination.getPage());
            responsePageData.setSize(pagination.getSize());
            int total = userService.userFansCount(userId);
            responsePageData.setTotal(total);
            ResponseData.setData(responsePageData);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }

        return ResponseData;
    }


}
