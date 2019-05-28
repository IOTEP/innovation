import  Taro,{Component} from '@tarojs/taro';
import  {ScrollView,View,Text,Button,Image} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getFollowList} from '../../actions/followlist';
import  User from  './user';
import {loadUserToken} from '../../utils/catch'
import './followlist.less'

@connect(function(store){
   return {...store.followlist}
},function(dispatch){
   return {getFollowList(params){
      dispatch(getFollowList(params))
   }
 }
})
class Followlist extends Component{
   componentWillMount(){
      let {page,size}=this.props;
      let userId = 1;
      let token= loadUserToken();
      let params={
         userId,
         token,
         page,
         size
      }
      this.props.getFollowList && this.props.getFollowList(params);
   }
   componentWillReceiveProps(nextProps) {
      console.log(nextProps);
   }
   onScrollToLower(){
      // next page
      let  {page,limit}=this.props;
      this.props.getNextList && this.props.getNextList(
         {page:(page+1), limit, userId}
      )
   }
   render(){
      let {list}=this.props;
      return (<ScrollView style={{height:'100vh', paddingTop: '46PX', paddingBottom: '65PX',paddingLeft: '10PX', paddingRight: '10PX',boxSizing: 'border-box'}}  onScrollToLower={this.onScrollToLower.bind(this)} scrollX={false} scrollY={true} >
         {
            list&&list.length ? list.map((item )=>{
               return <View className='follow-list'>
                  <View className='head'>
                     <View className='head-img-name'>
                        <Image className='head-img' src={item.photo?item.photo:''} />
                        <View className='name'>{
                           item.nick ? item.nick : ''
                        }</View>
                     </View>
                  </View>
               </View>
            }):<View className='list-no-price'>
              <Text>暂时还没有关注任何人！</Text>
            </View> 
         }
      </ScrollView>)
   }
}
export default Followlist;