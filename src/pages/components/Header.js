import React from 'react';

import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
        alignItems: 'stretch',
    },
    detailColumn: {
        flexDirection: 'column',
        flexGrow: 9,
        textTransform: 'uppercase',
    },
    linkColumn: {
        flexDirection: 'column',
        flexGrow: 2,
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    },
    name: {
        fontSize: 36,
    },
    link: {
        fontSize: 12,
        color: 'black',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    },
});
function Header(props) {
    const user = props.user;
    return (
        <View style={styles.container}>
            <View style={styles.detailColumn}>
                <Text style={styles.name}>{user.name}</Text>
            </View>
            <View style={styles.linkColumn}>
                <Link style={styles.link}>Telefone: {user.cellphone}</Link>
                <Link style={styles.link}>Email: {user.email}</Link>
                <Link style={styles.link}>Endereço: {user.address}</Link>
                <Link style={styles.link}>Cidade: {user.city} - {user.state}</Link>
            </View>
        </View>
    );
}
export default Header;