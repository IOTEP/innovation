/*
 * @Author: TravelerZw 
 * @Date: 2019-04-04 22:19:52 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-04-10 14:37:53
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import './homehead.less'
import { AtFloatLayout } from "taro-ui";
class  HomeHead  extends   Component{
   constructor () {
      super(...arguments)
      this.state = {
         isOpened: false,
      }
   }
   openAtFloatLayout() {
      this.setState({
         isOpened: true
      })
   }
   render(){
      let {isOpened}= this.state;
      return (<View className='at-row at-row__justify--between home-head'>
      <View className='at-col at-col-5'>
         <Text className='text-logo'>
            每日抽奖
         </Text>
      </View>
      <View className='at-col at-col-5 text-right'>
         <Text>
            我要上首页
         </Text>
         <Text className='icon-style'>
            |
         </Text>
         <Text onClick={this.openAtFloatLayout.bind(this)}>
            分享
         </Text>
      </View>
      <AtFloatLayout isOpened={isOpened} title="分享到">
         微信 微博
      </AtFloatLayout>
    </View>)
   }
}
export default  HomeHead;