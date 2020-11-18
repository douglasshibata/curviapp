import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
    },
    companyDescription: {
        marginTop: 10,
        fontSize: 12,
        textAlign: 'justify',

    }
});
function ExtraCourse(props) {
    const user = props.user
    return (

        <View style={styles.container}>
            <Title>Formação Complementar</Title>
            <Text style={styles.title}></Text>
            <Text style={styles.companyDescription}>{user.courses}</Text>
        </View>
    )
}
export default ExtraCourse;