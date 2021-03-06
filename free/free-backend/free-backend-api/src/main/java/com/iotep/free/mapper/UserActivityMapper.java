package com.iotep.free.mapper;

import com.iotep.free.entity.UserActivityEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by yongwei7 on 2019/3/29.
 */
@Mapper
public interface UserActivityMapper {
    /**
     * @param userId
     * @param activityIdList
     * @return
     */
    public List<UserActivityEntity> findUserActivityListByCond(@Param("userId") int userId, @Param("activityIdList") String activityIdList);

    /**
     * @param userActivity
     * @return
     */
    public int replaceUserActivity(UserActivityEntity userActivity);

    /**
     * @param userId
     * @return
     */
    public int userActivityCount(int userId);

    /**
     *
     * @param activityId
     * @return
     */
    public List<UserActivityEntity> findActivityUserList(int activityId);

}
