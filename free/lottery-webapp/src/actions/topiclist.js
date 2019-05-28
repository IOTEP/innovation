/*
 * @Author: TravelerZw 
 * @Date: 2019-04-03 22:07:30 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-25 14:46:07
 */

import {getJSON,postJSON} from '../utils/request';
import api from  '../constants/api';
import  Taro from '@tarojs/taro';

//请求首页抽奖数据
export  function  getTopicList(params){
    return async dispatch=>{
      let  result= await postJSON(api.gettopics,params).catch(_ERROR => {
        console.log(_ERROR);
      })
      if(result&&result.data){
        if(result.data.errNo === 0){
            dispatch({type:'getTopicList',list:result.data.data.dataList})
        }
      }
    }
}

//请求下页数据
export function  getNextList(params){
    return  async dispatch=>{
        let  result= await getJSON(api.gettopics,params);
        if(result&&result.data){
            if(result.data.success){
                if(result.data.data.length>0){
                    dispatch({type:'appendTopicList',list:result.data.data,page:params.page})
                }
            }
        }
      }
}
// 活动请求详情
export  function  getTopicInfo(params){
    return async  dispatch=>{
     let result= await postJSON(api.getactdetails, params)
      if(result && result.data){
          dispatch({
              type:'getTopicInfo',
              infoData:result.data.data
          }) 
      } else {
          console.error('请求详情失败！')
      }
    }
}
// 点击抽奖
export async function clickPrice(params){
  let result=await postJSON(api.partakePrice, params);
  if(result&&result.data&&result.data.success){
    //成功点赞
    return result.data;
  }else{
    //点赞失败
    Taro.showToast({title:'参与失败 请重试!',icon:'none'})
  }
  return  false;
}

//点赞
export  async  function  admireTopic(params){
    let  result=await   postJSON(api.upreply+params.replyid+'/ups',params);
      if(result&&result.data&&result.data.success){
          //成功点赞
          return   result.data;
      }else{
          //点赞失败
          Taro.showToast({title:'点赞失败!',icon:'none'})
      }
      return  false;
}

export async  function   replyContent(params){
  let  result= await postJSON(api.replytopic+params.topicid+'/replies',params)
  if(result&&result.data&&result.data.success){
    //成功评论
     return   result.data;
     }else{
    //评论失败
     Taro.showToast({title:'评论失败!',icon:'none'})
   }
   return  false;
}
export  async  function  submitTopic(params){
  let result= await postJSON(api.createtopic,params);
  if(result&&result.data&&result.data.success){
      return  result.data
  }else{
    Taro.showToast({title:'发布话题失败!',icon:'none'})
  }
  return  false;
}
//更新话题
export  async  function  updateTopic(params){
   let  result=await postJSON(api.updatetopic,params);
   if(result&&result.data&&result.data.success){
        return  result.data
    }else{
       Taro.showToast({title:'更新话题失败!',icon:'none'})
   }
    return  false;
}