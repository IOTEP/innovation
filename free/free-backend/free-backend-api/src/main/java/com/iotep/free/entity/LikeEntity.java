package com.iotep.free.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

/**
 * Created by yongwei7 on 2019/3/30.
 */
@NoArgsConstructor
@Setter
@Getter
@ToString
public class LikeEntity {
    private Integer id;
    private Integer likeType;
    private Integer typeId;
    private Integer userId;
    private Integer status;
    private Date createdTime;
    private Date updatedTime;
}
