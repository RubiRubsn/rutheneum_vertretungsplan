import React from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { Header, ListItem } from 'react-native-elements';

const list = [
    {
        title: 'Kurse',
        icon: 'book'
    },
    {
        title: 'Benachrichtigungen',
        icon: 'notifications'
    },
    {
        title: 'Über',
        icon: 'info'
    },

];
export class settingsScreen extends React.Component {  
        static navigationOptions = {
            header: null
        }
    
        static navigationOptions: { header: { visible: false } }
    
         render() {
                 return (
     
                     <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
                         <Header
                             statusBarProps={{ barStyle: 'light-content' }}
                             //leftComponent={{ icon: 'refresh', color: '#fff' }}
                             centerComponent={{ text: 'Einstellung', style: { color: '#fff', fontSize: 25 } }}
                             containerStyle={{ backgroundColor: "#dd6422", height: 80 }}
     
                         />
     
     
                             {
                                 list.map((item) => (
                                     <ListItem
                                         key={item.title}
                                         title={item.title}
                                         leftIcon={{ name: item.icon }}
                                         onPress={() => { this.props.navigation.navigate(item.title); }}
                                    
                                     />
                                 ))
                             }
                         
     
                     </ScrollView>
     
     
                 );
             }
     
         }