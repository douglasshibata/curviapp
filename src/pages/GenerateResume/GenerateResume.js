import React, { useEffect, useState } from 'react';
import '../../App.css';
import api from '../../services/api';
import { Box, Form } from '../style';
import ReactLoading from 'react-loading';
import logo from '../../assets/bot.jpg';
import Curvi1 from '../Resumes/Curvi1';
import Curvi2 from '../Resumes/Curvi2';
import ResumeCurvi3 from '../ResumeCurvi/ResumeCurvi3';
import Curvi4 from '../Resumes/Curvi4';
import Curvi5 from '../Resumes/Curvi5';
import Curvi6 from '../Resumes/Curvi6';
import Curvi7 from '../Resumes/Curvi7';
import Curvi8 from '../Resumes/Curvi8';
import Curvi9 from '../Resumes/Curvi9';
import Curvi10 from '../Resumes/Curvi10';
import Curvi11 from '../Resumes/Curvi11';
import Curvi12 from '../Resumes/Curvi12';
import Curvi13 from '../Resumes/Curvi13';

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
        setUser(response.data.user)
        setHide(true)
        setLoading(true)
        setError(false)
        console.log(response.data)
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
              {user.area === 'Administração' ?
                <>
                  {mensagemAnimadora()}
                  <Curvi5 user={user}/>
                  <Curvi6 user={user}/> 
                  <Curvi7 user={user}/>
                </>
                :
                user.area === 'Engenharia' ?
                <>
                    {mensagemAnimadora()}
                    
                    <ResumeCurvi3 user={user}/>
                    <Curvi4 user={user}/>
                    <Curvi5 user={user}/>
                    <Curvi6 user={user}/>
                  </>
                  :
                  user.area === 'Saúde' ?
                  <>
                      {mensagemAnimadora()}
                      <Curvi1 user={user} />
                      <Curvi2 user={user} />
                    </>
                    :
                    <>
                      {mensagemAnimadora()}
                      <Curvi2 user={user} />
                      {/* 
                      <Curvi13 user={user}/>
                      <Curvi12 user={user}/>
                      <Curvi11 user={user}/>
                      <Curvi10 user={user}/> 
                      <Curvi4 user={user}/>
                      <Curvi1 user={user} />
                      <Curvi9 user={user}/>*/}
                      <Curvi5 user={user}/>
                      <ResumeCurvi3 user={user}/>
                      <Curvi6 user={user}/> 
                      {/* <Curvi7 user={user}/> */}
                      <Curvi8 user={user} />
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
