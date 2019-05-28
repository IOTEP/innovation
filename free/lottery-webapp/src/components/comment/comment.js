/*
 * @Author: TravelerZw 
 * @Date: 2019-04-02 23:51:53 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 15:26:19
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import {AtButton,AtIcon,AtBadge} from 'taro-ui';
import {connect} from '@tarojs/redux';
import {setCommentBox} from '../../actions/comment';

import "./comment.less";
@connect(function(store){
   return {...store.commentlist}
 },function(dispatch){
   return {setCommentBox(params){
      dispatch(setCommentBox(params))
   }
 }
 })
class  Comment  extends   Component{
   openCommentBox() {
      this.props.setCommentBox&&this.props.setCommentBox(true)
   }
   render(){
      let {topicinfo} = this.props;
      return (<View className="comment border-1px">
         <View className="left" onClick={this.openCommentBox.bind(this)}>
            <View className="comment_star" >
               <AtIcon value='edit' size='20' color='#666666'></AtIcon>
               <Text className="text">评论下吧...</Text>
            </View>
         </View>
         <View className="right">
            <View className="icon-left">
               <AtIcon value='message' size='20' color='#666666'></AtIcon>
               <AtBadge value={topicinfo.commentCount} maxValue={99999}>
                  <AtButton className='btn' size='small'>评论</AtButton>
               </AtBadge>
            </View>
            <View className="icon-right">
               <AtIcon prefixClass="travelerZw" value='share' size='20'></AtIcon>
            </View>
         </View>
      </View>)
   }
}
export default  Comment;