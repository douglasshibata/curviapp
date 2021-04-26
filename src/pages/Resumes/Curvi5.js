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
    // https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
    // Substituir HTML
    return (
        <>
            <div id="curvi5" className="container p-2" style={{ height: '100%', width: '50rem', backgroundColor: "#FFF" }} ref={ref} >
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
                                <span>
                                    <i className="fa fa-home"></i>
                                    &nbsp;
                        {dados.address}
                                </span><br />
                                <span>
                                    <i className="fa fa-envelope-o"></i>
                                    &nbsp;
                        {dados.email}
                                </span><br />
                            </div>
                            <div className="col-6 text-dark">
                                <span>
                                    <i className="fa fa-phone"></i>
                                    &nbsp;
                        {dados.cellphone}
                                </span>
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
                            <span>
                                {dados.scholarity} - {dados.courseName}
                            </span><br />
                            <span>
                                {dados.courseSchool}
                            </span><br />
                            <span>
                                {dados.courseEndYear}
                            </span><br />
                        </div>
                    </div>
                    <div className="mt-1 text-left">
                        <div className='p-2' style={{ backgroundColor: "#F0F0F0" }}>
                            <h5 className="font-weight-bold" style={{ color: "#465725" }}>Experiências</h5>
                        </div>
                        <div className="container p-2 text-dark">
                            <span>
                                {dados.companyOccupation} - dados.companyName
                </span><br />
                            <span>
                                dados.companyStartEnd
                </span><br />
                            <span>
                                dados.companyDescription
                </span><br />

                            <span>
                                dados.companyNameVolunteer
                </span><br />
                            <span>
                                dados.companyOccupationVolunteer
                </span><br />
                            <span>
                                dados.companyDescriptionVolunteer
                </span><br />
                            <span>
                                dados.companyStartEndVolunteer
                </span><br />

                        </div>
                    </div>

                    <div className="mt-4 text-left">
                        <div style={{ backgroundColor: "#F0F0F0" }}>
                            <h5 className="" style={{ color: "#465725" }}>Idiomas</h5>
                        </div>
                        <span>
                            dados.language - dados.language_level
            </span><br />
                    </div>



                    <div className="mt-4 text-left">
                        <div style={{ backgroundColor: "#F0F0F0" }}>
                            <h5 className="" style={{ color: "#465725" }}>Cursos</h5>
                        </div>
                        <hr width="70%" style={{ marginLeft: 0 }} />
                        <span>
                            dados.courses
            </span><br />
                        <span>
                            dados.cientificResearch
            </span><br />
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