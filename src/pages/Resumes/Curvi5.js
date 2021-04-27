import React from 'react';
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();
const options = {
    orientation: 'p',
    unit: 'px',
    format: 'a4',
    floatPrecision: 'smart'
};
const Curvi5 = (props) => {
    const dados = props.user;
    return (
        <>
            <div id="curvi5" style={{ height: '100%', width: '50rem', backgroundColor: "#FFF" }} ref={ref} >
                <div className="container p-2">
                    <div className="container text-center mt-4">
                        <h1 className="font-weight-bolder" style={{ color: "#465725" }}>
                            {dados.name}
                        </h1>
                        <span style={{ color: "#465725" }} className="h5 font-weight-bold">
                            {dados.age}
                        </span>
                    </div>
                    <div className="container">
                        <div className="mt-1 text-left">
                            <div className='p-2' style={{ backgroundColor: "#465725" }}>
                                <h5 className="font-weight-light" style={{ color: "#FFF" }}>Objetivo</h5>
                            </div>
                            <p className="container-fluid text-dark">
                                {dados.goal}</p>
                        </div>
                        <div className="mt-1 text-left">
                            <div className='p-2' style={{ backgroundColor: "#465725" }}>
                                <h5 className="font-weight-light" style={{ color: "#FFF" }}>Contato</h5>
                            </div>
                            <div className="row container p-2 py-4">
                                <div className="col-6 text-dark">
                                    <i className="fa fa-home"></i>
                                    &nbsp;
                        {dados.address}
                                    <br />
                                    <i className="fa fa-envelope-o"></i>
                                    &nbsp;
                        {dados.email}
                                    <br />
                                </div>
                                <div className="col-6 text-dark">

                                    <i className="fa fa-phone"></i>
                                    &nbsp;
                        {dados.cellphone}
                                    <br />
                                    {dados.linkedln_link && dados.linkedln_link !== "NOT_PRINT" ?
                                        <span>
                                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    &nbsp;
                        {dados.linkedln_link}
                                        </span>
                                        : <></>}

                                    <br />
                                </div>
                            </div>

                        </div>
                        <div className="mt-1 text-left">
                            <div className='p-2' style={{ backgroundColor: "#F0F0F0" }}>
                                <h5 className="font-weight-bold" style={{ color: "#465725" }}>Formação</h5>
                            </div>
                            <div className="container p-2 text-dark">
                                {dados.scholarity} - {dados.courseName}<br />
                                {dados.courseSchool}<br />
                                {dados.courseEndYear}<br />
                            </div>
                        </div>
                        {dados.companyOccupation !== 'NOT_PRINT' && dados.companyOccupation ?
                            <div className="mt-1 text-left">
                                <div className='p-2' style={{ backgroundColor: "#F0F0F0" }}>
                                    <h5 className="font-weight-bold" style={{ color: "#465725" }}>Experiências</h5>
                                </div>
                                <div className="container p-2 text-dark">

                                    {dados.companyOccupation} - {dados.companyName}
                                    <br />

                                    {dados.companyStartEnd}
                                    <br />

                                    {dados.companyDescription}
                                    <br />


                                    {dados.companyNameVolunteer !== 'NOT_PRINT' && dados.companyNameVolunteer ?
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

                        {dados.language !== 'NOT_PRINT' && dados.language ?
                            <div className="mt-4 text-left">
                                <div className='p-2' style={{ backgroundColor: "#F0F0F0" }}>
                                    <h5 className="" style={{ color: "#465725" }}>Idiomas</h5>
                                </div>
                                <span className='container p-2 text-dark'>
                                    {dados.language} - {dados.language_level}
                                </span>
                            </div>
                            : <></>}



                        {dados.courses !== 'NOT_PRINT' && dados.courses ?

                            <div className="mt-4 text-left">
                                <div className='p-2' style={{ backgroundColor: "#F0F0F0" }}>
                                    <h5 className="" style={{ color: "#465725" }}>Cursos</h5>
                                </div>
                                <div className='container p-2 text-dark'>
                                    <p>
                                        {dados.courses !== 'NOT_PRINT' && dados.courses ? dados.courses : <></>}
                                    </p>
                                    <p>
                                        {dados.cientificResearch !== 'NOT_PRINT' && dados.cientificResearch ? dados.cientificResearch : <></>}
                                    </p>

                                </div>
                            </div>
                            : <></>}

                    </div>
                </div>
            </div>

            <div className='container p-4'>
                <ReactToPdf targetRef={ref} filename={`${dados.name}.pdf`} options={options} >
                    {({ toPdf }) => <button style={{ width: '70%' }} className='btn btn-dark btn-lg' onClick={toPdf}><i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i> Baixar Currículo</button>}
                </ReactToPdf>
            </div>
        </>
    )
}
export default Curvi5;