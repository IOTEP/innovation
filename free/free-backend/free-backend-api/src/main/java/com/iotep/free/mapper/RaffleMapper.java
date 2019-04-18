package com.iotep.free.mapper;

import org.apache.ibatis.annotations.Mapper;

/**
 * Created by yongwei7 on 2019/3/29.
 */
@Mapper
public interface RaffleMapper {

    /**
     * @param userId
     * @return
     */
    public int userRaffleCount(int userId);

}
