import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Curvi4(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('curvi4'), `${user.name}.png`, imageOptions)
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
                    <svg id="curvi4" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 568.55 841.89">
                        <polygon fill="#b3b3b3" points="193 841.89 223 841.89 223 257.88 193 237.91 193 841.89" />
                        <polygon fill="#231d1e" points="223 648.29 223 676.64 568.55 676.64 568.24 648.29 223 648.29" />
                        <polygon fill="#231d1e" points="223 453.32 223 481.67 568.55 481.67 568.24 453.32 223 453.32" />
                        <polygon fill="#231d1e" points="223 229.34 223 257.69 568.55 257.69 568.24 229.34 223 229.34" />
                        <rect fill="#231d1e" width="193" height="841.89" />
                        {/* <circle strokeMiterlimit="10" stroke="#231D1E" strokeWidth="7px" fill="#fff" cx="100.5" cy="91.05" r="75.49" />
                        <text transform="matrix(1 0 0 1 74.5471 108.209)" fill='#341716' fontFamily='MyriadPro-Bold'fontSize='58.4611px'>{user.name.charAt(0).toUpperCase()}</text> */}
                        <text transform="matrix(1 0 0 1 229.2476 80.0293)" fill="#070909" fontFamily="'MyriadPro-Semibold'" fontSize="27.833px">{user.name.substring(0, fullname[2])}</text>
                        <text transform="matrix(1 0 0 1 229.2476 109.0293)" fill="#070909" fontFamily="'MyriadPro-Semibold'" fontSize="27.833px">{fullname.length > 2 ? user.name.substring(fullname[2], fullname[4]) : <></>}</text>
                        <text transform="matrix(1 0 0 1 229.2476 132.0293)" fill="#070909" fontFamily="'MyriadPro-Semibold'" fontSize="27.833px">{fullname.length > 4 ? user.name.substring(fullname[4], fullname[8]) : <></>}</text>
                        <text transform="matrix(1 0 0 1 349.2476 152.0293)" fill="#070909" fontFamily="'MyriadPro-Semibold'" fontSize="24.833px">{user.age}</text>
                        <text transform="matrix(1 0 0 1 249.2476 182.0293)" fill="#070909" fontFamily="'MyriadPro-Semibold'" fontSize="24.833px">{user.area} - {user.area_level}</text>
                        <text fontSize="20px" fontFamily="MyriadPro-Semibold, Myriad Pro" fill="#fff" fontWeight="700" transform="translate(249.25 252.13)">EXPERIÊNCIA</text>
                        <text fontSize="20px" fontFamily="MyriadPro-Semibold, Myriad Pro" fill="#fff" fontWeight="700" transform="translate(249.25 476.1)">FORMAÇÃO</text>
                        <text fontSize="20px" fontFamily="MyriadPro-Semibold, Myriad Pro" fill="#fff" fontWeight="700" transform="translate(249.25 671.08)">CURSOS</text>
                        <polygon fill="#666" points="193 209.12 193 237.91 223 257.88 223 229.09 193 209.12" />
                        <polygon fill="#666" points="193 433.38 193 462.16 223 482.13 223 453.35 193 433.38" />
                        <polygon fill="#b3b3b3" points="223 0 193 0 193 209.12 223 229.09 223 0" />
                        <polygon fill="#666" points="193 628.74 193 657.52 223 677.49 223 648.7 193 628.74" />
                        <rect fill="#090808" y="209.34" width="193" height="28.35" />
                        <rect fill="#090808" y="433.6" width="193" height="28.35" />
                        <text fontSize="20px" fontFamily="MyriadPro-Semibold, Myriad Pro" fill="#fff" fontWeight="700" transform="translate(52.91 229.34)">CONTATO</text>
                        <text transform="matrix(1 0 0 1 57.6318 265.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                        <text transform="matrix(1 0 0 1 57.6318 300.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{emailLength()}</text>
                        <text transform="matrix(1 0 0 1 57.6318 314.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.email.substring(email,email.length)}</text>
                        <text transform="matrix(1 0 0 1 57.6318 340.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.linkedln_link !=='NOT_PRINT'?user.linkedln_link:<></>}</text>
                        <text transform="matrix(1 0 0 1 57.6318 369.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.address.substring(0, fulladdress[3])}</text>
                        <text transform="matrix(1 0 0 1 57.6318 389.9448)" fontFamily='MyriadPro-Semibold' fill='#FFFFFF' fontSize='14px'>{user.address.substring(fulladdress[3], fulladdress.length > 3 ? fulladdress[10] : <></>)}</text>
                        <text fontSize="20px" fontFamily="MyriadPro-Semibold, Myriad Pro" fill="#fff" fontWeight="700" transform="translate(50.55 454.32)">OBJETIVO</text>
                        <path fill="#fff" fillRule="evenodd" d="M30.38,254.7a3.81,3.81,0,0,1,1.55-2.24,2.12,2.12,0,0,1,2-.18.74.74,0,0,1,.37.49c.19,1,.36,2,.51,3,.06.38-.22.62-.47.84a6.78,6.78,0,0,1-.75.55.53.53,0,0,0-.25.69,9.09,9.09,0,0,0,3.59,4.89.5.5,0,0,0,.64,0c.41-.31.83-.6,1.22-.94a.59.59,0,0,1,.86,0c.78.62,1.56,1.22,2.31,1.87a.69.69,0,0,1,.14.58,2.86,2.86,0,0,1-2.93,2.14,4.66,4.66,0,0,1-2.11-.63,12.89,12.89,0,0,1-6-7.07,7.8,7.8,0,0,1-.7-3.1C30.3,255.23,30.35,255,30.38,254.7Z" />
                        <path fill="#fff" fillRule="evenodd" d="M29.1,305v-8c0-.09.05-.18.08-.28a1.68,1.68,0,0,1,1.65-1.12h10.7a1.63,1.63,0,0,1,1.44.71,3.62,3.62,0,0,1,.3.69v8l-.08.27a1.68,1.68,0,0,1-1.66,1.13H30.83a1.63,1.63,0,0,1-1.43-.71A3.75,3.75,0,0,1,29.1,305Zm12.74-6.74-.16.13L37,302.29a.68.68,0,0,1-.48.17h-.67a.71.71,0,0,1-.52-.19l-4.68-4-.13-.1v.18c0,2.07,0,4.14,0,6.21,0,.22,0,.32.32.32H41.52c.27,0,.32-.09.32-.31q0-3.11,0-6.23ZM40.92,297H31.44l4.74,4Z" />
                        <path fill="#fff" d="M43.12,378.88c-.07-.29-.16-.56-.24-.84l-.07-.11a5,5,0,0,0-9.49,2.66c0,.07,0,.21,0,.28a10.61,10.61,0,0,0,1.38,3.72c0,.07.2.38.21.4.24.37.47.75.73,1.1s.61.82.92,1.22.48.58.74.86l.8.84c.12.13.13.13.25,0l.86-.93a18,18,0,0,0,1.49-1.85c.27-.39.54-.78.79-1.18a11.46,11.46,0,0,0,.8-1.5c.13-.29.26-.59.38-.89a8.63,8.63,0,0,0,.4-1.41,6.9,6.9,0,0,0,.14-1.31A4.33,4.33,0,0,0,43.12,378.88ZM42,380.45a3.78,3.78,0,0,1-.24.94,3.86,3.86,0,0,1-.48.86,3.8,3.8,0,0,1-.76.76,4.68,4.68,0,0,1-.6.36,3.69,3.69,0,0,1-1.34.37,2.59,2.59,0,0,1-.33,0,3.44,3.44,0,0,1-1.48-.29l-.61-.33a3.68,3.68,0,0,1-1-.93,3.49,3.49,0,0,1-.42-.75,3.71,3.71,0,0,1-.3-1.5,3.83,3.83,0,0,1,1.12-2.64,3.71,3.71,0,0,1,1.13-.77,3.77,3.77,0,0,1,1.14-.3,3.73,3.73,0,0,1,2.47.61,3.85,3.85,0,0,1,.78.69,4.05,4.05,0,0,1,.6.94,3.82,3.82,0,0,1,.27.95A3.55,3.55,0,0,1,42,380.45Z" />
                        <path fill="#fff" d="M29.1,337.14q0-2.81,0-5.62a1.43,1.43,0,0,1,1.1-1.42,1.58,1.58,0,0,1,.36,0H41.81a1.43,1.43,0,0,1,1.46,1.46q0,5.62,0,11.24a1.43,1.43,0,0,1-1.46,1.46H30.56a1.43,1.43,0,0,1-1.47-1.47Q29.09,340,29.1,337.14Zm9.92,5h2.12s0-.06,0-.09c0-1.3,0-2.6,0-3.9a2.45,2.45,0,0,0-.05-.53,2.48,2.48,0,0,0-1.48-1.79,2,2,0,0,0-1.24-.17,2.27,2.27,0,0,0-1.43.89l0,0v-.8H34.77v6.36H36.9V342c0-1.17,0-2.35,0-3.52a1.15,1.15,0,0,1,.28-.79,1,1,0,0,1,1.4-.14,1.11,1.11,0,0,1,.43.92q0,1.76,0,3.52Zm-5.67,0v-6.36H31.23v6.36Zm-1.05-7.58a1.28,1.28,0,0,0,0-2.55,1.28,1.28,0,1,0,0,2.55Z" />
                    </svg>
                </div>
            </div>
        </>
    )
}
export default Curvi4;