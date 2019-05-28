/*
 * @Author: TravelerZw 
 * @Date: 2019-05-08 22:54:17 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 22:06:25
 */
const FANS_LIST_STATE={
  page:1,
  size:3,
  list:[]
}

export default function fanslist(prestate=FANS_LIST_STATE,action){
  switch(action.type){
      case 'getFansList':
      return {
        ...prestate,
        list:action.list,
        page:1
      }
      case  'appendFansList':
      return {
        ...prestate,
        list:prestate.list.concat(action.list),
        page:action.page
      }
      default:
      return {...prestate}
  }
}