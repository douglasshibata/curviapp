import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Curvi1(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('curvi1'), `${user.name}.png`, imageOptions)
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
                    <svg id="curvi1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 841.89">
                        <rect fill="none" width="595.28" height="841.89" />
                        <line stroke="#1a191a" fill="#1a1a1a" strokeMiterlimit='10' x1="200.75" y1="110.88" x2="10.33" y2="110.88" />
                        <line stroke="#1a191a" fill="#1a1a1a" strokeMiterlimit='10' x1="450.75" y1="110.88" x2="590.33" y2="110.88" />
                        <text transform="matrix(1 0 0 1 23.2832 57.4688)" fill="#414042" fontFamily="'MyriadPro-Semibold'" fontSize="30">{user.name.substring(0, fullname[3])}</text>
                        <text transform="matrix(1 0 0 1 28.2832 87.4688)" fill="#414042" fontFamily="'MyriadPro-Semibold'" fontSize="30">{user.name.substring(fullname[3], fullname.length > 3 ? fullname[6] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 210.0063 114.7466)" fill="#58595B" fontFamily="'MyriadPro-Regular'" fontSize="16">{user.area}-{user.area_level}</text>
                        <g>
                            <rect x="28.711" y="132.636" fill="none" width="538.156" height="45.483" />
                            <text transform="matrix(1 0 0 1 28.8696 131.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(0, fullgoal[12])}</text>
                            <text transform="matrix(1 0 0 1 28.8696 141.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(fullgoal[12], fullgoal.length > 12 ? fullgoal[24] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 28.8696 151.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(fullgoal[24], fullgoal.length > 24 ? fullgoal[36] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 28.8696 161.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(fullgoal[36], fullgoal.length > 36 ? fullgoal[48] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 28.8696 171.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(fullgoal[48], fullgoal.length > 48 ? fullgoal[60] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 28.8696 181.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(fullgoal[60], fullgoal.length > 60 ? fullgoal[72] : <></>)}</text>
                        </g>
                        <rect fill="#d9d9d9" x="28.78" y="202.88" width="538.16" height="24" />
                        <g>
                            <text transform="matrix(1 0 0 1 57.1006 220.9238)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="9">({user.cellphone.substring(0, 2)}) {user.cellphone.substring(2, user.cellphone.length)}</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 155.7563 220.9229)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="10">{user.email}</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 310.9355 220.9229)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.linkedln_link !== 'NOT_PRINT' ? user.linkedln_link : <></>}</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 411.6025 220.9229)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.address}</text>
                        </g>
                        <line stroke="#1a191a" fill="#1a1a1a" strokeMiterlimit='10' x1="240.75" y1="263.88" x2="528.33" y2="263.88" />
                        <line stroke="#1a191a" fill="#1a1a1a" strokeMiterlimit='10' x1="211.44" y1="490.35" x2="528.33" y2="490.35" />
                        <line stroke="#1a191a" fill="#1a1a1a" strokeMiterlimit='10' x1="230.29" y1="677.69" x2="527.2" y2="677.69" />
                        <rect fill="#d9d9d9" x="28.78" y="249.21" width="238.22" height="24" />
                        <rect fill="#d9d9d9" x="28.35" y="478.35" width="198.57" height="24" />
                        <rect fill="#d9d9d9" x="28.78" y="665.69" width="221.31" height="24" />
                        <path fillRule="evenodd" fill="#1a1a1a" d="M137.14,219.66V210.1c0-.11.06-.22.1-.33a2,2,0,0,1,2-1.35h12.84a2,2,0,0,1,1.72.85,4.38,4.38,0,0,1,.36.82v9.57l-.09.33a2,2,0,0,1-2,1.35H139.22a2,2,0,0,1-1.72-.85A4.53,4.53,0,0,1,137.14,219.66Zm15.29-8.09-.2.16-5.6,4.74a.82.82,0,0,1-.57.21h-.8a.85.85,0,0,1-.62-.23L139,211.7l-.16-.13v.22c0,2.48,0,5,0,7.45,0,.26.05.38.38.38H152c.33,0,.39-.11.39-.38,0-2.49,0-5,0-7.47Zm-1.1-1.43H140l5.69,4.82Z" />
                        <path fillRule="evenodd" fill="#1a1a1a" d="M41.27,210.11c.07-.3.12-.61.21-.9a1.67,1.67,0,0,1,.44-.73l.13.12,3.79,3.79a.24.24,0,0,1,.07.27,1.85,1.85,0,0,0,.39,1.81,36.75,36.75,0,0,0,3.49,3.5,1.87,1.87,0,0,0,1.83.4.21.21,0,0,1,.25,0l3.85,3.85.08.09a2.16,2.16,0,0,1-1.07.54l-.53.11h-.93l-.14,0c-.27,0-.54-.07-.8-.13a9.53,9.53,0,0,1-3.37-1.49,21.55,21.55,0,0,1-4.13-3.6A17.94,17.94,0,0,1,42.17,214a8.11,8.11,0,0,1-.76-2.22c-.05-.28-.09-.57-.13-.85Z" />
                        <path fillRule="evenodd" fill="#1a1a1a" d="M44.79,206a4.55,4.55,0,0,1,.45.36L48,209.12a.64.64,0,0,1,0,1.07l-1.43,1.35-3.89-3.88.26-.24c.37-.36.73-.74,1.11-1.1a4.64,4.64,0,0,1,.43-.32Z" />
                        <path fillRule="evenodd" fill="#1a1a1a" d="M58.28,219.78a5.34,5.34,0,0,1-.38.49c-.39.4-.79.79-1.19,1.19l-.12.12-3.92-3.92.31-.28,1.15-1.15a.62.62,0,0,1,1,0L58,219.15a2.69,2.69,0,0,1,.24.33Z" />
                        <text fontSize="18px" fill="#1a1a1a" fontFamily="MyriadPro-Semibold Myriad Pro" fontWeight='700' transform="translate(33.35 267.73)">
                            Experiências Profissionais
                        </text>
                        <text transform="matrix(1 0 0 1 199.2959 329.1904)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="14">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' ? `Empresa: ${user.companyName}` : user.companyName.substring(0, 52)}</text>
                        <text transform="matrix(1 0 0 1 199.2959 349.1904)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="14">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' ? `` : user.companyName.substring(53, user.companyName.length)}</text>
                        <text transform="matrix(1 0 0 1 70.6631 329.1904)">
                            <tspan x="-20" y="0" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyOccupation !== "NOT_PRINT" ? `Cargo: ${user.companyOccupation}` : <></>}</tspan>
                            <tspan x="-42.899" y="20.4" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12"> {user.companyStartEnd !== "NOT_PRINT" ? `\nPeríodo: ${user.companyStartEnd}` : <></>}</tspan>
                        </text>
                        <text transform="matrix(1 0 0 1 200.2251 349.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ?`Principais Atividades:`:<></>}</text>
                        <text transform="matrix(1 0 0 1 200.2251 362.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(0,companyDescriptionArr[6]):<></>}</text>
                        <text transform="matrix(1 0 0 1 200.2251 377.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[6],companyDescriptionArr.length>6?companyDescriptionArr[11]:<></>):<></>}</text>
                        <text transform="matrix(1 0 0 1 200.2251 397.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[11],companyDescriptionArr.length>11?companyDescriptionArr[16]:<></>):<></>}</text>
                        <text transform="matrix(1 0 0 1 200.2251 417.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[16],companyDescriptionArr.length>16?companyDescriptionArr[21]:<></>):<></>}</text>
                        <text transform="matrix(1 0 0 1 200.2251 437.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[21],companyDescriptionArr.length>21?companyDescriptionArr[26]:<></>):<></>}</text>
                        <text fontSize="18px" fill="#1a1a1a" fontFamily="MyriadPro-Semibold Myriad Pro" fontWeight='700' transform="translate(34.35 496.03)">
                            Formação
                            Acadêmica
                        </text>
                        <text transform="matrix(1 0 0 1 88.9209 539.8867)">
                            <tspan x="0" y="0" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courseName}</tspan>
                            <tspan x="-46.571" y="20.4" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">   {user.courseEndYear === 'Completo'?user.courseEndYear:`Previsão de Conclusão: ${user.courseEndYear}`}</tspan>
                            </text>
                        <text transform="matrix(1 0 0 1 239.2959 539.8887)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="14">{user.courseSchool}</text>
                        <text fontSize="18px" fill="#1a1a1a" fontFamily="MyriadPro-Semibold Myriad Pro" fontWeight='700' transform="translate(34.35 683.36)">
                            Cursos
                            Complementares
                        </text>
                        <text transform="matrix(1 0 0 1 50.5215 705.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(0,extraCourses[9]):<></>} </text>
                        <text transform="matrix(1 0 0 1 50.5215 725.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[9],extraCourses.length > 9 ? extraCourses[16] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 50.5215 745.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[16],extraCourses.length > 16 ? extraCourses[23] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 50.5215 765.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[23],extraCourses.length > 23 ? extraCourses[30] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 50.5215 785.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[30],extraCourses.length > 30 ? extraCourses[37] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 50.5215 805.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[37],extraCourses.length > 37 ? extraCourses[45] : <></>):<></>} </text>
                
                        <path fill="#1a1a1a" d="M564.1,252.39h-7.67v-1.07a2.84,2.84,0,0,0-2.84-2.84h-7.34a2.84,2.84,0,0,0-2.84,2.84v1.07h-7.67a2.84,2.84,0,0,0-2.84,2.84V272a2.84,2.84,0,0,0,2.84,2.84H564.1a2.84,2.84,0,0,0,2.84-2.84V255.23A2.84,2.84,0,0,0,564.1,252.39Zm-19.37-.27a2.08,2.08,0,0,1,2.08-2.08H553a2.08,2.08,0,0,1,2.08,2.08v.27H544.73Z" />
                        <path fillRule="evenodd" fill="#1a1a1a" d="M564.34,488.84l-2.12,1.11-3.2,1.64-3.84,2-4.34,2.25a1.8,1.8,0,0,1-1.78,0l-5.28-2.73-3-1.54-3-1.54-3.94-2a1.68,1.68,0,0,1-.69-2.51,2.28,2.28,0,0,1,.77-.63c1.4-.74,2.82-1.46,4.23-2.19l6.89-3.57,3.94-2.05a1.75,1.75,0,0,1,1.72,0l5.21,2.7,3.82,2c2.06,1.07,4.11,2.15,6.17,3.2a1.72,1.72,0,0,1,.48,2.71,2.33,2.33,0,0,1-.51.37.3.3,0,0,0-.18.31c0,1.79,0,3.59,0,5.38a.39.39,0,0,0,.07.25,3.44,3.44,0,0,1,.8,2.53,3.35,3.35,0,0,1-.57,1.93,1.13,1.13,0,0,1-1.25.57,1.24,1.24,0,0,1-.79-.62,4,4,0,0,1-.07-4,.29.29,0,0,1,.07-.1c.33-.25.32-.6.32-1,0-1.42,0-2.84,0-4.25C564.35,489,564.35,488.93,564.34,488.84Z" />
                        <path fillRule="evenodd" fill="#1a1a1a" d="M537.91,491.36l1.27.64,6.37,3.3,3.54,1.82a1.77,1.77,0,0,0,1.74,0l5.54-2.87,5.26-2.7.33-.18c0,.18,0,.31,0,.45,0,1.88,0,3.75,0,5.63a.36.36,0,0,1-.23.37l-6.55,3.38-5.06,2.62a.36.36,0,0,1-.38,0l-5.87-3-5.44-2.8c-.53-.27-.53-.27-.53-.88v-5.74Z" />
                        <path fillRule="evenodd" fill="#1a1a1a" d="M554.1,693.45h-1a.43.43,0,0,0-.12-.08l-15-3.83c-1.36-.35-2.84-.53-3.76-1.54a4,4,0,0,1-.67-5.08.85.85,0,0,0,0-1,5.53,5.53,0,0,1,1.11-6.54c4-3.45,7.92-7,11.83-10.49a2.41,2.41,0,0,1,2.29-.59c5.54,1,11.09,2,16.64,3,1.64.3,2,1.06.87,2.08-4.09,3.85-8.21,7.7-12.27,11.57a2.17,2.17,0,0,1-2.32.53c-4.58-1.14-9.18-2.23-13.77-3.34-1.25-.3-2.12.18-2.13,1.22a2.36,2.36,0,0,0,.19,1.21,1.84,1.84,0,0,0,1,.81c5.12,1.29,10.27,2.54,15.4,3.8a1,1,0,0,0,1.09-.28q4.74-4.72,9.55-9.4a1.9,1.9,0,0,0,.78-1.68,2.58,2.58,0,0,1,.2-1.08,1.46,1.46,0,0,1,1.76-1.1,1.17,1.17,0,0,1,1,1.59,7.14,7.14,0,0,0-.12,1,6,6,0,0,1-.11,1.56,5,5,0,0,0,0,4,1.57,1.57,0,0,1-.46,2.07c-3,2.87-5.92,5.77-8.9,8.64C556.24,691.55,555.15,692.49,554.1,693.45Zm-17.74-9.79c-1.17,1.45-.53,2.92,1.44,3.42,4.48,1.16,9,2.26,13.44,3.49a2.64,2.64,0,0,0,3.07-.7c3-3,6.07-6,9.11-8.92a.93.93,0,0,0,.3-.68,7.94,7.94,0,0,0-.38-1.31c-.24.21-.45.38-.63.55L555.06,687c-.83.82-1.19.9-2.44.6Zm21.26-13.48a6.41,6.41,0,0,0-.93-.34c-2.71-.54-5.43-1-8.12-1.61a2.46,2.46,0,0,0-2.72.77c-.58.7-.59.79.47,1,2.68.52,5.38,1,8,1.58a2.33,2.33,0,0,0,2.53-.65C557.08,670.7,557.29,670.5,557.62,670.18Z" />
                        <path fill="#1a1a1a" d="M408.19,212c-.08-.34-.19-.67-.29-1a.92.92,0,0,0-.08-.13A6,6,0,0,0,396.43,214c0,.09,0,.25,0,.33a12.74,12.74,0,0,0,1.66,4.47c0,.09.24.46.26.48.29.44.57.89.88,1.32s.73,1,1.11,1.47.58.69.88,1,.64.67,1,1c.15.15.15.15.31,0l1-1.11a21.44,21.44,0,0,0,1.78-2.22c.33-.46.65-.93.94-1.42a13.88,13.88,0,0,0,1-1.8c.15-.35.31-.7.45-1.06a10.46,10.46,0,0,0,.48-1.69,8.28,8.28,0,0,0,.17-1.57A5.14,5.14,0,0,0,408.19,212Zm-1.35,1.89a4.48,4.48,0,0,1-.29,1.13,4.5,4.5,0,0,1-1.49,1.95,5.6,5.6,0,0,1-.72.44,4.43,4.43,0,0,1-1.6.45,3.18,3.18,0,0,1-.39,0,4.15,4.15,0,0,1-1.77-.34l-.74-.4a4.43,4.43,0,0,1-1.17-1.12,4.19,4.19,0,0,1-.5-.9,4.53,4.53,0,0,1,2.34-5.89,4.52,4.52,0,0,1,4.33.37,4.6,4.6,0,0,1,.93.83,4.85,4.85,0,0,1,.72,1.13,4.52,4.52,0,0,1,.32,1.14A4.27,4.27,0,0,1,406.84,213.85Z" />
                        <path fill="#1a1a1a" d="M289.36,215.73q0-3.37,0-6.75a1.72,1.72,0,0,1,1.32-1.7,1.9,1.9,0,0,1,.43,0h13.51a1.72,1.72,0,0,1,1.75,1.76q0,6.75,0,13.49a1.72,1.72,0,0,1-1.75,1.76H291.12a1.72,1.72,0,0,1-1.76-1.76Q289.36,219.11,289.36,215.73Zm11.9,5.95h2.55s0-.08,0-.11c0-1.56,0-3.12,0-4.68a2.94,2.94,0,0,0-.06-.64A3,3,0,0,0,302,214.1a2.45,2.45,0,0,0-1.48-.2,2.72,2.72,0,0,0-1.72,1.07l-.06,0v-1h-2.55v7.63h2.55v-.17c0-1.41,0-2.82,0-4.22a1.39,1.39,0,0,1,.34-.95,1.25,1.25,0,0,1,1.68-.16,1.33,1.33,0,0,1,.52,1.1q0,2.11,0,4.22Zm-6.81,0V214h-2.53v7.64Zm-1.26-9.09a1.53,1.53,0,0,0,0-3.06,1.53,1.53,0,1,0,0,3.06Z" />
                    </svg>

                </div>
            </div>
        </>
    )
}
export default Curvi1;