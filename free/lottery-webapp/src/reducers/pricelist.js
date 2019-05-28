/*
 * @Author: TravelerZw 
 * @Date: 2019-05-08 22:54:17 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 22:32:37
 */
const PRICE_LIST_STATE={
  page:1,
  size:3,
  list:[]
}

export default function pricelist(prestate=PRICE_LIST_STATE,action){
  switch(action.type){
      case 'getPriceList':
      return {
        ...prestate,
        list:action.list,
        page:1
      }
      case  'appendPriceList':
      return {
        ...prestate,
        list:prestate.list.concat(action.list),
        page:action.page
      }
      default:
      return {...prestate}
  }
}