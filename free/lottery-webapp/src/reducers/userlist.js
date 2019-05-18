/*
 * @Author: TravelerZw 
 * @Date: 2019-05-08 22:54:17 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-12 12:16:03
 */
const USER_LIST_STATE={
  page:1,
  size:3,
  list:[]
}

export default function userlist(prestate=USER_LIST_STATE,action){
  switch(action.type){
      case 'getUserList':
      return {
        ...prestate,
        list:action.list,
        page:1
      }
      case  'appendUserList':
      return {
        ...prestate,
        list:prestate.list.concat(action.list),
        page:action.page
      }
      default:
      return {...prestate}
  }
}