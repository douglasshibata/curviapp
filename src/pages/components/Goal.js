import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 30,
        marginLeft: 30,
        alignContent:"center",
        alignItems:"center",
    },
    goal: {
        fontSize: 12,
        textAlign:'justify'
    },
});
function Goal(props) {
    const user = props.user
    return (

        <View style={styles.container}>
            <Title>Objetivo</Title>
            <Text style={styles.goal}>{user.goal}</Text>
        </View>
    )
}
export default Goal;