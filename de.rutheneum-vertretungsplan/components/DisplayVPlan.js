import React, {useState} from 'react';
import { View, SectionList, ScrollView, AsyncStorage } from 'react-native';
import { Text, Divider, Overlay, Button } from 'react-native-elements';
import { DataTable  } from 'react-native-paper';
export function DisplayVPlan() {

    const [state, setState] = useState({
        Allgemein: '',
        Plan: [],
        isVisible: false,
        gestern:0
    });

    fetch(`https://rutheneumapi2.herokuapp.com/plan/${this.props.id}`)
    .then(fetched => fetched.json())
    .then(result => 
        {
            setState(result);
        });


    
    return (
        <ScrollView>
            
            <SectionList style={{backgroundColor: 'white'}} sections={state.Plan.map(lesson => ({ title: `${lesson.StundenNummer}. Stunde`, data: lesson.Content }))}
                    renderItem={({item,index,section}) => (
                        <View style={{ flex:1, flexDirection: "row" }} key={index}>
                            
                                <View style={{ flex:1, flexDirection: "column" }}>
                                    <Text>{item.Kurs}</Text>
                                    <Divider style={{ height: 10, backgroundColor: 'white' }} />
                                </View>    
                                <View style={{ flex:1, flexDirection: "column" }}>
                                    <Text >{item.Details}</Text>
                                    <Divider style={{ height: 10, backgroundColor: 'white' }} />
                                </View>
                                
                            
                        </View>
                    )}
                    
                    renderSectionHeader={item => (
                        <View style={{ backgroundColor: '#d6d6d6' }}>
                        <Divider style={{ height: 10, backgroundColor: 'white' }} />
                        <Text style={{fontSize: 20}}>{item.section.title}</Text>
                        <Divider style={{ height: 10, backgroundColor: 'white' }} />
                        </View>
                        )}
                    keyExtractor={(item, index) => item + index}
                    
            />
        </ScrollView>)
        }