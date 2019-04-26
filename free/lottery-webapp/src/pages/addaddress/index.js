/*
 * @Author: TravelerZw 
 * @Date: 2019-04-02 23:51:53 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-04-08 16:23:07
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button,Picker} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import {AtNavBar,AtList, AtListItem,AtInput,AtForm} from 'taro-ui';

import address from '../../assets/js/city'

import './index.less';
class  Addaddress  extends   Component{
  // constructor () {
  //   super(...arguments)
  // }
  state = {
    diqu:[
      [
        {label:"北京",value:"1"},
        {label:"天津",value:"2"},
      ],
      [
        {label:"北京市",value:"1-1"},
        {label:"天津市",value:"2-1"},
      ],
      [
        {label:"东城区",value:"1-1-1"},
        {label:"西城区",value:"1-1-2"},
        {label:"和平区",value:"2-1-1"},
        {label:"西青区",value:"2-1-2"},
      ]
    ],
    value: '',
    selectorChecked: [0, 0, 0],
    rangeKey: '',
  }
  config={
    navigationBarTitleText: '新增地址'
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  handleClickBack() {
    Taro.navigateBack({ delta: 1 })
  }

  render(){
    return (<View className='addaddress'>
      <AtNavBar
        onClickLeftIcon={this.handleClickBack.bind(this)}
        color='#000'
        fixed
        leftIconType='chevron-left'
        border={false}
        title='新增地址'
      />
        <Picker
          mode='multiSelector'
          range={this.state.diqu} 
          rangeKey='label'
          onChange={this.onChange}
        >
          <AtList>
            <AtListItem
              arrow='right'
              title='所在地区'
              extraText=''
            />
          </AtList>
        </Picker>
        <AtInput
        name='value'
        title='详细地址'
        type='text'
        placeholder='输入详细地址（街道，门牌号）'
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    </View>)
  }
}
export default  Addaddress;