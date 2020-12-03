import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
     /*    borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: '#112131',
        borderTopWidth: 0.5,
        borderTopStyle: 'solid',
        borderLeftWidth: 0.5,
        borderLeftStyle: 'solid',
        borderRightWidth: 0.5,
        borderRightStyle: 'solid', */
    },
    title:{
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: '#112131',
        /* borderTopWidth: 2,
        borderTopStyle: 'solid',
        borderLeftWidth: 2,
        borderLeftStyle: 'solid',
        borderRightWidth: 2,
        borderRightStyle: 'solid', */
    },
    occupation: {
        marginTop:10,
        fontSize: 14,
    },
    companyName: {
        fontSize: 12,
    },
    companyDescription:{
        fontSize:12,
        textAlign:'justify',

    }
});
function Experience(props) {
    const user = props.user
    return (

        <View style={styles.container}>
            <Title>Experiência</Title>
            <Text style={styles.title}></Text>
            <Text style={styles.occupation}>{user.companyOccupation !== "NOT_PRINT"? `Cargo: ${user.companyOccupation}` :<></>}
             {user.companyStartEnd  !== "NOT_PRINT"?  `\nPeríodo: ${user.companyStartEnd}` :<></>} </Text>
            <Text style={styles.companyName}>
            {user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?
            `Empresa: ${user.companyName}`:user.companyName}</Text>
            <Text style={styles.companyDescription}>{user.companyDescription !== "NOT_PRINT" ?`Principais Atividades: ${user.companyDescription}`:<></>}</Text>
        </View>
    )
}
export default Experience;