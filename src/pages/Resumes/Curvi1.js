import React from 'react';
import ReactToPdf from "react-to-pdf";
import './curvi1.css'
const ref = React.createRef();
const options = {
    orientation: 'p',
    unit: 'px',
    format: 'a4',
    floatPrecision: 'smart'
};
const Curvi1 = (props) => {
    const dados = props.user;
    // https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
    // Arrumar o HTML
    return (
        <>
            <div id="curvi1" className="container-fluid text-dark" style={{ height: '100%', width: '50rem', backgroundColor: "#FFF" }} ref={ref} >
                        <div className="text-center " style={{
                    backgroundColor: "#C7DAED",
                    width: "40%",
                    position: 'absolute',
                    left: '25rem',
                }}>
                            <h1 className="font-weight-light" style={{color: "#000000"}}>
                               { dados.name}
            </h1>
                            <span style={{color: "#000000"}} className="h5">
                               { dados.age}
            </span>
                        </div>
                
                    <div className="quadrado">

                        <div className="container">
                            <div className="row">
                                <div className="col-6 my-5 ">
                                    <h5 style={{color:"#6E7C8E"}}>CONTATO</h5>

                                    <span>
                                        {dados.cellphone}
                    </span><br />
                                    <span>
                                        {dados.email}
                    </span><br />
                                    <span>
                                       { dados.address}
                    </span><br />

                                    <span>
                                        dados.linkedln_link
                    </span><br />


                                </div>
                                <div className="col-6 my-5 ">
                                    <h5 style={{color:"#6E7C8E"}}>OBJETIVO</h5>

                                    <p className="mr-4">
                                        dados.goal
                    </p>
                                </div>
                            </div>
                            <hr width="50%" style={{marginLeft:"1", height:"0.2rem"}} color="black" />

                            <div className="row">
                                <div className="col-6 my-5  ">
                                    <h5 style={{color:"#6E7C8E"}}>FORMAÇÃO</h5>
                                    <span>
                                        dados.scholarity - dados.courseName
                    </span><br />
                                    <span>
                                        dados.courseSchool
                    </span><br />
                                    <span>
                                        dados.courseEndYear
                    </span><br />
                                </div>
                                <div className="col-6 my-5 ">
                                    <h5 style={{color:"#6E7C8E"}}>EXPERIÊNCIA</h5>
                                    <span>
                                        dados.companyOccupation - dados.companyName
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
                                <div className="col-6 my-5 ">
                                    <h5 style={{color:"#6E7C8E"}}>CURSOS</h5>
                                    <span>
                                        dados.language - dados.language_level
                    </span><br />
                                </div>

                            </div>
                            <div className="rodape">

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
export default Curvi1;