/*
 * @Author: TravelerZw 
 * @Date: 2019-04-02 23:51:53 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-04-23 23:17:06
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import { AtTextarea,AtInput,AtIcon } from 'taro-ui';

import "./comment.less";


class  Comment  extends   Component{
   render(){
      return (<View className="comment border-1px">
         <View className="left">
            <View className="comment_star" >
               <AtIcon value='edit' size='16' color='#666666'></AtIcon>
               <Text className="text">评论下吧...</Text>
            </View>
         </View>
         <View className="right">
            <View className="icon-left">
               <AtIcon value='message' size='16' color='#666666'></AtIcon>
               <Text style={{marginLeft: "0.3rem"}}>评论</Text>
            </View>
            <View className="icon-right">
               <AtIcon value='share-2' size='16' color='#666666'></AtIcon>
            </View>
         </View>
      </View>)
   }
}
export default  Comment;