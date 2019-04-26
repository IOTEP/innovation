/*
 * @Author: TravelerZw 
 * @Date: 2019-04-02 23:51:53 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-04-10 23:06:32
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button,Image} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import Menu from '../../components/menu/menu';
import {AtNavBar,AtButton,AtList, AtListItem, AtCard} from 'taro-ui'
import './index.less'
class  My  extends   Component{
   config={
      navigationBarTitleText: '我的'
   }
   constructor () {
      super(...arguments)
      this.state = {
         pageNum: 2
      }
   }
   componentWillMount() {
      Taro.showLoading();
   }
   handleClick() {
      Taro.navigateBack({ delta: 1 })
   }
   handleClickSet() {
      Taro.navigateTo({url:'/pages/set/index'});
   }
   componentDidMount() {
      Taro.hideLoading();
   }
   render(){
      return (<View className='my'>
         {/* <AtNavBar
            onClickLeftIcon={this.handleClick}
            color='#000'
            fixed
            leftIconType='chevron-left'
            border={false}
            title='我的'
         /> */}
         <Menu pageNum={this.state.pageNum}></Menu>
         <View className='basic'>
            <View className='head'>
               <View className='head-img-name'>
                  <View className='head-img' />
                  <View className='name'>TravelerZw</View>
               </View>
               <View className='head-follow'>
                  <View className='info'>
                     <View className='top'>
                        1575
                     </View>
                     <View className='bottom'>
                        关注
                     </View>
                  </View>
                  <View className='info'>
                     <View className='top'>
                        15830
                     </View>
                     <View className='bottom'>
                        粉丝
                     </View>
                  </View>
                  <View className='info act'>
                     <AtButton className='before-fllow' loading={false} disabled={false} type='secondary' size='small'> + 关注</AtButton>
                  </View>
               </View>
            </View>
            <View className='history-price'>
               <View className='list'>
                  <View className='top'>8</View>
                  <View className='bottom'>全部抽奖</View>
               </View>
               <View className='list'>
                  <View className='top'>2</View>
                  <View className='bottom'>发起抽奖</View>
               </View>
               <View className='list act'>
                  <View className='top'>2</View>
                  <View className='bottom'>中奖纪录</View>
               </View>
            </View>
            <AtList>
               <AtListItem
                  title='设置'
                  arrow='right'
                  onClick={this.handleClickSet.bind(this)}
                  iconInfo={{ 
                     size: 20,
                     color: '#999999', 
                     value: 'settings', }} />
         
            </AtList>
            <AtCard
               note=''
               extra=''
               title='待开奖'
               thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'>
               <View className='waiting-award'>
                  <View className='award-list'>
                  </View>
                  <View className='award-list'>
                  </View>
                  <View className='award-list'>
                  </View>
               </View>
            </AtCard>
            <AtCard
               note=''
               extra=''
               title='已结束'
               thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
            <AtList>
               <AtListItem
                  title='奖品:XXXXXXXXXXX'
                  arrow='right'
                  extraText='4月5日'
                  iconInfo={{ 
                     size: 20,
                     color: '#999999', 
                     value: 'settings', }} />
               <AtListItem
                  title='奖品:XXXXXXXXXXX'
                  arrow='right'
                  extraText='4月6日'
                  iconInfo={{ 
                     size: 20,
                     color: '#999999', 
                     value: 'settings', }} />
         
            </AtList>
            </AtCard>
         </View>
      </View>)
   }
}
export default My;