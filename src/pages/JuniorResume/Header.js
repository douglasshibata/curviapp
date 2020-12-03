import React from 'react';

import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
       // backgroundColor: '#DCDDDE',
        //backgroundColor: `#${Math.floor(Math.random() * 1000000)}`,
        marginTop:10,
        marginLeft:10,
    },
    headerName: {
        left: '4.75%',
        right: '1.01%',
        top: '1.39%',
        bottom: '88.04%',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: `#${Math.floor(Math.random() * 1000000)}`,
        //borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
        alignItems: 'stretch',
    },
    detailColumn: {
        flexDirection: 'column',
        flexGrow: 9,
        textTransform: 'uppercase',
        marginTop: 25,
        /* marginLeft: 15,
        marginRight: 15, */
    },
    linkColumn: {
        marginTop: 25,
        flexDirection: 'column',
        flexGrow: 2,
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    },
    name: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        lineHeight: '64px',
        textTransform: 'uppercase',
        color: '#414042',
        //color: `#${Math.floor(Math.random() * 1000000)}`,
    },
    scholarity: {
        fontSize: 12,
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
        <View>
            <View style={styles.headerName}>
                <Text style={styles.name}>{user.name}, {user.age}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.detailColumn}>
                    <Text style={styles.scholarity}>{user.scholarity}</Text>
                    <Text style={styles.scholarity}>{user.area} - {user.area_level}</Text>
                </View>
                <View style={styles.linkColumn}>
                    <Link style={styles.link}>Telefone: {user.cellphone}</Link>
                    <Link style={styles.link}>Email: {user.email}</Link>
                    <Link style={styles.link}>Endereço: {user.address}</Link>
                    <Link style={styles.link}>Cidade: {user.city} - {user.state}</Link>
                    <Text style={styles.link}>{(user.linkedln_link !== 'NOT_PRINT') ? `Linkedln: ${user.linkedln_link}` : ''}</Text>
                </View>
            </View>
        </View>
    );
}
export default Header;