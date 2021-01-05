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
                   {/* <defs>
                   <style>.cls-1,.cls-13,.cls-14{fill="none" }
                   .cls-2,.cls-3{fill="#596071" }
                   .cls-3{fontSize="16px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" }
                   .cls-13{stroke="#fff" }
                   .cls-13,.cls-14{strokeMiterlimit="10" }
                   .cls-14{stroke="#596071" }
                   </style>
               </defs>
               <title>Curvi 12</title> */}
               <rect class="cls-1" width="595.28" height="841.89"/>
               <rect class="cls-2" width="595.28" height="166.1"/>
               <text class="cls-3" transform="translate(64.35 241.33)">OBJETIVO</text>
               <text class="cls-3" transform="translate(64.35 369.49)">CONTATO</text>
               <text class="cls-3" transform="translate(64.35 558.38)">CURSOS</text>
               <text class="cls-3" transform="translate(303 470.49)">EXPERIÊNCIA</text>
               <text class="cls-3" transform="translate(303 241.33)">FORMAÇÃO</text>
               <line class="cls-13" x1="53.43" y1="92.52" x2="541.85" y2="92.52"/>
               <line class="cls-14" x1="53.43" y1="256.11" x2="223" y2="256.11"/>
               <line class="cls-14" x1="53.43" y1="381.4" x2="223" y2="381.4"/>
               <line class="cls-14" x1="53.43" y1="567.45" x2="223" y2="567.45"/>
               <line class="cls-14" x1="288" y1="256.11" x2="541.85" y2="256.11"/>
               <line class="cls-14" x1="288" y1="482.4" x2="541.85" y2="482.4"/>
               </svg>
                </div>
            </div>
        </>
    )
}
export default Curvi12;