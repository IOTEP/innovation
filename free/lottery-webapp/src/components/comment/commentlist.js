/*
 * @Author: TravelerZw 
 * @Date: 2019-04-02 23:51:53 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 20:17:40
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import { AtIcon } from 'taro-ui'
import {connect} from '@tarojs/redux';
import "./commentlist.less";
import {getCommentList} from '../../actions/comment';
import {loadUserToken} from '../../utils/catch'

@connect(function(store){
  return {...store.commentlist}
},function(dispatch){
  return {getCommentList(params){
     dispatch(getCommentList(params))
  }
}
})
class  CommentList  extends   Component{
  componentWillMount(){
    let {page,size,activeid}=this.props;
    let userId=1;
    let token=loadUserToken();
    let param={
      page,
      size,
      userId,
      token,
      activityId: parseInt(activeid)
    }
    this.props.getCommentList && this.props.getCommentList(param);
  }
   render(){
    let {list}=this.props;
    // alert(activeid)
    console.log("*************|||||||********")
    console.log(this.props)
      return (<View className='comment-list'>
          <View className='comment-box'>
            <View className='title'>
              <View className='user-box'>
                <View className='avatar'>
                </View>
                <View className='nick-box'>
                  <View className='nick'>
                    昵称
                  </View>
                  <View className='time'>
                    1小时前
                  </View>
                </View>
              </View>
              <View className='details'>
                <View>
                  <AtIcon value='message' size='16'></AtIcon>
                  <Text className='space'>回复</Text>
                </View>
                <View className='right'>
                  <AtIcon prefixClass="travelerZw" value='like' size='16'></AtIcon>
                  <Text className='space'>166</Text>
                </View>
              </View>
            </View>
            <View className='content'>
              <View className='det'>
              共建一带一路，同大一起，登高望远，携手前行的朋友圈越来越大，好伙伴越来越多，合作质量越来越高，发展前景越来越好，应潮流，得民心，惠民生，利天下！
              </View>
              <View className='reply'>
                全部<Text>1</Text>条回复 >
              </View>
            </View>
          </View>
      </View>)
   }
}
export default  CommentList;