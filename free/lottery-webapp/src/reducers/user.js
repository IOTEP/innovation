const USER_STATE={
  // 默认显示评论框
  code: "",
  token: ""
}
export default function user(prestate=USER_STATE,action){
  switch(action.type){
      case  'getCode':
      return {
        ...prestate,
        code: action.code
      }
      case  'login':
      return {
        ...prestate,
        token: action.token
      }
      default:
      return {...prestate}
  }
}