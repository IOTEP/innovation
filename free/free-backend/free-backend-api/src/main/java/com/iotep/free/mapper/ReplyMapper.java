package com.iotep.free.mapper;

import com.iotep.free.entity.ReplyEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by yongwei7 on 2019/3/30.
 */
@Mapper
public interface ReplyMapper {
    /**
     * @Param limit
     * @return
     */
    public List<ReplyEntity> findActivityCommentReplyList(@Param("commentId")int commentId, @Param("sort")int sort, @Param("start")int start, @Param("limit")int limit);

    /**
     *
     * @return
     */
    public int findActivityCommentReplyListCount(@Param("commentId")int commentId);

    /**
     *@param reply
     * @return
     */
    public int updateCommentReply(ReplyEntity reply);

    /**
     *@param reply
     * @return
     */
    public int insertCommentReply(ReplyEntity reply);

}
