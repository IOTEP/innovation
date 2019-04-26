/*
 * @Author: TravelerZw 
 * @Date: 2019-04-07 22:10:21 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-04-07 22:44:27
 */


import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button, ScrollView} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {AtNavBar, AtLoadMore} from 'taro-ui'
import './index.less'
class  Participant  extends   Component{
   config={
      navigationBarTitleText: '所有参与者'
   }
   constructor () {
      super(...arguments)
      this.state = {
         status: 'more'
      }
   }
   handleClick() {
      Taro.navigateBack({ delta: 1 })
   }
   onScrollToLower(){
      this.setState({
         status: 'loading'
      })
      setTimeout(() => {
         // 没有更多了
         this.setState({
           status: 'noMore'
         })
       }, 2000)
   }
   render(){
      return (<View className='participant'>
         <AtNavBar
            onClickLeftIcon={this.handleClick}
            color='#000'
            fixed
            leftIconType='chevron-left'
            border={false}
            title='xxx所有参与者名单'
         />
         <ScrollView 
            className='scroll-view'
            onScrollToLower={this.onScrollToLower.bind(this)} 
            scrollX={false} scrollY={true}
         >
            <View>
               
            </View>
            <View style={{height: '3rem'}}>123456</View>
            <View style={{height: '3rem'}}>1234567</View>
            <View style={{height: '3rem'}}>12345678</View>
            <View style={{height: '3rem'}}>123456789</View>
            <View style={{height: '3rem'}}>12345678910</View>
            <View style={{height: '3rem'}}>12345678</View>
            <View style={{height: '3rem'}}>123456789</View>
            <View style={{height: '3rem'}}>12345678910</View>
            <View style={{height: '3rem'}}>12345678</View>
            <View style={{height: '3rem'}}>123456789</View>
            <View style={{height: '3rem'}}>12345678910</View>
            <View style={{height: '3rem'}}>12345678</View>
            <View style={{height: '3rem'}}>123456789</View>
            <View style={{height: '3rem'}}>12345678910</View>
            <View style={{height: '3rem'}}>12345678</View>
            <View style={{height: '3rem'}}>123456789</View>
            <View style={{height: '3rem'}}>12345678910</View>
            <AtLoadMore
               loadingText='正在努力加载...'
               noMoreText='到底了！'
               status={this.state.status}
            />
         </ScrollView>
      </View>)
   }
}
export default  Participant;