import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native'
import {
    View,
    List,
    ListItem,
    Left,
    Thumbnail,
    Body,
    Text
} from 'native-base';

export default class HiglightItems extends Component {
    render() {
        return (
            <View>
                <List>
                {this.props.items.map((item)=>(
                    <ListItem avatar>
                    <Left>
                        <Thumbnail
                            source={{
                            uri: item.image
                        }}/>
                    </Left>
                    <Body>
                        <Text>{item.title}</Text>
                        <Text note>{item.description}</Text>
                    </Body>
                </ListItem>
                ))}
                </List>
            </View>
        )
    }
}