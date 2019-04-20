package com.iotep.free.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

/**
 * Created by yongwei7 on 2019/3/29.
 */
@NoArgsConstructor
@Setter
@Getter
@ToString
public class CommentEntity {
    private Integer id;
    private Integer fromUid;
    private Integer activityId;
    private Integer status;
    private String content;
    private String nick;
    private String photo;
    private Integer likeCount;
    private Integer commentCount;
    private Integer isLike;
    private Date createdTime;
    private Date updatedTime;
}
