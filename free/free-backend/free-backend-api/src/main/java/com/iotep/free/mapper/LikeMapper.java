package com.iotep.free.mapper;

import com.iotep.free.entity.LikeEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by yongwei7 on 2019/3/30.
 */
@Mapper
public interface LikeMapper {
    /**
     * @return
     * @Param limit
     */
    public List<LikeEntity> getLikeByUserId(@Param("userId") int userId, @Param("likeType") int likeType, @Param("typeIdList") String typeIdList);

    /**
     * @return
     * @Param limit
     */
    public LikeEntity getOneLike(@Param("userId") int userId, @Param("likeType") int likeType, @Param("typeId") int typeId);

    /**
     *
     * @param like
     * @return
     */
    public int insertLike(LikeEntity like);

    /**
     *
     * @param like
     * @return
     */
    public int updateLike(LikeEntity like);

    /**
     *
     * @param replyId
     * @return
     */
    public int updateLikeCountSub(int replyId);

    /**
     *
     * @param replyId
     * @return
     */
    public int updateLikeCountAdd(int replyId);



    /**
     * @return
     */
    public int findActivityCommentListCount(@Param("activityId") int activityId);

    /**
     * @return
     */
    public int likeAction(@Param("userId")int userId, @Param("activityId") int activityId, @Param("likeType")int likeType, @Param("typeId")int typeId, @Param("action")int action);
}
