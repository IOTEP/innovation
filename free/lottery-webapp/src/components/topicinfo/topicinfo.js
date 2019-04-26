/*
 * @Author: TravelerZw 
 * @Date: 2019-04-02 23:51:53 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-04-07 20:55:41
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import  './topicinfo.less'
import { Swiper, SwiperItem } from '@tarojs/components'


class  Topicinfo  extends   Component{
   render(){
     let {topicinfo} = this.props;
      return (<View className="shops-info">
        <View className='img-box'>
          <Swiper
          className='test-h'
          indicatorColor='#999999'
          autoplay={false}
          indicatorActiveColor='#F10215'
          vertical={false}
          circular={true}
          interval={1000}
          indicatorDots
          >
            <SwiperItem>
              <View className='demo-text-1' style={{height: '100%'}}>抽奖图1</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2' style={{height: '100%'}}>抽奖图2</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3' style={{height: '100%'}}>抽奖图3</View>
            </SwiperItem>
          </Swiper>
        </View>
        <View className='shops-intor'>
          <View className='content'>
            <Text className='shops-intor-title'>
              奖品：
            </Text>
            商品简介商品简介商品简介商品简介商品简介商品简介
            商品简介商品简介商品简介商品简介商品简介商品简介
            商品简介商品简介商品简介商品简介商品简介商品简介
          </View>
          <View  className='topic-info'>
            <Text>2019-03-12</Text>
            <Text style={{marginLeft: '0.5rem',}}>自动开奖</Text>
          </View>
        </View>
      </View>)
   }
}
export default  Topicinfo;