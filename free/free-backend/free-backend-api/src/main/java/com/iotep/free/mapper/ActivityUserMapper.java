package com.iotep.free.mapper;

import com.iotep.free.entity.UserEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by yongwei7 on 2019/3/30.
 */
@Mapper
public interface ActivityUserMapper {
    /**
     * @Param
     * @return
     */
    public List<UserEntity> findActivityUserList(@Param("activityId")int activityId, @Param("sort")int sort, @Param("start")int start, @Param("limit")int limit);

    /**
     *
     * @return
     */
    public int findActivityUserListCount(@Param("activityId")int activityId,@Param("sort")int sort);
}
