import React from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { Text, Header } from 'react-native-elements';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { DisplayVPlan } from './DisplayVPlan';


const theme = {
    ...DefaultTheme,
    dark: true,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    }
  };
export class homeScreen extends React.Component {


    constructor() {
        super();
        this.state = {
            InfoList: [[1],[1],[1]],
            VerID: 0,
        };
    }

    async componentDidMount() {
        const fetched = await fetch('https://rutheneumapi2.herokuapp.com/list/3');
        const jsonData = await fetched.json();
        this.setState({
            InfoList: jsonData
        });
        console.log(this.state.InfoList)
    }


    render() {


        return (
            <PaperProvider theme={theme}>
    
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
                    {this.state.InfoList[this.state.VerID].Weekday}   {this.state.InfoList[this.state.VerID].Date}
                </Text>

                <ScrollView>
                    <DisplayVPlan name="planDisplay" vplanid={this.state.InfoList[this.state.VerID].ID}>
                    </DisplayVPlan>
                    
                </ScrollView>
               
                
            </View>
            </PaperProvider>
        )
    }
}