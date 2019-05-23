/*
 * @Author: TravelerZw 
 * @Date: 2019-04-07 21:07:57 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-23 14:33:14
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import { AtButton } from 'taro-ui'

import './lottery.less';

class  Lottery  extends   Component{
  goToAllComment() {
    let {activeid} = this.props;
    Taro.navigateTo({url:'/pages/allparticipant/index?activeid=' + activeid});
  }
  render(){
      return (<View className='lottery'>
        <View className='lot-box'>
          <AtButton className='btn' type='primary'>参与抽奖</AtButton>
          <View className='count'>
            <Text>已有 2019 人参与，</Text>
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