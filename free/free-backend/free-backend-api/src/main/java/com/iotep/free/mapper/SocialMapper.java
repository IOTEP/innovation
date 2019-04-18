package com.iotep.free.mapper;

import com.iotep.free.entity.SocialEntity;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by yongwei7 on 2019/3/30.
 */
@Mapper
public interface SocialMapper {

    /**
     * @param social
     * @return
     */
    public int insertSocial(SocialEntity social);

    /**
     * @param social
     * @return
     */
    public int updateSocial(SocialEntity social);

    /**
     * @param social
     * @return
     */
    public int isSocial(SocialEntity social);

    /**
     * @param social
     * @return
     */
    public int replaceSocial(SocialEntity social);

    /**
     * @param userId
     * @return
     */
    public int socailAttentionCount(int userId);

    /**
     * @param attentionId
     * @return
     */
    public int socailFansCount(int attentionId);



}
