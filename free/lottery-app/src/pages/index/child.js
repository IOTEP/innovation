import Taro, { Component } from '@tarojs/taro';
import { View, Text} from '@tarojs/components';
class Child extends Component {
  render() {
    let { name } = this.props;
    return (
      <View>
        <Text>
          child {name}
        </Text>
      </View>
    )
  }
}
export default Child; 