/*
 * @Author: TravelerZw 
 * @Date: 2019-03-21 23:13:21 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-03-22 16:18:18
 */

import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Child from './child';
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  
  state = {
    name: "test",
    obj: undefined,
  }

  componentWillMount () { 
    console.log("第一次渲染之前执行 然后执行render函数 只执行一次");
    // 参数
    let { name } = this.$router.params;
  }

  componentDidMount () { 
    console.log("第一次渲染之后执行（也就是render之后）只执行一次");
    this.setState({
      name: "haha",
      obj: {
        key: [{name: '3333'}]
      }
    })
}

  componentWillUnmount () { 
    console.log("卸载时候执行（组件被销毁时候） 只执行一次");
  }

  componentWillUpdate() {
    console.log("state 数据将要更新");
  }
  /**
   * 
   * @param {*} nextProps  父组件传给子组件对象
   * @param {*} nextState  真正下一次state
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("每次setstate时候 都会调用")
    // 每次setstate时候 都会调用
    // 最后一次setstate调用时候 才触发render 提升性能最高
    // return nextState.name === "haha" ? true : false;
  }

  componentWillReceiveProps(nextProps) {
    // 父组件传递给子组件参数发生变化时候 
  }

  componentDidUpdate() {
    console.log("state 数据更新过后");
  }
  componentDidShow () {
    console.log("页面显示时候触发")
  }

  componentDidHide () { 
    console.log("页面隐藏时候触发")
  }

  render () {
    let { name, obj } = this.state;
    console.log("我是render")
    return (
      <View className='index'>
        <Child name={name} obj={obj}/>
      </View>
    )
  }
}
