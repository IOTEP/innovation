import  Taro,{Component} from '@tarojs/taro';
import  {ScrollView,View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getTopicList,getNextList} from '../../actions/topiclist';
import  Topic from  './topic';
import HomeHead from '../homehead/homehead'

@connect(function(store){
   return {...store.topiclist,currentCata:store.menu.currentCata}
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
     let {page,size,currentCata}=this.props;
     let userId = 1;
     console.log("((((((");
     console.log({page,size,userId});

   //   this.props.getTopicList&&this.props.getTopicList({page,limit,tab:currentCata.key})
      this.props.getTopicList&&this.props.getTopicList({page,size,userId})
   }
   componentWillReceiveProps(nextProps) {
      console.log(nextProps)
   }
   //触发分页请求 肯定是要请求下一页的  没有总页码 
   onScrollToLower(){
    let  {page,limit,currentCata}=this.props;
    this.props.getNextList&&this.props.getNextList({page:(page+1),limit,tab:currentCata.key})
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