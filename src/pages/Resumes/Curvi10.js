import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Curvi10(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('curvi10'), `${user.name}.png`, imageOptions)
    }
    const email = user.email.indexOf('@');
    function emailLength() {
        if (email >= 16) {
            return user.email.substring(0, 16)
        } else {
            return user.email.substring(0, email)
        }
    }
    var regexp = /\s/g;
    var name, fullname = [];
    var goal, fullgoal = [];
    var courses, extraCourses = [];
    var companyDescription, companyDescriptionArr = [];
    var cientificResearch, cientificResearchArr = [];
    var address, fulladdress = [];

    while ((name = regexp.exec(user.name)) != null) {
        fullname.push(name.index);
    }
    while ((goal = regexp.exec(user.goal)) != null) {
        fullgoal.push(goal.index);
    }
    while ((courses = regexp.exec(user.courses)) != null) {
        extraCourses.push(courses.index);
    }
    while ((companyDescription = regexp.exec(user.companyDescription)) != null) {
        companyDescriptionArr.push(companyDescription.index);
    }
    while ((cientificResearch = regexp.exec(user.cientificResearch)) != null) {
        cientificResearchArr.push(cientificResearch.index);
    }
    while ((address = regexp.exec(user.address)) != null) {
        fulladdress.push(address.index);
    }
    return (
        <>
            <Form>
                <button onClick={downloadResume}>Baixar Currículo</button>
            </Form>
            <div className="resumeBackground">
                <div className="resumeReady">
                    <svg id="curvi10" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 841.89">
                        
                        <rect fill="#434b67" width="595.28" height="236" />
                        <rect fill="#d8dcd3" y="236" width="263" height="605.89" />
                        <rect fill="#f4f5ea" x="263" y="236" width="332.28" height="605.89" />
                        <text fontSize="16px" fill="#434b67" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(34 309.33)">OBJETIVO</text>
                        <text fontSize="16px" fill="#434b67" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(34 625.52)">CURSOS</text>
                        <text fontSize="16px" fill="#434b67" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(34 440.94)">CONTATO</text>
                        <text fontSize="16px" fill="#434b67" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(297.64 308.32)">EXPERIÊNCIA</text>
                        <text fontSize="16px" fill="#434b67" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(297.64 568.32)">FORMAÇÃO</text>
                    </svg>
                </div>
            </div>
        </>
    )
}
export default Curvi10;