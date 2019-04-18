package com.iotep.free.service;

import com.iotep.free.entity.ActivityListEntity;
import com.iotep.free.entity.UserEntity;
import com.iotep.free.mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yaqiang on 2019/3/25 上午9:37
 */

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private SocialMapper socialMapper;
    @Autowired
    private UserActivityMapper userActivityMapper;
    @Autowired
    private RaffleMapper raffleMapper;
    @Autowired
    private ActivityMapper activityMapper;

    public UserEntity loginUser(UserEntity userEntity) {
        UserEntity one = userMapper.getOne(userEntity);
        if(one.getId() > 0){  //存在更新
            //更新token
        }else{    //不存在插入
            userMapper.insertUser(userEntity);
        }
        return one;
    }

    public int saveUser(UserEntity userEntity) {
        return userMapper.insertUser(userEntity);
    }

    public UserEntity findUser(UserEntity userEntity) {
        return userMapper.getOne(userEntity);
    }

    public List<UserEntity> findUsers() {
        return userMapper.getAll();
    }

    public List<UserEntity> userAttentionList(int userId, int sort, int start ,int limit) {

        return userMapper.getSocailAttention(userId,start,limit);
    }

    public int userAttentionCount(int userId) {

        return socialMapper.socailAttentionCount(userId);
    }

    public List<UserEntity> userFansList(int attentionId, int sort, int start ,int limit) {

        return userMapper.getSocailFans(attentionId,start,limit);
    }

    public int userFansCount(int attentionId) {

        return socialMapper.socailFansCount(attentionId);
    }

    public UserEntity findUserInfo(UserEntity userEntity,int myUserId) {
        UserEntity userEntityInfo = userMapper.getOne(userEntity);

        if(userEntityInfo.getId() > 0) {
            //关注人数
            userEntityInfo.setAttentionCount(socialMapper.socailAttentionCount(userEntityInfo.getId()));

            //粉丝人数
            userEntityInfo.setFansCount(socialMapper.socailFansCount(userEntityInfo.getId()));

            //参与全部抽奖活动个数
            userEntityInfo.setJoinActivityCount(userActivityMapper.userActivityCount(userEntityInfo.getId()));

            //发起全部抽奖活动个数
            //userEntityInfo.setCreateActivityCount();

            //参与全部中奖抽奖活动个数
            userEntityInfo.setRaffleActivityCount(raffleMapper.userRaffleCount(userEntityInfo.getId()));

        }

        return userEntityInfo;
    }

    public List<ActivityListEntity> findUserActivityList(int myUserId, int userId,int type,int sort, int start, int limit) {
        List<ActivityListEntity> activityListEntity = new ArrayList<>();
        switch (type){
            case 0:
            case 2:
                activityListEntity = activityMapper.findUserActivityList(userId,type,start,limit);
                break;
            case 1:
                activityListEntity = activityMapper.findUserRaffleActivityList(userId,start,limit);
                break;
            default:
                break;
        }

        return activityListEntity;
    }


}
