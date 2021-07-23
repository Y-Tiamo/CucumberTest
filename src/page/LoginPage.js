import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Avatar, Button, Header, Input} from 'react-native-elements';
import MainPage from './MainPage';
import NavigationService from '../common/NavigationService';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
    };
  }

  renderUI() {
    return (
      <View style={{flex: 1, alignItems: 'center', paddingTop: 50}}>
        <Avatar
          rounded={true}
          source={{
            uri: 'https://tse1-mm.cn.bing.net/th/id/R-C.8d23a08ed22be0f3cf2276d845fd78a4?rik=T5RHIRa3XyapAg&riu=http%3a%2f%2fwww.pp3.cn%2fuploads%2f201412%2f2014121115.jpg&ehk=g4cQkmEH3Aa5NqrR95Pgu6EzRaXiqKPkvDTvJDr7ZSk%3d&risl=&pid=ImgRaw',
          }}
          title={'DEMO'}
          titleStyle={{color: '#999', fontSize: 20}}
          size={80}
        />
        <Input
          placeholder="ACCOUNT INPUT"
          testID={'ACCOUNT_INPUT'}
          inputStyle={{fontSize: 16}}
          containerStyle={{height: 44, marginTop: 10}}
          onChangeText={text => {
            this.setState({
              phone: text,
            });
          }}
        />
        <Input
          placeholder="PASSWORD INPUT"
          testID={'PASSWORD_INPUT'}
          containerStyle={{
            height: 44,
            marginTop: 10,
          }}
          secureTextEntry={true}
          inputStyle={{fontSize: 16}}
          onChangeText={text => {
            this.setState({
              password: text,
            });
          }}
        />
        <Button
          title={'SIGN IN'}
          testID={'TAP_LOGIN'}
          containerStyle={{width: 300, marginTop: 50}}
          onPress={() => {
            NavigationService.navigate('MainPage');
          }}
        />
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Header
          placement="center"
          centerComponent={{text: 'LOGIN', style: {color: '#fff'}}}
        />
        {this.renderUI()}
      </View>
    );
  }
}
