package com.iotep.free.controller;

import com.iotep.free.bean.ResponseData;
import com.iotep.free.bean.ResponsePageData;
import com.iotep.free.constant.ResponseCode;
import com.iotep.free.constant.ReturnCode;
import com.iotep.free.service.ActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Created by yongwei7 on 2019/3/31.
 */
@RestController
@RequestMapping(value = "/action")
public class ActionController {

    @Autowired
    private ActionService actionService;

    /**************2.8 评论行为 （评论&删除评论）***************/
    @RequestMapping(value = "/comment", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData actionComment(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();
        System.out.println(1);

        if (!map.containsKey("commentType")  || !map.containsKey("action")) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }
        int commentType = Integer.parseInt(map.get("commentType").toString());

        int action = Integer.parseInt(map.get("action").toString());
        String content = "";
        if(action != 0){
            if (!map.containsKey("content")) {
                return ResponseData.build(ResponseCode.PRAME_ERROR);
            }
            content = map.get("content").toString();
        }

        int userId = Integer.parseInt(map.get("userId").toString());
        int activityId = -1;
        int commentId = -1;
        int replyType = -1;
        int replyId = -1;
        int commentTypeId = -1;
        if (map.containsKey("activityId")){
            activityId = Integer.parseInt(map.get("activityId").toString());
        }
        if (map.containsKey("commentId")){
            commentId = Integer.parseInt(map.get("commentId").toString());
        }
        if (map.containsKey("replyType")){
            replyType = Integer.parseInt(map.get("replyType").toString());
        }
        if (map.containsKey("replyId")){
            replyType = Integer.parseInt(map.get("replyId").toString());
        }
        if (map.containsKey("commentTypeId")){
            commentTypeId = Integer.parseInt(map.get("commentTypeId").toString());
        }

        try {
            ResponsePageData responsePageData = new ResponsePageData<>();

            int succ = actionService.commentAndReplyAction(userId, activityId, commentId, commentType, commentTypeId, replyType, replyId, action, content);
            if(succ <= 0){
                return ResponseData.build(ResponseCode.SERVICE_RESULT_ERROR);
            }
            //ResponseData.setData(succ);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }
        return ResponseData;
    }

    /**************2.7 点赞行为 (点赞&取消点赞)***************/
    @RequestMapping(value = "/like", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData actionLike(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();

        if (!map.containsKey("action")) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }
        int action = Integer.parseInt(map.get("action").toString());

        int likeType = -1;
        int typeId = -1;
        int likeId = -1;
        if(action != 0){
            if (!map.containsKey("likeType") || !map.containsKey("typeId")) {
                return ResponseData.build(ResponseCode.PRAME_ERROR);
            }
            likeType = Integer.parseInt(map.get("likeType").toString());
            typeId = Integer.parseInt(map.get("typeId").toString());
        }else {
            if (!map.containsKey("id")) {
                return ResponseData.build(ResponseCode.PRAME_ERROR);
            }
            likeId = Integer.parseInt(map.get("id").toString());
        }

        int userId = Integer.parseInt(map.get("userId").toString());

        try {
            ResponsePageData responsePageData = new ResponsePageData<>();

            int succ = actionService.likeAction(userId, likeId, likeType, typeId, action);
            if(succ <= 0){
                return ResponseData.build(ResponseCode.SERVICE_RESULT_ERROR);
            }
            //ResponseData.setData(succ);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }
        return ResponseData;
    }

    /**************2.6 参与抽奖行为 ***************/
    @RequestMapping(value = "/raffle", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData actionRaffle(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();

        if (!map.containsKey("activityId") || !map.containsKey("userId") || !map.containsKey("attentionId")) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }
        int activityId = Integer.parseInt(map.get("activityId").toString());
        int userId = Integer.parseInt(map.get("userId").toString());
        int attentionId = Integer.parseInt(map.get("attentionId").toString());

        try {
            ResponsePageData responsePageData = new ResponsePageData<>();

            int succ = actionService.joinRaffleAction(userId, activityId, attentionId);
            if(succ <= 0){
                return ResponseData.build(ResponseCode.SERVICE_RESULT_ERROR);
            }
            //ResponseData.setData(succ);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }
        return ResponseData;
    }

    /**************3.5 添加关注行为 ***************/
    @RequestMapping(value = "/attention", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public ResponseData actionAttention(@RequestBody Map map) {
        ResponseData ResponseData = new ResponseData();

        if (!map.containsKey("action") || !map.containsKey("userId") || !map.containsKey("attentionId")) {
            return ResponseData.build(ResponseCode.PRAME_ERROR);
        }
        int action = Integer.parseInt(map.get("action").toString());
        int userId = Integer.parseInt(map.get("userId").toString());
        int attentionId = Integer.parseInt(map.get("attentionId").toString());

        try {
            ResponsePageData responsePageData = new ResponsePageData<>();

            int succ = actionService.socialAction(userId, attentionId, action);
            if(succ <= 0){
                return ResponseData.build(ResponseCode.SERVICE_RESULT_ERROR);
            }
            //ResponseData.setData(succ);
        } catch (Exception e) {
            ResponseData.setErrNo(ReturnCode.DB_EXCEPTION.getK());
            ResponseData.setErrMessage(ReturnCode.DB_EXCEPTION.getV());

        }
        return ResponseData;
    }

}
