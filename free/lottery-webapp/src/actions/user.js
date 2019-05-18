/*
 * @Author: TravelerZw 
 * @Date: 2019-05-06 17:35:26 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-07 10:43:21
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