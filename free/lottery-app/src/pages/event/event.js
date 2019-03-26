/*
 * @Author: TravelerZw 
 * @Date: 2019-03-26 10:54:00 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-03-26 13:53:53
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
const env_name = process.env.TARO_ENV;
export default class Event extends Component {
  state = {
    name: 'z'
  }
  test(event) {
    let { name } = this.state;
    // event.stopPropagation();
  }
  componentWillMount() {
    console.log(env_name)
  }
  render () {
    return (
      <View>
       <Button onClick={this.test.bind(this)}>事件测试</Button>
      </View>
    )
  }
}
