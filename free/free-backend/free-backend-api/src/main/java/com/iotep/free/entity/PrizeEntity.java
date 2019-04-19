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
public class PrizeEntity {
    private Integer id;
    private Integer activityId;
    private Integer level;
    private Integer prizeType;
    private Integer prizeNumber;
    private Integer status;
    private String name;
    private long createdTime;
    private long updatedTime;
}
