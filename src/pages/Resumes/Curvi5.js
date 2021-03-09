import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Curvi5(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('curvi5'), `${user.name}.png`, imageOptions)
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
                    <svg id="curvi5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 841.89">
                        <path fill="#8fd1dd"  d="M438,0c-32,3.76-47.44,6.74-86.31,22.23h0S495.56,19,595.28,84V0Z" />
                        <path fill="#16100f" d="M245.05,841.89H595.28V797.76s-120-41.33-249-2.1c-48.13,14.64-79.56,24.2-102.69,30.66-38.87,10.85-54.34,12.94-86.31,15.57Z" />
                        <path fill="#8fd1dd"  d="M16,81.62V776.81c62.6,24.52,137.67,32.62,184,35.27V94.24C118.42,113.41,46.77,93,16,81.62Z" />
                        <path fill="#16100f" d="M350.23,0H0V63s5.72,2.81,16,6.62C46.77,81,118.42,101.41,200,82.24A288.69,288.69,0,0,0,249,66c48.13-20.9,79.56-34.55,102.69-43.77C390.56,6.74,406,3.76,438,0Z" />
                        <path fill="#d3d3ce" d="M200,825.07c-46.33-2.65-121.4-10.75-184-35.27q-8.15-3.19-16-6.76v58.84H157.28c32-2.63,47.44-4.72,86.31-15.57C243.59,826.32,226.49,826.59,200,825.07Z" />
                        <path fill="#16100f" d="M577.69,156.77a15.86,15.86,0,0,1-15.86,15.86H262.45a15.86,15.86,0,0,1-15.86-15.86h0a15.86,15.86,0,0,1,15.86-15.86H561.83a15.86,15.86,0,0,1,15.86,15.86Z" />
                        <circle fill="#8fd1dd"  cx="262.33" cy="156.77" r="15.67" />  
                        <text transform="matrix(1 0 0 1 35.1782 130.771)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(0,fullname[1])}</text>
                        <text transform="matrix(1 0 0 1 35.1782 152.771)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[1],fullname.length>1?fullname[3]:<></>)}</text>
                        <text transform="matrix(1 0 0 1 35.1782 174.771)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[3],fullname.length>3?fullname[4]:<></>)}</text>
                        <text transform="matrix(1 0 0 1 35.1782 196.771)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[4],fullname.length>4?fullname[6]:<></>)}</text>
                        <text transform="matrix(1 0 0 1 35.1782 218.771)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[5],fullname.length>5?fullname[4]:<></>)}</text>
                        <text transform="matrix(1 0 0 1 35.1782 238.771)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="26.3245px">{user.name.substring(fullname[4],fullname.length>4?fullname[5]:<></>)}</text>
                        <text transform="matrix(1 0 0 1 35.4585 260.3408)" fill="#16100F" fontFamily="MyriadPro-Regular" fontSize="12.9183px">{user.area} - {user.area_level}</text>
                        <text fontSize="20px" fill="#d3d3ce"  fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700"  transform="translate(296.03 163.71)">EXPERIÊNCIA</text>
                        <text transform="matrix(0.9856 0 0 1 257.2417 203.1533)" fontFamily="MyriadPro-Semibold" fill="#16100F" fontSize="15.3958px">{user.companyOccupation !== "NOT_PRINT" ? `Cargo: ${user.companyOccupation}` : <></>}</text>
                        <text transform="matrix(0.9856 0 0 1 257.2417 223.1533)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="15.3958px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'||user.companyName !== 'NOT_PRINT' ? `Empresa: ${user.companyName}` : user.companyName.substring(0, 38)}</text>
                        <text transform="matrix(0.9856 0 0 1 257.2417 243.1533)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="15.3958px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'||user.companyName !== 'NOT_PRINT' ? `` : user.companyName.substring(38, 76)}</text>
                        <text transform="matrix(0.9856 0 0 1 257.2417 263.1533)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="15.3958px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'||user.companyName !== 'NOT_PRINT' ? `` : user.companyName.substring(76, user.companyName.length)}</text>
                        <text transform="matrix(0.9856 0 0 1 257.2417 243.1533)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="15.3958px">{user.companyStartEnd !== "NOT_PRINT" ? `Período: ${user.companyStartEnd}` : <></>}</text>
                        <text transform="matrix(0.9856 0 0 1 257.2417 263.1533)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14.3958px">{user.companyDescription !== "NOT_PRINT" ? `Principais Atividades: ${user.companyDescription.substring(0,companyDescriptionArr[1])} ` : <></>}</text>
                        <text transform="matrix(0.9856 0 0 1 257.2417 283.1533)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14.3958px">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[1],companyDescriptionArr.length>1?companyDescriptionArr[7]:<></>):<></>}</text>
                        <text transform="matrix(0.9856 0 0 1 257.2417 303.1533)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14.3958px">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[7],companyDescriptionArr.length>7?companyDescriptionArr[14]:<></>):<></>}</text>
                        <text transform="matrix(0.9856 0 0 1 257.2417 323.1533)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14.3958px">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[14],companyDescriptionArr.length>14?companyDescriptionArr[21]:<></>):<></>}</text>
                        <path fill="#16100f" d="M577.69,395.45a15.86,15.86,0,0,1-15.86,15.86H262.45a15.86,15.86,0,0,1-15.86-15.86h0a15.86,15.86,0,0,1,15.86-15.86H561.83a15.86,15.86,0,0,1,15.86,15.86Z" />
                        <circle fill="#8fd1dd"  cx="262.33" cy="395.45" r="15.67" />
                        <text fontSize="20px" fill="#d3d3ce"  fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700"  transform="translate(296.03 402.38)">FORMAÇÃO</text>
                        <text transform="matrix(1 0 0 1 257.2563 439.9448)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">Curso: {user.courseName}</text>
                        <text transform="matrix(1 0 0 1 257.2563 459.9448)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">Instituição: {user.courseSchool}</text>
                        <text transform="matrix(1 0 0 1 257.2563 479.9448)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">Situação: {user.courseEndYear === 'Completo'?user.courseEndYear:`Previsão de Conclusão: ${user.courseEndYear}`}</text>
                        <path fill="#16100f" d="M578,594.76a15.86,15.86,0,0,1-15.86,15.86H262.76a15.86,15.86,0,0,1-15.86-15.86h0a15.86,15.86,0,0,1,15.86-15.86H562.15A15.86,15.86,0,0,1,578,594.76Z" />
                        <circle fill="#8fd1dd"  cx="262.65" cy="594.76" r="15.67" />
                        <text fontSize="20px" fill="#d3d3ce"  fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700"  transform="translate(296.34 601.69)">CURSOS</text>
                        <text transform="matrix(1 0 0 1 257.0435 636.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(0,extraCourses[6]):<></>} </text>
                        <text transform="matrix(1 0 0 1 257.0435 656.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[6],extraCourses.length > 6 ? extraCourses[6] : <></>):<></>}  </text>
                        <text transform="matrix(1 0 0 1 257.0435 676.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[6],extraCourses.length > 6 ? extraCourses[9] : <></>):<></>}  </text>
                        <text transform="matrix(1 0 0 1 257.0435 696.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[9],extraCourses.length > 9 ? extraCourses[12] : <></>):<></>}  </text>
                        <text transform="matrix(1 0 0 1 257.0435 716.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[12],extraCourses.length > 12 ? extraCourses[15] : <></>):<></>}  </text>
                        <text transform="matrix(1 0 0 1 257.0435 736.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[15],extraCourses.length > 15 ? extraCourses[18] : <></>):<></>}  </text>
                        <text transform="matrix(1 0 0 1 257.0435 756.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[18],extraCourses.length > 18 ? extraCourses[21] : <></>):<></>}  </text>
                        <text transform="matrix(1 0 0 1 257.0435 776.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[21],extraCourses.length > 21 ? extraCourses[24] : <></>):<></>}  </text>
                        <text transform="matrix(1 0 0 1 257.0435 796.3594)" fontFamily="MyriadPro-Semibold" fill="#2C242D" fontSize="14px">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[24],extraCourses.length > 24 ? extraCourses[27] : <></>):<></>}  </text>
                        <path fill="#fff" d="M178.19,282.06a11.59,11.59,0,0,1-11.59,11.59H49.41a11.59,11.59,0,0,1-11.59-11.59h0a11.59,11.59,0,0,1,11.59-11.59H166.59a11.59,11.59,0,0,1,11.59,11.59Z" />
                        <circle fill="#16100f" cx="48.97" cy="282.06" r="11.15" />
                        <text fontSize="15px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" fill="#16100f" transform="translate(75.59 287.64)">OBJETIVO</text>
                        <text transform="matrix(1 0 0 1 45.4585 310.6353)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(0, fullgoal[1])}</text>
                        <text transform="matrix(1 0 0 1 45.4585 325.6353)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[1], fullgoal.length > 1 ? fullgoal[4] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 45.4585 340.6353)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[4], fullgoal.length > 4 ? fullgoal[7] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 45.4585 355.6353)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[7], fullgoal.length > 7 ? fullgoal[10] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 45.4585 370.6353)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[10], fullgoal.length > 10 ? fullgoal[15] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 45.4585 385.6353)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[15], fullgoal.length > 15 ? fullgoal[18] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 45.4585 400.6353)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[18], fullgoal.length > 18 ? fullgoal[21] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 45.4585 415.6353)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[21], fullgoal.length > 21 ? fullgoal[23] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 45.4585 430.6353)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[23], fullgoal.length > 23 ? fullgoal[25] : <></>)}</text>
                        <text transform="matrix(1 0 0 1 45.4585 445.6353)" fill="#16100F" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.goal.substring(fullgoal[25], fullgoal.length > 28 ? fullgoal[28] : <></>)}</text>
                        <path fill="#fff" d="M176.34,469.2a11.59,11.59,0,0,1-11.59,11.6H47.56A11.59,11.59,0,0,1,36,469.2h0a11.59,11.59,0,0,1,11.59-11.59H164.75a11.59,11.59,0,0,1,11.59,11.59Z" />
                        <circle fill="#16100f" cx="47.12" cy="469.2" r="11.15" />
                        <text fontSize="15px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" fill="#16100f" transform="translate(76.61 474.78)">CONTATO</text>    
                        <text transform="matrix(1 0 0 1 66.6108 525.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">({user.cellphone.substring(0, 2)}) {user.cellphone.substring(2, user.cellphone.length)}</text>
                        <text transform="matrix(1 0 0 1 66.6108 550.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">{emailLength()}</text>
                        <text transform="matrix(1 0 0 1 66.6108 564.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.email.substring(email,user.email.length)}</text>
                        <text transform="matrix(1 0 0 1 66.6108 594.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.linkedln_link !== 'NOT_PRINT'? user.linkedln_link.substring(0,23):<></>}</text>
                        <text transform="matrix(1 0 0 1 66.6108 604.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.linkedln_link !== 'NOT_PRINT'? user.linkedln_link.substring(23,40):<></>}</text>
                        <text transform="matrix(1 0 0 1 62.6108 629.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.address.substring(0, fulladdress[3])}</text>
                        <text transform="matrix(1 0 0 1 62.6108 639.7788)" fill="#25201D" fontFamily="MyriadPro-Semibold" fontSize="12px">{user.address.substring(fulladdress[3], fulladdress.length > 3 ? fulladdress[9] : <></>)}</text>
                        <path fill="#16100f" d="M46.6,644.11a10.94,10.94,0,1,0-10.94-10.94A10.94,10.94,0,0,0,46.6,644.11Zm5.26-4.36a1.77,1.77,0,0,1-.16.5H48.26c0-.94,0-1.88,0-2.83,0-.29-.13-.41-.41-.41h-2.5c-.28,0-.42.12-.41.41,0,.94,0,1.88,0,2.83H41.5a2,2,0,0,1-.16-.53c0-2,0-4.09,0-6.14a.59.59,0,0,1,.23-.5c.73-.63,1.45-1.27,2.17-1.91l2.87-2.53.07,0q2.53,2.23,5.06,4.47a.54.54,0,0,1,.15.36Q51.88,636.63,51.87,639.75Zm-10.5-12.69H43.2c0,.34,0,.66,0,1a.31.31,0,0,1-.09.19l-1.74,1.58Zm-2.27,5.58c.21-.17.42-.33.62-.51l6.85-6.06h.06l7.26,6.43a1.84,1.84,0,0,0,.21.14v.07l-.8.85-6.71-5.93-6.71,5.93-.8-.85Z" />
                        <path fill="#16100f" d="M47.3,512a10.94,10.94,0,1,0,10.94,10.95A10.95,10.95,0,0,0,47.3,512Zm-6,4.69c.33-.32.64-.65,1-1a4,4,0,0,1,.38-.29h.26a3.94,3.94,0,0,1,.39.31l2.45,2.44a.56.56,0,0,1,0,.94l-1.26,1.19-3.43-3.43Zm10.39,13.66-.47.09h-.82l-.13,0c-.24,0-.47-.07-.71-.11a8.42,8.42,0,0,1-3-1.31,19,19,0,0,1-3.64-3.18,15.84,15.84,0,0,1-2.34-3.3,7.13,7.13,0,0,1-.67-2c0-.25-.08-.5-.12-.75v-.73c.06-.27.11-.54.18-.8a1.47,1.47,0,0,1,.39-.65l.11.1,3.35,3.35a.21.21,0,0,1,.06.24,1.64,1.64,0,0,0,.35,1.6A32.4,32.4,0,0,0,47.31,526a1.65,1.65,0,0,0,1.61.35.19.19,0,0,1,.22,0l3.4,3.4.07.08A1.91,1.91,0,0,1,51.67,530.34Zm3.14-2.75a4.78,4.78,0,0,1-.34.43c-.34.36-.7.7-1,1l-.11.1-3.46-3.46.27-.25,1-1a.55.55,0,0,1,.87,0L54.6,527a2.38,2.38,0,0,1,.21.29Z" />
                        <path fill="#16100f" d="M52.33,553.43h-10l5,4.25Z" />
                        <path fill="#16100f" d="M47.3,546.66a10.95,10.95,0,1,0,10.94,10.94A10.94,10.94,0,0,0,47.3,546.66Zm7.51,15.17-.08.29A1.78,1.78,0,0,1,53,563.31H41.63a1.73,1.73,0,0,1-1.52-.75,4,4,0,0,1-.32-.73v-8.45c0-.09.05-.19.09-.29a1.78,1.78,0,0,1,1.75-1.19H53a1.73,1.73,0,0,1,1.52.75,3.88,3.88,0,0,1,.32.73Z" />
                        <path fill="#16100f" d="M53.29,554.69l-.17.14L48.17,559a.73.73,0,0,1-.51.18H47a.76.76,0,0,1-.55-.2l-5-4.19-.14-.11v.19q0,3.29,0,6.58c0,.23,0,.33.34.33H53c.29,0,.34-.1.34-.33,0-2.2,0-4.4,0-6.6Z" />
                        {user.linkedln_link !=="NOT_PRINT"?
                        <path fill="#16100f" d="M46.6,585.47a10.95,10.95,0,1,0,10.95,10.95A10.95,10.95,0,0,0,46.6,585.47Zm-4.12,8.17a1.35,1.35,0,1,1,1.35-1.35A1.36,1.36,0,0,1,42.48,593.64Zm1.12,1.28v6.74H41.36v-6.74Zm8.25,6.73H49.6v-.15q0-1.87,0-3.74a1.13,1.13,0,0,0-.64-1.08,1.12,1.12,0,0,0-1.59.88,2.22,2.22,0,0,0,0,.25q0,1.84,0,3.68v.16H45.11v-6.73h2.25v.8c.15-.14.31-.29.48-.42a2.26,2.26,0,0,1,2.65-.2,2.57,2.57,0,0,1,1.31,1.77,2.71,2.71,0,0,1,.05.56c0,1.37,0,2.75,0,4.12C51.85,601.58,51.85,601.61,51.85,601.66Z" />
                        :<></>}
                    </svg>
                </div>

            </div>
        </>
    )
}
export default Curvi5;