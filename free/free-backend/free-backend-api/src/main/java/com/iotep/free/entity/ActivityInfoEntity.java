package com.iotep.free.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

/**
 * Created by yongwei7 on 2019/3/28.
 */
@NoArgsConstructor
@Setter
@Getter
@ToString
public class ActivityInfoEntity {
    private Integer id;
    private String name;
    private String pictureUrlArray;
    private String remark;
    private String content;
    private Integer raffleMode;
    private Integer status;
    private Integer isEnd;
    private Integer isJoin;
    private Integer isLike;
    private Integer isRaffle;
    private Integer isAttention;
    private Integer joinCount;
    private List<UserEntity> joinUserList;
    private List<UserEntity> raffleUserList;
    private Integer upperLimit;
    private Integer joinLimit;
    private Integer activityMode;
    private Integer commentCount;
    private Integer likeCount;
    private Integer userId;
    private String bussinessName;
    private long startTime;
    private long endTime;
    private long createdTime;
    private long updatedTime;
}
