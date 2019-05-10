package com.iotep.free.service;

import com.iotep.free.entity.*;
import com.iotep.free.mapper.*;
import com.iotep.free.util.RaffleUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yongwei7 on 2019/3/28.
 */
@Service
public class ActionService {
    private Logger logger = LoggerFactory.getLogger(ActionService.class);

    @Autowired
    private CommentMapper commentMapper;
    @Autowired
    private LikeMapper likeMapper;
    @Autowired
    private ReplyMapper replyMapper;
    @Autowired
    private SocialMapper socialMapper;
    @Autowired
    private ActivityMapper activityMapper;
    @Autowired
    private UserActivityMapper userActivityMapper;
    @Autowired
    private PrizeMapper prizeMapper;
    @Autowired
    private RaffleMapper raffleMapper;
    @Autowired
    private UserMapper userMapper;


    /**** 添加&删除点赞 ***/
    public int likeAction(int userId, int likeId, int likeType, int typeId, int action) {
        int succ = 1;
        int updateFlag = 0;

        LikeEntity likeEntity = new LikeEntity();
        likeEntity.setLikeType(likeType);
        likeEntity.setTypeId(typeId);
        likeEntity.setUserId(userId);
        likeEntity.setId(likeId);
        LikeEntity likeOld = likeMapper.getOneLike(likeEntity);

        if(likeOld != null){   // 已有记录
            if(likeOld.getStatus() != action){
                likeEntity.setStatus(action);
                succ = likeMapper.updateLike(likeEntity);
                updateFlag = 1;
            }else{
                logger.info("记录已有，无需更新");
            }
        }else if(action != 0){ // 新加入记录不包括取消
            succ = likeMapper.insertLike(likeEntity);
            updateFlag = 1;
        }
        System.out.println(succ);
        System.out.println(updateFlag);

        //同步点赞数
        if(succ > 0 && updateFlag==1){
            if (action == 0) {
                likeType = likeOld.getLikeType();
                typeId = likeOld.getTypeId();
                switch (likeType) {
                    case 1:
                        System.out.println("sub");
                        activityMapper.updateCommentOrLikeCountSub(typeId,0,1);
                        break;
                    case 2:
                        commentMapper.updateCommentOrLikeCountSub(typeId,0,1);
                        break;
                    case 3:
                        likeMapper.updateLikeCountSub(typeId);
                        break;
                    default:
                        break;
                }
            }else{
                switch (likeType) {
                    case 1:
                        System.out.println("add");
                        activityMapper.updateCommentOrLikeCountAdd(typeId,0,1);
                        break;
                    case 2:
                        commentMapper.updateCommentOrLikeCountAdd(typeId,0,1);
                        break;
                    case 3:
                        likeMapper.updateLikeCountAdd(typeId);
                        break;
                    default:
                        break;
                }
            }
        }

        return succ;
    }

    /**** 添加&删除评论 ***/
    public int commentAndReplyAction(int userId, int activityId, int commentId, int commentType, int commentTypeId, int replyType, int replyId, int action, String content) {

        int succ = 1;
        if(commentType == 1){  //活动评论
            CommentEntity commentEntity = new CommentEntity();
            if(action == 0){ //删除评论
                commentEntity.setId(commentTypeId);
                commentEntity.setStatus(0);
                succ = commentMapper.updateComment(commentEntity);
            }else{
                commentEntity.setFromUid(userId);
                commentEntity.setContent(content);
                commentEntity.setActivityId(activityId);
                succ = commentMapper.insertComment(commentEntity);
            }

        }else{
            ReplyEntity replyEntity = new ReplyEntity();
            if(action == 0){ //删除评论
                replyEntity.setId(commentTypeId);
                replyEntity.setStatus(0);
                succ = replyMapper.updateCommentReply(replyEntity);
            }else{
                replyEntity.setFromUid(userId);
                replyEntity.setContent(content);
                replyEntity.setCommentId(commentId);
                replyEntity.setReplyType(replyType);
                replyEntity.setReplyId(replyId);
                succ = replyMapper.insertCommentReply(replyEntity);
                //replyMapper.insertCommentReply(userId,commentId,replyType,replyId,content);
            }

        }

        //同步评论数
        if(succ > 0){
            if (action == 0) {
                switch (commentType) {
                    case 1:
                        activityMapper.updateCommentOrLikeCountSub(activityId,1,0);
                        break;
                    case 2:
                        commentMapper.updateCommentOrLikeCountSub(commentId,1,0);
                        break;
                    default:
                        break;
                }
            }else{
                switch (commentType) {
                    case 1:
                        activityMapper.updateCommentOrLikeCountAdd(activityId,1,0);
                        break;
                    case 2:
                        commentMapper.updateCommentOrLikeCountAdd(commentId,1,0);
                        break;
                    default:
                        break;
                }
            }
        }

        return succ;
    }

