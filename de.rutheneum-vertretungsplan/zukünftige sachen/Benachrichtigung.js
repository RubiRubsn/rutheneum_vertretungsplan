import * as React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { Constants, Notifications, Permissions } from 'expo';

export default class App extends React.Component {
  state = {
    channelId: 'c',
    created: false,
    priority: 'high',
  };

  async componentDidMount() {
    let value = await Notifications.getExpoPushTokenAsync();
  console.log('Our token', value);
    if ('granted' !== await Permissions.getAsync(Permissions.NOTIFICATIONS)) {
      await Permissions.askAsync(Permissions.NOTIFICATIONS);
    }
    await Promise.all([
      {name: 'a', priority: 'max'},
      {name: 'b', priority: 'high'},
    ].map(async info => {
      await Notifications.createChannelAndroidAsync(info.name, {
        ...info,
        sound: true,
        vibrate: true,
      });
    }));
    // eslint-disable-next-line
    this.setState({created: true,});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.created ? <Text style={styles.paragraph}>
          Registered channel “a” with priority='max', “b” with priority='high'. Check your Android phone’s settings to see what priority level it is associated with.
        </Text> : <Text>Creating…</Text>}
        <Text>Manually create a new channel:</Text>
        <View><Text>ChannelId: </Text><TextInput onChangeText={this.handleChannelIdChangeText} value={this.state.channelId}/></View>
        <View><Text>priority: </Text><TextInput onChangeText={this.handlePriorityChangeText} value={this.state.priority}/></View>
        <Button onPress={this.handleCreatePress} title='Create'/>
      </View>
    );
  }

  handleChannelIdChangeText = channelId => this.setState({channelId,});
  handlePriorityChangeText = priority => this.setState({priority,});
  handleCreatePress = async () => {
    await Notifications.createChannelAndroidAsync(this.state.channelId, {name: this.state.channelId, priority: this.state.priority, sound: true, vibrate: true});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
