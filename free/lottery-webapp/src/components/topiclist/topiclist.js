import  Taro,{Component} from '@tarojs/taro';
import  {ScrollView,View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getTopicList,getNextList} from '../../actions/topiclist';
import  Topic from  './topic';
import HomeHead from '../homehead/homehead'
import {loadUserToken} from '../../utils/catch'

@connect(function(store){
   return {...store.topiclist}
},function(dispatch){
   return {getTopicList(params){
      dispatch(getTopicList(params))
   },
   getNextList(params){
      dispatch(getNextList(params))
   }
 }
})
class  TopicList  extends   Component{
   componentWillMount(){
      let {page,size}=this.props;
      let userId = 1;
      let token= loadUserToken();
      this.props.getTopicList && this.props.getTopicList({page,size,userId,token});
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
      return (<ScrollView style={{height:'100vh', paddingBottom: '65PX',paddingLeft: '10PX', paddingRight: '10PX',boxSizing: 'border-box'}}  onScrollToLower={this.onScrollToLower.bind(this)} scrollX={false} scrollY={true} >
         <HomeHead>
         </HomeHead>
         {
            list.map((item )=><Topic item={item} />)
         }
      </ScrollView>)
   }
}
export default  TopicList;