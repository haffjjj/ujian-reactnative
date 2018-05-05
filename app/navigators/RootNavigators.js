import React from 'react';
import {Icon} from 'native-base';
import {StackNavigator, TabNavigator} from 'react-navigation';

import ProfileList from '../screens/ProfileList'
import ProfileAll from '../screens/ProfileAll'

const RootNavigator = StackNavigator({
    ProfileList: {
        screen: ProfileList,
        navigationOptions: {
            title: 'ProfileList'
        }
    },
    ProfileAll: {
        screen: ProfileAll,
        navigationOptions: {
            title: 'Profile All'
        }
    }
},
{
    // navigationOptions:{
    // }
    // headerMode:'none'    
})

export default RootNavigator;