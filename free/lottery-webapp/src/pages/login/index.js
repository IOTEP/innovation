import  Taro,{Component} from '@tarojs/taro';
import  {View,Text, Image} from  '@tarojs/components';
import {connect} from '@tarojs/redux';
import  {getCode, loginRequest} from  '../../actions/user';
import './index.less'
import { AtInput, AtForm, AtButton, AtToast, AtDivider, AtIcon} from 'taro-ui'

@connect(function(store) {
   return {
      code: store.user.code,
      token: store.user.token
   }
}, function(dispatch) {
  return {
   getCode(params) {
      dispatch(getCode(params))
   },
   loginRequest(params) {
      dispatch(loginRequest(params))
   }
  }
})
class Login extends   Component{
   config={
     navigationBarTitleText: '登录'
   }
   constructor () {
      super(...arguments)
      this.state = {
         value14: '',
         value15: '',
         disabled: false,
         second: 60,
         isOpened: false,
         text: "123"
      }
    }
   componentWillMount(){
   }
   componentDidMount() {

   }
   componentWillReceiveProps(nextProps){
   }
   handleChange() {

   }
   handleInput() {

   }
   handleCode(){
      let params={
        phone: '18810910091'
      }
      this.props.getCode && this.props.getCode(params);
   }
   showTipText () {
      return this.state.disabled ? `${this.state.second}s后重试` : '发送验证码'
   }
   // 获取验证码
   sendCode () {
      if (this.state.disabled){
         return 0;
      }
      this.setState({
        disabled: true,
      })
      this.handleCode();
      // 倒计时
      const timer = setInterval(() => {
        if (this.state.second > 0) {
          this.setState({
            second: this.state.second - 1
          })
        } else {
          this.setState({
            second: 60,
            disabled: false
          })
          clearInterval(timer)
        }
      }, 1000)
   }
   // 点击登录
   loginSub() {
      if (this.state.value15 === "" || !this.state.value15) {
         this.setState({
            isOpened: true
         })
      }
      let {code} = this.props
      let params={
         appUserId: '18810910091',
         appType: 0,
         code: code
      }
      this.props.loginRequest && this.props.loginRequest(params)
      Taro.navigateTo({
         url: '/pages/index/index',
      })
   }
   // 微博登录
   loginSubWeibo() {
      alert(1)
   }
   render(){
      return (<View className='contain'>
         <AtForm className='form'>
            <AtInput 
               name='value15'
               border={true} 
               type='phone' 
               clear 
               placeholder='请输入手机号' 
               value={this.state.value15} 
               onChange={this.handleInput.bind(this, 'value15')}>
               <View
                  style={{
                  'color': this.state.disabled ? '#FF4949' : '',
                  'fontSize': '12px',
                  'width': '90px'
                  }}
                  onClick={this.sendCode.bind(this)}
               >
                  {this.showTipText()}
               </View>
            </AtInput>
            <AtInput 
               name='value14'
               border={true} 
               type='text' 
               maxLength='6' 
               clear
               placeholder='请输入验证码'
               value={this.state.value14}
               onChange={this.handleInput.bind(this, 'value14')}>
            </AtInput>
            <View className='btn-box'>
               <AtButton className='btn' type='primary'
                  onClick={this.loginSub.bind(this)}
               >登录</AtButton>
            </View>
            <View>
               <AtDivider className="line" content='第三方登录' fontColor='#999' lineColor='#f0f0f0' />
               <View className="third-party-login">
                  <AtIcon onClick={this.loginSubWeibo.bind(this)}  prefixClass="travelerZw" value='weibo' size='40' color='#F10215'></AtIcon>
               </View>
            </View>   
         </AtForm>
         <AtToast isOpened={this.state.isOpened} text={this.state.text} icon="{icon}"></AtToast>
      </View>)
   }
}
export default Login;