import React from 'react';
import ReactToPdf from 'react-to-pdf';
import './curvi1.css';

const ref = React.createRef();
const options = {
  orientation: 'p',
  unit: 'px',
  format: 'a4',
  floatPrecision: 'smart',
};
function Curvi1(props) {
  const dados = props.user;
  return (
    <>
      <div id="curvi1" className="container-fluid text-dark" style={{ height: '100%', width: '50rem', backgroundColor: '#FFF' }} ref={ref}>
        <div
          className="text-center m-2 "
          style={{
            backgroundColor: '#C7DAED',
            width: '40%',
            position: 'absolute',
            left: '25rem',
          }}
        >
          <h1 className="font-weight-bold">
            {dados.name}
          </h1>
          <span style={{ color: '#000000' }} className="h5">
            {dados.age}
          </span>
        </div>

        <div className="quadrado p-1">
          <div className="container p-4">
            <div className="row mt-3">
              <div className="col-6 mt-5 text-left">
                <h5 className="font-weight-bold" style={{ color: '#6E7C8E' }}>CONTATO</h5>
                <div className="text-dark container">
                  {dados.cellphone}
                  <br />
                  {dados.email}
                  <br />
                  {dados.address}
                  <br />
              {dados.linkedln_link && dados.linkedln_link !== 'NOT_PRINT'?
              <div>
                  {dados.linkedln_link}
                <br />
              </div>:<></>}
                </div>
              </div>
              <div className="col-6 mt-5 text-left ">
                <h5 className="font-weight-bold" style={{ color: '#6E7C8E' }}>OBJETIVO</h5>
                <p className="text-justify text-dark">
                  {dados.goal}
                </p>
              </div>
            </div>
            <hr
              style={{
                height: '1px', borderWidth: 1, backgroundColor: '#000', borderStyle: 'solid',
              }}
              className="mx-5"
            />
            <div className="row">
              <div className="col-6 my-3 text-left ">
                <h5 className="font-weight-bold" style={{ color: '#6E7C8E' }}>FORMAÇÃO</h5>
                <div className="text-dark">
                  {dados.scholarity}
                  {' '}
                  -
                  {dados.courseName}
                  <br />
                  {dados.courseSchool}
                  <br />
                  {dados.courseEndYear}
                </div>
                <br />
              </div>
              {dados.companyDescription&& dados.companyDescription !== 'NOT_PRINT'? 
              <div className="col-6 my-3 text-left ">
                <h5 className="font-weight-bold" style={{ color: '#6E7C8E' }}>EXPERIÊNCIA</h5>
                <div className="text-dark">
                  {dados.companyOccupation}
                  {' '}
                  -
                  {dados.companyName}
                  <br />
                  {dados.companyStartEnd}
                  <br />
                  {dados.companyDescription}
                </div>
              </div>
          :''}
            </div>
            <div className="row">
              {dados.language && dados.language !== 'NOT_PRINT'
                ? (
                  <div className="col-6 my-3 text-left">
                    <h5 className="font-weight-bold" style={{ color: '#6E7C8E' }}>IDIOMAS</h5>
                    <span>
                      {dados.language}
                      {' '}
                      -
                      {dados.language_level}
                    </span>
                    <br />
                  </div>
                ) : ''}
              {dados.companyNameVolunteer && dados.companyNameVolunteer !== 'NOT_PRINT'

                ? (
                  <div className="col-6 my-3 text-left ">
                    <h5 className="font-weight-bold" style={{ color: '#6E7C8E' }}>ATIVIDADES COMPLEMENTARES</h5>
                    <div className="text-left">
                      {dados.companyNameVolunteer}
                      <br />
                      {dados.companyOccupationVolunteer}
                      <br />
                      {dados.companyDescriptionVolunteer}
                      <br />
                      {dados.companyStartEndVolunteer}
                    </div>

                  </div>
                ) : ''}
            </div>
            <div className="row">
              {dados.courses && dados.courses !== 'NOT_PRINT'
                ? (
                  <div className="col-6 my-3 text-left">
                    <h5 className="font-weight-bold" style={{ color: '#6E7C8E' }}>CURSOS</h5>
                    <span>
                      {dados.courses}
                    </span>
                    <br />
                  </div>
                ) : ''}
              {dados.cientificResearch && dados.cientificResearch !== 'NOT_PRINT'

                ? (
                  <div className="col-6 my-3 text-left ">
                    <h5 className="font-weight-bold" style={{ color: '#6E7C8E' }}>ATIVIDADES COMPLEMENTARES</h5>
                    <div className="text-left">
                      {dados.cientificResearch}
                    </div>

                  </div>
                ) : ''}
            </div>
            <div className="my-2 rodape" />
          </div>
        </div>
      </div>
      <div className="container p-4">
        <ReactToPdf targetRef={ref} filename={`${dados.name}.pdf`} options={options}>
          {({ toPdf }) => (
            <button style={{ width: '70%' }} className="btn btn-dark btn-lg" onClick={toPdf}>
              <i className="fa fa-arrow-circle-o-up" aria-hidden="true" />
              {' '}
              Baixar Currículo
            </button>
          )}
        </ReactToPdf>
      </div>
    </>
  );
}
export default Curvi1;
