package com.iotep.free.mapper;

import com.iotep.free.entity.PrizeEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yongweilv on 2019/3/25 上午9:38
 */
@Mapper
public interface PrizeMapper {
    /**
     *
     * @param prizeEntity
     * @return
     */
    public int insertPrize(PrizeEntity prizeEntity);


    /**
     *
     * @param prizeEntity
     * @return
     */
    public PrizeEntity getOne(PrizeEntity prizeEntity);

    /**
     *
     * @param activityId
     * @return
     */
    public List<PrizeEntity> getActivityPrize(int activityId);


}
