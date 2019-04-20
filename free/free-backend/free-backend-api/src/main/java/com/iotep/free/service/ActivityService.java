package com.iotep.free.service;

import com.iotep.free.entity.*;
import com.iotep.free.mapper.*;
import com.iotep.free.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by yongwei7 on 2019/3/28.
 */
@Service
public class ActivityService {
    @Autowired
    private ActivityMapper activityMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private CommentMapper commentMapper;
    @Autowired
    private LikeMapper likeMapper;
    @Autowired
    private ReplyMapper replyMapper;
    @Autowired
    private UserActivityMapper userActivityMapper;
    @Autowired
    private SocialMapper socialMapper;

    public List<ActivityListEntity> findActivityList(int userId,int sort, int start, int limit) {
        System.out.println(sort);
        List<ActivityListEntity> activityListEntity = new ArrayList<>();
        activityListEntity = activityMapper.findActivityList(sort,start,limit);

        if(activityListEntity.size() > 0 && userId > 0) {
            String activityIdListStr = "";
            HashSet<Integer> activityIdList = new HashSet<>();
            HashSet<Integer> joinActivityIdList = new HashSet<>();

            for (int i = 0; i < activityListEntity.size(); i++) {
                activityIdList.add(activityListEntity.get(i).getId());
            }
            activityIdListStr = StringUtil.hashsetIntToString(activityIdList);
            //是否参加活动
            List<UserActivityEntity> userActivityEntity = userActivityMapper.findUserActivityListByCond(userId,activityIdListStr);
            for(int i =0; i< userActivityEntity.size(); i++){
                joinActivityIdList.add(userActivityEntity.get(i).getActivityId());
            }
            for(int i =0; i< activityListEntity.size(); i++){
                if(joinActivityIdList.contains(activityListEntity.get(i).getId())){
                    activityListEntity.get(i).setIsJoin(1);
                }else{
                    activityListEntity.get(i).setIsJoin(0);
                }
            }
        }

        return activityListEntity;
    }

    public int findActivityListCount(int sort) {
        return activityMapper.findActivityListCount(sort);
    }

    public ActivityInfoEntity findActivityInfo(int activityId,int userId) {
        ActivityInfoEntity activityInfoEntity = activityMapper.findActivityInfo(activityId);

        if(activityInfoEntity.getId() > 0) {
            if(userId > 0) {
                //是否参加活动
                List<UserActivityEntity> userActivityEntity = userActivityMapper.findUserActivityListByCond(userId, activityId + "");
                if (userActivityEntity.size() > 0) {
                    activityInfoEntity.setIsJoin(1);
                }

                //活动是否点赞
                LikeEntity likeEntity= likeMapper.getOneLike(userId,1,activityId);
                if(likeEntity !=null && likeEntity.getStatus() == 1){
                    activityInfoEntity.setIsLike(1);
                }

                //是否关注广告主
                int isSocial = 0;
                SocialEntity socialEntity = new SocialEntity();
                socialEntity.setUserId(userId);
                socialEntity.setAttentionId(activityInfoEntity.getUserId());
                isSocial = socialMapper.isSocial(socialEntity);
                if(isSocial > 0){
                    activityInfoEntity.setIsAttention(1);
                }
            }

            //参与人数&7位详细用户
            activityInfoEntity.setJoinCount(userMapper.findActivityUserListCount(activityId));
            List<UserEntity>  userListPart = userMapper.findActivityUserList(activityId,0,0,7);
            if(userListPart.size() >0){
                activityInfoEntity.setJoinUserList(userListPart);
            }

            //评论个数&点赞个数


            //展现全部中奖用户&是否中奖
            List<UserEntity> userRaffleList= userMapper.findActivityRaffleUserList(activityId,0);
            if(userListPart.size() >0) {
                activityInfoEntity.setRaffleUserList(userRaffleList);

                if(userId > 0) {
                    //是否中奖
                    for (int i = 0; i < userRaffleList.size(); i++) {
                        if (userRaffleList.get(i).getId() == userId) {
                            activityInfoEntity.setIsRaffle(1);
                        }
                    }
                }
            }
        }

        return activityInfoEntity;
    }

    public List<UserEntity> findActivityUserList(int activityId, int sort, int start, int limit) {
        return userMapper.findActivityUserList(activityId,sort,start,limit);
    }

    public int findActivityUserListCount(int activityId) {
        return userMapper.findActivityUserListCount(activityId);
    }

