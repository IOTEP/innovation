package com.iotep.free.mapper;

import com.iotep.free.entity.UserEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by yaqiang on 2019/3/25 上午9:38
 */
@Mapper
public interface UserMapper {
    /**
     * 保存user
     * @param userEntity
     * @return
     */
    public int insertUser(UserEntity userEntity);


    /**
     *
     * @param userEntity
     * @return
     */
    public UserEntity getOne(UserEntity userEntity);

    /**
     *
     * @return
     */
    public List<UserEntity> getAll();

    /**
     *
     * @return
     */
    public List<UserEntity> getSome(@Param("userList")String userList);

    /**
     * @param userId
     * @param start
     * @param limit
     * @return
     */
    public List<UserEntity> getSocailAttention(@Param("userId") int userId,@Param("start") int start,@Param("limit") int limit);

    /**
     * @param attentionId
     * @param start
     * @param limit
     * @return
     */
    public List<UserEntity> getSocailFans(int attentionId, int start, int limit);

    /**
     * @Param
     * @return
     */
    public List<UserEntity> findActivityUserList(@Param("activityId")int activityId, @Param("sort")int sort, @Param("start")int start, @Param("limit")int limit);

    /**
     *
     * @return
     */
    public int findActivityUserListCount(@Param("activityId")int activityId);

    /**
     * 活动中奖用户列表
     * @param activityId
     * @return
     */
    public List<UserEntity> findActivityRaffleUserList(int activityId, @Param("sort")int sort);


}
