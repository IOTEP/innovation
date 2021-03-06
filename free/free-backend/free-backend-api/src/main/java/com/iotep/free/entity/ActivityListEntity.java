package com.iotep.free.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

/**
 * Created by yongwei7 on 2019/3/28.
 */
@NoArgsConstructor
@Setter
@Getter
@ToString
public class ActivityListEntity {
    private Integer id;
    private String name;
    private String pictureUrlArray;
    private String remark;
    private String content;
    private Integer raffleMode;
    private Integer status;
    private Integer isEnd;
    private Integer isJoin;
    private Integer isAttention;
    private Integer upperLimit;
    private Integer joinLimit;
    private Integer activityMode;
    private Integer commentCount;
    private Integer likeCount;
    private Integer userId;
    private String bussinessName;
    private Date startTime;
    private Date endTime;
    private Date createdTime;
    private Date updatedTime;
}
