/*
 * @Author: TravelerZw 
 * @Date: 2019-05-08 23:02:27 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 22:52:34
 */
import {getJSON,postJSON} from '../utils/request';
import api from  '../constants/api';
import Taro from '@tarojs/taro';

export  function  getPriceList(params){
  return async dispatch=>{
    let result= await postJSON(api.priceList,params).catch(_ERROR => {
      console.log(_ERROR);
    })
    if(result&&result.data){
      if(result.data.errNo === 0){
        dispatch({type:'getPriceList',list:result.data.data.dataList})
      }
    }
  }
}