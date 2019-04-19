package com.iotep.free.mapper;

import com.iotep.free.entity.RaffleEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

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

    /**
     * @param list
     * @return
     */
    public int insertRaffleBatch(List<RaffleEntity> list);

}
