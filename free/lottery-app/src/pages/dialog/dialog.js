/*
 * @Author: TravelerZw 
 * @Date: 2019-03-26 10:54:07 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-03-26 11:04:11
 */

import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less'

export default class Dialog extends Component {
  render () {
    return (
      <View>
        {
          this.props.children
        }
      </View>
    )
  }
}

