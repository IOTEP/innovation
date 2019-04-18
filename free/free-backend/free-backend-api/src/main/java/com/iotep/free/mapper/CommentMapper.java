package com.iotep.free.mapper;

import com.iotep.free.entity.CommentEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by yongwei7 on 2019/3/30.
 */
@Mapper
public interface CommentMapper {
    /**
     *
     * @return
     */
    public List<CommentEntity> findActivityCommentList(@Param("activityId")int activityId, @Param("sort")int sort, @Param("start")int start, @Param("limit")int limit);

    /**
     *
     * @return
     */
    public int findActivityCommentListCount(@Param("activityId")int activityId);

    /**
     * @param comment
     * @return
     */
    //public int updateComment(@Param("id") int id, @Param("action") int action);
    public int updateComment(CommentEntity comment);


    /**
     *@param comment
     * @return
     */
    //public int insertComment(@Param("userId") int userId,@Param("activityId")int activityId, @Param("commentId") int commentId, @Param("content") String content);
    public int insertComment(CommentEntity comment);

    /**
     *
     * @param commentId
     * @param commentCount
     * @param likeCount
     * @return
     */
    public int updateCommentOrLikeCountSub(int commentId, int commentCount, int likeCount);

    /**
     *
     * @param commentId
     * @param commentCount
     * @param likeCount
     * @return
     */
    public int updateCommentOrLikeCountAdd(int commentId,int commentCount, int likeCount);

}
