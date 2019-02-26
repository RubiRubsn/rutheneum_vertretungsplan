import React from 'react';
import { SectionList, ScrollView, AsyncStorage } from 'react-native';
import { Text, Divider, Overlay, Button } from 'react-native-elements';
import { DataTable, Provider as PaperProvider, DefaultTheme, ActivityIndicator, Colors  } from 'react-native-paper';
import { View, Dialog} from 'react-native-ui-lib';

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
export class DisplayVPlan extends React.Component {

    state = {
        Allgemein: '',
        Plan: [],
        isVisible: false,
        showDialog2:false,
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
            <PaperProvider theme={theme}>
            <ScrollView>

                <Divider style={{ height: 5, backgroundColor: '#d6d6d6' }} />
                
                <SectionList style={{backgroundColor: '#d6d6d6'}} sections={this.state.Plan.map(lesson => ({ title: `${lesson.StundenNummer}. Stunde`, data: lesson.Content }))}
                        renderItem={({item,index,section}) => (
                            <View key={index} style={{ backgroundColor: "white" }}>
                                <DataTable>
                                    <DataTable.Row>
                                        <DataTable.Cell>{item.Kurs}</DataTable.Cell>
                                        <DataTable.Cell >{item.Details}</DataTable.Cell>
                                    </DataTable.Row>
                                </DataTable>
                            </View>
                        )}
                        renderSectionHeader={item => (<Text style={{fontSize: 20}}>{item.section.title}</Text>)}
                        keyExtractor={(item, index) => item + index}
                />
        
                <Dialog
                visible={this.state.showDialog2}
                width="100%"
                height="35%"
                bottom
                centerH
                onDismiss={() => this.setState({showDialog2: false})}
                style={{backgroundColor: Colors.white}}>
                    
                    <View height={100}>
                        <Text style={{fontSize: 18}}>{this.state.Allgemein}</Text>
                        
                        <Button
                        title="Schließen"
                        onPress={() => { this.setState({ showDialog2: false }); }}
                        type="outline"
                        />
                    </View>  
                </Dialog>

                <Button
                      title="Bemerkungen"
                      onPress={() => { this.setState({ showDialog2: true }); }}
                      type="outline"
                    />
            </ScrollView>
            </PaperProvider>
        );
    
}

    async updateState(){
        const fetched = await fetch(`https://rutheneumapi2.herokuapp.com/plan/${this.props.vplanid}`);
        const jsonData = await fetched.json();

        this.setState({
            Allgemein: jsonData.Allgemein,
            Plan: jsonData.Plan
        });

    }
}