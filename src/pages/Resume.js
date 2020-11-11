import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.jpeg';
import '../App.css';
import api from '../services/api';
import { Form } from './style';
import { useParams } from 'react-router-dom';
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
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
    fontSize: 24,
  },
  link: {
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

function Resume() {
  const [user, setUser] = useState([])
  let { id } = useParams()
  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get(`/user/${id}`)
        setUser(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [id])
  console.log(user);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form>
          <div className="content">
            <h1>Dados Pessoais</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>Celular: {user.cellphone}</p>
            <p>Endereço: {user.address}</p>
            <p>{user.city} - {user.state}</p>
          </div>
          <div className="content">
            <h2>Objetivo</h2>
            <p> {user.goal} </p>
          </div>
        </Form>
      </header>
      <PDFViewer>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.container}>
              <View style={styles.detailColumn}>
                <Text style={styles.name}>{user.name}</Text>
              </View>
              <View style={styles.linkColumn}>
                <Text style={styles.link}>{user.email}</Text>
              </View>
            </View>
            <Text style={styles.footer}>O melhor Candidato</Text>
          </Page>
        </Document>
        </PDFViewer>
    </div>
  );
}

export default Resume;