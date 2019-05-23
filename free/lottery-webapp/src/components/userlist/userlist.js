import  Taro,{Component} from '@tarojs/taro';
import  {ScrollView,View,Text,Button} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getUserList} from '../../actions/userlist';
import  User from  './user';
import {loadUserToken} from '../../utils/catch'
@connect(function(store){
   return {...store.userlist}
},function(dispatch){
   return {getUserList(params){
      dispatch(getUserList(params))
   }
 }
})
class UserList extends Component{
   componentWillMount(){
      // pull price list
      let {page,size}=this.props;
      let userId = 1;
      let token= loadUserToken();
      let params={
         activityId: parseInt(this.$router.params.activeid),
         userId,
         token,
         page,
         size
      }
      this.props.getUserList && this.props.getUserList(params);
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
      console.log("用户列表");
      console.log(list);
      return (<ScrollView style={{height:'100vh', paddingTop: '46PX', paddingBottom: '65PX',paddingLeft: '10PX', paddingRight: '10PX',boxSizing: 'border-box'}}  onScrollToLower={this.onScrollToLower.bind(this)} scrollX={false} scrollY={true} >
         {
            list.map((item )=><User item={item} />)
         }
      </ScrollView>)
   }
}
export default UserList;