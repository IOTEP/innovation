/*
 * @Author: TravelerZw 
 * @Date: 2019-04-02 23:51:53 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-04-29 18:48:38
 */

import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button} from  '@tarojs/components';
import { AtIcon } from 'taro-ui'
import "./commentlist.less";
class  CommentList  extends   Component{
   render(){
      return (<View className='comment-list'>
          <View className='comment-box'>
            <View className='title'>
              <View className='user-box'>
                <View className='avatar'>
                </View>
                <View className='nick-box'>
                  <View className='nick'>
                    昵称
                  </View>
                  <View className='time'>
                    1小时前
                  </View>
                </View>
              </View>
              <View className='details'>
                <View>
                  <View className='at-icon at-icon-message'></View>
                  <Text className='space'>回复</Text>
                </View>
                <View className='right'>
                  <View className='at-icon at-icon-bell'></View>
                  <Text className='space'>166</Text>
                </View>
              </View>
            </View>
            <View className='content'>
              <View className='det'>
              共建一带一路，同大一起，登高望远，携手前行的朋友圈越来越大，好伙伴越来越多，合作质量越来越高，发展前景越来越好，应潮流，得民心，惠民生，利天下！
              </View>
              <View className='reply'>
                全部<Text>5</Text>条回复 >
              </View>
            </View>
          </View>
          <View className='comment-box'>
            <View className='title'>
              <View className='user-box'>
                <View className='avatar'>
                </View>
                <View className='nick-box'>
                  <View className='nick'>
                    昵称
                  </View>
                  <View className='time'>
                    1小时前
                  </View>
                </View>
              </View>
              <View className='details'>
                <View>
                  <View className='at-icon at-icon-message'></View>
                  <Text className='space'>回复</Text>
                </View>
                <View className='right'>
                  <View className='at-icon at-icon-bell'></View>
                  <Text className='space'>166</Text>
                </View>
              </View>
            </View>
            <View className='content'>
              <View className='det'>
              共建一带一路，同大一起，登高望远，携手前行的朋友圈越来越大，好伙伴越来越多，合作质量越来越高，发展前景越来越好，应潮流，得民心，惠民生，利天下！
              </View>
              <View className='reply'>
                全部<Text>1</Text>条回复 >
              </View>
            </View>
          </View>
          <View className='comment-box'>
            <View className='title'>
              <View className='user-box'>
                <View className='avatar'>
                </View>
                <View className='nick-box'>
                  <View className='nick'>
                    昵称
                  </View>
                  <View className='time'>
                    1小时前
                  </View>
                </View>
              </View>
              <View className='details'>
                <View>
                  <View className='at-icon at-icon-message'></View>
                  <Text className='space'>回复</Text>
                </View>
                <View className='right'>
                  <View className='at-icon at-icon-bell'></View>
                  <Text className='space'>166</Text>
                </View>
              </View>
            </View>
            <View className='content'>
              <View className='det'>
              共建一带一路，同大一起，登高望远，携手前行的朋友圈越来越大，好伙伴越来越多，合作质量越来越高，发展前景越来越好，应潮流，得民心，惠民生，利天下！
              </View>
            </View>
          </View>
      </View>)
   }
}
export default  CommentList;