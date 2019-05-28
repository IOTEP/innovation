/*
 * @Author: TravelerZw 
 * @Date: 2019-04-07 22:10:21 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-26 23:17:29
 */
import  Taro,{Component} from '@tarojs/taro';
import  {View} from  '@tarojs/components';
import {AtNavBar} from 'taro-ui'
import Pricelist from '../../components/price/pricelist'

class Price extends Component{
   config={
      navigationBarTitleText: this.$router.params.pricename
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
            title={decodeURIComponent(this.$router.params.pricename)}
         />
         <Pricelist type={this.$router.params.type}>
         </Pricelist>
      </View>)
   }
}
export default Price;