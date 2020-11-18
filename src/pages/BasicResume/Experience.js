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
            <Text style={styles.occupation}>{user.companyOccupation !== "NOT_PRINT"? user.companyOccupation :<></>}
             {user.companyStartEnd  !== "NOT_PRINT"?  user.companyStartEnd :<></>} </Text>
            <Text style={styles.companyName}>{user.companyName}</Text>
            <Text style={styles.companyDescription}>{user.companyDescription !== "NOT_PRINT" ?user.companyDescription:<></>}</Text>
        </View>
    )
}
export default Experience;