import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Image} from  '@tarojs/components';
import {myTimeToLocal} from  '../../utils/date'
import { AtButton } from 'taro-ui'
import  './topic.less'
class  Topic  extends   Component{
   //跳转到详情页
   goToDetail(priceActiveList){
      Taro.navigateTo({url:'/pages/detail/index?activeid=' + priceActiveList.id + '&userId=' + priceActiveList.userId});
   }
   // 关注
   handelfollow(e) {
      e.stopPropagation()
   }
   render(){
      let {item}=this.props;
      return (<View className='topiclist-topic' onClick={this.goToDetail.bind(this,item)}>
            <View className='head'>
               <View className='head-img-name'>
                  <Image className='head-img' src={item.author?item.author.avatar_url:''} />
                  <View className='name'>{
                     item.bussinessName ? item.bussinessName : ''
                  }</View>
               </View>
               <View className='head-follow'>
               {
                  item.isAttention === 0 ? 
                  <AtButton 
                     className='before-fllow'
                     loading={false} 
                     disabled={false}
                     onClick={this.handelfollow.bind(this)}
                     type='secondary' 
                     size='small'> + 关注
                  </AtButton> : ''
               }
               {
                  item.isAttention === 1 ? 
                  <AtButton 
                  className='after-fllow' 
                  loading={false} 
                  disabled={false} 
                  type='secondary' 
                  size='small'> 已关注</AtButton>: ''
               }
               {/* <AtButton loading='true' disabled='true' type='secondary' size='small' className="btn"></AtButton>
               <AtButton className='after-fllow' loading={false} disabled={false} type='secondary' size='small'> 已关注</AtButton> */}
               </View>
            </View>
            <View className='shops-img'>
               图片
            </View>
            <View className='shops-intor'> 
               <View className='pro-name'>
                  {item.bussinessName ? item.bussinessName : ''}<Text style={{marginLeft: '6PX'}}>赞助</Text>
               </View>
               <View className='content'>
                  <View>
                     <Text className='shops-intor-title'>
                        奖品：
                     </Text>
                     {item.remark ? item.remark : ''}
                  </View>
               </View>
               <View  className='topic-info'>
                  <Text>
                     {/* {myTimeToLocal(item.startTime)} */}
                     {item.startTime?item.startTime:''}
                  </Text>
                  <Text style={{marginLeft: '10PX'}}>
                  {item.raffleMode?item.raffleMode:''}
                  </Text>
              </View>
            </View>
      </View>)
   }
}
export default Topic;