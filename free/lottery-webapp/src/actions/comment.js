/*
 * @Author: TravelerZw 
 * @Date: 2019-04-29 10:19:06 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-06 17:36:09
 */

export function showComment(params){
  return (dispatch)=>{
      dispatch(
        {
          type: 'getCodes',
          showCommentBox: params
        }
      )
  }
}