import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    school: {
        fontSize: 10,
    },
    degree: {
        fontSize: 10,
    },
    candidate: {
        fontSize: 10,
    },
});
function Education(props) {
    const user = props.user
    return (

        <View style={styles.container}>
            <Title>Education</Title>
            <Text style={styles.school}>{user.courseSchool}</Text>
            <Text style={styles.degree}>{user.courseName}</Text>
            <Text style={styles.candidate}>{user.courseStartYear} - {user.courseEndYear}</Text>
        </View>
    )
}
export default Education;