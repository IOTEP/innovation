/*
 * @Author: TravelerZw 
 * @Date: 2019-04-29 10:19:06 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-06 17:36:09
 */
import {getJSON,postJSON} from '../utils/request';
import api from  '../constants/api';
import  Taro from '@tarojs/taro';

//请求首页抽奖数据
export function getCommentList(params){
  return async dispatch=>{
    let  result= await postJSON(api.commentList,params).catch(_ERROR => {
      console.log(_ERROR);
    })
    if(result&&result.data){
      if(result.data.errNo === 0){
          dispatch({type:'getCommentList',list:result.data.data.dataList})
      }
    }
  }
}
// 设置是否显示评论框
export function setCommentBox(params){
  return async dispatch=>{
    dispatch({type:'setCommentBox',statuBox: params})
  }
}