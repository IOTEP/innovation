/*
 * @Author: TravelerZw 
 * @Date: 2019-04-02 23:51:53 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-25 20:00:47
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import  './topicinfo.less'
import { Swiper, SwiperItem } from '@tarojs/components'
// import {myTimeToLocal} from  '../../utils/date'
import moment from 'moment'; 

class  Topicinfo  extends   Component{
   render(){
     let {topicinfo} = this.props
     let endTime = topicinfo.endTime
     if (endTime) {
      endTime = moment(endTime).format('YYYY-MM-DD HH:mm:ss')
     }
      return (<View className="shops-info">
        <View className='img-box'>
          <Swiper
          indicatorColor='#999999'
          autoplay={false}
          indicatorActiveColor='#F10215'
          vertical={false}
          circular={true}
          interval={1000}
          indicatorDots
          >
            <SwiperItem>
              <View className='demo-text-1'>抽奖图1</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>抽奖图2</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>抽奖图3</View>
            </SwiperItem>
          </Swiper>
        </View>
        <View className='shops-intor'>
          <View className='content'>
            <Text className='shops-intor-title'>
              奖品：
            </Text>
            {topicinfo.remark ? topicinfo.remark : ''}
          </View>
          <View  className='topic-info'>
            <Text>开奖时间：</Text>
            <Text>{endTime}</Text>
            <Text style={{marginLeft: '0.5rem',}}>
            {topicinfo.raffleMode ? topicinfo.raffleMode : ''}
            </Text>
          </View>
        </View>
      </View>)
   }
}
export default  Topicinfo;