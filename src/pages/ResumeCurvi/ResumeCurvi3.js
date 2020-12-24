import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function ResumeCurvi3(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('resumeCurvi3'), `${user.name}.png`, imageOptions)
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
                    <svg id="resumeCurvi3" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 841.89">
                        <rect fill="#110f10" width="261" height="841.89" />
                        <circle strokeMiterlimit="10" stroke="#1f0c0d" strokeWidth="7px" fill="#fff" cx="130.5" cy="91.05" r="75.49" />
                        <text transform="matrix(1 0 0 1 104.5471 108.209)" fill='#1F0C0D' fontFamily='MyriadPro-Bold'fontSize='58.4611px'>{user.name.charAt(0).toUpperCase()}</text>
                        <text transform="matrix(1 0 0 1 15.2471 200.7989)" fill='#FFFFFF' fontFamily='MyriadPro-Semibold' fontSize='26.3245px'>{user.name.substring(0, fullname[1])}</text>
                        <text transform="matrix(1 0 0 1 15.2471 228.7989)" fill='#FFFFFF' fontFamily='MyriadPro-Semibold' fontSize='26.3245px'>{fullname.length > 1 ? user.name.substring(fullname[1], fullname[3]) : <></>}</text>
                        <text transform="matrix(1 0 0 1 15.2471 252.7989)" fill='#FFFFFF' fontFamily='MyriadPro-Semibold' fontSize='26.3245px'>{fullname.length > 3 ? user.name.substring(fullname[3], fullname[5]) : <></>}</text>
                        <text transform="matrix(1 0 0 1 15.2471 272.7989)" fill='#FFFFFF' fontFamily='MyriadPro-Semibold' fontSize='26.3245px'>{fullname.length > 5 ? user.name.substring(fullname[5], fullname[7]) : <></>}</text>
                        <text transform="matrix(1 0 0 1 95.2471 282.7989)" fill='#FFFFFF' fontFamily='MyriadPro-Semibold' fontSize='26.3245px'>{user.age}</text>
                        <path fill="#fff" d="M49.66,313a8.12,8.12,0,1,0-7.8-8.19A8.06,8.06,0,0,0,49.66,313Z" />
                        <path fill="#fff" d="M62.73,322.52a5.62,5.62,0,0,0-1.51-4,6.68,6.68,0,0,0-3-1.76c-1.72-.59-3.53-.86-5.29-1.33a1.54,1.54,0,0,0-1.73.49c-.38.43-.81.82-1.22,1.22-.49-.49-.94-.9-1.36-1.34a1.42,1.42,0,0,0-1.51-.39c-1.79.47-3.6.9-5.4,1.35a5.75,5.75,0,0,0-3.91,3.07,6.83,6.83,0,0,0-.59,3.22q0,3.39,0,6.78H62.73Q62.73,326.18,62.73,322.52Z" />
                        <text fontSize="22px" fontWeight="700" fill="#fff" fontFamily="MyriadPro-Semibold, Myriad Pro" transform="translate(82.07 324.54)">
                            OBJETIVO 
                        </text>
                        <text transform="matrix(1 0 0 1 30.6318 357.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(0, fullgoal[2])}</text>
                        <text transform="matrix(1 0 0 1 30.6318 377.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(fullgoal[2], fullgoal.length > 2 ? fullgoal[5] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 30.6318 397.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(fullgoal[5], fullgoal.length > 5 ? fullgoal[9] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 30.6318 417.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(fullgoal[9], fullgoal.length > 9 ? fullgoal[14] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 30.6318 433.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.goal.substring(fullgoal[14], fullgoal.length > 14 ? fullgoal[20] : <></>)}</text>
                        <rect fill="#1f0c0d" x="232.71" y="72.67" width="362.57" height="41.34" />
                        <polygon fill="#12090a" points="232.71 114.02 261 133.22 261 114.02 232.71 114.02" />
                        <text fill="#ece7e8" transform="translate(345.54 102.44)">
                            FORMAÇÃO
                        </text>
                        <text transform="matrix(1 0 0 1 280.6318 147.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.courseName} </text>
                        <text transform="matrix(1 0 0 1 280.6318 167.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.courseSchool} </text>
                        <text transform="matrix(1 0 0 1 280.6318 187.9448)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>  {user.courseEndYear === 'Completo'?user.courseEndYear:`Previsão de Conclusão: ${user.courseEndYear}`}</text>
                        <rect fill="#1f0c0d" x="232.71" y="313.67" width="362.57" height="41.34" />
                        <polygon fill="#12090a" points="232.71 355.02 261 374.22 261 355.02 232.71 355.02" />
                        <text fill="#ece7e8" transform="translate(337.3 343.44)">
                            EXPERIÊNCIA
                        </text>
                        <text transform="matrix(1 0 0 1 280 380.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyOccupation !== "NOT_PRINT"? `Cargo: ${user.companyOccupation}` :<></>} </text>
                        <text transform="matrix(1 0 0 1 280 400.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?`Empresa: ${user.companyName}`:user.companyName.substring(0,38)}</text>
                        <text transform="matrix(1 0 0 1 280 415.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(38,75)}</text>
                        <text transform="matrix(1 0 0 1 280 435.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(75,user.companyName.length)}</text>
                        <text transform="matrix(1 0 0 1 279.6836 435.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyStartEnd  !== "NOT_PRINT"?  `Período: ${user.companyStartEnd}` :<></>}</text>
                        <text transform="matrix(1 0 0 1 279.6836 455.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ?`Principais Atividades:`:<></>}</text>
                        <text transform="matrix(1 0 0 1 279.6836 475.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(0,companyDescriptionArr.length > 4 ? companyDescriptionArr[5] : <></>) : <></>}</text>
                        <text transform="matrix(1 0 0 1 279.6836 495.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[5],companyDescriptionArr.length > 5 ? companyDescriptionArr[8] : <></>) : <></>}</text>
                        <text transform="matrix(1 0 0 1 279.6836 515.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ?user.companyDescription.substring(companyDescriptionArr[8],companyDescriptionArr.length > 8 ? companyDescriptionArr[11] : <></>) : <></>}</text>
                        <text transform="matrix(1 0 0 1 279.6836 535.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[11],companyDescriptionArr.length > 11 ? companyDescriptionArr[14] : <></>) : <></>}</text>
                        <text transform="matrix(1 0 0 1 279.6836 555.4585)" fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[14],companyDescriptionArr.length > 14 ? companyDescriptionArr[18] : <></>) : <></>}</text>
                        <rect fill="#1f0c0d" x="232.71" y="574.15" width="362.57" height="41.35" />
                        <polygon fill="#12090a" points="232.71 615.49 261 634.69 261 615.49 232.71 615.49" />
                        <text fill="#ece7e8" transform="translate(366.33 603.92)">
                            CURSOS
                        </text>
                        <text transform="matrix(1 0 0 1 280.6318 652.7178)"  fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.courses!== 'NOT_PRINT'?user.courses.substring(0,extraCourses.length > 3 ? extraCourses[4] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 280.6318 672.7178)"  fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[4],extraCourses.length > 4 ? extraCourses[8] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 280.6318 692.7178)"  fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[8],extraCourses.length > 8 ? extraCourses[12] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 280.6318 712.7178)"  fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[12],extraCourses.length > 12 ? extraCourses[16] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 280.6318 732.7178)"  fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[16],extraCourses.length > 16 ? extraCourses[20] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 280.6318 752.7178)"  fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[20],extraCourses.length > 20 ? extraCourses[24] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 280.6318 772.7178)"  fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[24],extraCourses.length > 24 ? extraCourses[28] : <></>):<></>} </text>
                        <text transform="matrix(1 0 0 1 280.6318 792.7178)"  fontFamily='MyriadPro-Semibold' fill='#1B1E1F' fontSize='14px'>{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[28],extraCourses.length > 28 ? extraCourses[32] : <></>):<></>} </text>
                        <path fillRule="evenodd"fill="#ece7e8" d="M312.06,91.72l-2.12,1.11-3.2,1.64-3.84,2-4.34,2.25a1.8,1.8,0,0,1-1.78,0L291.49,96l-3-1.54-3-1.54-3.94-2a1.68,1.68,0,0,1-.69-2.51,2.28,2.28,0,0,1,.77-.63c1.4-.74,2.82-1.46,4.23-2.19L292.84,82,296.78,80a1.75,1.75,0,0,1,1.72,0l5.21,2.7,3.82,2c2.06,1.07,4.11,2.15,6.17,3.2a1.72,1.72,0,0,1,.48,2.71,2.32,2.32,0,0,1-.51.37.3.3,0,0,0-.18.31c0,1.8,0,3.59,0,5.38a.39.39,0,0,0,.07.25,3.44,3.44,0,0,1,.8,2.53,3.35,3.35,0,0,1-.57,1.93,1.13,1.13,0,0,1-1.25.57,1.24,1.24,0,0,1-.79-.62,4,4,0,0,1-.07-4,.29.29,0,0,1,.07-.1c.33-.25.32-.6.32-1,0-1.42,0-2.84,0-4.25C312.07,91.86,312.06,91.81,312.06,91.72Z" />
                        <path fillRule="evenodd"fill="#ece7e8" d="M285.63,94.25l1.27.64,6.37,3.3L296.8,100a1.77,1.77,0,0,0,1.74,0l5.54-2.87,5.26-2.7.33-.18c0,.18,0,.31,0,.45,0,1.88,0,3.75,0,5.63a.36.36,0,0,1-.23.37l-6.55,3.38-5.06,2.62a.36.36,0,0,1-.38,0l-5.87-3-5.44-2.8c-.53-.27-.53-.27-.53-.88V94.25Z" />
                        <path fill="#ece7e8" d="M311.81,325.08h-7.67V324a2.84,2.84,0,0,0-2.84-2.84H294a2.84,2.84,0,0,0-2.84,2.84v1.07h-7.67a2.84,2.84,0,0,0-2.84,2.84v16.76a2.84,2.84,0,0,0,2.84,2.84h28.34a2.84,2.84,0,0,0,2.84-2.84V327.92A2.84,2.84,0,0,0,311.81,325.08Zm-19.37-.27a2.08,2.08,0,0,1,2.08-2.08h6.23a2.08,2.08,0,0,1,2.08,2.08v.27H292.45Z" />
                        <path fillRule="evenodd"fill="#ece7e8" d="M301.81,609.43h-1a.43.43,0,0,0-.12-.08l-15-3.83c-1.36-.35-2.84-.53-3.76-1.54a4,4,0,0,1-.67-5.08.85.85,0,0,0,0-1,5.53,5.53,0,0,1,1.11-6.54c4-3.45,7.92-7,11.83-10.49a2.41,2.41,0,0,1,2.29-.59c5.54,1,11.09,2,16.64,3,1.64.3,2,1.06.87,2.08-4.09,3.85-8.21,7.7-12.27,11.57a2.17,2.17,0,0,1-2.32.53c-4.58-1.14-9.18-2.23-13.77-3.33-1.25-.3-2.12.18-2.13,1.22a2.36,2.36,0,0,0,.19,1.21,1.84,1.84,0,0,0,1,.81c5.12,1.29,10.27,2.54,15.4,3.8a1,1,0,0,0,1.09-.28q4.74-4.72,9.55-9.4a1.9,1.9,0,0,0,.78-1.68,2.58,2.58,0,0,1,.2-1.08,1.46,1.46,0,0,1,1.76-1.1,1.17,1.17,0,0,1,1,1.59,7.14,7.14,0,0,0-.12,1,6,6,0,0,1-.11,1.56,5,5,0,0,0,0,4,1.57,1.57,0,0,1-.46,2.07c-3,2.87-5.92,5.77-8.9,8.64C304,607.54,302.87,608.48,301.81,609.43Zm-17.74-9.79c-1.17,1.45-.53,2.92,1.44,3.42,4.48,1.16,9,2.26,13.44,3.49a2.64,2.64,0,0,0,3.07-.7c3-3,6.07-6,9.11-8.92a.93.93,0,0,0,.3-.68,7.94,7.94,0,0,0-.38-1.31c-.24.21-.45.38-.63.55L302.77,603c-.83.82-1.19.9-2.44.6Zm21.26-13.48a6.41,6.41,0,0,0-.93-.34c-2.71-.54-5.43-1-8.12-1.61a2.46,2.46,0,0,0-2.72.77c-.58.7-.59.79.47,1,2.68.52,5.38,1,8,1.58a2.33,2.33,0,0,0,2.53-.65C304.79,586.69,305,586.49,305.33,586.17Z" />
                        <line stroke='#fff' fill="#fff" strokeMiterlimit="10" x1="27.64" y1="334.35" x2="228.84" y2="334.35" />
                        <text fontSize="22px" fontWeight="700" fill="#fff" fontFamily="MyriadPro-Semibold, Myriad Pro" transform="translate(83.57 465.54)">
                            CONTATO
                        </text>
                        <text transform="matrix(1 0 0 1 60.6318 505.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                        <text transform="matrix(1 0 0 1 60.6318 549.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.email}</text>
                        <text transform="matrix(1 0 0 1 60.6318 583.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.linkedln_link !=='NOT_PRINT'?user.linkedln_link:<></>}</text>
                        <text transform="matrix(1 0 0 1 60.6318 629.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.address.substring(0, fulladdress[3])}</text>
                        <text transform="matrix(1 0 0 1 60.6318 649.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.address.substring(fulladdress[3], fulladdress.length > 3 ? fulladdress[10] : <></>)}</text>
                        <line stroke='#fff' fill="#fff" strokeMiterlimit="10" x1="27.72" y1="476.35" x2="228.92" y2="476.35" />
                        <path fill="#fff" fillRule="evenodd" d="M42.88,439h.43c5.86,0,11.72,0,17.58,0a1.74,1.74,0,0,1,1.83,1.83q0,13.73,0,27.46a1.73,1.73,0,0,1-1.83,1.83c-5.86,0-11.72,0-17.58,0h-.43Zm15.41,12.72a5.52,5.52,0,0,0-2.07-5.19,4.42,4.42,0,0,1-6.69-.12,5.51,5.51,0,0,0-2.17,5.32Zm-5.35-11a2.93,2.93,0,1,0,2.92,2.92A2.93,2.93,0,0,0,52.94,440.64ZM53,457.31h7.06a.72.72,0,0,0,.75-.84c-.05-.4-.36-.63-.86-.63H46a.73.73,0,0,0-.79.74.71.71,0,0,0,.79.73Zm0,6.42H46a.72.72,0,0,0-.8.83c.05.42.37.64.93.64H59.9a1.64,1.64,0,0,0,.37,0,.68.68,0,0,0,.58-.67.72.72,0,0,0-.79-.77Zm0-2.49h5.84c.43,0,.86,0,1.29,0a.72.72,0,0,0,.08-1.44,2.67,2.67,0,0,0-.44,0H46.3a2.91,2.91,0,0,0-.51,0,.69.69,0,0,0-.58.71c0,.45.31.73.83.73Z" />
                        <path fill="#fff" fillRule="evenodd" d="M37.84,463.86v-3.32c1.18-.18,2.46.35,3.5-.7v4.7C40.32,463.52,39,464,37.84,463.86Z" />
                        <path fill="#fff" fillRule="evenodd" d="M41.33,449.09c-1-1-2.3-.53-3.48-.69v-3.31c1.15-.19,2.44.33,3.48-.69Z" />
                        <path fill="#fff" fillRule="evenodd" d="M37.85,452.82c1.19-.16,2.46.32,3.49-.7v4.69c-1-1-2.3-.55-3.49-.7Z" />
                        <path fill="#fff" fillRule="evenodd" d="M38.13,468.27c1.09-.1,2.27.26,3.22-.71V470A2.9,2.9,0,0,1,38.13,468.27Z" />
                        <path fill="#fff" fillRule="evenodd" d="M41.35,439v2.38c-.94-1-2.11-.57-3.18-.69A2.86,2.86,0,0,1,41.35,439Z" />
                        <path fill="#fff" fillRule="evenodd" d="M38.85,442.17c.3,0,.59,0,.89,0a.71.71,0,1,1,0,1.42c-.59,0-1.18,0-1.78,0a.72.72,0,1,1,0-1.43h.85Z" />
                        <path fill="#fff" fillRule="evenodd" d="M38.85,457.62c.31,0,.61,0,.92,0a.73.73,0,0,1,.71.7.68.68,0,0,1-.66.7c-.65,0-1.3,0-1.95,0a.64.64,0,0,1-.66-.69.68.68,0,0,1,.69-.71c.32,0,.64,0,1,0Z" />
                        <path fill="#fff" fillRule="evenodd" d="M38.84,451.31c-.31,0-.62,0-.92,0a.68.68,0,0,1-.7-.7.67.67,0,0,1,.69-.71q.94,0,1.89,0a.68.68,0,0,1,.69.67.69.69,0,0,1-.68.73C39.48,451.32,39.16,451.31,38.84,451.31Z" />
                        <path fill="#fff" fillRule="evenodd" d="M38.84,465.37c.32,0,.64,0,1,0a.68.68,0,0,1,.67.65.69.69,0,0,1-.62.74c-.68,0-1.36,0-2,0a.7.7,0,0,1,.06-1.39C38.2,465.36,38.52,465.37,38.84,465.37Z" />
                        <path fill="#fff" fillRule="evenodd" d="M38.38,497.76a3.81,3.81,0,0,1,1.55-2.24,2.12,2.12,0,0,1,2-.18.74.74,0,0,1,.37.49c.19,1,.36,2,.51,3,.06.38-.22.62-.47.84a6.78,6.78,0,0,1-.75.55.53.53,0,0,0-.25.69,9.09,9.09,0,0,0,3.59,4.89.5.5,0,0,0,.64,0c.41-.31.83-.6,1.22-.94a.59.59,0,0,1,.86,0c.78.62,1.56,1.22,2.31,1.87a.69.69,0,0,1,.14.58,2.86,2.86,0,0,1-2.93,2.14,4.66,4.66,0,0,1-2.11-.63,12.89,12.89,0,0,1-6-7.07,7.8,7.8,0,0,1-.7-3.1C38.3,498.3,38.35,498,38.38,497.76Z" />
                        <path fill="#fff" fillRule="evenodd" d="M37.1,548v-8c0-.09.05-.18.08-.28a1.68,1.68,0,0,1,1.65-1.12h10.7a1.63,1.63,0,0,1,1.44.71,3.62,3.62,0,0,1,.3.69v8l-.08.27a1.68,1.68,0,0,1-1.66,1.13H38.83a1.63,1.63,0,0,1-1.43-.71A3.75,3.75,0,0,1,37.1,548Zm12.74-6.74-.16.13L45,545.35a.68.68,0,0,1-.48.17h-.67a.71.71,0,0,1-.52-.19l-4.68-4-.13-.1v.18c0,2.07,0,4.14,0,6.21,0,.22,0,.32.32.32H49.52c.27,0,.32-.09.32-.31q0-3.11,0-6.23Zm-.91-1.19H39.44l4.74,4Z" />
                        <path fill="#fff" d="M51.12,621.95c-.07-.29-.16-.56-.24-.84l-.07-.11a5,5,0,0,0-9.49,2.66c0,.07,0,.21,0,.28a10.61,10.61,0,0,0,1.38,3.72c0,.07.2.38.21.4.24.37.47.75.73,1.1s.61.82.92,1.22.48.58.74.86l.8.84c.12.13.13.13.25,0l.86-.93a18,18,0,0,0,1.49-1.85c.27-.39.54-.78.79-1.18a11.46,11.46,0,0,0,.8-1.5c.13-.29.26-.59.38-.89a8.63,8.63,0,0,0,.4-1.41,6.9,6.9,0,0,0,.14-1.31A4.33,4.33,0,0,0,51.12,621.95ZM50,623.52a3.78,3.78,0,0,1-.24.94,3.86,3.86,0,0,1-.48.86,3.8,3.8,0,0,1-.76.76,4.68,4.68,0,0,1-.6.36,3.69,3.69,0,0,1-1.34.37,2.59,2.59,0,0,1-.33,0,3.44,3.44,0,0,1-1.48-.29l-.61-.33a3.68,3.68,0,0,1-1-.93,3.49,3.49,0,0,1-.42-.75,3.71,3.71,0,0,1-.3-1.5,3.83,3.83,0,0,1,1.12-2.64,3.71,3.71,0,0,1,1.13-.77,3.77,3.77,0,0,1,1.14-.3,3.73,3.73,0,0,1,2.47.61,3.85,3.85,0,0,1,.78.69,4.05,4.05,0,0,1,.6.94,3.82,3.82,0,0,1,.27.95A3.55,3.55,0,0,1,50,623.52Z" />
                        <path fill="#fff" d="M37.1,580.2q0-2.81,0-5.62a1.43,1.43,0,0,1,1.1-1.42,1.58,1.58,0,0,1,.36,0H49.81a1.43,1.43,0,0,1,1.46,1.46q0,5.62,0,11.24a1.43,1.43,0,0,1-1.46,1.46H38.56a1.43,1.43,0,0,1-1.47-1.47Q37.09,583,37.1,580.2Zm9.92,5h2.12s0-.06,0-.09c0-1.3,0-2.6,0-3.9a2.45,2.45,0,0,0-.05-.53,2.48,2.48,0,0,0-1.48-1.79,2,2,0,0,0-1.24-.17,2.27,2.27,0,0,0-1.43.89l0,0v-.8H42.77v6.36H44.9V585c0-1.17,0-2.35,0-3.52a1.15,1.15,0,0,1,.28-.79,1,1,0,0,1,1.4-.14,1.11,1.11,0,0,1,.43.92q0,1.76,0,3.52Zm-5.67,0V578.8H39.23v6.36Zm-1.05-7.58a1.28,1.28,0,0,0,0-2.55,1.28,1.28,0,1,0,0,2.55Z" />
                    </svg>
                </div>
            </div>
        </>
    )
}
export default ResumeCurvi3;