package com.iotep.free.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Created by yongwei7 on 2019/3/29.
 */
@NoArgsConstructor
@Setter
@Getter
@ToString
public class ReplyEntity {
    private Integer id;
    private Integer commentId;
    private Integer replyId;
    private Integer replyType;
    private Integer fromUid;
    private Integer toUid;
    private Integer status;
    private String cotent;
    private String nick;
    private String photo;
    private Integer likeCount;
    private Integer isLike;
    private long createTime;
    private long updateTime;
}
