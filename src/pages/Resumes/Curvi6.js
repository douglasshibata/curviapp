import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Curvi6(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('curvi6'), `${user.name}.png`, imageOptions)
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
                    <svg xmlns="http://www.w3.org/2000/svg" id='curvi6' viewBox="0 0 595.77 841.89">
                        <g id="Layer_2" data-name="Layer 2">
                            <polygon fill="#4bb69a" points="595.28 0 595.28 85.16 481.16 53.3 595.28 0" />
                            <polygon fill="#3c9e81" points="511.99 0 430.8 77.63 481.16 53.3 595.28 0 511.99 0" />
                            <polygon fill="#3c9e81" points="63.56 0 430.8 77.63 181.06 0 63.56 0" />
                            <polygon fill="#4bb69a" points="181.06 0 430.8 77.63 511.99 0 181.06 0" />
                            <polygon fill="#3c9e81" points="0.49 841.89 0.49 739.69 114.62 777.92 0.49 841.89" />
                            <polygon fill="#4bb69a" points="114.62 777.92 0.49 841.89 83.79 841.89 164.98 748.73 114.62 777.92" />
                            <polygon fill="#4bb69a" points="221.06 841.89 532.21 841.89 164.98 748.73 414.71 841.89 221.06 841.89" />
                            <polygon fill="#3c9e81" points="221.06 841.89 83.79 841.89 83.79 841.89 221.06 841.89" />
                            <polygon fill="#3c9e81" points="414.71 841.89 164.98 748.73 83.79 841.89 221.06 841.89 414.71 841.89" />
                            <polygon fill="#3c9e81" points="371.58 801.14 595.77 726.53 595.77 841.89 532.21 841.89 371.58 801.14" />
                            <polygon fill="#4bb69a" points="224.19 33.95 63.56 0 0 0 0 96.12 224.19 33.95" />
                            <path fill="#4bb69a" d="M538.08,111.16H331.84a33.71,33.71,0,0,0-33.71,33.71c0,1,.05,2,.14,3H504.51a33.71,33.71,0,0,0,33.71-33.71C538.22,113.17,538.17,112.16,538.08,111.16Z" />
                            <path fill="#4bb69a" d="M538.08,365.26H331.84A33.71,33.71,0,0,0,298.13,399c0,1,.05,2,.14,3H504.51a33.71,33.71,0,0,0,33.71-33.71C538.22,367.27,538.17,366.26,538.08,365.26Z" />
                            <path fill="#4bb69a" d="M538.08,588.35H331.84a33.71,33.71,0,0,0-33.71,33.71c0,1,.05,2,.14,3H504.51a33.71,33.71,0,0,0,33.71-33.71C538.22,590.36,538.17,589.35,538.08,588.35Z" />
                            <path fill="#4bb69a" d="M42.93,371.26H54.19A25.44,25.44,0,0,0,74,346.46c0-.67,0-1.34-.09-2,.1.11,0-8.7,0-8.7H54.77A25.44,25.44,0,0,0,29.33,361.2v10.06h13.6Zm-2.3-24.13c0-.14.08-.29.13-.44a2.68,2.68,0,0,1,2.65-1.8H60.53a2.62,2.62,0,0,1,2.3,1.14,5.82,5.82,0,0,1,.48,1.1v12.76c0,.14-.08.3-.13.44a2.69,2.69,0,0,1-2.65,1.8H43.41A2.61,2.61,0,0,1,41.11,361a6,6,0,0,1-.48-1.1Z" />
                            <path fill="#4bb69a" d="M43.43,359.84H60.5c.43,0,.52-.15.52-.5,0-3.32,0-6.64,0-10v-.27l-.26.21-7.47,6.32a1.09,1.09,0,0,1-.76.27H51.45a1.14,1.14,0,0,1-.83-.3l-7.49-6.32-.21-.17v.29c0,3.31,0,6.63,0,9.94C42.92,359.68,43,359.84,43.43,359.84Z" />
                            <path fill="#4bb69a" d="M59.56,347.19H44.38L52,353.62Z" />
                            <path fill="#4bb69a" d="M57.2,433.59a6.47,6.47,0,0,0-1-1.51A6.15,6.15,0,0,0,55,431a6.05,6.05,0,0,0-9.38,5,5.93,5.93,0,0,0,.47,2.4,5.6,5.6,0,0,0,.67,1.21A5.93,5.93,0,0,0,48.33,441c.15.09.94.51,1,.53a5.55,5.55,0,0,0,2.37.46,4.24,4.24,0,0,0,.52,0,5.91,5.91,0,0,0,2.14-.6,7.6,7.6,0,0,0,1-.58,6.07,6.07,0,0,0,2.37-4.11,5.7,5.7,0,0,0,0-1.63A6,6,0,0,0,57.2,433.59Z" />
                            <path fill="#4bb69a" d="M73.93,421.5H54.77a25.44,25.44,0,0,0-25.44,25.44V457H54.19A25.44,25.44,0,0,0,74,432.2c0-.67,0-1.34-.09-2C74,430.31,73.93,421.5,73.93,421.5ZM59.41,438a14,14,0,0,1-.64,2.25c-.18.48-.4,1-.6,1.42a18.45,18.45,0,0,1-1.28,2.4c-.4.65-.82,1.27-1.26,1.89a28.67,28.67,0,0,1-2.38,3c-.45.5-.92,1-1.38,1.48-.21.21-.21.21-.41,0-.42-.45-.86-.89-1.27-1.34s-.8-.89-1.18-1.37c-.51-.64-1-1.29-1.48-2s-.78-1.18-1.17-1.77c0,0-.29-.53-.34-.64a17,17,0,0,1-2.21-6c0-.11,0-.33,0-.45A8,8,0,0,1,59,432.7a1.28,1.28,0,0,1,.11.17c.13.44.27.88.38,1.34a6.84,6.84,0,0,1,.18,1.72A11,11,0,0,1,59.41,438Z" />
                            <path fill="#4bb69a" d="M73.93,297.14H54.77a25.44,25.44,0,0,0-25.44,25.44v10.06H54.19A25.44,25.44,0,0,0,74,307.83c0-.67,0-1.34-.09-2C74,305.95,73.93,297.14,73.93,297.14Zm-31,7.3c.49-.48,1-1,1.47-1.46a6.39,6.39,0,0,1,.57-.43h.4a6.42,6.42,0,0,1,.6.47c1.24,1.22,2.47,2.46,3.7,3.69a.85.85,0,0,1,0,1.42c-.64.61-1.29,1.22-1.91,1.8l-5.19-5.17C42.72,304.67,42.85,304.56,43,304.44Zm15.69,20.64-.71.14H56.71l-.19,0c-.36-.05-.71-.1-1.07-.17a12.72,12.72,0,0,1-4.5-2,28.74,28.74,0,0,1-5.51-4.8,23.86,23.86,0,0,1-3.53-5,10.81,10.81,0,0,1-1-3c-.07-.38-.12-.76-.18-1.13V308c.09-.4.16-.81.28-1.2a2.22,2.22,0,0,1,.58-1l.17.16,5.06,5.06a.32.32,0,0,1,.09.36,2.47,2.47,0,0,0,.52,2.42,49,49,0,0,0,4.66,4.67,2.5,2.5,0,0,0,2.44.53.29.29,0,0,1,.33.06L60,324.24l.11.12A2.88,2.88,0,0,1,58.66,325.08Zm4.74-4.16a7.38,7.38,0,0,1-.51.65c-.52.54-1.05,1.06-1.58,1.58l-.16.15-5.23-5.23c.13-.12.27-.24.41-.37l1.53-1.54a.83.83,0,0,1,1.31,0l3.91,3.92a3.7,3.7,0,0,1,.32.44Z" />
                            <text transform="matrix(1 0 0 1 30.1782 130.771)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(0, fullname[1])}</text>
                            <text transform="matrix(1 0 0 1 30.1782 152.771)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[1], fullname.length > 1 ? fullname[3] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 30.1782 174.771)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[3], fullname.length > 3 ? fullname[4] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 30.1782 196.771)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[4], fullname.length > 4 ? fullname[5] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 30.1782 218.771)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[5], fullname.length > 5 ? fullname[6] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 34.4585 234.3408)" fill="#120F10" fontFamily="MyriadPro-Regular" fontSize="15.9183px">{user.area} - {user.area_level}</text>
                            <text fill="#120f10" fontSize="26px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(79.82 281.48)">CONTATO</text>
                            <text transform="matrix(1 0 0 1 75.6108 315.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">({user.cellphone.substring(0, 2)}) {user.cellphone.substring(2, user.cellphone.length)}</text>
                            <text transform="matrix(1 0 0 1 75.6108 350.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">{emailLength()}</text>
                            <text transform="matrix(1 0 0 1 75.6108 364.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.email.substring(email, user.email.length)}</text>
                            <text transform="matrix(1 0 0 1 75.6108 394.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.linkedln_link !== 'NOT_PRINT' ? user.linkedln_link : <></>}</text>
                            <text transform="matrix(1 0 0 1 75.6108 429.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.address.substring(0, fulladdress[3])}</text>
                            <text transform="matrix(1 0 0 1 75.6108 439.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.address.substring(fulladdress[3], fulladdress.length > 3 ? fulladdress[9] : <></>)}</text>
                            <text fill="#120f10" fontSize="26px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(78.05 503.3)">OBJETIVO</text>
                            <text transform="matrix(1 0 0 1 45.4585 520.6353)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(0, fullgoal[3])}</text>
                            <text transform="matrix(1 0 0 1 45.4585 540.6353)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[3], fullgoal.length > 3 ? fullgoal[6] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 45.4585 560.6353)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[6], fullgoal.length > 6 ? fullgoal[8] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 45.4585 580.6353)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[8], fullgoal.length > 8 ? fullgoal[10] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 45.4585 600.6353)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[10], fullgoal.length > 10 ? fullgoal[12] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 45.4585 620.6353)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[12], fullgoal.length > 12 ? fullgoal[14] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 45.4585 640.6353)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[14], fullgoal.length > 14 ? fullgoal[16] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 45.4585 660.6353)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[16], fullgoal.length > 16 ? fullgoal[18] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 45.4585 680.6353)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[18], fullgoal.length > 18 ? fullgoal[20] : <></>)}</text>
                            <text transform="matrix(1 0 0 1 45.4585 700.6353)" fill="#120F10" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[20], fullgoal.length > 20 ? fullgoal[22] : <></>)}</text>
                            <path fill="#4bb69a" d="M73.91,387.33c.1.11,0-8.7,0-8.7H54.77a25.59,25.59,0,0,0-4.18.35,17.36,17.36,0,0,0-10.31,4.19,25.4,25.4,0,0,0-11,20.9v10.06H54.19A25.44,25.44,0,0,0,74,389.33C74,388.65,74,388,73.91,387.33Zm-21,6.67v1.28c.24-.22.49-.46.76-.68a3.6,3.6,0,0,1,4.23-.31,4.1,4.1,0,0,1,2.09,2.82A4.32,4.32,0,0,1,60,398c0,2.19,0,4.38,0,6.57,0,.05,0,.1,0,.17H56.44v-.24q0-3,0-6a1.81,1.81,0,0,0-1-1.72,1.78,1.78,0,0,0-2.54,1.41,3.55,3.55,0,0,0,0,.39q0,2.93,0,5.86v.25H49.28V394Zm-7.78-2a2.15,2.15,0,1,1,2.15-2.16A2.16,2.16,0,0,1,45.09,392Zm1.78,2v10.74H43.31V394Z" />
                        </g>
                        <g id="Layer_3" data-name="Layer 3">
                            <text fill="#fff" fontSize="26px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(345.05 139.31)">FORMAÇÃO</text>
                            <text transform="matrix(1 0 0 1 300.2563 175.9448)" fontFamily="MyriadPro-Semibold" fill="#3C9E81" fontSize="14px">{user.courseName}</text>
                            <text transform="matrix(1 0 0 1 300.2563 195.9448)" fontFamily="MyriadPro-Semibold" fill="#120F10" fontSize="14px">{user.courseSchool}</text>
                            <text transform="matrix(1 0 0 1 300.2563 215.9448)" fontFamily="MyriadPro-Semibold" fill="#120F10" fontSize="14px">{user.courseEndYear === 'Completo' ? user.courseEndYear : `Previsão de Conclusão: ${user.courseEndYear}`}</text>
                            <text fill="#fff" fontSize="26px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(328.59 392.14)">EXPERIÊNCIAS</text>
                            <text transform="matrix(0.9856 0 0 1 300.2417 423.1533)" fontFamily="MyriadPro-Semibold" fill="#3C9E81" fontSize="14px">{user.companyOccupation !== "NOT_PRINT" ? `Cargo: ${user.companyOccupation}` : <></>}</text>
                            <text transform="matrix(0.9856 0 0 1 300.2417 443.1533)" fontFamily="MyriadPro-Semibold" fill="#120F10" fontSize="14px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' ? `Empresa: ${user.companyName}` : user.companyName.substring(0, 38)}</text>
                            <text transform="matrix(0.9856 0 0 1 300.2417 463.1533)" fontFamily="MyriadPro-Semibold" fill="#120F10" fontSize="14px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' ? `` : user.companyName.substring(38, 76)}</text>
                            <text transform="matrix(0.9856 0 0 1 300.2417 483.1533)" fontFamily="MyriadPro-Semibold" fill="#120F10" fontSize="14px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' ? `` : user.companyName.substring(76, user.companyName.length)}</text>
                            <text transform="matrix(0.9856 0 0 1 300.2417 463.1533)" fontFamily="MyriadPro-Semibold" fill="#120F10" fontSize="14px">{user.companyStartEnd !== "NOT_PRINT" ? `Período: ${user.companyStartEnd}` : <></>}</text>
                            <text transform="matrix(0.9856 0 0 1 300.2417 483.1533)" fontFamily="MyriadPro-Semibold" fill="#120F10" fontSize="14px">{user.companyDescription !== "NOT_PRINT" ? `Principais Atividades: ${user.companyDescription.substring(0, companyDescriptionArr[1])} ` : <></>}</text>
                            <text transform="matrix(0.9856 0 0 1 300.2417 503.1533)" fontFamily="MyriadPro-Semibold" fill="#120F10" fontSize="14px">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[1], companyDescriptionArr.length > 1 ? companyDescriptionArr[7] : <></>) : <></>}</text>
                            <text transform="matrix(0.9856 0 0 1 300.2417 523.1533)" fontFamily="MyriadPro-Semibold" fill="#120F10" fontSize="14px">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[7], companyDescriptionArr.length > 7 ? companyDescriptionArr[14] : <></>) : <></>}</text>
                            <text transform="matrix(0.9856 0 0 1 300.2417 543.1533)" fontFamily="MyriadPro-Semibold" fill="#120F10" fontSize="14px">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[14], companyDescriptionArr.length > 14 ? companyDescriptionArr[21] : <></>) : <></>}</text>
                            <text fill="#fff" fontSize="26px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(365.59 615.64)">CURSOS</text>
                            <text transform="matrix(1 0 0 1 300.0435 636.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(0,extraCourses[3]):<></>} </text>
                            <text transform="matrix(1 0 0 1 300.0435 656.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[3],extraCourses.length > 3 ? extraCourses[6] : <></>):<></>}  </text>
                            <text transform="matrix(1 0 0 1 300.0435 676.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[6],extraCourses.length > 6 ? extraCourses[9] : <></>):<></>}  </text>
                            <text transform="matrix(1 0 0 1 300.0435 696.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[9],extraCourses.length > 9 ? extraCourses[12] : <></>):<></>}  </text>
                            <text transform="matrix(1 0 0 1 300.0435 716.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[12],extraCourses.length > 12 ? extraCourses[15] : <></>):<></>}  </text>
                            <text transform="matrix(1 0 0 1 300.0435 736.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[15],extraCourses.length > 15 ? extraCourses[18] : <></>):<></>}  </text>
                            <text transform="matrix(1 0 0 1 300.0435 756.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[18],extraCourses.length > 18 ? extraCourses[21] : <></>):<></>}  </text>
                            <text transform="matrix(1 0 0 1 300.0435 776.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[21],extraCourses.length > 21 ? extraCourses[24] : <></>):<></>}  </text>
                            <text transform="matrix(1 0 0 1 300.0435 796.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[24],extraCourses.length > 24 ? extraCourses[27] : <></>):<></>}  </text>
                        </g>
                    </svg>

                </div>

            </div>
        </>
    )
}
export default Curvi6;