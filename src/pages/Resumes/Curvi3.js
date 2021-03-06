import React from 'react';
import ReactToPdf from 'react-to-pdf';
import './curvi3.css';
const ref = React.createRef();

const Curvi3 = (props) => {
    const options = {
        orientation: 'p',
        unit: 'px',
        format: 'a4',
        floatPrecision: 'smart'
    };
    const dados = props.user;
    return (
        <>
            <div id='curvi3' className='container-fluid text-dark' style={{ height: '100%', width: '50rem', backgroundColor: '#FFF' }} ref={ref} >
                <div className='text-center mx-2 my-1 p-1' style={{
                    backgroundColor: '#000000',
                    width: '40%',
                    position: 'absolute',
                    left: '30%',
                    right: '25%',
                }}>
                    <h1 className='font-weight-light' style={{ color: 'white' }}>
                        {dados.name}
                    </h1>
                    <span style={{ color: 'white' }} className='h5'>
                        {dados.age}
                    </span>
                </div>
                <div className='m-4' style={{ borderStyle: 'solid' }}>
                    <div className='row' style={{ marginTop: '10rem' }}>
                        <div className='col-6 text-right'>
                            <h5 style={{ color: '#3B3F3E' }}>OBJETIVO</h5>
                            <p className='mx-2'>
                                {dados.goal}
                            </p>
                        </div>
                        <div className='col- borda'>
                        </div>
                        <div className='col-5 text-left'>
                            <h5 style={{ color: '#3B3F3E' }}>CONTATO</h5>
                            <div className='m-2'>
                                {dados.cellphone}
                                <br />
                                {dados.email}
                                <br />
                                {dados.address}
                                <br />
                                {dados.linkedln_link !== 'NOT_PRINT' && dados.linkedln_link ?
                                    <span className=''>
                                        {dados.linkedln_link}
                                        <br />
                                    </span>
                                    : <></>}
                                <br />
                            </div>

                        </div>
                    </div>
                    <div className='row' style={{ marginTop: '5rem' }}>
                        <div className='col-6 text-right'>
                            <h5 style={{ color: '#3B3F3E' }}>FORMAÇÃO</h5>
                            <div className='m-2'>
                                {dados.scholarity} - {dados.courseName}
                                <br />
                                {dados.courseSchool}
                                <br />
                                {dados.courseEndYear}
                                <br />
                            </div>
                        </div>

                        <div className='col- borda'>
                        </div>
                        {dados.companyOccupation !== 'NOT_PRINT' && dados.companyOccupation ?
                            <div className='col-5 text-left'>
                                <h5 style={{ color: '#3B3F3E' }}>EXPERIÊNCIA</h5>
                                <div className='m-2'>
                                    {dados.companyOccupation} - {dados.companyName}
                                    <br />
                                    {dados.companyStartEnd}
                                    <br />
                                    {dados.companyDescription}
                                    <br />
                                    {dados.companyDescriptionVolunteer !== 'NOT_PRINT' && dados.companyDescriptionVolunteer ?

                                        <div>
                                            {dados.companyNameVolunteer}
                                            <br />

                                            {dados.companyOccupationVolunteer}
                                            <br />

                                            {dados.companyDescriptionVolunteer}
                                            <br />
                                            {dados.companyStartEndVolunteer}
                                            <br />
                                        </div>
                                        : <></>}
                                </div>
                            </div>
                            : <></>}

                    </div>
                    <div className='row' style={{ marginTop: '2rem' }}>
                        {dados.courses && dados.courses !== 'NOT_PRINT' ?
                            <>
                                <div className='col-6 text-right'>
                                    <h5 style={{ color: '#3B3F3E' }}>Cursos</h5>
                                    <div>
                                        {dados.courses}
                                    </div>
                                </div>

                                <div className='col- borda' />
                            </>
                            : <></>}
                        {dados.language !== 'NOT_PRINT' && dados.language ?
                            <div className='col-5 text-left'>
                                <h5 style={{ color: '#3B3F3E' }}>Idiomas</h5>
                                <div>
                                    {dados.language} - {dados.language_level}
                                    <br />
                                </div>
                            </div>
                            : <></>}

                    </div>
                </div>


            </div>
            <div className='container p-4'>
                <ReactToPdf targetRef={ref} filename={`${dados.name}.pdf`} options={options} >
                    {({ toPdf }) => <button style={{ width: '70%' }} className='btn btn-dark btn-lg' onClick={toPdf}><i className='fa fa-arrow-circle-o-up' aria-hidden='true'></i> Baixar Currículo</button>}
                </ReactToPdf>
            </div>
        </>
    );
};
export default Curvi3;