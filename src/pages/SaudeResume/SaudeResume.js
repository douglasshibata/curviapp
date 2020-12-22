import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function SaudeResume(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
   async function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('saudeResume'), `/tmp/${user.name}.png`, imageOptions)

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
                <svg version="1.1" id='saudeResume' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 595.3 841.9" xmlSpace="preserve">
                    <g id="Layer_1">
                        <text transform="matrix(1 0 0 1 14.4267 255.7041)" fill="#1E1E1E" fontFamily="'MyriadPro-Semibold'" fontSize="26px">{user.name.substring(0,fullname[1])}</text>
                        <text transform="matrix(1 0 0 1 14.4267 279.7041)" fill="#1E1E1E" fontFamily="'MyriadPro-Semibold'" fontSize="26px">{user.name.substring(fullname[1],fullname.length>2?fullname[3]:<></>)}</text>
                        <text transform="matrix(1 0 0 1 14.4267 299.7041)" fill="#1E1E1E" fontFamily="'MyriadPro-Semibold'" fontSize="26px">{user.name.substring(fullname[3],fullname.length>3?fullname[5]:<></>)}</text>
                    </g>
                    <g id="Layer_2">
                        <polygon fill="#25BCB6" points="595.3,0 595.3,85.2 481.2,53.3" />
                        <g>
                            <polygon fill="#13AA9E" points="512,0 430.8,77.6 481.2,53.3 595.3,0	" />
                            <polygon fill="#13AA9E" points="63.6,0 430.8,77.6 181.1,0	" />
                            <polygon fill="#25BCB6" points="181.1,0 430.8,77.6 512,0	" />
                        </g>
                        <polygon fill="#13AA9E" points="0.5,841.9 0.5,739.7 114.6,777.9" />
                        <polygon fill="#25BCB6" points="114.6,777.9 0.5,841.9 83.8,841.9 165,748.7" />
                        <polygon fill="#25BCB6" points="221.1,841.9 532.2,841.9 165,748.7 414.7,841.9" />
                        <polygon fill="#13AA9E" points="221.1,841.9 83.8,841.9 83.8,841.9" />
                        <polygon fill="#13AA9E" points="414.7,841.9 165,748.7 83.8,841.9 221.1,841.9" />
                        <polygon fill="#13AA9E" points="371.6,801.1 595.8,726.5 595.8,841.9 532.2,841.9" />
                        <path fill="#25BCB6" d="M136.5,25.3c21.1,0,40.8,6.3,57.3,17.1l30.4-8.4L63.6,0H0v96.1l42.2-11.7C59.2,49.4,95.1,25.3,136.5,25.3z" />
                        <path fill="#13AA9E" d="M193.8,42.4c-16.5-10.8-36.2-17.1-57.3-17.1c-41.4,0-77.3,24.2-94.3,59.1c-6.7,13.8-10.5,29.3-10.5,45.6
		c0,57.8,47,104.8,104.8,104.8s104.8-47,104.8-104.8C241.3,93.4,222.4,61.1,193.8,42.4z M136.5,224.8c-52.3,0-94.8-42.5-94.8-94.8
		c0-18.1,5.1-35,13.9-49.3c16.7-27.2,46.7-45.4,80.9-45.4c15.8,0,30.8,3.9,43.9,10.8c30.2,15.9,50.8,47.5,50.8,84
		C231.3,182.3,188.8,224.8,136.5,224.8z"/>
                        <path fill="#25BCB6" d="M538.1,111.2h-67.1H331.8c-18.6,0-33.7,15.1-33.7,33.7c0,1,0.1,2,0.1,3h67.1h139.1c18.6,0,33.7-15.1,33.7-33.7
		C538.2,113.2,538.2,112.2,538.1,111.2z"/>
                        <path fill="#25BCB6" d="M538.1,365.3h-67.1H331.8c-18.6,0-33.7,15.1-33.7,33.7c0,1,0.1,2,0.1,3h67.1h139.1c18.6,0,33.7-15.1,33.7-33.7
		C538.2,367.3,538.2,366.3,538.1,365.3z"/>
                        <path fill="#25BCB6" d="M538.1,618.4h-67.1H331.8c-18.6,0-33.7,15.1-33.7,33.7c0,1,0.1,2,0.1,3h67.1h139.1c18.6,0,33.7-15.1,33.7-33.7
		C538.2,620.4,538.2,619.4,538.1,618.4z"/>
                        <g>
                            <path fill="#25BCB6" d="M45.3,489.1h11.3c11.3-2.6,19.8-12.7,19.8-24.8c0-0.7,0-1.3-0.1-2c0.1,0.1,0-8.7,0-8.7h-2.3H57.2
			c-14,0-25.4,11.4-25.4,25.4v1.9v8.2h2.1H45.3z M43,465c0-0.1,0.1-0.3,0.1-0.4c0.4-1.1,1.4-1.8,2.6-1.8c5.7,0,11.4,0,17.1,0
			c0.9,0,1.8,0.3,2.3,1.1c0.2,0.3,0.3,0.7,0.5,1.1c0,4.3,0,8.5,0,12.8c0,0.1-0.1,0.3-0.1,0.4c-0.4,1.1-1.4,1.8-2.6,1.8
			c-5.7,0-11.4,0-17.1,0c-0.9,0-1.8-0.3-2.3-1.1c-0.2-0.3-0.3-0.7-0.5-1.1C43,473.5,43,469.2,43,465z"/>
                            <path fill="#25BCB6" d="M45.8,477.7c5.7,0,11.4,0,17.1,0c0.4,0,0.5-0.1,0.5-0.5c0-3.3,0-6.6,0-10c0-0.1,0-0.1,0-0.3
			c-0.1,0.1-0.2,0.1-0.3,0.2c-2.5,2.1-5,4.2-7.5,6.3c-0.2,0.2-0.5,0.3-0.8,0.3c-0.4,0-0.7,0-1.1,0c-0.3,0-0.6-0.1-0.8-0.3
			c-2.5-2.1-5-4.2-7.5-6.3c-0.1-0.1-0.1-0.1-0.2-0.2c0,0.1,0,0.2,0,0.3c0,3.3,0,6.6,0,9.9C45.3,477.5,45.4,477.7,45.8,477.7z"/>
                            <path fill="#25BCB6" d="M62,465.1c-5.1,0-10.1,0-15.2,0c2.5,2.2,5.1,4.3,7.6,6.4C56.9,469.3,59.4,467.2,62,465.1z" />
                            <path fill="#25BCB6" d="M59.6,504.1c-0.2-0.5-0.6-1-1-1.5c-0.4-0.4-0.8-0.8-1.2-1.1c-0.6-0.4-1.3-0.7-2.1-0.9
			c-0.6-0.1-1.3-0.2-1.9-0.1c-0.6,0.1-1.2,0.2-1.8,0.5c-0.7,0.3-1.3,0.7-1.8,1.2c-0.6,0.6-1.1,1.4-1.4,2.2c-0.2,0.6-0.4,1.3-0.4,2
			c0,0.8,0.2,1.6,0.5,2.4c0.2,0.4,0.4,0.8,0.7,1.2c0.4,0.6,0.9,1.1,1.6,1.5c0.1,0.1,0.9,0.5,1,0.5c0.8,0.3,1.5,0.5,2.4,0.5
			c0.2,0,0.3,0,0.5,0c0.7-0.1,1.5-0.3,2.1-0.6c0.3-0.2,0.7-0.4,1-0.6c0.5-0.3,0.9-0.8,1.2-1.2c0.3-0.4,0.6-0.9,0.8-1.4
			c0.2-0.5,0.3-1,0.4-1.5c0.1-0.5,0.1-1.1,0-1.6C60,505.1,59.8,504.6,59.6,504.1z"/>
                            <path fill="#25BCB6" d="M76.3,492h-2.3H57.2c-14,0-25.4,11.4-25.4,25.4v1.9v8.2h2.1h11.5h11.3c11.3-2.6,19.8-12.7,19.8-24.8
			c0-0.7,0-1.3-0.1-2C76.4,500.8,76.3,492,76.3,492z M61.8,508.6c-0.2,0.8-0.4,1.5-0.6,2.2c-0.2,0.5-0.4,1-0.6,1.4
			c-0.4,0.8-0.8,1.6-1.3,2.4c-0.4,0.6-0.8,1.3-1.3,1.9c-0.7,1-1.5,2-2.4,3c-0.5,0.5-0.9,1-1.4,1.5c-0.2,0.2-0.2,0.2-0.4,0
			c-0.4-0.4-0.9-0.9-1.3-1.3c-0.4-0.4-0.8-0.9-1.2-1.4c-0.5-0.6-1-1.3-1.5-2c-0.4-0.6-0.8-1.2-1.2-1.8c0,0-0.3-0.5-0.3-0.6
			c-1.1-1.8-1.9-3.8-2.2-6c0-0.1,0-0.3,0-0.4c-0.5-3.3,1.3-7.2,5.3-8.6c4.7-1.6,8.7,1.3,9.9,4.3c0,0.1,0.1,0.1,0.1,0.2
			c0.1,0.4,0.3,0.9,0.4,1.3c0.1,0.6,0.2,1.1,0.2,1.7C62,507.2,62,507.9,61.8,508.6z"/>
                            <path fill="#25BCB6" d="M76.3,530.4h-2.3H57.2c-14,0-25.4,11.4-25.4,25.4v1.9v8.2h2.1h11.5h11.3c11.3-2.6,19.8-12.7,19.8-24.8
			c0-0.7,0-1.3-0.1-2C76.4,539.2,76.3,530.4,76.3,530.4z M45.4,537.7c0.5-0.5,1-1,1.5-1.5c0.2-0.2,0.4-0.3,0.6-0.4
			c0.1,0,0.3,0,0.4,0c0.2,0.2,0.4,0.3,0.6,0.5c1.2,1.2,2.5,2.5,3.7,3.7c0.5,0.5,0.5,0.9,0,1.4c-0.6,0.6-1.3,1.2-1.9,1.8
			c-1.7-1.7-3.4-3.4-5.2-5.2C45.1,537.9,45.3,537.8,45.4,537.7z M61.1,558.4c-0.2,0.1-0.5,0.1-0.7,0.1c-0.4,0-0.8,0-1.2,0
			c-0.1,0-0.1,0-0.2,0c-0.4-0.1-0.7-0.1-1.1-0.2c-1.6-0.3-3.1-1.1-4.5-2c-2-1.4-3.9-3-5.5-4.8c-1.4-1.5-2.6-3.2-3.5-5
			c-0.5-0.9-0.8-1.9-1-3c-0.1-0.4-0.1-0.8-0.2-1.1c0-0.4,0-0.7,0-1.1c0.1-0.4,0.2-0.8,0.3-1.2c0.1-0.4,0.3-0.7,0.6-1
			c0.1,0.1,0.1,0.1,0.2,0.2c1.7,1.7,3.4,3.4,5.1,5.1c0.1,0.1,0.1,0.2,0.1,0.4c-0.2,0.9-0.1,1.7,0.5,2.4c1.4,1.7,3,3.2,4.7,4.7
			c0.7,0.6,1.5,0.8,2.4,0.5c0.1,0,0.2-0.1,0.3,0.1c1.7,1.7,3.4,3.4,5.1,5.1c0,0,0.1,0.1,0.1,0.1C62.1,558,61.6,558.2,61.1,558.4z
			 M65.8,554.2c-0.2,0.2-0.3,0.5-0.5,0.6c-0.5,0.5-1.1,1.1-1.6,1.6c-0.1,0.1-0.1,0.1-0.2,0.2c-1.7-1.7-3.5-3.5-5.2-5.2
			c0.1-0.1,0.3-0.2,0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.4-0.4,0.9-0.4,1.3,0c1.3,1.3,2.6,2.6,3.9,3.9c0.1,0.1,0.2,0.3,0.3,0.4
			C65.8,553.9,65.8,554.1,65.8,554.2z"/>
                            <path fill="#25BCB6" d="M52.6,577.1c-6.6,1.2-9.9,8.6-6.1,14.3c0.2,0.2,0.2,0.4,0.1,0.7c-0.3,1-0.7,2-1,3.1c0.2,0,0.3-0.1,0.4-0.1
			c1-0.3,2-0.6,3-0.9c0.1,0,0.3,0,0.4,0.1c2.2,1.3,4.6,1.7,7.2,1.1c4.9-1.1,8.1-6.2,6.9-11.2C62.2,579.3,57.6,576.3,52.6,577.1z
			 M58,591.4c-0.6,0.1-1.2,0.1-1.8-0.1c-2.6-0.7-4.6-2.3-6.1-4.5c-0.5-0.7-1-1.5-1.1-2.3c0-0.2-0.1-0.4-0.1-0.7
			c0-0.8,0.3-1.5,0.8-2.1c0.4-0.5,1-0.5,1.5-0.5c0.1,0,0.3,0.2,0.4,0.3c0.3,0.7,0.7,1.5,1,2.3c0.1,0.3-0.1,0.5-0.2,0.8
			c-0.1,0.2-0.3,0.4-0.5,0.6c-0.2,0.2-0.2,0.4-0.1,0.6c0.9,1.5,2.1,2.6,3.8,3.2c0.2,0.1,0.4,0,0.5-0.1c0.3-0.3,0.6-0.6,0.8-1
			c0.2-0.3,0.4-0.3,0.7-0.2c0.7,0.3,1.5,0.7,2.2,1.1c0.1,0.1,0.2,0.3,0.2,0.4C59.9,590.2,59.1,591.1,58,591.4z"/>
                            <path fill="#25BCB6" d="M76.3,568.8h-2.3H57.2c-14,0-25.4,11.4-25.4,25.4v1.9v8.2h2.1h11.5h11.3c11.3-2.6,19.8-12.7,19.8-24.8
			c0-0.7,0-1.3-0.1-2C76.4,577.6,76.3,568.8,76.3,568.8z M56.6,597.1c-2.6,0.5-5.1,0.2-7.5-1c-0.1-0.1-0.3-0.1-0.5,0
			c-1.9,0.6-3.9,1.2-5.9,1.9c0.4-1.3,0.8-2.4,1.2-3.6c0.2-0.7,0.4-1.3,0.7-2c0.1-0.2,0.1-0.3,0-0.5c-1.2-2-1.7-4.2-1.4-6.6
			c0.4-3.8,2.3-6.7,5.7-8.5c6.6-3.6,14.7,0.1,16.3,7.4C66.4,589.9,62.5,595.9,56.6,597.1z"/>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 11.3408 328.7739)" fill="#1E1E1E" fontFamily="'MyriadPro-Regular'" fontSize="20px">{user.area} - {user.area_level}</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 82.5806 433.1367)" fill="#1E1E1E" fontFamily="'MyriadPro-Semibold'" fontSize="26px">CONTATO</text>
                            <text transform="matrix(1 0 0 1 82.5806 464.1367)" fill="#1E1E1E" fontFamily="'MyriadPro-Semibold'" fontSize="14px">{user.email}</text>
                            <text transform="matrix(1 0 0 1 82.5806 499.1367)" fill="#1E1E1E" fontFamily="'MyriadPro-Semibold'" fontSize="14px">{user.address.substring(0,28)}</text>
                            <text transform="matrix(1 0 0 1 82.5806 520.1367)" fill="#1E1E1E" fontFamily="'MyriadPro-Semibold'" fontSize="14px">{user.address.substring(28,user.address.length)}</text>
                            <text transform="matrix(1 0 0 1 82.5806 550.1367)" fill="#1E1E1E" fontFamily="'MyriadPro-Semibold'" fontSize="14px">({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                            <text transform="matrix(1 0 0 1 82.5806 590.1367)" fill="#1E1E1E" fontFamily="'MyriadPro-Semibold'" fontSize="14px">({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                        </g>
                    </g>
                    <g id="Layer_3">
                        <g>
                            <rect x="340.6" y="159.6" fill="none" width="110.4" height="12.8" />
                            <text transform="matrix(1 0 0 1 340.5938 168.1123)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.courseName} </text>
                            <text transform="matrix(1 0 0 1 340.5938 185.2275)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.courseSchool} </text>
                        </g>
                         <g>
                            <rect x="340.6" y="216.7" fill="none" width="110.4" height="12.8" />
                    
                            <text transform="matrix(1 0 0 1 340.5938 225.1123)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.courses!== 'NOT_PRINT'?user.courses.substring(0,40):<></>} </text>
                            <text transform="matrix(1 0 0 1 340.5938 245.1123)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.courses!== 'NOT_PRINT'?user.courses.substring(40,80):<></>} </text>
                            <text transform="matrix(1 0 0 1 340.5938 265.1123)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.courses!== 'NOT_PRINT'?user.courses.substring(80,100):<></>} </text>
                            <text transform="matrix(1 0 0 1 340.5938 285.1123)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.courses!== 'NOT_PRINT'?user.courses.substring(100,120):<></>} </text>
                            <text transform="matrix(1 0 0 1 340.5938 305.1123)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.courses!== 'NOT_PRINT'?user.courses.substring(120,140):<></>} </text>
                            <text transform="matrix(1 0 0 1 340.5938 325.1123)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.courses!== 'NOT_PRINT'?user.courses.substring(140,160):<></>} </text>
                            <text transform="matrix(1 0 0 1 340.5938 345.1123)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.courses!== 'NOT_PRINT'?user.courses.substring(160,user.courses.length):<></>} </text>
                            {/* <text transform="matrix(1 0 0 1 340.5938 245.2275)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.courseSchool} </text>  */}
                        </g>
                        {/*
                        <g>
                            <rect x="340.6" y="275.6" fill="none" width="110.4" height="12.8" />
                            <text transform="matrix(1 0 0 1 340.5938 284.0801)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">Lorem ipsum dolor </text>
                        </g> */}
                        <g>
                            <text transform="matrix(1 0 0 1 365.0542 136.311)" fontFamily="'MyriadPro-Semibold'" fontSize="26px" fill="#FFFFFF">Formação</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 348.5942 392.1362)" fontFamily="'MyriadPro-Semibold'" fontSize="26px" fill="#FFFFFF">Experiencias</text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 340.5942 645.6411)" fontFamily="'MyriadPro-Semibold'" fontSize="26px" fill="#FFFFFF">HABILIDADES</text>
                        </g>
                        <path fill="#1E1E1E" d="M296.4,223c0-1.5-1-2.7-2.3-3.2v-53.6c1.3-0.5,2.3-1.7,2.3-3.2c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4
		c0,1.5,1,2.7,2.3,3.2v53.6c-1.3,0.5-2.3,1.7-2.3,3.2s1,2.7,2.3,3.2v53.6c-1.3,0.5-2.3,1.7-2.3,3.2s1,2.7,2.3,3.2V345h2.3v-58.8
		c1.3-0.5,2.3-1.7,2.3-3.2s-1-2.7-2.3-3.2v-53.6C295.5,225.7,296.4,224.5,296.4,223z"/>
                        <path fill="#1E1E1E" d="M296.4,486.9c0-1.5-1-2.7-2.3-3.2v-53.6c1.3-0.5,2.3-1.7,2.3-3.2c0-1.9-1.5-3.4-3.4-3.4
		c-1.9,0-3.4,1.5-3.4,3.4c0,1.5,1,2.7,2.3,3.2v53.6c-1.3,0.5-2.3,1.7-2.3,3.2s1,2.7,2.3,3.2v53.6c-1.3,0.5-2.3,1.7-2.3,3.2
		s1,2.7,2.3,3.2v58.8h2.3v-58.8c1.3-0.5,2.3-1.7,2.3-3.2s-1-2.7-2.3-3.2v-53.6C295.5,489.7,296.4,488.4,296.4,486.9z"/>
                        <text transform="matrix(1 0 0 1 304.9082 166.0044)"><tspan x="0" y="0" fontFamily="'MyriadPro-Regular'" fontSize="10px">{user.courseEndYear.substring(4,user.courseEndYear.length)}</tspan><tspan x="0" y="12" fontFamily="'MyriadPro-Regular'" fontSize="10px">{user.courseEndYear.substring(0,4)}</tspan></text>
                        {/* <text transform="matrix(1 0 0 1 304.9082 219.8857)"><tspan x="0" y="0" fontFamily="'MyriadPro-Regular'" fontSize="10px">{user.courseEndYear.substring(0,4)}</tspan><tspan x="0" y="12" fontFamily="'MyriadPro-Regular'" fontSize="10px">2001</tspan></text> */}
                        {/* <text transform="matrix(1 0 0 1 304.9082 273.7671)"><tspan x="0" y="0" fontFamily="'MyriadPro-Regular'" fontSize="10px">2000</tspan><tspan x="0" y="12" fontFamily="'MyriadPro-Regular'" fontSize="10px">2001</tspan></text> */}
                        <g>
                            <rect x="338.6" y="425.9" fill="none" width="110.4" height="12.8" />
                            <text transform="matrix(1 0 0 1 338.6328 434.46)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.companyOccupation !== "NOT_PRINT"? `Cargo: ${user.companyOccupation}` :<></>}</text>
                            <text transform="matrix(1 0 0 1 338.6328 449.46)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?`Empresa: ${user.companyName}`:user.companyName.substring(0,38)}</text>
                            <text transform="matrix(1 0 0 1 338.6328 469.46)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(38,75)}</text>
                            <text transform="matrix(1 0 0 1 338.6328 489.46)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(75,user.companyName.length)}</text>
                        </g>
                        {/* <g>
                            <rect x="338.6" y="483.1" fill="none" width="110.4" height="12.8" />
                            <text transform="matrix(1 0 0 1 338.6328 491.5752)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">Lorem ipsum dolor </text>
                        </g>
                        <g>
                            <rect x="338.6" y="541.9" fill="none" width="110.4" height="12.8" />
                            <text transform="matrix(1 0 0 1 338.6328 550.4277)" fill="#1E1E1E" fontFamily="'MyriadPro-Bold'" fontSize="12px">Lorem ipsum dolor </text>
                        </g> */}
                        <text transform="matrix(1 0 0 1 302.9473 422.3521)"><tspan x="0" y="0" fontFamily="'MyriadPro-Regular'" fontSize="10px">{user.companyStartEnd  !== "NOT_PRINT"?  `${user.companyStartEnd.substring(5,user.companyStartEnd.length)}` :<></>}</tspan><tspan x="0" y="12" fontFamily="'MyriadPro-Regular'" fontSize="10px">{user.companyStartEnd  !== "NOT_PRINT"?  `${user.companyStartEnd.substring(0,4)}` :<></>}</tspan></text>
                        {/* <text transform="matrix(1 0 0 1 302.9473 486.2334)"><tspan x="0" y="0" fontFamily="'MyriadPro-Regular'" fontSize="10px">2000</tspan><tspan x="0" y="12" fontFamily="'MyriadPro-Regular'" fontSize="10px">2001</tspan></text>
                        <text transform="matrix(1 0 0 1 302.9473 540.1147)"><tspan x="0" y="0" fontFamily="'MyriadPro-Regular'" fontSize="10px">2000</tspan><tspan x="0" y="12" fontFamily="'MyriadPro-Regular'" fontSize="10px">2001</tspan></text> */}
                        <text transform="matrix(1 0 0 1 95.583 157.5503)" fill="#25BCB6" fontFamily="'MyriadPro-Regular'" fontSize="93.7393px">{user.name.charAt(0)}</text>
                        <rect x="14.6" y="694.6" fill="#25BCB6" width="250" height="35" />
                        <text transform="matrix(1 0 0 1 14.9992 718.9017)" fill='#FFF' fontFamily="'MyriadPro-Regular'" fontSize="19.7517px">Currículo gerado pela Curvi</text>
                       {/*  <g>
                            <rect x="204.6" y="694.6" fill="#25BCB6" width="35" height="35" />
                            <rect x="325.9" y="694.6" fill="#13AA9E" width="35" height="35" />
                            <rect x="447.2" y="694.6" fill="#1E1E1E" width="35" height="35" />
                            <text transform="matrix(1 0 0 1 246.9992 718.9017)" fontFamily="'MyriadPro-Regular'" fontSize="19.7517px">25BCB6</text>
                            <text transform="matrix(1 0 0 1 369.8059 718.9017)" fontFamily="'MyriadPro-Regular'" fontSize="19.7517px">13AA9E</text>
                            <text transform="matrix(1 0 0 1 492.6125 718.9017)" fontFamily="'MyriadPro-Regular'" fontSize="19.7517px">1E1E1E</text>
                        </g> */}
                    </g>
                </svg>
            </div>
        </div>
        </>
    )
}
export default SaudeResume;