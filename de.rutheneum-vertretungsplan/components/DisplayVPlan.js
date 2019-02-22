import React from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { Text } from 'react-native-elements';

export class DisplayVPlan extends React.Component {

    state = {
        Allgemein: '',
        Plan: []
    };

    async componentDidMount() {
        try
        {
            await this.updateState();
        }
        catch{}
    }

    render(){
        this.updateState();
        return (
            <View>
                <Text>{this.state.Allgemein}</Text>
            </View>
        );
    }

    async updateState(){
        const fetched = await fetch(`http://gymnasium-rutheneum.de/plan/${this.props.vplanid}`);
        const jsonData = await fetched.json();

        this.setState({
            Allgemein: jsonData.Allgemein,
            Plan: jsonData.Plan
        });
    }
}