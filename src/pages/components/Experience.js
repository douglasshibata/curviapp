import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 15,
        '@media max-width: 400': {
            paddingTop: 10,
            paddingLeft: 0,
        },
    },
    entryContainer: {
        marginBottom: 10,
    },
    date: {
        fontSize: 11,
    },
    headerContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    title: {
        fontSize: 11,
        color: 'black',
        textDecoration: 'none',
    },
});
function Experience(props) {
    const user = props.user;
    return (

        <View style={styles.container}>
            <Title>Experience</Title>
            <View style={styles.entryContainer}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.title}>{user.companyName}</Text>
                    </View>
                    <View>
                        <Text style={styles.date}>{user.companyStart} - {user.companyEnd}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Experience;