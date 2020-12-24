import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Curvi2(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('curvi2'), `${user.name}.png`, imageOptions)
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
                    <svg id="curvi2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 791.35">
                        <rect fill="#1b1119" x="215" y="610.3" width="351.93" height="24.09" />
                        <rect fill="#1b1119" width="595.28" height="203" />
                        <rect fill="#939393" x="28.35" y="228.93" width="154.65" height="562.41" />
                        <line fill="none" stroke="#1b1119" strokeMiterlimit='10' strokeWidth="2px" x1="39.91" y1="423.97" x2="170.64" y2="423.97" />
                        <rect fill="#1b1119" x="215" y="228.93" width="351.93" height="24.09" />
                        <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 60.24556 66.86688)" fontSize="65.59" fontFamily="Roboto">{user.name.substring(0, fullname[1])}</text>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 60.94556 106.86688)" fontSize="65.59" fontFamily="Roboto">{fullname.length > 1 ? user.name.substring(fullname[1], fullname[3]) : <></>} </text>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 60.94556 145.86688)" fontSize="65.59" fontFamily="Roboto">{fullname.length > 3 ? user.name.substring(fullname[3], fullname[4]) : <></>} </text>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 60.94556 165.86688)" fontSize="65.59" fontFamily="Roboto">{fullname.length > 4 ? user.name.substring(fullname[4], fullname[5]) : <></>} </text>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 181.2702 187.9409)" fontSize="30.49" fontFamily="Roboto">{user.area} - {user.area_level}</text>
                        <text fontSize="18px" fontFamily="MyriadPro-Regular, Myriad Pro" fill="#e3dbca" transform="translate(224.87 246.66)">
                            Formação  Acadêmica
                        </text>
                        <text transform="matrix(1 0 0 1 229.8784 286.5454)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">{user.courseName} </text>
                        <text transform="matrix(1 0 0 1 229.8784 306.5454)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px"> {user.courseSchool}</text>
                        <text transform="matrix(1 0 0 1 229.8784 326.5454)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">  {user.courseEndYear === 'Completo'?user.courseEndYear:`Previsão de Conclusão: ${user.courseEndYear}`}</text>
                        <rect fill="#1b1119" x="215" y="399.87" width="351.93" height="24.09" />
                        <text fontSize="18px" fontFamily="MyriadPro-Regular, Myriad Pro" fill="#e3dbca" transform="translate(224.87 417.6)">
                            Experiencias
                            Profissionais
                        </text>
                        <text transform="matrix(0.9856 0 0 1 229.5903 445.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyOccupation !== "NOT_PRINT" ? `Cargo: ${user.companyOccupation}` : <></>}</text>
                        <text transform="matrix(0.9856 0 0 1 229.5903 465.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' ? `Empresa: ${user.companyName}` : user.companyName.substring(0, 38)}</text>
                        <text transform="matrix(0.9856 0 0 1 229.5903 485.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' ? `` : user.companyName.substring(38, 75)}</text>
                        <text transform="matrix(0.9856 0 0 1 229.5903 495.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' ? `` : user.companyName.substring(75, user.companyName.length)}</text>
                        <text transform="matrix(0.9856 0 0 1 229.5903 480.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyStartEnd !== "NOT_PRINT" ? `Período: ${user.companyStartEnd}` : <></>}</text>
                        <text transform="matrix(0.9856 0 0 1 229.5903 495.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyDescription !== "NOT_PRINT" ? `Principais Atividades:` : <></>}</text>
                        <text transform="matrix(0.9856 0 0 1 229.5903 515.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(0,companyDescriptionArr.length > 3 ? companyDescriptionArr[4] : <></>) : <></>}</text>
                        <text transform="matrix(0.9856 0 0 1 229.5903 535.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[4],companyDescriptionArr.length > 4 ? companyDescriptionArr[8] : <></>) : <></>}</text>
                        <text transform="matrix(0.9856 0 0 1 229.5903 555.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[8],companyDescriptionArr.length > 8 ? companyDescriptionArr[12] : <></>) : <></>}</text>
                        <text transform="matrix(0.9856 0 0 1 229.5903 575.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[12],companyDescriptionArr.length > 12 ? companyDescriptionArr[16] : <></>) : <></>}</text>
                        <text transform="matrix(0.9856 0 0 1 229.5903 595.1074)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="15.3958px">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[16],companyDescriptionArr.length > 16 ? companyDescriptionArr[20] : <></>) : <></>}</text>
                        <text fontSize="18px" fontFamily="MyriadPro-Regular, Myriad Pro" fill="#e3dbca" transform="translate(224.87 629.6)">
                            Cursos
                            Complementares
                        </text>
                        <text transform="matrix(1 0 0 1 229.1948 656.8257)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(0,extraCourses.length > 3 ? extraCourses[4] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 229.1948 676.8257)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[4],extraCourses.length > 4 ? extraCourses[8] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 229.1948 696.8257)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[8],extraCourses.length > 8 ? extraCourses[12] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 229.1948 716.8257)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[12],extraCourses.length > 12 ? extraCourses[16] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 229.1948 726.8257)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[16],extraCourses.length > 16 ? extraCourses[20] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 229.1948 736.8257)" fontFamily="'MyriadPro-Semibold'" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[20],extraCourses.length > 20 ? extraCourses[24] : <></>):<></>} </text>
                        <text fill="#1b1119" fontSize="18px" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(41.5 418.94)">
                            Contato
                        </text>
                        <text transform="matrix(1 0 0 1 70.3115 458.9541)" fill="#1B1119" fontFamily="'MyriadPro-Regular'" fontSize="12">({user.cellphone.substring(0, 2)}) {user.cellphone.substring(2, user.cellphone.length)}</text>
                        <text transform="matrix(1 0 0 1 70.3115 493.9541)" fill="#1B1119" fontFamily="'MyriadPro-Regular'" fontSize="12">{emailLength()}</text>
                        <text transform="matrix(1 0 0 1 70.3115 503.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1119' fontSize='12'>{user.email.substring(email, user.email.length)}</text>
                        <text transform="matrix(1 0 0 1 70.3115 550.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1119' fontSize='12'>{user.linkedln_link !== 'NOT_PRINT'? user.linkedln_link:<></>}</text>
                        <text transform="matrix(1 0 0 1 70.3110 585.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1119' fontSize='12'>{user.address.substring(0, fulladdress.length > 1 ? fulladdress[2] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 70.3110 605.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1119' fontSize='12'>{user.address.substring(fulladdress[2], fulladdress.length > 2 ? fulladdress[10] : <></>)}</text>
                        <line fill="none" stroke="#1b1119" strokeMiterlimit='10' strokeWidth="2px" x1="40.71" y1="253.03" x2="171.44" y2="253.03" />
                        <text fill="#1b1119" fontSize="18px" fontFamily="MyriadPro-Regular, Myriad Pro" transform="translate(42.3 248)">
                            Objetivo
                        </text>
                        <text transform="matrix(1 0 0 1 40.3115 267.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1119' fontSize='12px'>{user.goal.substring(0, fullgoal.length > 2 ? fullgoal[2] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 40.3115 287.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1119' fontSize='12px'>{user.goal.substring(fullgoal[2], fullgoal.length > 2 ? fullgoal[5] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 40.3115 307.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1119' fontSize='12px'>{user.goal.substring(fullgoal[5], fullgoal.length > 5 ? fullgoal[8] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 40.3115 327.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1119' fontSize='12px'>{user.goal.substring(fullgoal[8], fullgoal.length > 8 ? fullgoal[11] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 40.3115 343.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1119' fontSize='12px'>{user.goal.substring(fullgoal[11], fullgoal.length > 11 ? fullgoal[14] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 40.3115 363.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1119' fontSize='12px'>{user.goal.substring(fullgoal[14], fullgoal.length > 14 ? fullgoal[17] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 40.3115 383.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1119' fontSize='12px'>{user.goal.substring(fullgoal[17], fullgoal.length > 17 ? fullgoal[21] : <></>)}</text>
                        <path fill="#1b1119" d="M53.9,593.49a12.4,12.4,0,1,0-12.4-12.4A12.4,12.4,0,0,0,53.9,593.49Zm6-4.94a2,2,0,0,1-.18.57h-3.9c0-1.07,0-2.13,0-3.2,0-.33-.15-.47-.47-.47H52.49c-.32,0-.47.14-.47.47,0,1.07,0,2.13,0,3.2h-3.9a2.28,2.28,0,0,1-.18-.6c0-2.32,0-4.63,0-7a.67.67,0,0,1,.26-.57c.82-.71,1.64-1.44,2.46-2.16L53.89,576l.08,0q2.87,2.53,5.73,5.06a.61.61,0,0,1,.17.41Q59.88,585,59.86,588.55ZM48,574.18H50c0,.38,0,.74,0,1.11a.35.35,0,0,1-.1.22l-2,1.79ZM45.4,580.5c.24-.19.48-.37.7-.57l7.76-6.86h.07l8.23,7.28a2.09,2.09,0,0,0,.24.16v.07l-.9,1-7.6-6.71-7.6,6.71-.9-1Z" />
                        <path fill="#1b1119" d="M54.7,443.82a12.4,12.4,0,1,0,12.4,12.4A12.4,12.4,0,0,0,54.7,443.82Zm-6.82,5.32c.37-.36.73-.74,1.11-1.1a4.53,4.53,0,0,1,.43-.32h.3a4.46,4.46,0,0,1,.45.36l2.77,2.77a.64.64,0,0,1,0,1.07l-1.43,1.35-3.89-3.88Zm11.77,15.48-.53.11h-.93l-.14,0c-.27,0-.54-.07-.8-.13a9.54,9.54,0,0,1-3.37-1.49,21.58,21.58,0,0,1-4.13-3.6,18,18,0,0,1-2.65-3.74,8.08,8.08,0,0,1-.76-2.22c-.05-.28-.09-.57-.13-.85v-.83c.07-.3.12-.61.21-.9a1.67,1.67,0,0,1,.44-.74l.13.12,3.79,3.79a.24.24,0,0,1,.07.27,1.86,1.86,0,0,0,.39,1.81,36.71,36.71,0,0,0,3.49,3.5,1.87,1.87,0,0,0,1.83.4.21.21,0,0,1,.25,0L60.63,464l.08.09A2.16,2.16,0,0,1,59.64,464.61Zm3.55-3.12a5.41,5.41,0,0,1-.38.49c-.39.4-.79.79-1.18,1.19l-.12.12-3.92-3.92.31-.28L59,457.94a.62.62,0,0,1,1,0L63,460.87a2.69,2.69,0,0,1,.24.33Z" />
                        <path fill="#1b1119" d="M60.39,490.77H49l5.69,4.82Z" />
                        <path fill="#1b1119" d="M54.7,483.11a12.4,12.4,0,1,0,12.4,12.4A12.4,12.4,0,0,0,54.7,483.11Zm8.5,17.18-.09.33a2,2,0,0,1-2,1.35H48.27a2,2,0,0,1-1.72-.85,4.52,4.52,0,0,1-.36-.83v-9.57c0-.11.06-.22.1-.33a2,2,0,0,1,2-1.35H61.12a2,2,0,0,1,1.72.85,4.4,4.4,0,0,1,.36.82Z" />
                        <path fill="#1b1119" d="M61.48,492.2l-.2.16-5.6,4.74a.83.83,0,0,1-.57.21h-.8a.86.86,0,0,1-.62-.23l-5.61-4.74-.16-.13v.22q0,3.72,0,7.45c0,.26.05.38.38.38H61.1c.33,0,.39-.11.39-.38,0-2.49,0-5,0-7.47Z" />
                        <path fill="#1b1119" d="M53.9,527.06a12.4,12.4,0,1,0,12.4,12.4A12.4,12.4,0,0,0,53.9,527.06Zm-4.67,9.26a1.53,1.53,0,1,1,1.53-1.53A1.54,1.54,0,0,1,49.23,536.32Zm1.26,1.45v7.63H48v-7.63Zm9.35,7.63H57.3v-.17q0-2.12,0-4.23a1.28,1.28,0,0,0-.72-1.22,1.26,1.26,0,0,0-1.81,1,2.52,2.52,0,0,0,0,.28q0,2.08,0,4.16v.18H52.21v-7.63h2.55v.91c.17-.15.35-.33.54-.48a2.56,2.56,0,0,1,3-.22,2.92,2.92,0,0,1,1.48,2,3.07,3.07,0,0,1,.06.64c0,1.56,0,3.11,0,4.67C59.85,545.32,59.85,545.36,59.84,545.4Z" />
                    </svg>
                </div>
            </div>
        </>
    )
}
export default Curvi2;