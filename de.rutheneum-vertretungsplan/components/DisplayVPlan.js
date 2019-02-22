import React from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { Text } from 'react-native-elements';

export class DisplayVPlan extends React.Component {

    constructor() {
        super();
        this.state = {
            Allgemein: undefined,
            Plan: []
        }
        this.updateState = this.updateState.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.vplanid !== this.props.vplanid)
            this.updateState();
    }

    updateState(){
        console.log('updating state of displayvplan', this.props.vplanid);
        fetch(`http://gymnasium-rutheneum.de/plan/${this.props.vplanid}`)
        .then(fetched => fetched.json())
        .then(jsondata => {
            this.setState(jsondata);
        });
    }

    render() {
        return (<View>
            <Text>{this.state.Allgemein ? "Loading..." : this.state.Allgemein}</Text>
        </View>);
    }
}