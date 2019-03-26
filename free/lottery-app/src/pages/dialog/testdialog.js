/*
 * @Author: TravelerZw 
 * @Date: 2019-03-26 10:54:00 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-03-26 13:12:54
 */


import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Dialog from './dialog';
export default class TestDialog extends Component {
  render () {
    return (
      <View>
        <Dialog >
          <View>文字</View>
        </Dialog>
        <Dialog>
          <View>图片</View>
        </Dialog>
      </View>
    )
  }
}
