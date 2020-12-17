import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title:{
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
    },
    school: {
        marginTop:10,
        fontSize: 12,
    },
    degree: {
        fontSize: 12,
    },
    year: {
        fontSize: 12,
    },
});
function Education(props) {
    const user = props.user
    return (

        <View style={styles.container}>
            <Title>Formação Acadêmica</Title>
            <Text style={styles.title}></Text>
            <Text style={styles.school}>Instituição: {user.courseSchool}</Text>
            <Text style={styles.degree}>Curso: {user.courseName}</Text>
            <Text style={styles.year}>Conclusão em: {user.courseEndYear === 'Completo'?user.courseEndYear:`Previsão de Conclusão: ${user.courseEndYear}`}</Text>
        </View>
    )
}
export default Education;