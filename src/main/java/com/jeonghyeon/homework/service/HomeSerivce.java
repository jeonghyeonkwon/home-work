package com.jeonghyeon.homework.service;

import com.jeonghyeon.homework.dto.RequestDto;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
@Service
public class HomeSerivce {


    public Set<Map<Integer,Integer>> algorithm(RequestDto dto) {
        int useMoney = dto.getMoney();
        Map<Integer,Integer> map = new HashMap<>();
        dto.getForm().forEach(obj->map.put(obj.getCoin(),obj.getCount()));
        Map<Integer,Integer> useMoneyMap = new HashMap<>();
        Set<Map<Integer,Integer>> result = new HashSet<>();
        algo(useMoney,map,useMoneyMap,result);
        System.out.println("-----------------");
        System.out.println(result);
        System.out.println("-----------------");
        return result;

    }

    private static void algo(int useMoney, Map<Integer, Integer> map, Map<Integer, Integer> useMoneyMap, Set<Map<Integer, Integer>> result) {
        Set<Integer> keySet = useMoneyMap.keySet();
        int totalMoney = 0;
        for (Integer key : keySet) {
            Integer count = useMoneyMap.get(key);
            totalMoney += key *  count;
        }
        if (useMoney < totalMoney) return;
        if (useMoney == totalMoney ) {
            result.add(new HashMap<>(useMoneyMap));
        }
        else {
            Map<Integer, Integer> copyMap = new HashMap<>(map);
            Map<Integer, Integer> copyMoneyMap = new HashMap<>(useMoneyMap);
            Map<Integer, Integer> copyMap2 = new HashMap<>(map);
            Map<Integer, Integer> copyMoneyMap2 = new HashMap<>(useMoneyMap);
            Set<Integer> mapKeys = map.keySet();
            for (Integer key : mapKeys) {
                // key값을 넣었을때
                if(copyMoneyMap.containsKey(key)){
                    copyMoneyMap.put(key,copyMoneyMap.get(key)+1);
                }else{
                    copyMoneyMap.put(key,1);
                }
                if(copyMap.get(key)==1){
                    copyMap.remove(key);
                }else{
                    copyMap.put(key,copyMap.get(key)-1);
                }
                algo(useMoney,copyMap,copyMoneyMap,result);
                // key값을 넣지 않았을 때
                copyMap2.remove(key);
                algo(useMoney,copyMap2,copyMoneyMap2,result);

            }
        }
    }
}
