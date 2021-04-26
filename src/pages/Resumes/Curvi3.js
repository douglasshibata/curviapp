import React from 'react';
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();
const options = {
    orientation: 'p',
    unit: 'px',
    format: 'a4',
    floatPrecision: 'smart'
};
const Curvi3 = (props) => {
    const dados = props.user;
    // https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
    return (
        <>
            <div id="curvi3" className="container-fluid" style={{ height: '100%', width: '50rem', backgroundColor: "#FFF" }} ref={ref} >
                <div className="p-4 container" style={{backgroundColor: "#CEDFE4"}}>
                    <div className="container text-center mt-4">
                        <h1 className="font-weight-light display-4" style={{color: "#3B3F3E;"}}>
                           {dados.name}
            </h1>
                        <span style={{color: "#3B3F3E;"}} className="h4">
                            {dados.age}
            </span>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="mt-4">
                                <div className=" text-center" style={{paddingLeft: "15px", paddingTop:"5px", paddingBottom: "5px"}}>
                                    <h5 className="font-weight-light" style={{color:"#3B3F3E"}}>Objetivo</h5>
                                </div>
                                <p className="container-fluid text-justify">
                                    dados.goal
                    </p>
                            </div>
                        </div>
                        <div className="col-6">

                            <div className="mt-4">
                                <div className=" text-center">
                                    <h5 className="font-weight-light" style={{color:"#3B3F3E"}}>Contato</h5>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        dados.cellphone <br />
                            dados.address <br />
                                    </div>
                                    <div className="col-6">
                                        dados.email <br />

                            dados.linkedln_link <br />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr color="#CEDFE4" />
                    <div className="row">
                        <div className="col-2 mt-4">
                            <div className="container m-2" style={{color:"#CEDFE4"}}>
                                <span>
                                    dados.courseEndYear
                    </span><br />
                            </div>
                        </div>
                        <div className="col-10">
                            <h5 style={{color:"#3B3F3E"}}>Formação</h5>
                            <span>
                                dados.scholarity - dados.courseName
                    <br />
                    dados.courseSchool
                </span><br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 mt-4">
                            <div className="container m-2" style={{color:"#CEDFE4"}}>
                                <span>
                                    dados.companyStartEnd
                    </span><br />
                            </div>
                        </div>
                        <div className="col-10 mt-2">
                            <h5 style={{color:"#3B3F3E"}}>Experiências</h5>
                            <span>
                                dados.companyOccupation - dados.companyName
                    <br />
                    dados.companyDescription
                </span><br />
                        </div>

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


                    <div className="row">
                        <div className="col-2 mt-4">
                            <div className="container m-2">
                                <span>

                                </span><br />
                            </div>
                        </div>
                        <div className="col-10 mt-2">
                            <h5 style={{color:"#3B3F3E"}}>Idiomas</h5>
                            <span>
                                dados.language - dados.language_level
                    <br />
                            </span><br />
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-2 mt-4">
                            <div className="container m-2">
                                <span>

                                </span><br />
                            </div>
                        </div>
                        <div className="col-10 mt-2">
                            <h5 style={{color:"#3B3F3E"}}>Atividades Complementares</h5>
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




                    <div className="row">
                        <div className="col-2 mt-4">
                            <div className="container m-2">
                                <span>

                                </span><br />
                            </div>
                        </div>
                        <div className="col-10 mt-2">
                            <h5 style={{color:"#3B3F3E"}}>Cursos</h5>
                            <span>
                                dados.courses
                </span><br />
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-2 mt-4">
                            <div className="container m-2">
                                <span>

                                </span><br />
                            </div>
                        </div>
                        <div className="col-10 mt-2">
                            <h5 style={{color:"#3B3F3E"}}>Pesquisa</h5>
                            <span>
                                dados.cientificResearch
                </span><br />
                        </div>
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
export default Curvi3;