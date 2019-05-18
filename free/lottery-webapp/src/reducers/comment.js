const COMMENT_STATE={
  // 默认显示评论框
  commentBox: 0
}
export default function topiclist(prestate=COMMENT_STATE,action){
  switch(action.type){
      case  'showCommentBox':
      return {
        ...prestate,
        commentBox: action.showCommentBox}
      default:
      return {...prestate}
  }
}