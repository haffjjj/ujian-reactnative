import React, {Component} from 'react';

import {Content,Form, Item, Label, Input, Text} from 'native-base'
import {connect} from 'react-redux'

class ProfileEdit extends Component {
    render() {

        const {name,department,university, from} = this.props.navigation.state.params.data

        return (    
            <Content>
            {/* <Text>{JSON.stringify(this.props.navigation.state.params.data.image)}</Text> */}
                
            <Form>
                <Item inlineLabel>
                    <Label>Name</Label>
                    <Input value={name}/>
                </Item>
                <Item inlineLabel last>
                    <Label>Department</Label>
                    <Input value={department}/>
                </Item>
                <Item inlineLabel last>
                    <Label>University</Label>
                    <Input value={university}/>
                </Item>
                <Item inlineLabel last>
                    <Label>From</Label>
                    <Input value={from}/>
                </Item>
                {/* <Item inlineLabel last>
                    <Label>Higlights</Label>
                    <Input value={highlight}/>
                </Item> */}
            </Form>
            </Content>
        )
    }
}

export default connect()(ProfileEdit)