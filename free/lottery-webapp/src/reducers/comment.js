const COMMENT_STATE={
 // 默认第一页
 page:1,
 // 条数
 // limit:3,
 size:3,
 list:[],
//  topicinfo:{},
//  replies:[],
//  joinUids: [],
//  //点赞状态
//  admireState:false
  commentBox:false
}
export default function commentlist(prestate=COMMENT_STATE,action){
  switch(action.type){
    case 'setCommentBox':
    return {...prestate,commentBox:action.statuBox}
    case 'getCommentList':
    return {...prestate,list:action.list,page:1}
    case  'appendCommentList':
    return {...prestate,list:prestate.list.concat(action.list),page:action.page}
    default:
    return {...prestate}
}
}
