import  Taro,{Component} from '@tarojs/taro';
import  {ScrollView,View,Text,Button,Image} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getPriceList} from '../../actions/pricelist';
import  User from  './user';
import {loadUserToken} from '../../utils/catch'
import './pricelist.less'

@connect(function(store){
   return {...store.pricelist}
},function(dispatch){
   return {getPriceList(params){
      dispatch(getPriceList(params))
   }
 }
})
class Pricelist extends Component{
   componentWillMount(){
      let {page,size,type}=this.props;
      let userId = 1;
      let token= loadUserToken();
      let params={
         userId,
         token,
         page,
         type:parseInt(type),
         size
      }
      this.props.getPriceList && this.props.getPriceList(params);
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
      console.log('奖品列表')
      console.log(list)
      return (<ScrollView style={{height:'100vh', paddingTop: '46PX', paddingBottom: '65PX',paddingLeft: '10PX', paddingRight: '10PX',boxSizing: 'border-box'}}  onScrollToLower={this.onScrollToLower.bind(this)} scrollX={false} scrollY={true} >
         {
            list&&list.length ? list.map((item )=>{
               return <View className='fans-list'>
                 {item.name}
               </View>
            }):<View className='list-no-price'>
              <Text>您还没有参加任何抽奖活动！</Text>
            </View> 
         }
      </ScrollView>)
   }
}
export default Pricelist;