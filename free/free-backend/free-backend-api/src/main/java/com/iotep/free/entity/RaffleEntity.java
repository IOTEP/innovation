package com.iotep.free.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

/**
 * Created by yaqiang on 2019/3/27 下午1:51
 */
@NoArgsConstructor
@Setter
@Getter
@ToString
public class RaffleEntity {
    private Integer id;
    private Integer activityId;
    private Integer userId;
    private Integer prizeId;
    private Integer prizeType;
    private Integer status;
    private Date raffle_time;
    private Date createdTime;
    private Date updatedTime;
}
