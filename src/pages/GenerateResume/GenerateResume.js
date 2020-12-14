import React, { useEffect, useState } from 'react';
import '../../App.css';
import api from '../../services/api';
import { Form } from '../style';
import ReactLoading from 'react-loading';
import logo from '../../assets/bot.jpg';
//import BasicResume from '../BasicResume';
import AdmBasic from '../AdmResumes/AdmBasic';
import Admin from '../AdmResumes/Adm';
import EngResume from '../EngResume/EngResume';
import ProdResume from '../EngResume/ProdResume';
import SaudeResume from '../SaudeResume/SaudeResume';

function GenerateResume() {
  const [user, setUser] = useState([]);
  const [show, setHide] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get(`/api/user`, { headers: { email: email } })
        setUser(response.data)
        setHide(true)
        setLoading(true)
        setError(false)
      } catch (error) {
        setError(true)
        console.log(error);
      }
    };
    getUser();
  }, [email])
  return (
    <div className="App">
      <header className="App-header">
        {loading === false ?
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Bem-vindo ao Curvi</p>
          </>
          : <></>}
        <Form>
          <div className="content">
            <p><label>Digite o Email que foi colocado na nossa conversa.</label></p>
            <input type="email" placeholder='Digite o seu email' name="email" onChange={e => setEmail(e.target.value)} id="email" autoFocus required />
            <p>E aguarde o botão aparecer</p>
            {error && email !== '' ? <p className='error'>Email Não encontrado, Digite novamente</p> : <></>}
          </div>
        </Form>
        {loading ? <>
          {show &&
            <>
              {/* <BasicResume user={user} /> */}
              {user.area === 'Administração' ?
                <>
                  <Admin user={user} />
                  <AdmBasic user={user} />
                </>
                :
                user.area === 'Engenharia' ?
                <>
                    <EngResume user={user} />
                    <ProdResume user={user} />
                  </>
                  :
                  user.area === 'Saúde' ?
                  <>
                      <SaudeResume user={user} />
                    </>
                    :
                    <>
                    <Admin user={user} />
                    <AdmBasic user={user} />
                      <ProdResume user={user} />
                      <SaudeResume user={user} />
                    </>
              }
            </>
          }
          <Form>
            <div className="content">
              <h1>Dados Pessoais</h1>
              <p>{user.name}, {user.age}</p>
              <p>{user.area} - {user.area_level}</p>
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
              {user.companyOccupation !== 'NOT_PRINT' ? <p> Cargo: {user.companyOccupation} </p> : <></>}
              {user.companyStartEnd !== 'NOT_PRINT' ? <p> Período: {user.companyStartEnd} </p> : <></>}
              <p>{user.companyName}</p>
              {user.companyDescription !== 'NOT_PRINT' ? <p>{user.companyDescription}</p> : <></>}
            </div>
            <div className="content">
              <h2>Curso</h2>
              <p>{user.courseName}</p>
              <p>{user.courseSchool}</p>
              <p>{user.courseEndYear}</p>
            </div>
            {(user.courses !== 'NOT_PRINT') ?
              <div className="content">
                <h2>Formação Complementar</h2>
                <p>{user.courses}</p>
              </div> : <></>}
            {(user.linkedln_link !== 'NOT_PRINT') ?
              <div className="content">
                <h2>Midias Sociais</h2>
                <p> <a href={user.linkedln_link} target='_blank' rel="noreferrer" >{user.linkedln_link}</a></p>
              </div> : <></>}
            <div className="content">
              <h2>Feedback</h2>
              <p>{user.feedback}</p>
              <p>NOTA: {user.grade}</p>
            </div>
            <div className="content">
              <h2>Criado em</h2>
              <p>{user.created_at}</p>
            </div>
          </Form></> : <ReactLoading type='bars' color="black" height={'5vh'} width={'10vh'} />}
      </header>
    </div>
  );
}

export default GenerateResume;
