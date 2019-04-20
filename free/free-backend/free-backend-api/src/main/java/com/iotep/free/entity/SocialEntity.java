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
public class SocialEntity {
    private Integer id;
    private Integer userId;
    private Integer attentionId;
    private Integer status;
    private Date createTime;
    private Date updateTime;
}
