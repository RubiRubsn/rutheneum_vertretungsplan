import React from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { Text, Header } from 'react-native-elements';
import { DisplayVPlan } from './DisplayVPlan';

export class homeScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            InfoList: [300]  
        };
    }

    async componentDidMount()
    {
        const fetched = await fetch('http://rutheneumapi2.herokuapp.com/list/30');

        const jsonData = await fetched.json();
        this.setState({
            InfoList: jsonData
        });
    }

    render() {
        console.log('rendering homescreen', this.props);        
            return(
            <View>
                <Header>

                </Header>
                <ScrollView>
                    <DisplayVPlan vplanid={this.state.InfoList[0].ID}></DisplayVPlan>
                </ScrollView>

            
            </View>
            )
    }
}