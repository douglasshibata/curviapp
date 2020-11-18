import React, { useEffect, useState } from 'react';
import '../App.css';
import api from '../services/api';
import { Form } from './style';
import ReactLoading from 'react-loading';
import logo from '../assets/logo.gif';
import BasicResume from './BasicResume/BasicResume';
import JuniorResume from './JuniorResume/JuniorResume';
import SeniorResume from './SeniorResume/SeniorResume';
import PlenoResume from './PlenoResume/PlenoResume';

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
  function hasXp() {
    if (
      user.companyOccupation !== 'NOT_PRINT' ||
      user.companyStartEnd !== 'NOT_PRINT' ||
      user.companyName !== 'NOT_PRINT' ||
      user.companyDescription !== 'NOT_PRINT') {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bem vindo a Curvi</p>
        <Form>
          <div className="content">
            <p><label>Confirme o seu Email para baixar o Currículo</label></p>
            <input type="email" name="email" onChange={e => setEmail(e.target.value)} id="email" />
          </div>
        </Form>
        {loading ? <>
          {show &&
            (user.area_level === 'Estágiario(a)' || user.area_level === 'Jovem Aprendiz') ? <BasicResume user={user} />
            :
            user.area_level === 'Júnior' ? <JuniorResume user={user} />
              :
              user.area_level === 'Sênior' ? <SeniorResume user={user} />
                :
                user.area_level === 'Pleno' ? <PlenoResume user={user} />
                  :
                  <></>}
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
            {hasXp() ?
              <div className="content">
                <h2>Experiencia</h2>
                {user.companyOccupation !== 'NOT_PRINT' ? <p> Cargo: {user.companyOccupation} </p> : <></>}
                {user.companyStartEnd !== 'NOT_PRINT' ? <p> Período: {user.companyStartEnd} </p> : <></>}
                <p>{user.companyName}</p>
                {user.companyDescription !== 'NOT_PRINT' ? <p>{user.companyDescription}</p> : <></>}
              </div> : <></>}
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
              <p>{user.grade}</p>
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

export default LandingPage;
