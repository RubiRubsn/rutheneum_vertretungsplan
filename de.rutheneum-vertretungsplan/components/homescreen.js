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
            InfoList: [300],
        };
    }

    async componentDidMount() {
        const fetched = await fetch('https://rutheneumapi2.herokuapp.com/list/30');
        const jsonData = await fetched.json();
        this.setState({
            InfoList: jsonData
        });
    }


    render() {
        return (
            <PaperProvider theme={theme}>
    
            < View style={{ flex: 1, backgroundColor: "white" }} >

                <Header
                    containerStyle={{
                        backgroundColor: '#dd6422'
                    }}
                    centerComponent={{
                        text: 'Vertretungsplan vom',
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
                    {this.state.InfoList[0].Weekday} dem {this.state.InfoList[0].Date}
                </Text>

                <ScrollView>
                    <DisplayVPlan name="planDisplay" vplanid={this.state.InfoList[0].ID}>
                    </DisplayVPlan>
                    
                </ScrollView>
               
                
            </View>
            </PaperProvider>
        )
    }
}