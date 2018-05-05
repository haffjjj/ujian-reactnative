import React, {Component} from 'react';
import {connect} from 'react-redux'

class ProfileEdit extends Component {
    render() {
        return (
            <Form>
                <Item inlineLabel>
                    <Label>Name</Label>
                    <Input/>
                </Item>
                <Item inlineLabel last>
                    <Label>Department</Label>
                    <Input/>
                </Item>
                <Item inlineLabel last>
                    <Label>University</Label>
                    <Input/>
                </Item>
                <Item inlineLabel last>
                    <Label>Department</Label>
                    <Input/>
                </Item>
                <Item inlineLabel last>
                    <Label>From</Label>
                    <Input/>
                </Item>
                <Item inlineLabel last>
                    <Label>Higlights</Label>
                    <Input/>
                </Item>
            </Form>
        )
    }
}

export default connect()(ProfileEdit)