    /**** 添加&删除关注 ***/
    public int socialAction(int userId, int attentionId, int action) {
        int succ = 1;

        SocialEntity socialEntity = new SocialEntity();
        socialEntity.setUserId(userId);
        socialEntity.setAttentionId(attentionId);
        socialEntity.setStatus(action);
        if (action == 0) { //取消关注
            succ = socialMapper.updateSocial(socialEntity);
        } else {
            succ = socialMapper.insertSocial(socialEntity);
        }

        return succ;
    }

    /**** 参与抽奖行为 ***/
    public int joinRaffleAction(int userId, int activityId, int attentionId) {
        int succ = 1;

        //检查是否关注，未关注需添加关注关系
        SocialEntity socialEntity = new SocialEntity();
        socialEntity.setUserId(userId);
        socialEntity.setAttentionId(attentionId);
        socialEntity.setStatus(1);

        /*int isSocial = 0;
        isSocial = socialMapper.isSocial(socialEntity);
        if(isSocial <= 0){
            socialMapper.replaceSocial(socialEntity);
        }*/

        SocialEntity socialOld = socialMapper.getOneSocial(socialEntity);
        if(socialOld != null && socialOld.getStatus() != 1){
            socialMapper.updateSocial(socialEntity);
        }else{
            socialMapper.insertSocial(socialEntity);
        }

        //加入抽奖
        UserActivityEntity userActivityEntity = new UserActivityEntity();
        userActivityEntity.setUserId(userId);
        userActivityEntity.setActivityId(activityId);
        succ = userActivityMapper.replaceUserActivity(userActivityEntity);

        return succ;
    }

    /**** 抽奖行为 ***/
    public int openRaffleAction(int userId, int activityId) {
        int succ = 0;

        //活动奖品
        List<PrizeEntity> prizeList = new ArrayList<>();
        prizeList = prizeMapper.getActivityPrize(activityId);

        if(prizeList.size() > 0) {
            //活动参与人
            //List<UserActivityEntity> activityUserList = new ArrayList<>();
            List<Integer> userList = new ArrayList<>();
            //activityUserList = userActivityMapper.findActivityUserList(activityId);
            List<UserEntity>  activityUserList = userMapper.findActivityUserList(activityId,0,0,0);
            for (int i=0; i < activityUserList.size(); i++){
                if(!userList.contains(activityUserList.get(i).getId())) {
                    userList.add(activityUserList.get(i).getId());
                }
            }
            System.out.println(userList.size());

            //随机抽奖
            List<RaffleEntity> raffleList = new ArrayList<>();
            raffleList = RaffleUtil.draw(prizeList,userList);
            System.out.println("test2");

            //批量写入中奖名单
            succ = raffleMapper.insertRaffleBatch(raffleList);

            if (succ > 0) {
                //修改活动状态置位is_end
                activityMapper.updateIsEnd(activityId);
            }

        }else{
            logger.info("activityId:"+activityId+" has no record in t_prize");
        }

        return succ;
    }


}
