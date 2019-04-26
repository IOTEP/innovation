/*
 * @Author: TravelerZw 
 * @Date: 2019-04-08 10:49:14 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-04-08 13:23:23
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {AtNavBar,AtList, AtListItem} from 'taro-ui';
import './index.less';
class Setting extends Component{
   handleClickBack() {
      Taro.navigateBack({ delta: 1 })
   }
   handleClickAddress() {
      Taro.navigateTo({url:'/pages/address/index'});
   }
   handleClickConcat() {
      alert(2)
   }
   render(){
      return (<View className='set'>
         <AtNavBar
            onClickLeftIcon={this.handleClickBack.bind(this)}
            color='#000'
            fixed
            leftIconType='chevron-left'
            border={false}
            title='设置'
         />
         <AtList>
            <AtListItem
               title='收货地址'
               arrow='right'
               onClick={this.handleClickAddress.bind(this)}
               iconInfo={{ 
                  size: 20,
                  color: '#999999', 
                  value: 'map-pin', }} />
            <AtListItem
               title='联系我们'
               arrow='right'
               onClick={this.handleClickConcat.bind(this)}
               iconInfo={{ 
                  size: 20,
                  color: '#999999', 
                  value: 'phone', }} />
         
         </AtList>
      </View>)
   }
}
export default Setting;