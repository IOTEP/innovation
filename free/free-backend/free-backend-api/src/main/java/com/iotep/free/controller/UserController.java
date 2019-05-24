package com.iotep.free.controller;

import com.alibaba.druid.util.StringUtils;
import com.iotep.free.bean.Pagination;
import com.iotep.free.bean.ResponseData;
import com.iotep.free.bean.ResponsePageData;
import com.iotep.free.constant.RedisConstants;
import com.iotep.free.constant.ResponseCode;
import com.iotep.free.constant.ReturnCode;
import com.iotep.free.entity.ActivityListEntity;
import com.iotep.free.entity.UserEntity;
import com.iotep.free.service.UserService;
import com.iotep.free.util.JwtTokenUtil;
import com.iotep.free.util.ParamUtil;
import com.iotep.free.util.RedisUtil;
import com.iotep.free.util.SmsUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Created by yongwei7 on 2019/3/24 下午3:21
 */

@RestController
@RequestMapping(value = "/user")
public class UserController extends CommonController {
    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    RedisUtil redisUtil;
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/loginSendSms", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData loginSendSms(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();
        if (!map.containsKey("phone")  ) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }
        String phone = map.get("phone").toString();
        //phone 格式校验&读redis看是否已发送验证码
        String res = redisUtil.get("loginSms_"+phone, RedisConstants.datebase4);
        System.out.println(res);
        if(!StringUtils.isEmpty(res)){
            ResponseData.setErrMessage("已发送过验证码");
            ResponseData.setData(res);
            return ResponseData;
        }

        String code = SmsUtil.getCode();
        code = "123456";
        System.out.println(code);
        int succ = 0;
        //succ = SmsUtil.sendSmsCode(phone,code);
        System.out.println("after:"+succ);

        //校验accessToken
        if(succ != 0) {
            return ResponseData.build(ResponseCode.SERVICE_SMS_ERROR);
        }else{
            //存code进入redis  设置超时时间10分钟
            redisUtil.set("loginSms_"+phone,code, RedisConstants.datebase4);
            Long resExpire = redisUtil.expire("loginSms_"+phone, 600, RedisConstants.datebase4);//设置key过期时间
            logger.info("resExpire="+resExpire);
        }

        System.out.println("succ_code:"+code);
        ResponseData.setData(code);
        return ResponseData;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData login(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();
        if ( !map.containsKey("appType") || !map.containsKey("appUserId") ) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }

        System.out.println("login");
        int appType = Integer.parseInt(map.get("appType").toString());
        String appUserId = map.get("appUserId").toString();
        String code = "";
        UserEntity user = new UserEntity();
        user.setAppType(appType);
        user.setType(1);
        user.setAppUserId(appUserId);
        user.setId(0);

        //第一期支持手机号和微博登陆 校验登陆
        switch (appType){
            case 0:
                if(!map.containsKey("code")){
                    return ResponseData.build(ResponseCode.PRAME_ERROR);
                }
                code = map.get("code").toString();
                String res = redisUtil.get("loginSms_"+appUserId, RedisConstants.datebase4);
                System.out.println(res);
                if(StringUtils.isEmpty(res) || !res.equals(code)){
                    logger.info("登陆信息不匹配="+appUserId+"_"+code);
                    return ResponseData.build(ResponseCode.SERVICE_LOGIN_CODE_ERROR);
                }

                break;
            case 1:
            case 2:
            case 3:
                //校验accessToken
                if(!map.containsKey("accessToken")){
                    return ResponseData.build(ResponseCode.PRAME_ERROR);
                }
                //是否需要增加对三方登陆accessToken校验?调用第三方接口

                user.setAccessToken(map.get("accessToken").toString());
                break;
            default:
                return ResponseData.build(ResponseCode.PRAME_ERROR);
        }

        //user.setAccessToken(map.get("accessToken").toString());

        if (map.containsKey("nick")){
            user.setNick(map.get("nick").toString());
        }
        if (map.containsKey("photo")){
            user.setNick(map.get("photo").toString());
        }

        UserEntity u = userService.loginUser(user);
        if(u != null) {
            String token = JwtTokenUtil.createToken(u.getId()+"",true);
            //存code进入redis  设置超时时间7天
            redisUtil.set("login_"+u.getId(),token, RedisConstants.datebase1);
            redisUtil.set("login_"+token,u.getId()+"", RedisConstants.datebase1);
            Long resIdExpire = redisUtil.expire("login_"+u.getId(), 3600*24*7, RedisConstants.datebase1);//设置key过期时间
            Long resExpire = redisUtil.expire("login_"+token, 3600*24*7, RedisConstants.datebase1);//设置key过期时间
            logger.info("token="+token);
            u.setAccessToken(token);
            redisUtil.del(RedisConstants.datebase4,"loginSms_" + appUserId);
        }

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

        int userId = userEntity.getId();
        UserEntity u = userService.findUserInfo(userEntity,userId);
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
        if (!map.containsKey("userId") ) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }

        int userId = Integer.parseInt(map.get("userId").toString());
        //int myUserId = Integer.parseInt(map.get("myUserId").toString());

        try {
            int sort = -1;
            if (map.containsKey("sort")){
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

            System.out.println(userId);
            //System.out.println(myUserId);
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
        if (!map.containsKey("userId") ) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }

        int userId = Integer.parseInt(map.get("userId").toString());
        try {
            int sort = -1;
            if (map.containsKey("sort")){
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

    @RequestMapping(value = "/activity/list", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData getUserActivityList(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();
        if (!map.containsKey("userId") ) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }

        int userId = Integer.parseInt(map.get("userId").toString());
        try {
            int type = 0;
            if (map.containsKey("type")){
                type = Integer.parseInt(map.get("type").toString());
            }

            int sort = -1;
            if (map.containsKey("sort")){
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

            List<ActivityListEntity> dataList = userService.findUserActivityList(0,userId, type, sort, pagination.getStart(), pagination.getLimit());

            responsePageData.setDataList(dataList);
            responsePageData.setPage(pagination.getPage());
            responsePageData.setSize(pagination.getSize());
            int total = userService.findUserActivityListCount(0,userId,type);
            responsePageData.setTotal(total);
            ResponseData.setData(responsePageData);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }

        return ResponseData;
    }

}
