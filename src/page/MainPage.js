import React from 'react';
import {View, Text} from 'react-native';
import NavigationService from '../common/NavigationService';
import {Header} from 'react-native-elements';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Header
          placement="center"
          centerComponent={{text: 'HOME', style: {color: '#fff'}}}
        />
        <Text onPress={() => NavigationService.navigate('')}>主界面</Text>
      </View>
    );
  }
}
