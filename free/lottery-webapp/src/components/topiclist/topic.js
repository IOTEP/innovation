import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Image} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {myTimeToLocal} from  '../../utils/date'
import { AtButton } from 'taro-ui'
import  './topic.less'
class  Topic  extends   Component{
   //跳转到详情页
   goToDetail(topic){
      Taro.navigateTo({url:'/pages/detail/index?topicid='+topic.id});
   }
   render(){
      let {item}=this.props;
      return (<View className='topiclist-topic' onClick={this.goToDetail.bind(this,item)}>
              
            <View className='head'>
               <View className='head-img-name'>
                  <Image className='head-img' src={item.author?item.author.avatar_url:''} />
                  <View className='name'>TravelerZw</View>
               </View>
               <View className='head-follow'>
                  <AtButton className='before-fllow' loading={false} disabled={false} type='secondary' size='small'> + 关注</AtButton>
                  <AtButton loading='true' disabled='true' type='secondary' size='small' className="btn"></AtButton>
                  <AtButton className='after-fllow' loading={false} disabled={false} type='secondary' size='small'> 已关注</AtButton>
               </View>
            </View>
            <View className='shops-img'>
               图片
            </View>
            <View className='shops-intor'>
               <View className='content'>
               <Text className='shops-intor-title'>
                  奖品：
               </Text>
                  商品简介商品简介商品简介商品简介商品简介商品简介
                  商品简介商品简介商品简介商品简介商品简介商品简介
                  商品简介商品简介商品简介商品简介商品简介商品简介
               </View>
               <View  className='topic-info'>
                  <Text>{myTimeToLocal(item.create_at)}</Text>
                  <Text style={{marginLeft: '0.5rem',}}>自动开奖</Text>
              </View>
            </View>
              {/* <View className='right'>
              <View className='topic-title'>
              {item.top?<Text className='topic-up'>关注</Text>:(item.tab=='share'?<Text className='topic-up blue'>分享</Text>:<Text className='topic-up blue'>问答</Text>)}
                  <Text>{item.title}</Text>
              </View>
              <View  className='topic-info'>
              <Text>{item.author?item.author.loginname:''}</Text>
              <Text>{item.reply_count+'/'+item.visit_count}</Text>
              <Text>创建时间{myTimeToLocal(item.create_at)}</Text>
              </View>
              </View> */}
      </View>)
   }
}
export default Topic;