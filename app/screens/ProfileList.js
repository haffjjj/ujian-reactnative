import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body,View,H3, Button, List, ListItem, Left, Thumbnail, Right } from 'native-base';
import {connect} from 'react-redux'

import HighlightItems from '../components/HiglightItems'
import {getProfileList} from '../actions/profileList'

class ProfileList extends Component {
  
  componentDidMount(){
    this.props.dispatch(getProfileList(this.props.navigation.state.params.objectId))
  }
  
  render() {
    const {image, name, department, univeristy, description,from, highlights} = this.props.profileListReducer.profile
    return (
        <Container>
        <Content style={{padding:8}}> 
        <Image
            style={styles.avatar}
            source={{
            uri: image
          }}/> 

          <Card style={{paddingTop:30}}>
            <View style={styles.profileCard}>
                <H3 style={styles.profileName}>{name}</H3>
                <Text style={styles.profileJab}>{department}</Text>
                <Text note>{univeristy}</Text>
                <Text note>{from}</Text>
                <View style={{flexDirection:'row',paddingTop:15,paddingBottom:15}}>
                    <Button bordered style={{flex:1,alignSelf:'flex-end'}}>
                        <Text>Message</Text>
                    </Button>
                    <Button bordered style={{flex:1,alignSelf:'flex-start'}}>
                        <Text>Connect</Text>
                    </Button>
                </View>
                <Text style={styles.profileDescription}>{descriptions}</Text>
                <Button onPress={this.state.navigation.navigate('ProfileEdit',{data: this.props.profileListReducer.profile})}>
                  <Text>Edit</Text>
                </Button>
            </View>
        </Card>

        <Card style={styles.higlightCard}>
            <Text note>Highlight</Text>
            <List>
            
            <HighlightItems items={highlights}/>

          </List>
        </Card>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        alignSelf:'center',
        marginTop:10,
      },
    profileName:{
      color:'#373737',
      paddingBottom:20
    },
    profileCard:{
      padding:10,
      flex:1,
      alignItems:'center',
      paddingBottom:15
    },
    profileJab:{
      color:'#494949',
      textAlign:'center',
      paddingBottom:15
    },
    profileDescription:{
      color:'#494949',
      textAlign:'center',
      paddingBottom:15,
      fontSize: 15,
    },
    higlightCard:{
      padding:5
    }
})

const mapStateToProps = (state)=>{
  return{
    profileListReducer: state.profileListReducer
  }
}

export default connect (mapStateToProps)(ProfileList)