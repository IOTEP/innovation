import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
// import {validat eUser}  from '../../actions/user';
import  {getTopicInfo} from  '../../actions/topiclist';
// import TopicInfo from  '../../components/topicinfo/topicinfo';
// import Replies from  '../../components/topicinfo/replies';
// import ReplyContent  from  '../../components/topicinfo/replycontent';
// import  './detail.less';
// import {IDetailProps,IDetailState} from '../../interfaces/IDetail';
// @connect(function(store):IDetailProps{
//     return {getTopicInfo,admireState:store.topiclist.admireState,user:store.user,topicinfo:store.topiclist.topicinfo,replies:store.topiclist.replies}
// },function(dispatch){
//     return {getTopicInfo(params){
//         dispatch(getTopicInfo(params))
//     }
//   }
// })
import TopicInfo from '../../components/topicinfo/topicinfo'
import Replies from '../../components/topicinfo/replies'
import Lottery from '../../components/topicinfo/lottery'
import Comment from '../../components/comment/comment'

import { AtTabs, AtTabsPane, AtNavBar, AtCountdown,AtFloatLayout,AtTextarea,AtButton } from 'taro-ui'

import './index.less'

@connect(function(store) {
    return {topicinfo: store.topiclist.topicinfo, replies: store.topiclist.replies}
}, function(dispatch) {
  return {
    getTopicInfo(params) {
      dispatch(getTopicInfo(params))
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
        showReplyContent:false
      }
    }
   componentWillMount(){
      this.getDetail();
   }
   getDetail(){
    // let {user}=this.props;
    // let params={id:this.$router.params.topicid,mdrender:true,accesstoken:user.accesstoken}
    let params={id:this.$router.params.topicid,mdrender:true}
    this.props.getTopicInfo&&this.props.getTopicInfo(params)
   }
   componentDidMount() {

   }
   componentWillReceiveProps(nextProps){
      if(this.props.admireState!=nextProps.admireState){
          //发生变化 请求数据
          this.getDetail();
      }
   }
   handleClick() {
    Taro.navigateBack({ delta: 1 })
   }
   handleClick2(value) {
    this.setState({
      current: value
    })
  }
   onTimeUp () {
      Taro.showToast({
        title: '时间到',
        icon: 'success',
        duration: 2000
      })
    }
   render(){
      let {topicinfo,replies}=this.props;
      const tabList = [{ title: '活动详情描述' }, { title: '中奖情况' }]

      //  let {showReplyContent}=this.state;
      //  let  selfPublish=topicinfo.author&&user.loginname==topicinfo.author.loginname;
      return (<View className='detail'>
              <AtNavBar
                onClickLeftIcon={this.handleClick}
                color='#000'
                fixed
                leftIconType='chevron-left'
                border={false}
                title='奖品详情奖品名'
              />

        <AtTabs 
        current={this.state.current} 
        tabList={tabList}
        onClick={this.handleClick2.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >活动详情描述</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>中奖</View>
        </AtTabsPane>
        </AtTabs>
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
                  seconds={10}
                  onTimeUp={this.onTimeUp.bind(this)}
                />
              </View>
              <Lottery>
              </Lottery>
              <Replies replies={replies}/>
             {/* {showReplyContent?<ReplyContent onOKReplyContent={this.ReplyContentValue.bind(this)}  onCancelReplyContent={this.closeReplyContent.bind(this)} />:null}
             <TopicInfo selfPublish={selfPublish} topicinfo={topicinfo} />
             < Replies user={user} onReplyToReply={this.replyToReply.bind(this)}  replies={replies} onAdmire={this.admire.bind(this)} />
             <Button className='replyBtn' onClick={this.Reply.bind(this)}>回复</Button> */}
             <Comment></Comment>
            <AtFloatLayout isOpened title="评论">
            <AtTextarea
        // value={this.state.value}
        // onChange={this.handleChange.bind(this)}
        maxLength={100}
        placeholder='畅所欲言...'
      />
      <AtButton type='primary' style={{marginTop: "20px"}}>发表评论</AtButton>

            </AtFloatLayout>
           </View>)
   }
}
export default  Detail;