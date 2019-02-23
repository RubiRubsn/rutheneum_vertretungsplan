import React from 'react';
import { View, ScrollView, AsyncStorage, Linking } from 'react-native';
import { Header, Tile, SocialIcon, Card } from 'react-native-elements';



export class UeberScreen extends React.Component {

static navigationOptions = {
    header: null
}

static navigationOptions: { header: { visible: false } }

render() {

return (
    <View style={{ flex: 1 , backgroundColor: "white"}}>
        <Header
            leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.props.navigation.navigate('Einstellung2') }}
            statusBarProps={{ barStyle: 'light-content' }}
            centerComponent={{ text: 'Über', style: { color: '#fff', fontSize: 25 } }}
            containerStyle={{ backgroundColor: '#dd6422', height: 80 }}
        />
    <ScrollView style={{ flex: 1 , backgroundColor: "white" }}> 
        <Tile
            imageSrc={require('./images/ueberscreen.jpg')}
            title="cc 2019 "
            featured
            caption="by Ruben Saitz, Johannes Mai, Maria Oertel"
        />

        <Card
        title='Marias SocialMedia'
        image={require('./images/Maria.jpeg')}>
        
        <SocialIcon
            button
            title='Marias Instagram'
            backgroundColor='blue'
            light
            type='instagram'
            onPress={() => { Linking.openURL('https://instagram.com/klnklbr?utm_source=ig_profile_share&igshid=1x7kzyyyjc3zx') }}
        />
        </Card>


        <Card
        title='Johannes Socialmedia'
        image={require('./images/Johannes.jpeg')}>
        
        <SocialIcon
            button
            title='Johannes Instagram'
            light
            type='instagram'
            onPress={() => { Linking.openURL('https://instagram.com/pinguincola?utm_source=ig_profile_share&igshid=lce3be17dosp') }}
        />

        <SocialIcon
            button
            title='Johannes Twitch'
            light
            type='twitch'
            onPress={() => { Linking.openURL('https://www.twitch.tv/sphinxnine9') }}
        />

        </Card>

        <Card
        title='Rubens SocialMedia'
        image={require('./images/Ruben.jpg')}>
        
        <SocialIcon
            button
            title='Rubens Instagram'
            light
            type='instagram'
            onPress={() => { Linking.openURL('https://instagram.com/rubi_rubsn?utm_source=ig_profile_share&igshid=6qr031b22fyh') }}
        />

        <SocialIcon
            button
            title='Rubens GitHub'
            light
            type='github'
            onPress={() => { Linking.openURL('https://github.com/RubiRubsn') }}
        />
        </Card>

        
    </ScrollView>
    </View>
);
}
}
