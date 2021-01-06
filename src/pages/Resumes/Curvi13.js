import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Curvi13(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('curvi13'), `${user.name}.png`, imageOptions)
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
                <svg id="curvi13" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 841.89">
                <rect fill="none" width="595.28" height="841.89"/>
                <path fill="#232323" d="M497.88,21.71V0H97.4V21.71H22.15V820.17h551V21.71Zm73.25,796.46h-547V23.71H97.4V130.1H497.88V23.71h73.25Z"/>
                <text  fill="#232323" fontSize="16px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(177.46 231.89)">OBJETIVO</text>
                <text  fill="#232323" fontSize="16px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(348.5 232.15)">CONTATO</text>
                <text  fill="#232323" fontSize="16px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(189 624.51)">CURSOS</text>
                <text  fill="#232323" fontSize="16px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(348.26 440.55)">EXPERIÊNCIA</text>
                <text  fill="#232323" fontSize="16px" fontFamily="MyriadPro-Semibold, Myriad Pro" fontWeight="700" transform="translate(164.17 440.54)">FORMAÇÃO</text>
                <circle fill="#898989" cx="297.64" cy="223.5" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="230.66" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="237.82" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="244.98" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="252.15" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="259.31" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="266.47" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="273.63" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="280.79" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="287.95" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="295.11" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="302.28" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="309.44" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="316.6" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="323.76" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="430.27" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="437.43" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="444.59" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="451.75" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="458.92" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="466.08" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="473.24" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="480.4" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="487.56" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="494.72" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="501.89" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="509.05" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="516.21" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="523.37" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="530.53" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="537.69" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="544.86" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="552.02" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="559.18" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="566.34" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="573.5" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="580.66" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="587.83" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="596.15" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="603.31" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="610.47" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="617.63" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="624.8" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="631.96" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="639.12" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="646.28" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="653.44" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="660.6" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="667.77" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="676.55" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="683.72" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="690.88" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="698.04" r="1.7"/>
                <circle fill="#898989" cx="297.64" cy="705.2" r="1.7"/>
                <path fillRule="evenodd" fill="#898989" d="M291.94,185.54h.35c4.71,0,9.42,0,14.12,0a1.4,1.4,0,0,1,1.47,1.47q0,11,0,22.06a1.39,1.39,0,0,1-1.47,1.47c-4.71,0-9.42,0-14.12,0h-.35Zm12.38,10.22a4.43,4.43,0,0,0-1.67-4.17,3.55,3.55,0,0,1-5.38-.1,4.43,4.43,0,0,0-1.74,4.27Zm-4.3-8.87a2.35,2.35,0,1,0,2.34,2.35A2.36,2.36,0,0,0,300,186.89Zm.07,13.39h5.68a.58.58,0,0,0,.61-.68c0-.32-.29-.5-.69-.5H294.45a.59.59,0,0,0-.64.59.57.57,0,0,0,.64.59Zm0,5.16h-5.65a.58.58,0,0,0-.64.67c0,.33.3.51.75.51h11.05a1.32,1.32,0,0,0,.29,0,.55.55,0,0,0,.47-.54.57.57,0,0,0-.63-.62Zm0-2h4.69c.35,0,.69,0,1,0a.58.58,0,0,0,.06-1.16,2.14,2.14,0,0,0-.35,0H294.7a2.34,2.34,0,0,0-.41,0,.55.55,0,0,0-.47.57c0,.36.25.59.67.59Z"/>
                <path fillRule="evenodd" fill="#898989" d="M287.9,205.55v-2.67c.95-.15,2,.28,2.81-.56v3.77C289.89,205.28,288.86,205.68,287.9,205.55Z"/>
                <path fillRule="evenodd" fill="#898989" d="M290.71,193.68c-.83-.82-1.85-.43-2.8-.56v-2.66c.92-.15,2,.27,2.8-.56Z"/>
                <path fillRule="evenodd" fill="#898989" d="M287.9,196.68c1-.13,2,.26,2.81-.56v3.77c-.83-.81-1.85-.44-2.81-.56Z"/>
                <path fillRule="evenodd" fill="#898989" d="M288.13,209.09c.88-.08,1.83.21,2.59-.57v1.95A2.33,2.33,0,0,1,288.13,209.09Z"/>
                <path fillRule="evenodd" fill="#898989" d="M290.72,185.57v1.91c-.76-.78-1.7-.46-2.56-.55A2.3,2.3,0,0,1,290.72,185.57Z"/>
                <path fillRule="evenodd" fill="#898989" d="M288.71,188.12h.71a.57.57,0,1,1,0,1.14c-.48,0-1,0-1.43,0a.58.58,0,1,1,0-1.15h.68Z"/>
                <path fillRule="evenodd" fill="#898989" d="M288.71,200.54h.74a.58.58,0,0,1,.57.57.54.54,0,0,1-.53.56c-.52,0-1,0-1.57,0a.52.52,0,0,1-.53-.55.55.55,0,0,1,.55-.57c.25,0,.51,0,.77,0Z"/>
                <path fillRule="evenodd" fill="#898989" d="M288.7,195.47H288a.55.55,0,0,1-.57-.56.54.54,0,0,1,.56-.57c.51,0,1,0,1.52,0a.55.55,0,0,1,.55.54.55.55,0,0,1-.54.58C289.21,195.48,289,195.47,288.7,195.47Z"/>
                <path fillRule="evenodd" fill="#898989" d="M288.7,206.76h.77a.55.55,0,0,1,.54.53.56.56,0,0,1-.5.6c-.54,0-1.09,0-1.63,0a.56.56,0,0,1,.05-1.12Z"/>
                <path fill="#898989" d="M308.4,394.59h-5.82v-.81a2.15,2.15,0,0,0-2.15-2.15h-5.57a2.15,2.15,0,0,0-2.15,2.15v.81h-5.82a2.15,2.15,0,0,0-2.15,2.15v12.73a2.15,2.15,0,0,0,2.15,2.15H308.4a2.15,2.15,0,0,0,2.15-2.15V396.74A2.15,2.15,0,0,0,308.4,394.59Zm-14.7-.2a1.58,1.58,0,0,1,1.58-1.58H300a1.58,1.58,0,0,1,1.58,1.58v.2h-7.89Z"/>
                </svg>
                </div>
            </div>
        </>
    )
}
export default Curvi13;