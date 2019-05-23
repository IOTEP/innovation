import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import  {getTopicInfo} from  '../../actions/topiclist';
import  {showComment} from  '../../actions/comment';
import TopicInfo from '../../components/topicinfo/topicinfo'
import CommentList from '../../components/comment/commentlist'
import Lottery from '../../components/topicinfo/lottery'
import Comment from '../../components/comment/comment'

import { AtTabs, AtDivider, AtTabsPane, AtNavBar, AtCountdown,AtFloatLayout,AtTextarea,AtButton } from 'taro-ui'
import './index.less'
@connect(function(store) {
  console.log("**********呵呵呵**************")
  console.log(store)
  return {
    topicinfo: store.topiclist.topicinfo,
    commentshow: store.comment.commentBox
  }
}, function(dispatch) {
  return {
    getTopicInfo(params) {
      dispatch(getTopicInfo(params))
    },
    showComment(isShow) {
      dispatch(showComment(isShow))
    }
  }
})
class Detail extends   Component{
   config={
     navigationBarTitleText: '奖品详情'
   }
   constructor () {
      super(...arguments)
      this.state = {
        current: 0,
        //显示回复组件
        showReplyContent: false

      }
    }
   componentWillMount(){
    this.getDetail();
   }
   getDetail(){
    let params={
      activityId: parseInt(this.$router.params.activeid)
    }
    this.props.getTopicInfo && this.props.getTopicInfo(params);
   }
   componentDidMount() {
   }
   componentDidShow () {
    this.props.showComment && this.props.showComment(0);
   }
   componentWillReceiveProps(nextProps){
      if(this.props.admireState != nextProps.admireState){
        //发生变化 请求数据
        this.getDetail();
      }
   }
  goBack() {
    Taro.navigateBack({ delta: 1 })
  }
  onTimeUp () {
      Taro.showToast({
        title: '时间到',
        icon: 'success',
        duration: 2000
      })
  }
  // tab change
  tabChange(value) {
    this.setState({
      current: value
    })
    this.props.showComment && this.props.showComment(value);
  }
   render(){
      let {topicinfo, replies, commentshow} = this.props;
      const tabList = [{ title: '活动详情描述' }, { title: '中奖情况' }]
      return (<View className='detail'>
              <AtNavBar
                onClickLeftIcon={this.goBack}
                color='#000'
                fixed
                leftIconType='chevron-left'
                border={false}
                title='奖品详情奖品名'
              />
            <AtTabs 
              height="100"
              current={this.state.current} 
              tabList={tabList}
              onClick={this.tabChange.bind(this)}>
              <AtTabsPane current={this.state.current} index={0} >
                <TopicInfo topicinfo={topicinfo} />
                <View className='count-down'>
                  <Text className='time-title'>
                    距离开奖：
                  </Text>
                  <AtCountdown
                    isShowDay
                    isCard
                    format={{ hours: ':', minutes: ':', seconds: '' }}
                    day={0}
                    hours={0}
                    minutes={0}
                    seconds={100}
                    onTimeUp={this.onTimeUp.bind(this)}
                  />
                </View>
                <Lottery activeid={this.$router.params.activeid}>
                </Lottery>
                <AtDivider content='精彩评论' />
                <CommentList>
                </CommentList>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
                <View className='price-tip-box'> 
                  <View className='price-tip'>
                    很遗憾，你未中奖！！
                  </View>
                  <View className='list-of-winners-title'>
                    中奖者名单
                  </View>
                  <View className='list-of-winners'>
                    <View>
                    奖品：iPhone X  1X
                    </View>
                  </View>
                </View> 
              </AtTabsPane>
            </AtTabs>
            {
              commentshow === 0 ?   <Comment></Comment> : ''
            }
            <View>
              <AtFloatLayout isOpened={false} title="评论">
                <AtTextarea
                // value={this.state.value}
                // onChange={this.handleChange.bind(this)}
                  maxLength={100}
                  placeholder='畅所欲言...'
                />
                <AtButton type='primary' style={{marginTop: "20px"}}>发表评论</AtButton>
              </AtFloatLayout>
            </View>
          </View>)
   }
}
export default  Detail;