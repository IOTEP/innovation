import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button,ScrollView} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import  {getTopicInfo} from  '../../actions/topiclist';
import {setCommentBox} from '../../actions/comment';

import TopicInfo from '../../components/topicinfo/topicinfo'
import CommentList from '../../components/comment/commentlist'
import Lottery from '../../components/topicinfo/lottery'
import Comment from '../../components/comment/comment'
import moment from 'moment'
import { AtTabs, AtDivider, AtTabsPane, AtNavBar, AtCountdown,AtFloatLayout,AtTextarea,AtButton } from 'taro-ui'
import './index.less'
@connect(function(store) {
  return {
    topicinfo: store.topiclist.topicinfo,
    commentlist: store.commentlist
  }
}, function(dispatch) {
  return {
    getTopicInfo(params) {
      dispatch(getTopicInfo(params))
    },
    setCommentBox(params){
      dispatch(setCommentBox(params))
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
        value:'',
        commentshow: 0,
        showReplyContent: false
      }
    }
   componentWillMount(){
    this.getDetail();
   }
   handleClose() {
    this.props.setCommentBox&&this.props.setCommentBox(false)
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
    value === 0 ? this.setState({
      current: value,
      commentshow: 0
    }) : this.setState({
      current: value,
      commentshow: 1
    })
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    }, () => {
    })
  }
  subComment() {
    alert(this.state.value)
  }
   render(){
      let {topicinfo, commentlist} = this.props;
      console.log("是吧")
      console.log(commentlist)
      let timeObj = {}
      if (topicinfo.endTime && 1) {
        let releaseDate = moment('2019-06-01 00:00:00');
        let currentDate = moment();
        const diff = releaseDate.diff(currentDate);
        const diffDuration = moment.duration(diff);
        //   ${diffDuration.months()} months
        timeObj = {
          days: diffDuration.days(),
          hours: diffDuration.hours(),
          minutes: diffDuration.minutes(),
          seconds: diffDuration.seconds()
        }
      }
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
                <ScrollView style={{height:'100vh', paddingBottom: '46PX',boxSizing: 'border-box'}}   scrollX={false} scrollY={true} >
                <TopicInfo topicinfo={topicinfo} />
                活动状态跟时间逻辑不对
                {
                  topicinfo.isEnd
                }
                <View className='count-down'>
                  <Text className='time-title'>
                    距离开奖：
                  </Text>
                  <AtCountdown
                    isShowDay
                    isCard
                    format={{ hours: ':', minutes: ':', seconds: '' }}
                    day={timeObj.days}
                    hours={timeObj.hours}
                    minutes={timeObj.minutes}
                    seconds={timeObj.seconds}
                    onTimeUp={this.onTimeUp.bind(this)}
                  />
                </View>
                <Lottery topicinfo={topicinfo} activeid={this.$router.params.activeid} userId={this.$router.params.userId}>
                </Lottery>
                <AtDivider content='精彩评论' />
                <CommentList activeid={this.$router.params.activeid}>
                </CommentList>
                </ScrollView>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
                <View className='price-tip-box'> 
                  <View className='price-tip'>
                    {
                      topicinfo.isJoin ? 
                      <View>
                        {
                          topicinfo.isRaffle ? '恭喜你中奖了' + topicinfo.prizeRemark: '很遗憾您未中奖'
                        }
                      </View> : '您还未参加此次抽奖'
                    }
                  </View>
                  {
                    topicinfo.raffleUserList && topicinfo.raffleUserList.map((item ) = 
                    <View>
                      <View className='list-of-winners-title'>
                        中奖者名单
                      </View>
                      <View className='list-of-winners'>
                        <View>
                          {item.nick}
                        </View>
                      </View>
                    </View>
                    ) ? '' :
                    <View className='list-no-price'>
                      <Text>暂时还没有人中奖</Text>
                    </View> 
                  }
                </View> 
              </AtTabsPane>
            </AtTabs>
            {
              this.state.commentshow === 0 ? <Comment topicinfo={topicinfo}></Comment> : ''
            }
            <View>
              <AtFloatLayout isOpened={commentlist.commentBox} title="评论"
                onClose={this.handleClose.bind(this)}
              >
                <AtTextarea
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                  maxLength={100}
                  placeholder='畅所欲言...'
                />
                <AtButton type='primary' className='comment-sub'
                  onClick={this.subComment.bind(this)}
                >发表评论</AtButton>
              </AtFloatLayout>
            </View>
          </View>)
   }
}
export default  Detail;