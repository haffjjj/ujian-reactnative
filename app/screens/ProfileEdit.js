import React, {Component} from 'react';
import {connect} from 'react-redux'

class ProfileEdit extends Component {
    render() {

        state = {
            data :{}
        }

        this.setState({
            data = this.props.navigation.state.params.data
        })

        return (
            <Form>
                <Item inlineLabel>
                    <Label>Name</Label>
                    <Input value={this.state.data.name}/>
                </Item>
                <Item inlineLabel last>
                    <Label>Department</Label>
                    <Input value={this.state.data.department}/>
                </Item>
                <Item inlineLabel last>
                    <Label>University</Label>
                    <Input value={this.state.data.university}/>
                </Item>
                <Item inlineLabel last>
                    <Label>From</Label>
                    <Input value={this.state.data.from}/>
                </Item>
                <Item inlineLabel last>
                    <Label>Higlights</Label>
                    <Input value={this.state.data.highlight}/>
                </Item>
            </Form>
        )
    }
}

export default connect()(ProfileEdit)