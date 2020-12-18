import React  from 'react';
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
                                    {user.name.length>=34?<>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 60.24556 66.86688)" fontSize="65.59" fontFamily="Roboto">{user.name.toUpperCase().substring(0,17)}</text>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 60.94556 106.86688)" fontSize="65.59" fontFamily="Roboto">{user.name.toUpperCase().substring(17,34)} </text>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 60.94556 145.86688)" fontSize="65.59" fontFamily="Roboto">{user.name.toUpperCase().substring(34,user.name.length)} </text></>
                                    :
                                    <>
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 9.24556 126.86688)" fontSize="65.59" fontFamily="Roboto">{user.name.toUpperCase().substring(0,user.length)}</text>
                                    </>}
                                    <text fill="#f7f7eb" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 181.2702 187.9409)" fontSize="30.49" fontFamily="Roboto">{user.area} - {user.area_level}</text>
                                    <text fill="#444b67" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.98469 252.83774)" fontSize="21.86" fontWeight="bold" fontFamily="Roboto">EXPERIÊNCIA PROFISSIONAL</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 273.35026)" fontSize="15" fontFamily="Roboto" fontWeight="bold">{user.companyOccupation !== "NOT_PRINT" ? `${user.companyOccupation}` : <></>}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 291.14939)" fontSize="12.98" fontFamily="Roboto" fontWeight="bold">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' && user.companyStartEnd !== "NOT_PRINT"  ? `${user.companyName} | ${user.companyStartEnd}` : user.companyName.substring(0,50)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 311.14939)" fontSize="12.98" fontFamily="Roboto" fontWeight="bold">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.' && user.companyStartEnd !== "NOT_PRINT"  ? `` : user.companyName.substring(50,user.companyName.length)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.8889 310.9569)" fontSize="12.26" fontFamily="Roboto">{user.companyDescription !== "NOT_PRINT" ? `${user.companyDescription.substring(0, 60)} ` : <></>}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.8889 330.9569)" fontSize="12.26" fontFamily="Roboto">{user.companyDescription !== "NOT_PRINT" ? `${user.companyDescription.substring(60, user.companyDescription.length)} ` : <></>}</text>
                                    {/* <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 365.33168)" fontSize="13.66" fontFamily="Roboto" fontWeight="bold">{user.area}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 384.7899)" fontSize="12.98" fontFamily="Roboto" fontWeight="bold">{user.area}</text> 
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 406.2227)" fontSize="10.26" fontFamily="Roboto">{user.area}</text>*/}
                                    <text fill="#444b67" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.98469 500.46)" fontSize="21.86" fontFamily="Roboto" fontWeight="bold">FORMAÇÃO</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 530.24246)" fontSize="13.66" fontFamily="Roboto" fontWeight="bold">{user.courseSchool}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 548.0415)" fontSize="12.98" fontFamily="Roboto" fontWeight="bold">{user.courseName} | {user.courseEndYear === 'Completo'?user.courseEndYear:`Previsão de Conclusão: ${user.courseEndYear}`}</text>
                                    {/* <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.8889 567.84909)" fontSize="12.26" fontFamily="Roboto">{user.area}</text> */}
                                    {(user.cientificResearch !== 'NOT_PRINT') ?<>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 628.0648)" fill="#444b67" fontSize="21.86" fontFamily="Roboto" fontWeight="bold">PESQUISA CIENTÍFICA</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 647.523)" fontSize="12.98" fontFamily="Roboto">{user.cientificResearch.substring(0,58)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 668.8099)" fontSize="12.26" fontFamily="Roboto">{user.cientificResearch.substring(58,116)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 688.8099)" fontSize="12.26" fontFamily="Roboto">{user.cientificResearch.substring(116,174)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 286.88877 708.8099)" fontSize="12.26" fontFamily="Roboto">{user.cientificResearch.substring(174,)}</text>

                                    </>:<></>}
                                    <text fill="#444b67" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.617556 502.5837)" fontSize="21.86"  fontWeight="bold" fontFamily="Roboto">CONTATOS</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 520.8099)" fontSize="12.26" fontFamily="Roboto">Celular: ({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 540.8099)" fontSize="12.26" fontFamily="Roboto">Email: {user.email}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 560.8099)" fontSize="12.26" fontFamily="Roboto">Endereço: {user.address.substring(0,40)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 580.8099)" fontSize="12.26" fontFamily="Roboto">{user.address.substring(40,user.address.length)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 600.8099)" fontSize="12.26" fontFamily="Roboto">{user.linkedln_link !== 'NOT_PRINT'?`Linkedln:${user.linkedln_link}`:<></>}</text>
                                    <text fill="#444b67" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.909598 636.7804)" fontSize="21.86" fontFamily="Roboto"  fontWeight="bold">CURSOS COMPLEMENTARES</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 18.250319 656.6131)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(0,58)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 18.250319 676.6131)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(58,116)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 18.250319 696.6131)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(116,162)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 18.250319 716.6131)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(162,210)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 18.250319 736.6131)" fontSize="12.26" fontFamily="Roboto">{user.courses.substring(210,265)}</text>
                                    <text fill="#444b67" xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.909598 242.83774)" fontSize="21.86" fontFamily="Roboto"  fontWeight="bold">OBJETIVO PROFISSIONAL</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 274.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(0,55)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 294.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(55,108)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 314.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(108,158)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 334.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(158,216)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 354.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(216,271)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 374.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(271,326)}</text>
                                    <text xmlSpace="preserve" transform="matrix(.7301169 0 0 .7301169 17.568884 394.9402)" fontSize="12.26" fontFamily="Roboto">{user.goal.substring(326,381)}</text>
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