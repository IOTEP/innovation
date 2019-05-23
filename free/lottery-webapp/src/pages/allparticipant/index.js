/*
 * @Author: TravelerZw 
 * @Date: 2019-04-07 22:10:21 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-23 14:24:25
 */
import  Taro,{Component} from '@tarojs/taro';
import  {View} from  '@tarojs/components';
import {AtNavBar} from 'taro-ui'
import UserList from '../../components/userlist/userlist'

import './index.less'
class Participant extends Component{
   config={
      navigationBarTitleText: '所有参与者'
   }
   constructor () {
      super(...arguments)
      this.state = {
         status: 'more'
      }
   }
   handleClick() {
      Taro.navigateBack({ delta: 1 })
   }
   render(){
      return (<View className='participant'>
         <AtNavBar
            onClickLeftIcon={this.handleClick}
            color='#000'
            fixed
            leftIconType='chevron-left'
            border={false}
            title='所有参与者名单'
         />
         <UserList>
         </UserList>
      </View>)
   }
}
export default  Participant;