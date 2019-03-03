import React from 'react';
import { View, ScrollView, SectionList, AsyncStorage } from 'react-native';
import { Text, Header, Divider } from 'react-native-elements';
import { PlanLaden } from './PlanLaden';
import { IDLaden } from './IDLaden';

export class homeScreen extends React.Component {

    state = {
            Infolist: [[1],[1],[1]],
            InfoList2: [],
            VerID: 0,
            Allgemein: '',
            Plan: [[{"Content":[{},{},],
                  "StundenNummer": "Lade ..",
                }]],
                
                
        };
    

    async componentDidMount() {
        var PlanID= await IDLaden();
        var Plan1 = await PlanLaden(PlanID[0].ID);
        var Plan2 = await PlanLaden(PlanID[1].ID);
        var Plan3 = await PlanLaden(PlanID[2].ID);
        var Plan4 = await PlanLaden(PlanID[3].ID);
        
        await this.setState({
            Infolist: await PlanID,
            Allgemein: await Plan1.Allgemein,
            Plan: [await Plan1.Plan, await Plan2.Plan, await Plan3.Plan, await Plan4.Plan]
        });
        console.log("InfoList2: ", this.state.Infolist[0].Weekday, "Das ist der PlanLOL: ", this.state.Plan);

    }


    render() {

            return (
    
            < View style={{ flex: 1, backgroundColor: "white" }} >

                <Header
                    containerStyle={{
                        backgroundColor: '#dd6422'
                    }}
                    leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => {
                        if (this.state.VerID<3){
                        this.setState({VerID: this.state.VerID+1})}
                                }
                            }
                        }
                        
                    rightComponent={{ icon: 'arrow-forward', color: '#fff', onPress: () => {
                        if (this.state.VerID>0){
                        this.setState({VerID: this.state.VerID-1})}
                                }
                            }
                        }
                    centerComponent={{
                        text: 'Vertretungsplan',
                        style: {
                            color: '#fff',
                            fontSize: 20
                        }
                    }}
                    containerStyle={{
                        backgroundColor: '#dd6422',
                        height: 80
                    }}
                />

                <Text style={{
                    textAlignVertical: "center",
                    textAlign: "center",
                    fontSize: 30
                }}>
                    {this.state.Infolist[this.state.VerID].Weekday}   {this.state.Infolist[this.state.VerID].Date}
                </Text>

                <ScrollView>
                
                <SectionList style={{backgroundColor: 'white'}} sections={this.state.Plan[this.state.VerID].map(lesson => ({ title: `${lesson.StundenNummer}. Stunde`, data: lesson.Content }))}
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
            </ScrollView>
               
                
            </View>
        )
    }
}