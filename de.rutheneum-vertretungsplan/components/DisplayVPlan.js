import React from 'react';
import { View, SectionList, ScrollView, AsyncStorage } from 'react-native';
import { Text, Divider, Overlay, Button } from 'react-native-elements';

export class DisplayVPlan extends React.Component {

    state = {
        Allgemein: '',
        Plan: [],
        isVisible: false
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
            <ScrollView>

                <Divider style={{ height: 5, backgroundColor: '#d6d6d6' }} />
                <SectionList style={{backgroundColor: '#d6d6d6'}} sections={this.state.Plan.map(lesson => ({ title: `${lesson.StundenNummer}. Stunde`, data: lesson.Content }))}
                        renderItem={({item,index,section}) => (
                            <View key={index} style={{ backgroundColor: "white" }}>
                                <Divider style={{ height: 4, backgroundColor: '#d6d6d6' }} />
                                <Text style={{fontSize: 18}}>{item.Kurs} </Text>
                                <Divider style={{ height: 2, backgroundColor: '#d6d6d6' }} />
                                <Text style={{fontSize: 18}}>{item.Details}</Text>
                            </View>
                        )}
                        renderSectionHeader={item => (<Text style={{fontSize: 20}}>{item.section.title}</Text>)}
                        keyExtractor={(item, index) => item + index}
                />
                <Button
                      title="Bemerkungen"
                      onPress={() => { this.setState({ isVisible: true }); }}
                      type="outline"
                    />
                <Overlay isVisible={this.state.isVisible}>
                  <View>
                      <Text style={{fontSize: 18}}>{this.state.Allgemein}</Text>
                    <Button
                      title="Bemerkungen Schließen"
                      onPress={() => { this.setState({ isVisible: false }); }}
                      type="outline"
                    />
                  </View>
                </Overlay>
            </ScrollView>
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