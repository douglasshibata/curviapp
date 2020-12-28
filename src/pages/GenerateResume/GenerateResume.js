import React, { useEffect, useState } from 'react';
import '../../App.css';
import api from '../../services/api';
import { Box, Form } from '../style';
import ReactLoading from 'react-loading';
import logo from '../../assets/bot.jpg';
//import BasicResume from '../BasicResume';
import AdmBasic from '../AdmResumes/AdmBasic';
import Admin from '../AdmResumes/Adm';
import EngResume from '../EngResume/EngResume';
import ProdResume from '../EngResume/ProdResume';
import SaudeResume from '../SaudeResume/SaudeResume';
import BiologiaResume from '../BiologiaResume/BiologiaResume';
import ResumeCurvi from '../ResumeCurvi/ResumeCurvi';
import Curvi1 from '../Resumes/Curvi1';
import Curvi2 from '../Resumes/Curvi2';
import ResumeCurvi3 from '../ResumeCurvi/ResumeCurvi3';
import Curvi4 from '../Resumes/Curvi4';
import Curvi5 from '../Resumes/Curvi5';
import Curvi6 from '../Resumes/Curvi6';
import Curvi7 from '../Resumes/Curvi7';
// import ResumeCurvi2 from '../ResumeCurvi/ResumeCurvi2';

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
  function mensagemAnimadora() {
    return (
      <Box>
        <p><b>{user.name.toUpperCase()}</b>,</p>
        <p>gerei esses modelos para você! </p>
        <p>Tenho certeza que com qualquer um deles você irá se destacar!</p>
      </Box>
    )
  }
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
            {error && email !== '' ? <p className='error'>Email Não encontrado, digite novamente</p> : <></>}
          </div>
        </Form>
        {loading ? <>
          {show &&
            <>
              {/* <BasicResume user={user} /> */}
              {user.area === 'Administraçãao' ?
                <>
                  {mensagemAnimadora()}
                  <Admin user={user} />
                  <AdmBasic user={user} />
                  <ResumeCurvi user={user} />
                </>
                :
                user.area === 'Engenharia' ?
                  <>
                    {mensagemAnimadora()}
                    <EngResume user={user} />
                    <ProdResume user={user} />
                    <ResumeCurvi user={user} />
                  </>
                  :
                  user.area === 'Saúde' ?
                    <>
                      {mensagemAnimadora()}
                      <SaudeResume user={user} />
                      <BiologiaResume user={user} />
                      <ResumeCurvi user={user} />
                      <Curvi1 user={user} />
                    </>
                    :
                    <>
                      {mensagemAnimadora()}
                      <Curvi7 user={user}/>
                      <Curvi1 user={user} />
                      <Curvi2 user={user} />
                      <ResumeCurvi3 user={user}/>
                      <Curvi4 user={user}/>
                      <Curvi5 user={user}/>
                      <Curvi6 user={user}/>
                      {/* <AdmBasic user={user} />
                      <Admin user={user} />
                      <SaudeResume user={user} />
                      <BiologiaResume user={user} />
                      <ProdResume user={user} />
                      <EngResume user={user} />
                      <ResumeCurvi user={user} />
                       <ResumeCurvi2 user={user}/> */}
                    </>
              }
            </>
          }
          <Form>
            <div className="content">
              <h1>Dados Pessoais</h1>
              <p>{user.name.toUpperCase()}, {user.age}</p>
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
              <p>{user.courseEndYear === 'Completo' ? user.courseEndYear : `Previsão de Conclusão: ${user.courseEndYear}`}</p>
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
            {(user.cientificResearch !== 'NOT_PRINT') ?
              <div className="content">
                <h2>Pesquisa Científica</h2>
                <p> {user.cientificResearch}</p>
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
