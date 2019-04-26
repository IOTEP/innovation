/*
 * @Author: TravelerZw 
 * @Date: 2019-04-02 23:51:53 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-04-10 22:57:59
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {AtNavBar,AtSwipeAction,AtIcon, AtFloatLayout} from 'taro-ui';
import './index.less';
class Address extends Component{
    config={
      navigationBarTitleText: '收货地址'
    }
    constructor () {
      super(...arguments)
      this.state = {
        isOpened: false,
      }
    }
    toAddaddress() {
      Taro.navigateTo({url:'/pages/addaddress/index'});
    }
    handleClickBack() {
      Taro.navigateBack({ delta: 1 })
    }
    render(){
      let {isOpened} = {...this.state}
      return (<View className='address'>
        <AtNavBar
          onClickLeftIcon={this.handleClickBack.bind(this)}
          onClickRgIconSt={this.toAddaddress.bind(this)}
          color='#000'
          fixed
          leftIconType='chevron-left'
          rightFirstIconType='add'
          border={false}
          title='收货地址'
        />
        <View className='address-box'>
          <AtSwipeAction options={[
            {
              text: '删除',
              style: {
                backgroundColor: '#f10215'
              }
            },
            {
              text: '修改',
              style: {
                backgroundColor: '#999'
              }
            }
          ]}>
          <View className='text'>北京市 海淀区 西北旺东路 软件园南街</View>
          </AtSwipeAction>
          <AtSwipeAction options={[
            {
              text: '删除',
              style: {
                backgroundColor: '#f10215'
              }
            },
            {
              text: '修改',
              style: {
                backgroundColor: '#999'
              }
            }
          ]}>
          <View className='text'>广州市 荔湾区 环市西路 软件园南街</View>
          </AtSwipeAction>
        </View>
        {/* <View className='add'>
            <View className='add-btn' onClick={this.toAddaddress.bind(this)}>
              <AtIcon value='add' size='20' color='#ffffff'></AtIcon>
            </View>
        </View> */}
      </View>)
   }
}
export default Address;