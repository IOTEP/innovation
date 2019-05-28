/*
 * @Author: TravelerZw 
 * @Date: 2019-05-08 23:02:27 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 22:14:32
 */
import {getJSON,postJSON} from '../utils/request';
import api from  '../constants/api';
import Taro from '@tarojs/taro';

export  function  getFansList(params){
  return async dispatch=>{
    let result= await postJSON(api.fansUser,params).catch(_ERROR => {
      console.log(_ERROR);
    })
    if(result&&result.data){
      if(result.data.errNo === 0){
        dispatch({type:'getFansList',list:result.data.data.dataList})
      }
    }
  }
}