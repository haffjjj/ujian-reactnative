import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import {connect} from 'react-redux'

import {profileAll} from '../actions/profileAll'

class ProfileAll extends Component {

    componentDidMount(){
        this.props.dispatch(profileAll())
    }

  render() {
    return (
      <Container>
        <Content>
          <List>

            {this.props.profileAllReducer.profiles.map((item)=>(
                <ListItem avatar onPress={()=>this.props.navigation.navigate('ProfileList',{objectId: item.objectId})}>
                <Left>
                  <Thumbnail source={item.image} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.department}</Text>
                </Body>
              </ListItem> 
            ))}    
 
          </List>
        </Content>
      </Container>
    )
  }
}

mapStateToProps = (state)=>{
    return{
        profileAllReducer: state.profileAllReducer
    }
}

export default connect(mapStateToProps)(ProfileAll)