    public List<CommentEntity> findActivityCommentList(int userId,int activityId,int sort, int start, int limit) {
        List<CommentEntity> commentList = new ArrayList<>();
        List<Integer> commentIdList = new ArrayList<>();
        List<Integer> userIdList = new ArrayList<>();
        commentList = commentMapper.findActivityCommentList(activityId,sort,start,limit);
        for (int i=0; i<commentList.size(); i++){
            CommentEntity tmp = commentList.get(i);
            commentIdList.add(tmp.getId());
            userIdList.add(tmp.getFromUid());
        }
        if(commentIdList.size() > 0 && userIdList.size() > 0){
            String commentIdListStr = StringUtil.listIntToString(commentIdList);
            String userIdListStr = StringUtil.listIntToString(userIdList);
            HashSet<Integer> likeListSet = new HashSet<>();
            Map<Integer,UserEntity> userListMap = new HashMap<>();

            //评论是否本用户点赞
            if(userId > 0) {
                List<LikeEntity> likeList = likeMapper.getLikeByUserId(userId, 2, commentIdListStr);
                for (int i = 0; i < likeList.size(); i++) {
                    if (likeList.get(i).getStatus() == 1) { //已点赞
                        likeListSet.add(likeList.get(i).getTypeId());
                    }
                }
            }

            //评论数和点赞数

            //评论用户的昵称和头像
            List<UserEntity> userEntityList = userMapper.getSome(userIdListStr);
            for(int i = 0; i< userEntityList.size(); i++){
                userListMap.put(userEntityList.get(i).getId(), userEntityList.get(i));
            }
            for(int i=0; i<commentList.size();i++){
                CommentEntity tmp = commentList.get(i);
                if(userListMap.containsKey(tmp.getFromUid())){
                    tmp.setNick(userListMap.get(tmp.getFromUid()).getNick());
                    tmp.setPhoto(userListMap.get(tmp.getFromUid()).getPhoto());
                }
                if(likeListSet.contains(tmp.getId())){
                    tmp.setIsLike(1);
                }
            }
        }

        return commentList;
    }

    public int findActivityCommentListCount(int activityId) {
        return commentMapper.findActivityCommentListCount(activityId);
    }

    public List<ReplyEntity> findActivityCommentReplyList(int userId, int commentId, int sort, int start, int limit) {
        List<ReplyEntity> replyList = new ArrayList<>();
        List<Integer> replyIdList = new ArrayList<>();
        List<Integer> userIdList = new ArrayList<>();
        replyList = replyMapper.findActivityCommentReplyList(commentId,sort,start,limit);
        for (int i=0; i<replyList.size(); i++){
            ReplyEntity tmp = replyList.get(i);
            replyIdList.add(tmp.getId());
            userIdList.add(tmp.getFromUid());
        }

        if(replyIdList.size() > 0 && userIdList.size() > 0){
            String replyIdListStr = StringUtil.listIntToString(replyIdList);
            String userIdListStr = StringUtil.listIntToString(userIdList);
            HashSet<Integer> likeListSet = new HashSet<>();
            Map<Integer,UserEntity> userListMap = new HashMap<>();

            System.out.println(1);
            System.out.println(userId);
            //评论是否本用户点赞
            if(userId > 0) {
                List<LikeEntity> likeList = likeMapper.getLikeByUserId(userId, 3, replyIdListStr);
                for (int i = 0; i < likeList.size(); i++) {
                    if (likeList.get(i).getStatus() == 1) {
                        likeListSet.add(likeList.get(i).getTypeId());
                    }
                }
            }

            //点赞数

            //评论用户的昵称和头像
            List<UserEntity> userEntityList = userMapper.getSome(userIdListStr);
            for(int i = 0; i< userEntityList.size(); i++){
                userListMap.put(userEntityList.get(i).getId(), userEntityList.get(i));
            }
            for(int i=0; i<replyList.size();i++){
                ReplyEntity tmp = replyList.get(i);
                if(userListMap.containsKey(tmp.getFromUid())){
                    tmp.setNick(userListMap.get(tmp.getFromUid()).getNick());
                    tmp.setPhoto(userListMap.get(tmp.getFromUid()).getPhoto());
                }
                if(likeListSet.contains(tmp.getId())){
                    tmp.setIsLike(1);
                }
            }
        }

        return replyList;
    }

    public int findActivityCommentReplyListCount(int commentId) {
        return replyMapper.findActivityCommentReplyListCount(commentId);
    }

}
