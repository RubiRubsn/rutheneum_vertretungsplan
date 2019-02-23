import React from 'react';
import { View, SectionList, ScrollView, AsyncStorage } from 'react-native';
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
                <Text margin='20px'>{this.state.Allgemein}</Text>
                <SectionList sections={this.state.Plan.map(lesson => ({ title: `${lesson.StundenNummer}. Stunde`, data: lesson.Content }))}
                        renderItem={({item,index,section}) => (
                            <View key={index}>
                                <Text>{item.Kurs}</Text>
                                <Text>{item.Details}</Text>
                            </View>
                        )}
                        renderSectionHeader={item => (<Text>{item.section.title}</Text>)}
                        keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }

    async updateState(){
        const fetched = await fetch(`http://rutheneumapi2.herokuapp.com/plan/${this.props.vplanid}`);
        const jsonData = await fetched.json();

        this.setState({
            Allgemein: jsonData.Allgemein,
            Plan: jsonData.Plan
        });
    }
}