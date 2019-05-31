/*
 * @Author: TravelerZw 
 * @Date: 2019-04-03 20:39:07 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-31 10:27:45
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {AtTabBar} from 'taro-ui';
import './menu.less';

@connect((store) => {
  return {
    ...store.menu
  }
}, (dispatch)=> {
  return {
    showMenu() {
      dispatch(showDrawer())
    },
    changeCata(cata) {
      dispatch(changeCata(cata))
    },
    hideDrawer() {
      dispatch(hideDrawer())
    }
  } 
})

class  Menu  extends   Component{
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  goToMy(){
    Taro.navigateTo({url:'/pages/my/index'});
  }
  goToIndex(){
    Taro.navigateTo({url:'/pages/index/index'});
  }
  handleClick (value) {
    return
    let {pageNum} = this.props;
    if (value === pageNum) {
      return;
    }
    if (value === 2) {
      this.goToMy();
    }
    if (value === 0) {
      this.goToIndex();
    }
  }
  render(){
    let {pageNum} = this.props;
    return (<View>
      <AtTabBar
        fixed
        tabList={[
          { title: '首页', iconType: 'home', text: '' },
          { title: '新鲜快送', iconType: 'camera' },
          { title: '我的', iconType: 'user', text: '', max: '' }
        ]}
        selectedColor='#f10215'
        fontSize={12}
        iconSize={20}
        backgroundColor='#ffffff'
        onClick={this.handleClick.bind(this)}
        current={pageNum}
      />
    </View>)
  }
}
export default  Menu;