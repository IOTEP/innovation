import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Image} from  '@tarojs/components';
import  './user.less'
class User extends Component{
   render(){
      let {item}= this.props
      return (<View className='user-list'>
         <View className='head'>
               <View className='head-img-name'>
                  <Image className='head-img' src={item.author?item.author.avatar_url:''} />
                  <View className='name'>{
                     item.nick ? item.nick : ''
                  }</View>
               </View>
         </View>
         {/* <Text>
            {item.nick ? item.nick : ''}
         </Text> */}
      </View>)
   }
}
export default User;