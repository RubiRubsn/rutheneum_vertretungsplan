import React from 'react';
import { View } from 'react-native';
import { Header, Image } from 'react-native-elements';

//import { menuAktiviert } from './menuAktiveD.js';


export class KursScreen extends React.Component {
 
    static navigationOptions = {
        header: null
    }

    static navigationOptions: { header: { visible: false } }
render() {
    return (
        < View style={{ flex: 1 , backgroundColor: "white" }} >
            <Header
                leftComponent={{ 
                icon: 'arrow-back', color: '#fff', 
                onPress: () => this.props.navigation.navigate('Einstellung2') 
                }}
                statusBarProps={{ barStyle: 'light-content' }}
                centerComponent={{ text: 'Kurs Einstellungen', style: { color: '#fff', fontSize: 25 } }}
                containerStyle={{ backgroundColor: "#dd6422", height: 80 }}
            />
            
            <View style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor:"#484848"
                        }}>

            <Image
              source={{ uri: "https://rubensaitz.files.wordpress.com/2019/02/keep-calm-it-s-work-in-progress-1.png" }}
              style={{ width: 200, height: 200 }}
            />

            </View>

        </View>
        );
    }
}