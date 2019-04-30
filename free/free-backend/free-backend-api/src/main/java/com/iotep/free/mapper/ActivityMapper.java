package com.iotep.free.mapper;

import com.iotep.free.entity.ActivityInfoEntity;
import com.iotep.free.entity.ActivityListEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by yongwei7 on 2019/3/29.
 */
@Mapper
public interface ActivityMapper {
    /**
     *
     * @param start
     * @param limit
     * @return
     */
    public List<ActivityListEntity> findActivityList(@Param("sort") int sort, @Param("start") int start, @Param("limit") int limit);

    /**
     *
     * @param sort
     * @return
     */
    public int findActivityListCount(int sort);

    /**
     *
     * @param activityId
     * @return
     */
    public ActivityInfoEntity findActivityInfo(int activityId);

    /**
     *
     * @param likeCount
     * @return
     */
    public int updateCommentOrLikeCountSub(@Param("activityId") int activityId,@Param("commentCount") int commentCount,@Param("likeCount") int likeCount);

    /**
     *
     * @return
     */
    public int updateCommentOrLikeCountAdd(@Param("activityId") int activityId,@Param("commentCount") int commentCount,@Param("likeCount") int likeCount);

    /**
     *
     * @param userId
     * @param type
     * @param start
     * @param limit
     *
     * @return
     */
    public List<ActivityListEntity> findUserActivityList(@Param("userId") int userId, @Param("type") int type, @Param("start") int start, @Param("limit") int limit);

    /**
     *
     * @param userId
     * @param type
     *
     * @return
     */
    public int findUserActivityListCount(@Param("userId") int userId,@Param("type") int type);

    /**
     *
     * @param userId
     * @param start
     * @param limit
     * @return
     */
    public List<ActivityListEntity> findUserRaffleActivityList(@Param("userId") int userId,@Param("start") int start,@Param("limit") int limit);

    /**
     *
     * @param userId
     *
     * @return
     */
    public int findUserRaffleActivityListCount(int userId);


    /**
     *
     * @param activityId
     * @return
     */
    public int updateIsEnd(int activityId);


}
