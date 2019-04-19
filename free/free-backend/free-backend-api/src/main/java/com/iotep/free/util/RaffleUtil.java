package com.iotep.free.util;

import com.iotep.free.entity.PrizeEntity;
import com.iotep.free.entity.RaffleEntity;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

/**
 * Created by yongwei7 on 2019/4/19.
 */
public class RaffleUtil {
    public static List<RaffleEntity> draw(List<PrizeEntity> prizeList, List<Integer> list) {
        List<RaffleEntity> raffleEntityList = new ArrayList<>();
        Random rdom = new Random();

        for (int i=0; i<prizeList.size(); i++){
            for(int j=0; j<prizeList.get(i).getPrizeNumber(); i++) {
                int index = rdom.nextInt(list.size());
                RaffleEntity raffleEntity = new RaffleEntity();
                raffleEntity.setActivityId(prizeList.get(i).getActivityId());
                raffleEntity.setUserId(list.get(index));
                raffleEntity.setPrizeId(prizeList.get(i).getId());
                raffleEntity.setPrizeType(prizeList.get(i).getPrizeType());
                raffleEntityList.add(raffleEntity);
                list.remove(index);
            }
            Collections.shuffle(list);
        }

        return raffleEntityList;
    }
}
