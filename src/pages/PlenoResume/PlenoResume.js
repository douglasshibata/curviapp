import React from 'react';
import '../../App.css';
import { Page, Text, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import Header from './Header';
import Experience from './Experience';
import Education from './Education';
import ReactLoading from 'react-loading';
import Goal from './Goal';
import ExtraCourse from './ExtraCourse';
import SocialMedia from './SocialMedia';
// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    color: '#704'
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
    textAlign: 'center',
    marginTop: '50%',
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
});

function PlenoResume(props) {
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
                {(user.linkedln_link !== 'NOT_PRINT')?
                <SocialMedia user={user} />:<></>}
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

export default PlenoResume;
