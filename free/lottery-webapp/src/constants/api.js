/*
 * @Author: TravelerZw 
 * @Date: 2019-04-28 13:44:39 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 22:35:50
 */

// const rootPath='https://free.sanyicun.com/free';

const rootPath='http://39.98.190.70:2023/free';

const apiObject={
  //获取首页列表
  gettopics:rootPath+'/activity/list',
  // 获取活动详情接口
  getactdetails:rootPath+'/activity/info',
  // 获取短信验证码
  getCode:rootPath+'/user/loginSendSms',
  // 登录
  login:rootPath+'/user/login',
  // 活动人员列表
  userList:rootPath+'/activity/userList',
  // 参与抽奖
  partakePrice:rootPath+'/action/raffle',
  // 获取评论列表
  commentList:rootPath+'/activity/commentAndLikeInfo',
  // 获取我的详细信息
  userInfo:rootPath+'/user/info',
  // 获取关注列表
  followUser:rootPath+'/user/attention/list',
  // 获取粉丝列表
  fansUser:rootPath+'/user/fans/list',
  // 获取抽奖列表
  priceList:rootPath+'/user/activity/list'

}
export default apiObject;