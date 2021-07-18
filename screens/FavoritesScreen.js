import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function FavroiteScreen(props){
    return (<View style={styles.screen}>
        <Text>Favroite Screen</Text>
    </View>);
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default FavroiteScreen;