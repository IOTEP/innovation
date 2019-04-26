import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import Menu from '../../components/menu/menu';
import TopicList from '../../components/topiclist/topiclist'
import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '公共抽奖'
  }
  constructor () {
    super(...arguments)
    this.state = {
      pageNum: 0
    }
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { 
    
  }

  componentDidMount() {

  }
  componentWillUpdate() {

  }
  componentDidUpdate() {

  }
  shouldComponentUpdate(nextProps, nextState){
    // 检查state更新否需要触发render
  }

  componentDidShow () {
  }

  componentDidHide () {
  }
  

  render () {
    return (
      <View className='index'>
        <Menu pageNum={this.state.pageNum}></Menu>
        <TopicList></TopicList>
      </View>
    )
  }
}

export default Index
