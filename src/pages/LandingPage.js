import React, { useEffect, useState } from 'react';
import '../App.css';
import api from '../services/api';
import { Form } from './style';
import { Page, Text, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import ReactLoading from 'react-loading';
import logo from '../assets/logo.gif';
import Goal from './components/Goal';
import ExtraCourse from './components/ExtraCourse';
// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  image: {
    marginBottom: 10,
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
});

function LandingPage() {
  const [user, setUser] = useState([])
  const [show, setHide] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get(`/user`, { headers: { email: email } })
        setUser(response.data)
        setHide(true)
        setLoading(true)
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [email])
  console.log(user);

  return (
    <div className="App">
      <header className="App-header-1">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bem vindo a Curvi</p>
        <Form>
          <div className="content">
            <p><label>Confirme o seu Email para baixar o Currículo</label></p>
            <input type="email" name="email" onChange={e => setEmail(e.target.value)} id="email" />
          </div>
        </Form>
        {loading ? <>

          {show && <PDFDownloadLink fileName={`${user.name}.pdf`} document={
            <Document>
              <Page size="A4" style={styles.page}>
                <Header user={user} />
                <Goal user={user} />
                <Education user={user} />
                <Experience user={user} />
                <ExtraCourse user={user} />
                <Text style={styles.footer}>{user.name} - Candidato(a) ideal para a sua Empresa - Resume Made by Curvi</Text>
              </Page>
            </Document>
          }>
              {({ blob, url, loading, error }) =>
              loading ? <ReactLoading type='spin' color="black" height={'5vh'} width={'10vh'} />
                : <button type='button'>Baixar o Currículo</button>

            }
          </PDFDownloadLink>
          }
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
            <div className="content">
              <h2>Experiencia</h2>
              <p> Cargo: {user.companyOccupation} </p>
              <p> Período: {user.companyStart} - {user.companyEnd} </p>
              <p>{user.companyName}</p>
              <p> {user.companyDescription}</p>
            </div>
            <div className="content">
              <h2>Curso</h2>
              <p>{user.courseName}</p>
              <p>{user.courseSchool}</p>
              <p>{user.courseStartYear} - {user.courseEndYear}</p>
            </div>
            <div className="content">
              <h2>Formação Complementar</h2>
              <p>{user.courses}</p>
            </div>
          </Form></> : <ReactLoading type='bars' color="black" height={'5vh'} width={'10vh'} />}
      </header>
    </div>
  );
}

export default LandingPage;
