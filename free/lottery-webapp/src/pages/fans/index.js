/*
 * @Author: TravelerZw 
 * @Date: 2019-04-07 22:10:21 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 22:21:59
 */
import  Taro,{Component} from '@tarojs/taro';
import  {View} from  '@tarojs/components';
import {AtNavBar} from 'taro-ui'
import Fanslist from '../../components/fans/fanslist'

class Fans extends Component{
   config={
      navigationBarTitleText: '粉丝列表'
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
      return (<View className='follow'>
         <AtNavBar
            onClickLeftIcon={this.handleClick}
            color='#000'
            fixed
            leftIconType='chevron-left'
            border={false}
            title='粉丝列表'
         />
         <Fanslist>
         </Fanslist>
      </View>)
   }
}
export default  Fans;