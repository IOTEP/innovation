/*
 * @Author: TravelerZw 
 * @Date: 2019-04-03 20:39:07 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-04-10 23:08:47
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button,Image} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {showDrawer, changeCata, hideDrawer} from '../../actions/menu'
import { AtDrawer, AtTabBar} from 'taro-ui';

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
    Taro.navigateTo({url:'/'});
  }
  handleClick (value) {
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
  showDrawer() {
    this.props.showMenu && this.props.showMenu();
  }
  getItems(cataData) {
    return cataData.map(item => item.value)
  }
  clickCata(index){
    let  {cataData}=this.props;
    let  clickCata=cataData[index];//获取点击项的数据
    if(clickCata.key!==this.props.currentCata.key){
       this.props.changeCata&&this.props.changeCata(clickCata);//点击分类 触发切换分类方法
    }
  }
  //关闭抽屉时触发
  closeDrawer(){
    this.props.hideDrawer && this.props.hideDrawer();
  }

  render(){
    let {showDrawer,cataData,pageNum} = this.props;
    let items = this.getItems(cataData);
    return (<View>
      <AtDrawer onClose={this.closeDrawer.bind(this)} onItemClick={this.clickCata.bind(this)} className="drawer_custom" show={showDrawer} items={items} />
      {/* <Image onClick={this.showDrawer.bind(this)} className='image left' src={require('../../assets/img/cata.png')} />
      <Text>{this.props.currentCata ? this.props.currentCata.value : ''}</Text>
      <Image className='image right' src={require('../../assets/img/login.png')} /> */}
      <AtTabBar
        fixed
        tabList={[
          { title: '首页', iconType: 'home', text: '' },
          { title: '发起抽奖', iconType: 'camera' },
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