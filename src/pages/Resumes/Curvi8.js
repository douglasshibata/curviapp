import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Curvi8(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('curvi8'), `${user.name}.png`, imageOptions)
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
                    <svg id="curvi8" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537 841.89">
                      
                        <polygon fill="none" points="3 807.95 98.5 807.95 98.5 775.89 438.5 775.89 438.5 807.95 534 807.95 534 33.95 438.5 33.95 438.5 132 98.5 132 98.5 33.95 3 33.95 3 807.95" />
                        <polygon points="1.5 809.45 1.5 32.45 98.5 32.45 98.5 30.95 0 30.95 0 810.95 98.5 810.95 98.5 809.45 1.5 809.45" />
                        <polygon points="537 30.95 438.5 30.95 438.5 32.45 535.5 32.45 535.5 809.45 438.5 809.45 438.5 810.95 537 810.95 537 30.95" />
                        <polygon points="534 33.95 534 807.95 438.5 807.95 438.5 809.45 535.5 809.45 535.5 32.45 438.5 32.45 438.5 33.95 534 33.95" />
                        <polygon points="3 807.95 3 33.95 98.5 33.95 98.5 32.45 1.5 32.45 1.5 809.45 98.5 809.45 98.5 807.95 3 807.95" />
                        <polygon fill="#bdd2df" points="98.5 0 98.5 30.95 98.5 32.45 98.5 33.95 98.5 132 438.5 132 438.5 33.95 438.5 32.45 438.5 30.95 438.5 0 98.5 0" />
                        <polygon fill="#bdd2df" points="98.5 783 98.5 811.6 98.5 812.94 98.5 814.28 98.5 841.89 438.5 841.89 438.5 814.28 438.5 812.94 438.5 811.6 438.5 783 98.5 783" />
                        <text fill="#000" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 110.24556 46.86688)" fontSize="40.59" fontFamily="Roboto">{user.name.substring(0, fullname[1])}</text>
                        <text fill="#000" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 110.94556 76.86688)" fontSize="40.59" fontFamily="Roboto">{fullname.length > 1 ? user.name.substring(fullname[1], fullname[3]) : <></>} </text>
                        <text fill="#000" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 110.94556 105.86688)" fontSize="40.59" fontFamily="Roboto">{fullname.length > 3 ? user.name.substring(fullname[3], fullname[4]) : <></>} </text>
                        <text fill="#000" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 110.94556 135.86688)" fontSize="40.59" fontFamily="Roboto">{fullname.length > 4 ? user.name.substring(fullname[4], fullname[6]) : <></>} </text>
                        <text fill="#000" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 100.2702 157.9409)" fontSize="30.49" fontFamily="Roboto">{user.area} - {user.area_level}</text>
                        <line fill="#fff" stroke="#000" strokeMiterlimit="10" strokeWidth="3px"  x1="148" y1="367" x2="389" y2="367" />
                        <text fontSize="20px" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(283.62 217.95)">OBJETIVO</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 285.568884 234.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(0, fullgoal[7])}</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 285.568884 254.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[7], fullgoal.length > 7 ? fullgoal[14] : <></>)}</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 285.568884 274.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[14], fullgoal.length > 14 ? fullgoal[21] : <></>)}</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 285.568884 294.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[21], fullgoal.length > 21 ? fullgoal[28] : <></>)}</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 285.568884 314.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[28], fullgoal.length > 28 ? fullgoal[35] : <></>)}</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 285.568884 334.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[35], fullgoal.length > 35 ? fullgoal[42] : <></>)}</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 285.568884 354.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[42], fullgoal.length > 42 ? fullgoal[49] : <></>)}</text>
                        
                        <text fontSize="20px" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(40.18 217.95)">CONTATO</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.18 237.8099)" fontSize="12.26" fontFamily="Roboto">Celular: ({user.cellphone.substring(0, 2)}) {user.cellphone.substring(2, user.cellphone.length)}</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.18 257.8099)" fontSize="12.26" fontFamily="Roboto">Email: {user.email}</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.18 277.8099)" fontSize="12.26" fontFamily="Roboto">Endereço: {user.address.substring(0, fulladdress[4])}</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.18 297.8099)" fontSize="12.26" fontFamily="Roboto">{user.address.substring(fulladdress[4], fulladdress.length > 4 ? fulladdress[9] : <></>)}</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.18 317.8099)" fontSize="12.26" fontFamily="Roboto">{user.linkedln_link !== 'NOT_PRINT' ? `Linkedln:${user.linkedln_link}` : <></>}</text>
                                    
                        <text fontSize="21px" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(284.86 420.95)">EXPERIÊNCIA</text>
                        <text transform="matrix(1 0 0 1 284.46 440.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyOccupation !== "NOT_PRINT"? `Cargo: ${user.companyOccupation}` :<></>} </text>
                        <text transform="matrix(1 0 0 1 284.46 460.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?`Empresa:`:user.companyName.substring(0,38)}</text>
                        <text transform="matrix(1 0 0 1 284.46 480.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?`${user.companyName}`:<></>}</text>
                        <text transform="matrix(1 0 0 1 284.46 500.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(38,75)}</text>
                        <text transform="matrix(1 0 0 1 284.46 520.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(75,user.companyName.length)}</text>
                        <text transform="matrix(1 0 0 1 284.46 500.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyStartEnd  !== "NOT_PRINT"?  `Período: ${user.companyStartEnd}` :<></>}</text>
                        <text transform="matrix(1 0 0 1 284.46 520.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ?`Principais Atividades:`:<></>}</text>
                        <text transform="matrix(1 0 0 1 284.46 540.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(0,companyDescriptionArr[4]):<></>}</text>
                        <text transform="matrix(1 0 0 1 284.46 560.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[4],companyDescriptionArr.length > 4 ? companyDescriptionArr[8] : <></>) : <></>}</text>
                        <text transform="matrix(1 0 0 1 284.46 580.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ?user.companyDescription.substring(companyDescriptionArr[8],companyDescriptionArr.length > 8 ? companyDescriptionArr[11] : <></>) : <></>}</text>
                        <text transform="matrix(1 0 0 1 284.46 600.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[11],companyDescriptionArr.length > 11 ? companyDescriptionArr[14] : <></>) : <></>}</text>
                        <text transform="matrix(1 0 0 1 284.46 620.95)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[14],companyDescriptionArr.length > 14 ? companyDescriptionArr[18] : <></>) : <></>}</text>
                                    
                        <text fontSize="21px" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(40.19 420.95)">FORMAÇÃO</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.19 440.95)" fontSize="13.66" fontFamily="Roboto">{user.courseSchool}</text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.19 460.95)" fontSize="12.98" fontFamily="Roboto">{user.courseName} </text>
                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.19 480.95)" fontSize="12.98" fontFamily="Roboto">{user.courseEndYear === 'Completo' ? user.courseEndYear : `Previsão de Conclusão: ${user.courseEndYear}`}</text>
                                    
                        {user.courses !== "NOT_PRINT"?
                                    <>
                                        <text fontSize="21px" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(40.19 648.95)">CURSOS</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.19 668.95)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(0, extraCourses[8])}</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.19 688.95)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(extraCourses[8],extraCourses.length > 8 ? extraCourses[16] : <></>)}</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.19 708.95)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(extraCourses[16], extraCourses.length > 16 ? extraCourses[24] : <></>)}</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.19 728.95)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(extraCourses[24], extraCourses.length > 24 ? extraCourses[32] : <></>)}</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.19 748.95)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(extraCourses[32], extraCourses.length > 32 ? extraCourses[40] : <></>)}</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 40.19 768.95)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(extraCourses[40], extraCourses.length > 40 ? extraCourses[48] : <></>)}</text>
                                    </>
                                    :
                                    <></>
                                    }
                    </svg>
                </div>

            </div>
        </>
    )
}
export default Curvi8;