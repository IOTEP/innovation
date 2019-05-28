/*
 * @Author: TravelerZw 
 * @Date: 2019-04-02 23:51:53 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 23:08:53
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button,Image} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import Menu from '../../components/menu/menu';
import {getUserInfo} from '../../actions/user';
import {loadUserToken} from '../../utils/catch'
import {AtNavBar,AtButton,AtList, AtListItem, AtCard} from 'taro-ui'
import './index.less'

@connect(function(store){
   return {...store.user}
 },function(dispatch){
   return {getUserInfo(params){
      dispatch(getUserInfo(params))
   }
 }
 })
class  My  extends Component{
   config={
      navigationBarTitleText: '我的'
   }
   constructor () {
      super(...arguments)
      this.state = {
         pageNum: 2
      }
   }
   componentWillMount() {
      Taro.showLoading()
      let token=loadUserToken()
      let id = 1
      let param = {
         id,
         token
      }
      this.props.getUserInfo && this.props.getUserInfo(param)
   }
   handleClick() {
      Taro.navigateBack({ delta: 1 })
   }
   handleClickFollow() {
      Taro.navigateTo({url:'/pages/follow/index'});
   }
   handleClickFans() {
      Taro.navigateTo({url:'/pages/fans/index'});
   }
   handleClickSet() {
      Taro.navigateTo({url:'/pages/set/index'});
   }
   handleClickPriceAll() {
      let pricename='全部抽奖'
      Taro.navigateTo({url:'/pages/price/index?pricename='+pricename+'&type='+0});
   }
   handleClickPrice() {
      let pricename='中奖'
      Taro.navigateTo({url:'/pages/price/index?pricename='+pricename+'&type='+1});
   }
   handleClickPriceLaunch() {
      let pricename='发起抽奖'
      Taro.navigateTo({url:'/pages/price/index?pricename='+pricename+'&type='+3});
   }
   componentDidMount() {
      Taro.hideLoading();
   }
   render(){
      let {userInfo} = this.props
      console.log("((()))")
      console.log(userInfo)

      return (<View className='my'>
         <Menu pageNum={this.state.pageNum}></Menu>
         <View className='basic'>
            <View className='head'>
               <View className='head-img-name'>
                  <View className='head-img'>
                     <Image  src={userInfo.photo?userInfo.photo:''} />
                  </View>
                  <View className='name'>{userInfo.nick?userInfo.nick:''}</View>
               </View>
               <View className='head-follow'>
                  <View className='info' onClick={this.handleClickFollow.bind(this)}>
                     <View className='top'>
                        {userInfo.attentionCount?userInfo.attentionCount:''}
                     </View>
                     <View className='bottom'>
                        关注
                     </View>
                  </View>
                  <View className='info' onClick={this.handleClickFans.bind(this)}>
                     <View className='top'>
                     {userInfo.fansCount?userInfo.fansCount:0}
                     </View>
                     <View className='bottom'>
                        粉丝
                     </View>
                  </View>
                  <View className='info act'>
                     <AtButton className='before-fllow' loading={false} disabled={false} type='secondary' size='small'> + 关注</AtButton>
                  </View>
               </View>
            </View>
            <View className='history-price'>
               <View className='list' onClick={this.handleClickPriceAll.bind(this)}>
                  <View className='top'>{userInfo.joinActivityCount?userInfo.joinActivityCount:0}</View>
                  <View className='bottom'>全部抽奖</View>
               </View>
               <View className='list' onClick={this.handleClickPriceLaunch.bind(this)}>
                  <View className='top'>{userInfo.createActivityCount?userInfo.createActivityCount:0}</View>
                  <View className='bottom'>发起抽奖</View>
               </View>
               <View className='list act' onClick={this.handleClickPrice.bind(this)}>
                  <View className='top'>{userInfo.raffleActivityCount?userInfo.raffleActivityCount:0}</View>
                  <View className='bottom'>中奖纪录</View>
               </View>
            </View>
            <AtList>
               <AtListItem
                  title='设置'
                  arrow='right'
                  onClick={this.handleClickSet.bind(this)}
                  iconInfo={{ 
                     size: 20,
                     color: '#999999', 
                     value: 'settings', }} />
         
            </AtList>
            <AtCard
               note=''
               extra=''
               title='待开奖'
               thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'>
               <View className='waiting-award'>
                  <View className='award-list'>
                  </View>
                  <View className='award-list'>
                  </View>
                  <View className='award-list'>
                  </View>
               </View>
            </AtCard>
            <AtCard
               note=''
               extra=''
               title='已结束'
               thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            >
            <AtList>
               <AtListItem
                  title='奖品:XXXXXXXXXXX'
                  arrow='right'
                  extraText='4月5日'
                  iconInfo={{ 
                     size: 20,
                     color: '#999999', 
                     value: 'settings', }} />
               <AtListItem
                  title='奖品:XXXXXXXXXXX'
                  arrow='right'
                  extraText='4月6日'
                  iconInfo={{ 
                     size: 20,
                     color: '#999999', 
                     value: 'settings', }} />
            </AtList>
            </AtCard>
         </View>
      </View>)
   }
}
export default My;