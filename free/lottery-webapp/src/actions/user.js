/*
 * @Author: TravelerZw 
 * @Date: 2019-05-06 17:35:26 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 20:48:27
 */

import {getJSON,postJSON} from '../utils/request';
import {saveUserToken} from '../utils/catch';

import api from  '../constants/api';
export function getCode(params){
  return async dispatch=>{
    let result= await postJSON(api.getCode,params).catch(_ERROR => {
      console.log(_ERROR);
    })
    if(result&&result.data){
      if(result.data.errNo === 0){
          dispatch({
            type:'getCode',
            code:result.data.data
          })
      }
    }
  }
}

export function loginRequest(params){
  return async dispatch=>{
    let result= await postJSON(api.login,params).catch(_ERROR => {
      console.log(_ERROR);
    })
    if(result&&result.data){
      if(result.data.errNo === 0){
        saveUserToken(result.data.data.accessToken);
        dispatch({
          type:'login',
          token:result.data.data
        })
      }
    }
  }
}
// 获取用户详细信息
export function getUserInfo(params){
  return async dispatch=>{
    let result= await postJSON(api.userInfo,params).catch(_ERROR => {
      console.log(_ERROR);
    })
    console.log("&&&&&&&&&&&&&&&&^^^^")
    console.log(result)
    if(result&&result.data){
      if(result.data.errNo === 0){
        dispatch({
          type:'userInfo',
          userInfo:result.data.data
        })
      }
    }
  }
}