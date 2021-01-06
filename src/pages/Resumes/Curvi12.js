import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Curvi12(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('curvi12'), `${user.name}.png`, imageOptions)
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
                    <svg id='curvi12' data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 841.89">
                        <rect fill="none" width="595.28" height="841.89" />
                        <rect fill="#596071" width="595.28" height="166.1" />
                        <text fill="#596071" fontSize="16px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(64.35 241.33)">OBJETIVO</text>
                        <text fill="#596071" fontSize="16px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(64.35 369.49)">CONTATO</text>
                        <text fill="#596071" fontSize="16px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(64.35 558.38)">CURSOS</text>
                        <text fill="#596071" fontSize="16px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(303 470.49)">EXPERIÊNCIA</text>
                        <text fill="#596071" fontSize="16px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(303 241.33)">FORMAÇÃO</text>
                        <line stroke="#fff" fill="none" strokeMiterlimit="10" x1="53.43" y1="92.52" x2="541.85" y2="92.52" />
                        <line stroke="#596071" fill="none" strokeMiterlimit="10" x1="53.43" y1="256.11" x2="223" y2="256.11" />
                        <line stroke="#596071" fill="none" strokeMiterlimit="10" x1="53.43" y1="381.4" x2="223" y2="381.4" />
                        <line stroke="#596071" fill="none" strokeMiterlimit="10" x1="53.43" y1="567.45" x2="223" y2="567.45" />
                        <line stroke="#596071" fill="none" strokeMiterlimit="10" x1="288" y1="256.11" x2="541.85" y2="256.11" />
                        <line stroke="#596071" fill="none" strokeMiterlimit="10" x1="288" y1="482.4" x2="541.85" y2="482.4" />
                    </svg>
                </div>
            </div>
        </>
    )
}
export default Curvi12;