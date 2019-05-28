/*
 * @Author: TravelerZw 
 * @Date: 2019-04-07 22:10:21 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 21:42:08
 */
import  Taro,{Component} from '@tarojs/taro';
import  {View} from  '@tarojs/components';
import {AtNavBar} from 'taro-ui'
import Followlist from '../../components/follow/followlist'

import './index.less'
class Follow extends Component{
   config={
      navigationBarTitleText: '关注人列表'
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
            title='关注人列表'
         />
         <Followlist>
         </Followlist>
      </View>)
   }
}
export default  Follow;