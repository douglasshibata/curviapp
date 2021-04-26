import React from 'react';
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();
const options = {
    orientation: 'p',
    unit: 'px',
    format: 'a4',
    floatPrecision: 'smart'
};
const Curvi2 = (props) => {
    const dados = props.user;
    // https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
    return (
        <>
            <div id="curvi2" style={{ height: '100%', width: '50rem', backgroundColor: "#FFF" }} ref={ref} >
                <div className="p-4 text-center" style={{ backgroundColor: '#6E7C8E' }}>
                    <h1 className="text-white">
                        {dados.name}
                    </h1>
                    <hr color="#FFF" />
                    <span className="text-white h5">
                        {dados.age}
                    </span>
                </div>
                <div className="container" style={{ marginTop: '50px', color: "#6E7C8E" }}>
                    <div className="row">
                        <div className="col-6">
                            <h5 style={{ color: "#6E7C8E" }}>OBJETIVO</h5>
                            <hr width="70%" style={{ marginLeft: '10%' }} />

                            <p className="mr-4">
                                {dados.goal}
                            </p>
                        </div>
                        <div className="col-6">
                            <h5 style={{ color: '#6E7C8E' }}>FORMAÇÃO</h5>
                            <hr width="70%" style={{ marginLeft: '10%' }} />

                            <span>
                                {dados.scholarity}  - {dados.courseName}
                            </span><br />
                            <span>
                                {dados.courseSchool}
                            </span><br />
                            <span>
                                {dados.courseEndYear}
                            </span><br />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6 mt-4">
                            <h5 style={{ color: '#6E7C8E' }}>CONTATO</h5>
                            <hr width="70%" style={{ marginLeft: '10%' }} />
                            <span>
                                <i class="fa fa-phone" aria-hidden="true"></i>
                            &nbsp;
                                {dados.cellphone}
                            </span><br />
                            <span>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            &nbsp;
                                {dados.email}
                            </span><br />
                            <span>
                                <i class="fa fa-home" aria-hidden="true"></i>
                            &nbsp;
                                {dados.address}
                            </span><br />
                            {dados.linkedln_link !== 'NOT_PRINT' && dados.linkedln_link ?
                                <span>
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                    &nbsp;
                                    {dados.linkedln_link}
                                    <br />
                                </span>
                                : <></>}
                        </div>
                        {dados.companyOccupation && dados.companyName !== 'NOT_PRINT' ?
                            <div className="col-6 mt-4">
                                <h5 style={{ color: '#6E7C8E' }}>EXPERIÊNCIA</h5>
                                <hr width="70%" style={{ marginLeft: '10%' }} />
                                <div className='text-center'>
                                <span>
                                    {dados.companyOccupation}  - {dados.companyName}
                                </span><br />
                                <span>
                                    {dados.companyStartEnd}
                                </span><br />
                                <span>
                                    {dados.companyDescription}
                                </span><br />
                                </div>
                                {dados.companyNameVolunteer && dados.companyOccupationVolunteer !== 'NOT_PRINT' ?
                                <div className='text-center'>
                                        <span>
                                            {dados.companyNameVolunteer}
                                        </span><br />
                                        <span>
                                            {dados.companyOccupationVolunteer}
                                        </span><br />
                                        <span>
                                            {dados.companyDescriptionVolunteer}
                                        </span><br />
                                        <span>
                                            {dados.companyStartEndVolunteer}
                                        </span><br />
                                    </div>

                                    : <></>}
                            </div>
                            : <></>}
                    </div>
                    {dados.language && dados.language !== 'NOT_PRINT' ?
                        <div className="row">
                            <div className="col-6 mt-4">
                                <h5 style={{ color: '#6E7C8E' }}>IDIOMAS</h5>
                                <hr width="70%" style={{ marginLeft: '10%' }} />
                                <span>
                                    {dados.language}  - {dados.language_level}
                                </span><br />
                            </div>
                            {dados.cientificResearch && dados.cientificResearch !== "NOT_PRINT" ?
                                <div className="col-6 mt-4">
                                    <h5 style={{ color: '#6E7C8E' }}>ATIVIDADES COMPLEMENTARES</h5>
                                    <hr width="70%" style={{ marginLeft: '10%' }} />

                                    <span>
                                        {dados.courses}
                                    </span><br />
                                    <span>
                                        {dados.cientificResearch}
                                    </span><br />
                                </div>
                                : <></>}
                        </div>
                        : <></>}
                </div>
            </div>
            <div className='container p-4'>
                <ReactToPdf targetRef={ref} filename={`${dados.name}.pdf`} options={options} >
                    {({ toPdf }) => <button style={{ width: '70%' }} className='btn btn-dark btn-lg' onClick={toPdf}><i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i> Baixar Currículo</button>}
                </ReactToPdf>
            </div>
        </>
    )
}
export default Curvi2;