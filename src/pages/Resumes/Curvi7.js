import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Curvi7(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('curvi7'), `${user.name}.png`, imageOptions)
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
                <svg id="curvi7" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392.34 841.89">
                <rect fill="#313131" width="241" height="841.89"/>
                <line fill="none" stroke="#fff" strokeMiterlimit="10" y1="222" x2="241" y2="222"/>
                <text transform="matrix(1 0 0 1 30.1782 50.771)" fill="#FFFFFF" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(0, fullname[1])}</text>
                <text transform="matrix(1 0 0 1 30.1782 80.771)" fill="#FFFFFF" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[1], fullname.length > 1 ? fullname[3] : <></>)}</text>
                <text transform="matrix(1 0 0 1 30.1782 110.771)" fill="#FFFFFF" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[3], fullname.length > 3 ? fullname[4] : <></>)}</text>
                <text transform="matrix(1 0 0 1 30.1782 140.771)" fill="#FFFFFF" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[4], fullname.length > 4 ? fullname[5] : <></>)}</text>
                <text transform="matrix(1 0 0 1 30.1782 170.771)" fill="#FFFFFF" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[5], fullname.length > 5 ? fullname[6] : <></>)}</text>
                <text transform="matrix(1 0 0 1 98.1782 200.771)" fill="#FFFFFF" fontFamily="MyriadPro-Semibold" fontSize="18.3245px">{user.age}</text>
                <line fill="none" stroke="#fff" strokeMiterlimit="10" y1="245" x2="241" y2="245"/>
                <line fill="none" stroke="#fff" strokeMiterlimit="10" x1="53.5" y1="304" x2="187.5" y2="304"/>
                <text transform="matrix(1 0 0 1 34.4585 240.3408)" fill="#FFFFFF" fontFamily="MyriadPro-Regular" fontSize="15.9183px">{user.area} - {user.area_level}</text>
                <line fill="none" stroke="#fff" strokeMiterlimit="10" x1="53.5" y1="490" x2="187.5" y2="490"/>
                <text fontSize="16px" fill="#fff" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(87.76 286)">OBJETIVO</text>
                <text transform="matrix(1 0 0 1 45.4585 320.6353)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(0, fullgoal[4])}</text>
                <text transform="matrix(1 0 0 1 45.4585 340.6353)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[4], fullgoal.length > 4 ? fullgoal[8] : <></>)}</text>
                <text transform="matrix(1 0 0 1 45.4585 360.6353)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[8], fullgoal.length > 8 ? fullgoal[12] : <></>)}</text>
                <text transform="matrix(1 0 0 1 45.4585 380.6353)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[12], fullgoal.length > 12 ? fullgoal[16] : <></>)}</text>
                <text transform="matrix(1 0 0 1 45.4585 400.6353)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[16], fullgoal.length > 16 ? fullgoal[20] : <></>)}</text>
                <text transform="matrix(1 0 0 1 45.4585 420.6353)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[20], fullgoal.length > 20 ? fullgoal[24] : <></>)}</text>
                <text transform="matrix(1 0 0 1 45.4585 440.6353)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[24], fullgoal.length > 24 ? fullgoal[28] : <></>)}</text>
                <text transform="matrix(1 0 0 1 45.4585 460.6353)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[28], fullgoal.length > 28 ? fullgoal[32] : <></>)}</text>
                <text transform="matrix(1 0 0 1 45.4585 480.6353)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[32], fullgoal.length > 32 ? fullgoal[36] : <></>)}</text>
                <text transform="matrix(1 0 0 1 45.4585 500.6353)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[36], fullgoal.length > 36 ? fullgoal[40] : <></>)}</text>
                <text fontSize="16px" fill="#fff" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(88.32 467.94)">CONTATO</text>
                <text transform="matrix(1 0 0 1 75.6108 505.7788)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">TELEFONE:</text>
                <text transform="matrix(1 0 0 1 75.6108 525.7788)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">({user.cellphone.substring(0, 2)}) {user.cellphone.substring(2, user.cellphone.length)}</text>
                <text transform="matrix(1 0 0 1 75.6108 550.7788)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">EMAIL:</text>
                <text transform="matrix(1 0 0 1 75.6108 564.7788)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.email}</text>
                <text transform="matrix(1 0 0 1 75.6108 584.7788)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.linkedln_link !== 'NOT_PRINT' ? `LinkedIn:` : <></>}</text>
                <text transform="matrix(1 0 0 1 75.6108 594.7788)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.linkedln_link !== 'NOT_PRINT' ? user.linkedln_link : <></>}</text>
                <text transform="matrix(1 0 0 1 75.6108 619.7788)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">ENDEREÇO:</text>
                <text transform="matrix(1 0 0 1 75.6108 639.7788)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.address.substring(0, fulladdress[3])}</text>
                <text transform="matrix(1 0 0 1 75.6108 649.7788)" fill="#FFF" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.address.substring(fulladdress[3], fulladdress.length > 3 ? fulladdress[9] : <></>)}</text>
                <text fill="#313131" fontSize="21px" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(258 110.48)">EXPERIÊNCIA</text>
                <text fill="#313131" fontSize="21px" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(258 420.48)">FORMAÇÃO</text>
                <text fill="#313131" fontSize="21px" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(258 669.48)">CURSOS</text>
                </svg>

                </div>

            </div>
        </>
    )
}
export default Curvi7;