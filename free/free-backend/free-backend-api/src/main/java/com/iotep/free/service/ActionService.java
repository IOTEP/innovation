package com.iotep.free.service;

import com.iotep.free.entity.*;
import com.iotep.free.mapper.*;
import com.iotep.free.util.RaffleUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yongwei7 on 2019/3/28.
 */
@Service
public class ActionService {
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


    /**** 添加&删除点赞 ***/
    public int likeAction(int userId, int likeId, int likeType, int typeId, int action) {
        int succ = 1;

        LikeEntity likeEntity = new LikeEntity();
        if (action == 0) { //取消点赞
            likeEntity.setId(likeId);
            likeEntity.setStatus(0);
            succ = likeMapper.updateLike(likeEntity);
        } else {
            likeEntity.setLikeType(likeType);
            likeEntity.setTypeId(typeId);
            likeEntity.setUserId(userId);
            succ = likeMapper.insertLike(likeEntity);
        }

        //同步点赞数
        if(succ > 0){
            if (action == 0) {
                switch (likeType) {
                    case 1:
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
                replyEntity.setCotent(content);
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
        int isSocial = 0;
        isSocial = socialMapper.isSocial(socialEntity);
        if(isSocial <= 0){
            socialMapper.replaceSocial(socialEntity);
        }

        //加入抽奖
        UserActivityEntity userActivityEntity = new UserActivityEntity();
        userActivityEntity.setUserId(userId);
        userActivityEntity.setActivityId(activityId);
        succ = userActivityMapper.replaceUserActivity(userActivityEntity);

        return succ;
    }

    /**** 抽奖行为 ***/
    public int raffleAction(int userId, int activityId) {
        int succ = 1;

        //活动奖品
        List<PrizeEntity> prizeList = new ArrayList<>();
        prizeList = prizeMapper.getActivityPrize(activityId);

        if(prizeList.size() > 0) {
            //活动参与人
            List<UserActivityEntity> activityUserList = new ArrayList<>();
            List<Integer> userList = new ArrayList<>();
            activityUserList = userActivityMapper.findActivityUserList(activityId);
            for (int i=0; i < activityUserList.size(); i++){
                if(!userList.contains(activityUserList.get(i).getUserId())) {
                    userList.add(activityUserList.get(i).getUserId());
                }
            }

            //随机抽奖
            List<RaffleEntity> raffleList = new ArrayList<>();
            RaffleUtil.draw(prizeList,userList);

            //批量写入中奖名单
            succ = raffleMapper.insertRaffleBatch(raffleList);

            if (succ > 0) {
                //修改活动状态置位is_end
                activityMapper.updateIsEnd(activityId);
            }

        }

        return succ;
    }


}
