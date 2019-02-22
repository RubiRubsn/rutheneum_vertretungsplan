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
        console.log(jsonData);
        this.setState({
            InfoList: jsonData
        });
    }

    render() {
            return(
            <View>
                <Header>

                </Header>
                <ScrollView>
                    <DisplayVPlan name="planDisplay" vplanid={this.state.InfoList[0].ID}></DisplayVPlan>
                </ScrollView>

            
            </View>
            )
    }
}