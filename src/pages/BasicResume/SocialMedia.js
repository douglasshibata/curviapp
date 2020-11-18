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
    socialMedia: {
        marginTop: 14,
        fontSize: 12,
        textAlign: 'justify',

    }
});
function SocialMedia(props) {
    const user = props.user
    return (

        <View style={styles.container}>
            <Title>Midias Sociais</Title>
            <Text style={styles.title}></Text>
            <Text style={styles.socialMedia}>Linkedln: {user.linkedln_link}</Text>
        </View>
    )
}
export default SocialMedia;