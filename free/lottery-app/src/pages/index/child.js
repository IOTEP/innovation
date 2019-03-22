/*
 * @Author: TravelerZw 
 * @Date: 2019-03-22 14:20:28 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-03-22 15:01:40
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Text} from '@tarojs/components';
class Child extends Component {
  componentWillReceiveProps(nextProps) {
  }
  render() {
    let { name, obj } = this.props;
    return (
      <View>
        <Text>
          child {name}
        </Text>
        <Text>
          {obj.key[0].name}
        </Text>
      </View>
    )
  }
}
Child.defaultProps= {
  obj: {
    key: [{
      name: '1234'
    }]
  }
}
export default  ; 