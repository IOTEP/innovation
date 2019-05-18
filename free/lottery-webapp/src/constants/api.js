/*
 * @Author: TravelerZw 
 * @Date: 2019-04-28 13:44:39 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-08 22:51:44
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
  userList:rootPath+'/activity/userList'

}
export default apiObject;