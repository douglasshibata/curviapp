import React from 'react';
import '../../App.css';
import { Page, Text, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import ReactLoading from 'react-loading';
import Header from '../components/Header';
import Goal from '../components/Goal';
import Experience from '../components/Experience';
import Education from '../components/Education';
import ExtraCourse from '../components/ExtraCourse';
// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    color:'#000'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  footer: {
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: '20%',
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
});

function BasicResume(props) {
  const user = props.user;
  return (
    <div className="App">
      <PDFDownloadLink fileName={`${user.name}.pdf`} document={
            <Document>
              <Page size="A4" style={styles.page}>
                <Header user={user} />
                <Goal user={user} />
                <Education user={user} />
              <Experience user={user} />
              {(user.courses !== 'NOT_PRINT' )?  
                <ExtraCourse user={user} />:<></>}
                <Text style={styles.footer}>{user.name} - Candidato(a) ideal para a sua Empresa - Resume Made by Curvi</Text>
              </Page>
            </Document>
          }>
            {({ blob, url, loading, error }) =>
              loading ? <ReactLoading type='spin' color="black" height={'5vh'} width={'10vh'} />
                : <button type='button'>Baixar o Currículo</button>
            }
          </PDFDownloadLink> 
    </div>
  );
}

export default BasicResume;
