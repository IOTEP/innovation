/*
 * @Author: TravelerZw 
 * @Date: 2019-04-07 21:07:57 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-25 14:50:40
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import { AtButton } from 'taro-ui'
import  {clickPrice} from  '../../actions/topiclist';
import {loadUserToken} from '../../utils/catch'

import './lottery.less';

@connect(function(store) {
  return {
    //  code: store.user.code,
    //  token: store.user.token
  }
}, function(dispatch) {
 return {
  // clickPrice(params) {
  //   dispatch(clickPrice(params))
  // }
 }
})
class  Lottery  extends   Component{
  goToAllComment() {
    let {activeid} = this.props;
    Taro.navigateTo({url:'/pages/allparticipant/index?activeid=' + activeid});
  }
  submitPrice() {
    let {activeid} = this.props;
    let token= loadUserToken();
    let params = {
      token: token,
      activityId: parseInt(activeid),
      attentionId: parseInt(activeid)
    }
    clickPrice(params)
  }
  render(){
    let {topicinfo} = this.props;
    console.log("**********")
    console.log(topicinfo)
      return (<View className='lottery'>
        <View className='lot-box'>
          {
            topicinfo.isEnd==0?
            <AtButton className='btn' type='primary'
            onClick={this.submitPrice.bind(this)}
            >参与抽奖</AtButton>:''
          }
          {
             topicinfo.isEnd==1?
             <AtButton className='btn-end' type='primary'
             >活动结束</AtButton>:''
          }

          <View className='count'>
            <Text>已有 {topicinfo.joinCount ? topicinfo.joinCount: 0} 人参与，</Text>
            <Text onClick={this.goToAllComment.bind(this, '')} className="all">查看全部></Text>
          </View>
          <View className='avatar-box'>
            <View className='avatar'>
            </View>
            <View className='avatar'>
            </View>
            <View className='avatar'>
            </View>
            <View className='avatar'>
            </View>
            <View className='avatar'>
            </View>
            <View className='avatar'>
            </View>
            <View className='avatar'>
            </View>
          </View>
        </View>
      </View>)
   }
}
export default  Lottery;