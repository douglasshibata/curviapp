import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function ResumeCurvi(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('resumeCurvi'), `${user.name}.png`, imageOptions)
    }

    var regexp = /\s/g;
    var name, fullname = [];
    var goal, fullgoal = [];
    var courses, extraCourses = [];
    var companyDescription, companyDescriptionArr = [];
    var cientificResearch, cientificResearchArr = [];

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
    return (
        <>
            <Form>
                <button onClick={downloadResume}>Baixar Currículo</button>
            </Form>
            <div className="resumeBackground">
                <div className="resumeReady">

                    <svg xmlns="http://www.w3.org/2000/svg" id='resumeCurvi' xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="595.5pt" height="842.25pt" viewBox="0 0 595.5 842.25">
                        <g enableBackground="new">
                            <g>
                                <clipPath id="cp0">
                                    <path transform="matrix(.24,0,0,.24,0,0)" d="M 0 0 L 2483.3333 0 L 2483.3333 3540.4703 L 0 3540.4703 Z " fillRule="evenodd" />
                                </clipPath>
                                <g clipPath="url(#cp0)">
                                    <path transform="matrix(.7506297,0,0,.7506297,0,0)" d="M 0 0 L 794 0 L 794 1132 L 0 1132 Z " fill="#ffffff" />
                                    <path transform="matrix(.7506297,0,0,.7506297,0,0)" d="M 0 0 L 794 0 L 794 1123 L 0 1123 Z " fill="#ffffff" />
                                </g>
                                <clipPath id="cp1">
                                    <path transform="matrix(.24,0,0,.24,0,0)" d="M 0 0 L 2483.3333 0 L 2483.3333 3512.3216 L 0 3512.3216 Z " fillRule="evenodd" />
                                </clipPath>
                                <g clipPath="url(#cp1)">
                                    <path transform="matrix(.7506297,0,0,.7506297,0,0)" d="M 0 0 L 794 0 L 794 1123 L 0 1123 Z " fill="#f7f7eb" />
                                </g>
                                <clipPath id="cp2">
                                    <path transform="matrix(.24,0,0,.24,0,0)" d="M 0 0 L 2483.3333 0 L 2483.3333 3512.3216 L 0 3512.3216 Z " fillRule="evenodd" />
                                </clipPath>
                                <g clipPath="url(#cp2)">
                                    <g opacity=".0667">
                                        <clipPath id="cp3">
                                            <path transform="matrix(.24,0,0,.24,0,198.48)" d="M 0 0 L 1117 0 L 1117 2686 L 0 2686 Z " fillRule="evenodd" />
                                        </clipPath>
                                        <g clipPath="url(#cp3)">
                                            <clipPath id="cp4">
                                                <path transform="matrix(.24,0,0,.24,0,198.48)" d="M -1 .34991456 L 1113.8021 .34991456 L 1113.8021 2687 L -1 2687 Z " fillRule="evenodd" />
                                            </clipPath>
                                            <g clipPath="url(#cp4)">
                                                <path transform="matrix(.7506297,0,0,.7506297,-49.45325,198.56398)" d="M 0 0 L 422 0 L 422 866 L 0 866 Z " fill="#444b67" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <clipPath id="cp5">
                                    <path transform="matrix(.24,0,0,.24,0,0)" d="M 0 7.9965188 L 2483.3333 7.9965188 L 2483.3333 924.3903 L 0 924.3903 Z " fillRule="evenodd" />
                                </clipPath>
                                <g clipPath="url(#cp5)">
                                    <path transform="matrix(.7506297,0,0,.7506297,-37.77138,1.9191644)" d="M 0 0 L 894 0 L 894 293 L 0 293 Z " fill="#444b67" />
                                </g>
                                <clipPath id="cp6">
                                    <path transform="matrix(.24,0,0,.24,0,0)" d="M 0 0 L 2483.3333 0 L 2483.3333 3512.3216 L 0 3512.3216 Z " fillRule="evenodd" />
                                </clipPath>
                                <g clipPath="url(#cp6)">

                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 60.24556 66.86688)" fontSize="65.59" fontFamily="Roboto">{user.name.substring(0, fullname[1])}</text>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 60.94556 106.86688)" fontSize="65.59" fontFamily="Roboto">{fullname.length > 1 ? user.name.substring(fullname[1], fullname[3]) : <></>} </text>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 60.94556 145.86688)" fontSize="65.59" fontFamily="Roboto">{fullname.length > 3 ? user.name.substring(fullname[3], fullname[4]) : <></>} </text>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 60.94556 165.86688)" fontSize="65.59" fontFamily="Roboto">{fullname.length > 4 ? user.name.substring(fullname[4], fullname[5]) : <></>} </text>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 181.2702 187.9409)" fontSize="30.49" fontFamily="Roboto">{user.area} - {user.area_level}</text>
                                    <text fill="#444b67" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.98469 252.83774)" fontSize="21.86" fontWeight="bold" fontFamily="Roboto">EXPERIÊNCIA PROFISSIONAL</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 273.35026)" fontSize="15" fontFamily="Roboto" fontWeight="bold">{user.companyOccupation !== "NOT_PRINT" ? `${user.companyOccupation}` : <></>}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 291.14939)" fontSize="12.98" fontFamily="Roboto" fontWeight="bold">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' && user.companyStartEnd !== "NOT_PRINT" ? `${user.companyName} | ${user.companyStartEnd}` : user.companyName.substring(0, 50)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 311.14939)" fontSize="12.98" fontFamily="Roboto" fontWeight="bold">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' && user.companyStartEnd !== "NOT_PRINT" ? `` : user.companyName.substring(50, user.companyName.length)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.8889 310.9569)" fontSize="12.26" fontFamily="Roboto">{user.companyDescription !== "NOT_PRINT" ? `${user.companyDescription.substring(0, companyDescriptionArr[7])} ` : <></>}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.8889 330.9569)" fontSize="12.26" fontFamily="Roboto">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[7],companyDescriptionArr.length > 7 ? companyDescriptionArr[14] : <></>) : <></>}</text>
                                    {/* <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 365.33168)" fontSize="13.66" fontFamily="Roboto" fontWeight="bold">{user.area}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 384.7899)" fontSize="12.98" fontFamily="Roboto" fontWeight="bold">{user.area}</text> 
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 406.2227)" fontSize="10.26" fontFamily="Roboto">{user.area}</text>*/}
                                    <text fill="#444b67" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.98469 500.46)" fontSize="21.86" fontFamily="Roboto" fontWeight="bold">FORMAÇÃO</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 530.24246)" fontSize="13.66" fontFamily="Roboto" fontWeight="bold">{user.courseSchool}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 548.0415)" fontSize="12.98" fontFamily="Roboto" fontWeight="bold">{user.courseName} | {user.courseEndYear === 'Completo' ? user.courseEndYear : `Previsão de Conclusão: ${user.courseEndYear}`}</text>
                                    {/* <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.8889 567.84909)" fontSize="12.26" fontFamily="Roboto">{user.area}</text> */}
                                    {(user.cientificResearch !== 'NOT_PRINT') ? <>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 628.0648)" fill="#444b67" fontSize="21.86" fontFamily="Roboto" fontWeight="bold">PESQUISA CIENTÍFICA</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 647.523)" fontSize="12.98" fontFamily="Roboto">{user.cientificResearch.substring(0, cientificResearchArr[7])}</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 668.8099)" fontSize="12.26" fontFamily="Roboto">{user.cientificResearch.substring(cientificResearchArr[7], cientificResearchArr.length > 7 ? cientificResearchArr[12] : <></>)}</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 688.8099)" fontSize="12.26" fontFamily="Roboto">{cientificResearchArr.length > 12 ? user.cientificResearch.substring(cientificResearchArr[12], cientificResearchArr[17]) : <></>}</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 708.8099)" fontSize="12.26" fontFamily="Roboto">{cientificResearchArr.length > 17 ? user.cientificResearch.substring(cientificResearchArr[17], cientificResearchArr[22]) : <></>}</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 728.8099)" fontSize="12.26" fontFamily="Roboto">{cientificResearchArr.length > 22 ? user.cientificResearch.substring(cientificResearchArr[22], cientificResearchArr[27]) : <></>}</text>
                                        <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 748.8099)" fontSize="12.26" fontFamily="Roboto">{cientificResearchArr.length > 27 ? user.cientificResearch.substring(cientificResearchArr[27], cientificResearchArr[32]) : <></>}</text>
                                    </> : <></>}
                                    <text fill="#444b67" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.617556 502.5837)" fontSize="21.86" fontWeight="bold" fontFamily="Roboto">CONTATOS</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 520.8099)" fontSize="12.26" fontFamily="Roboto">Celular: ({user.cellphone.substring(0, 2)}) {user.cellphone.substring(2, user.cellphone.length)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 540.8099)" fontSize="12.26" fontFamily="Roboto">Email: {user.email}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 560.8099)" fontSize="12.26" fontFamily="Roboto">Endereço: {user.address.substring(0, 40)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 580.8099)" fontSize="12.26" fontFamily="Roboto">{user.address.substring(40, user.address.length)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 600.8099)" fontSize="12.26" fontFamily="Roboto">{user.linkedln_link !== 'NOT_PRINT' ? `Linkedln:${user.linkedln_link}` : <></>}</text>
                                    <text fill="#444b67" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.909598 636.7804)" fontSize="21.86" fontFamily="Roboto" fontWeight="bold">CURSOS COMPLEMENTARES</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 18.250319 656.6131)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(0, extraCourses[8])}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 18.250319 676.6131)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(extraCourses[8],extraCourses.length > 8 ? extraCourses[16] : <></>)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 18.250319 696.6131)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(extraCourses[16], extraCourses.length > 16 ? extraCourses[24] : <></>)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 18.250319 716.6131)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(extraCourses[24], extraCourses.length > 24 ? extraCourses[32] : <></>)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 18.250319 736.6131)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(extraCourses[32], extraCourses.length > 32 ? extraCourses[40] : <></>)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 18.250319 756.6131)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(extraCourses[40], extraCourses.length > 40 ? extraCourses[48] : <></>)}</text>
                                    <text fill="#444b67" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.909598 242.83774)" fontSize="21.86" fontFamily="Roboto" fontWeight="bold">OBJETIVO PROFISSIONAL</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 13.568884 274.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(0, fullgoal[7])}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 13.568884 294.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[7], fullgoal.length > 7 ? fullgoal[13] : <></>)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 13.568884 314.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[13], fullgoal.length > 13 ? fullgoal[18] : <></>)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 13.568884 334.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[18], fullgoal.length > 18 ? fullgoal[22] : <></>)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 13.568884 354.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[22], fullgoal.length > 22 ? fullgoal[25] : <></>)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 13.568884 374.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[25], fullgoal.length > 25 ? fullgoal[28] : <></>)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 13.568884 394.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(fullgoal[25], fullgoal.length > 25 ? fullgoal[30] : <></>)}</text>
                                </g >
                            </g >
                        </g >
                    </svg >

                </div >
            </div >
        </>
    )
}
export default ResumeCurvi;