/*
 * @Author: TravelerZw 
 * @Date: 2019-03-22 15:53:09 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-03-22 16:45:31
 */

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { a } from "../../utils/utils";
import './index.less'

export default class Test extends Component {

  config = {
    navigationBarTitleText: '测试页面'
  }
  clickHandle() {
    // Taro.navigateTo({
    //   url: '/pages/index/index?name=张'
    // })
    a();
  }
  render () {
    return (
      <View className='index'>
        <Image className="img" src={require('../../static/images/1.png')}></Image>
        <Button onClick={this.clickHandle}>跳转</Button>
      </View>
    )
  }
}
