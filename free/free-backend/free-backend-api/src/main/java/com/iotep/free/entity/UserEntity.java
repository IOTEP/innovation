package com.iotep.free.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Created by yaqiang on 2019/3/27 下午1:51
 */
@NoArgsConstructor
@Setter
@Getter
@ToString
public class UserEntity {
    private Integer id;
    private Integer type;
    private String nick;
    private String photo;
    private String bussinessName;
    private Integer appType;
    private String appUserId;
    private String accessToken;
    private Integer attentionCount;
    private Integer fansCount;
    private Integer joinActivityCount;
    private Integer createActivityCount;
    private Integer raffleActivityCount;
    private long createdTime;
    private long updatedTime;
}
