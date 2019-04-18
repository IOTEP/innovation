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
     * @param start
     * @param limit
     * @return
     */
    public List<ActivityListEntity> findActivityList(int sort,int start,int limit);

    /**
     *
     * @return
     */
    public int findActivityListCount(@Param("sort")int sort);

    /**
     *
     * @param activityId
     * @return
     */
    public ActivityInfoEntity findActivityInfo(int activityId);

    /**
     *
     * @param activityId
     * @param commentCount
     * @param likeCount
     * @return
     */
    public int updateCommentOrLikeCountSub(int activityId,int commentCount, int likeCount);

    /**
     *
     * @param activityId
     * @param commentCount
     * @param likeCount
     * @return
     */
    public int updateCommentOrLikeCountAdd(int activityId,int commentCount, int likeCount);

    /**
     * @param userId
     * @param start
     * @param limit
     * @return
     */
    public List<ActivityListEntity> findUserActivityList(int userId,int type,int start,int limit);

    /**
     * @param userId
     * @param start
     * @param limit
     * @return
     */
    public List<ActivityListEntity> findUserRaffleActivityList(int userId,int start,int limit);


}
