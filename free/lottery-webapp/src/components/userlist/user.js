import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Image} from  '@tarojs/components';
import  './user.less'
class User extends Component{
   render(){
      let {item}=this.props;
      return (<View className='topiclist-topic'>
            item
      </View>)
   }
}
export default User;