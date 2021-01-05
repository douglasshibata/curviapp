import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Curvi9(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('curvi9'), `${user.name}.png`, imageOptions)
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
                <svg id="curvi9" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 530 798.95">
                <path d="M355,138.94V0H32.64V798.95h530v-660Zm204.64,657h-524V226.36H355V141.94H559.64Z" transform="translate(-32.64)"/>
                <text transform="matrix(1 0 0 1 23.2832 57.4688)" fill="#FFF" fontFamily="'MyriadPro-Semibold'" fontSize="30">{user.name.substring(0, fullname[1])}</text>
                <text transform="matrix(1 0 0 1 28.2832 87.4688)" fill="#FFF" fontFamily="'MyriadPro-Semibold'" fontSize="30">{user.name.substring(fullname[1], fullname.length > 1 ? fullname[3] : <></>)}</text>
                <text transform="matrix(1 0 0 1 28.2832 117.4688)" fill="#FFF" fontFamily="'MyriadPro-Semibold'" fontSize="30">{user.name.substring(fullname[3], fullname.length > 3 ? fullname[5] : <></>)}</text>
                <text transform="matrix(1 0 0 1 28.2832 147.4688)" fill="#FFF" fontFamily="'MyriadPro-Semibold'" fontSize="30">{user.name.substring(fullname[5], fullname.length > 5 ? fullname[9] : <></>)}</text>
                <text transform="matrix(1 0 0 1 28 164.7466)" fill="#FFF" fontFamily="'MyriadPro-Regular'" fontSize="16">{user.area} - {user.area_level}</text>

                <text fontSize="16px" fontFamily='MyriadPro-Semibold, Myriad Pro' fontWeight="700" transform="translate(35.07 289.33)">OBJETIVO </text>
                <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 35.07 310.33)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(0, fullgoal[4])}</text>
                <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 35.07 330.33)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[4], fullgoal.length > 4 ? fullgoal[8] : <></>)}</text>
                <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 35.07 350.33)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[8], fullgoal.length > 8 ? fullgoal[12] : <></>)}</text>
                <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 35.07 370.33)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[12], fullgoal.length > 12 ? fullgoal[28] : <></>)}</text>
                <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 35.07 390.33)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[28], fullgoal.length > 28 ? fullgoal[35] : <></>)}</text>
                <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 35.07 400.33)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[35], fullgoal.length > 35 ? fullgoal[42] : <></>)}</text>
                        
                <text fontSize="16px" fontFamily='MyriadPro-Semibold, Myriad Pro' fontWeight="700" transform="translate(285.89 289.33)">EXPERIÊNCIA</text>
                <text fontSize="16px" fontFamily='MyriadPro-Semibold, Myriad Pro' fontWeight="700" transform="translate(285.89 549.33)">FORMAÇÃO</text>
                <text fontSize="16px" fontFamily='MyriadPro-Semibold, Myriad Pro' fontWeight="700" transform="translate(35.07 605.52)">CURSOS</text>
                <text fontSize="16px" fontFamily='MyriadPro-Semibold, Myriad Pro' fontWeight="700" transform="translate(35.07 420.94)">CONTATO</text>
                </svg>
                </div>

            </div>
        </>
    )
}
export default Curvi9;