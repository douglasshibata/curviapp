import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function Admin(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
    }
    function downloadResume() {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('adminResume'), `${user.name}.png`, imageOptions)
    }
    const email = user.email.indexOf('@');
    function emailLenght(){
        if(email>=16){
            return user.email.substring(0,16)
        }else{
            return user.email.substring(0,email)
        }
    }
    return (
        <>
        <Form>
            <button onClick={downloadResume}>Baixar Currículo</button>
        </Form>
        <div className="resumeBackground">
            <div className="resumeReady">
            <svg version="1.1" id='adminResume' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="595.28px" height="841.89px" viewBox="0 0 595.28 841.89" enableBackground="new 0 0 595.28 841.89" xmlSpace="preserve">
                <g id="Guias" display="none">
                </g>
                <g id="Layer_1">
                    <rect x="215" y="231.071" fill="#161317" width="351.932" height="24.094" />
                    <rect fill="#161317" width="595.28" height="203" />
                    <rect x="28.349" y="28.347" fill="#ABABAB" width="154.651" height="763" />
                    <circle fill="#161317" cx="105.674" cy="122.328" r="64.569" />
                    <line fill="#FFFFFF" x1="350" y1="127.221" x2="417" y2="127.221" />
                    <line fill="none" stroke="#161317" strokeMiterlimit="10" x1="39.516" y1="255.165" x2="170.244" y2="255.165" />
                    <rect x="215" y="366.719" fill="#161317" width="351.932" height="24.094" />
                    <g>
                        <text transform="matrix(1 0 0 1 224.8696 384.4419)" fill="#FFFFFF" fontFamily="'Roboto'" fontSize="18">Formação Acadêmica</text>
                    </g>
                    <rect x="215" y="532.719" fill="#161317" width="351.932" height="24.094" />
                    <g>
                        <text transform="matrix(1 0 0 1 224.8696 550.4414)" fill="#FFFFFF" fontFamily="'Roboto'" fontSize="18">Experiencias Profissionais</text>
                    </g>
                    <text transform="matrix(1 0 0 1 224.8696 250.3696)" fill="#FFFFFF" fontFamily="'Roboto'" fontSize="18">Perfil Profissional</text>
                    <text transform="matrix(1 0 0 1 224.8696 270.3696)" fill="#000" fontFamily="'Roboto'" fontSize="14">{user.goal.substring(0,55)}</text>
                    <text transform="matrix(1 0 0 1 224.8696 290.3696)" fill="#000" fontFamily="'Roboto'" fontSize="14">{user.goal.substring(55,107)}</text>
                    <text transform="matrix(1 0 0 1 224.8696 310.3696)" fill="#000" fontFamily="'Roboto'" fontSize="14">{user.goal.substring(107,159)}</text>
                    <text transform="matrix(1 0 0 1 224.8696 330.3696)" fill="#000" fontFamily="'Roboto'" fontSize="14">{user.goal.substring(159,209)}</text>
                    <text transform="matrix(1 0 0 1 224.8696 350.3696)" fill="#000" fontFamily="'Roboto'" fontSize="14">{user.goal.substring(209,260)}</text>
                    <text transform="matrix(1 0 0 1 224.8696 365.3696)" fill="#000" fontFamily="'Roboto'" fontSize="14">{user.goal.substring(260,user.goal.length)}</text>
                    <text transform="matrix(1 0 0 1 41.105 250.1367)" fill="#2C242D" fontFamily="'Roboto'" fontSize="18">Contato</text>
                    <line fill="none" stroke="#161317" strokeMiterlimit="10" x1="40.311" y1="470.455" x2="171.039" y2="470.455" />
                    <text transform="matrix(1 0 0 1 41.8999 465.4268)" fill="#2C242D" fontFamily="'Roboto'" fontSize="18">Cursos</text>
                    {/* <line fill="none" stroke="#161317" strokeMiterlimit="10" x1="40.311" y1="640.398" x2="171.039" y2="640.398" /> */}
                    {/* <text transform="matrix(1 0 0 1 41.8999 635.3701)" fill="#2C242D" fontFamily="'Roboto'" fontSize="18">Habilidades</text> */}
                    <path fill="#161317" d="M53.504,299.811c6.847,0,12.397-5.551,12.397-12.397c0-6.849-5.551-12.399-12.397-12.399
		c-6.848,0-12.398,5.551-12.398,12.399C41.106,294.26,46.657,299.811,53.504,299.811z M59.466,294.872
		c-0.001,0.189-0.119,0.377-0.182,0.566c-1.301,0-2.602,0-3.903,0c0.001-1.068-0.001-2.135,0.007-3.203
		c0.002-0.328-0.151-0.47-0.468-0.469c-0.945,0.002-1.889,0.002-2.834,0c-0.317,0-0.47,0.141-0.468,0.469
		c0.008,1.068,0.006,2.135,0.007,3.203c-1.301,0-2.602,0-3.903,0c-0.062-0.201-0.178-0.401-0.179-0.603
		c-0.013-2.317-0.005-4.633-0.013-6.95c-0.001-0.244,0.073-0.407,0.257-0.565c0.825-0.712,1.637-1.44,2.455-2.162
		c1.084-0.957,2.168-1.911,3.248-2.862c0.036,0.019,0.062,0.027,0.08,0.043c1.911,1.685,3.824,3.37,5.727,5.064
		c0.101,0.09,0.169,0.271,0.17,0.41C59.477,290.166,59.479,292.519,59.466,294.872z M47.567,280.5c0.694,0,1.375,0,2.079,0
		c0,0.381,0.006,0.744-0.005,1.107c-0.002,0.075-0.047,0.167-0.103,0.219c-0.638,0.586-1.283,1.166-1.971,1.789
		C47.567,282.542,47.567,281.527,47.567,280.5z M45,286.823c0.235-0.19,0.478-0.373,0.705-0.574
		c2.589-2.286,5.176-4.574,7.763-6.862c0.024,0,0.049,0,0.073,0c2.742,2.426,5.485,4.854,8.228,7.279
		c0.071,0.062,0.159,0.104,0.239,0.157c0,0.025,0,0.049,0,0.074c-0.292,0.31-0.583,0.621-0.901,0.958
		c-2.531-2.235-5.061-4.469-7.602-6.713c-2.537,2.239-5.061,4.469-7.601,6.713c-0.305-0.324-0.605-0.641-0.905-0.958
		C45,286.873,45,286.848,45,286.823z"/>
                    <path fill="#161317" d="M53.504,317.111c-6.848,0-12.399,5.551-12.399,12.399c0,6.847,5.551,12.397,12.399,12.397
		c6.847,0,12.397-5.551,12.397-12.397C65.901,322.662,60.351,317.111,53.504,317.111z M46.686,322.428
		c0.368-0.363,0.73-0.738,1.105-1.099c0.13-0.123,0.286-0.217,0.431-0.324c0.101,0,0.196,0,0.298,0
		c0.152,0.117,0.314,0.223,0.447,0.355c0.927,0.918,1.851,1.843,2.773,2.766c0.382,0.385,0.387,0.697,0.002,1.067
		c-0.478,0.461-0.964,0.913-1.43,1.354c-1.252-1.25-2.558-2.555-3.891-3.882C46.497,322.598,46.595,322.519,46.686,322.428z
		 M58.453,337.907c-0.175,0.041-0.354,0.073-0.531,0.106c-0.308,0-0.62,0-0.93,0c-0.048-0.013-0.097-0.026-0.145-0.032
		c-0.267-0.04-0.536-0.074-0.8-0.129c-1.233-0.248-2.334-0.8-3.375-1.487c-1.533-1.02-2.902-2.233-4.129-3.604
		c-1.021-1.148-1.948-2.364-2.65-3.741c-0.358-0.702-0.615-1.439-0.759-2.217c-0.054-0.282-0.089-0.566-0.135-0.848
		c0-0.279,0-0.555,0-0.831c0.067-0.301,0.12-0.606,0.206-0.901c0.082-0.274,0.222-0.526,0.438-0.735
		c0.049,0.043,0.087,0.079,0.125,0.118c1.265,1.264,2.528,2.528,3.795,3.792c0.086,0.084,0.101,0.154,0.069,0.271
		c-0.185,0.67-0.069,1.283,0.392,1.812c1.087,1.245,2.25,2.413,3.493,3.5c0.532,0.466,1.15,0.584,1.826,0.398
		c0.099-0.026,0.166-0.038,0.249,0.045c1.282,1.289,2.565,2.569,3.849,3.854c0.026,0.031,0.053,0.06,0.081,0.091
		C59.219,337.667,58.851,337.813,58.453,337.907z M62.007,334.791c-0.127,0.166-0.243,0.339-0.385,0.485
		c-0.39,0.403-0.788,0.793-1.185,1.187c-0.041,0.044-0.087,0.085-0.12,0.115c-1.311-1.31-2.612-2.609-3.925-3.92
		c0.097-0.088,0.204-0.177,0.306-0.278c0.384-0.379,0.764-0.767,1.15-1.151c0.327-0.323,0.664-0.323,0.986-0.002
		c0.98,0.979,1.958,1.956,2.934,2.939c0.094,0.096,0.158,0.216,0.238,0.327C62.007,334.593,62.007,334.692,62.007,334.791z"/>
                    <g>
                        <path fill="#161317" d="M52.404,364.099c-4.915,0.868-7.418,6.441-4.61,10.691c0.123,0.184,0.147,0.331,0.071,0.541
			c-0.262,0.74-0.509,1.49-0.777,2.288c0.118-0.032,0.194-0.052,0.265-0.074c0.753-0.238,1.503-0.482,2.259-0.711
			c0.094-0.029,0.233-0.013,0.32,0.039c1.683,1.008,3.475,1.292,5.382,0.853c3.708-0.853,6.072-4.676,5.175-8.367
			C59.607,365.726,56.136,363.44,52.404,364.099z M56.443,374.781c-0.465,0.098-0.897,0.04-1.349-0.078
			c-1.976-0.522-3.461-1.701-4.6-3.367c-0.37-0.544-0.729-1.09-0.858-1.75c-0.031-0.162-0.042-0.327-0.063-0.492
			c0.008-0.597,0.221-1.108,0.611-1.555c0.31-0.354,0.72-0.408,1.145-0.385c0.1,0.007,0.239,0.135,0.289,0.243
			c0.254,0.558,0.493,1.127,0.724,1.696c0.089,0.218-0.042,0.401-0.163,0.567c-0.11,0.152-0.239,0.295-0.37,0.432
			c-0.134,0.14-0.155,0.277-0.052,0.446c0.674,1.124,1.611,1.934,2.836,2.408c0.155,0.061,0.278,0.036,0.383-0.089
			c0.202-0.243,0.415-0.478,0.598-0.733c0.139-0.198,0.296-0.248,0.506-0.15c0.551,0.259,1.103,0.511,1.643,0.789
			c0.092,0.047,0.165,0.215,0.165,0.327C57.886,373.923,57.277,374.605,56.443,374.781z"/>
                        <path fill="#161317" d="M53.504,358.764c-6.848,0-12.399,5.551-12.399,12.399c0,6.847,5.551,12.397,12.399,12.397
			c6.847,0,12.397-5.551,12.397-12.397C65.901,364.315,60.351,358.764,53.504,358.764z M55.391,379.056
			c-1.963,0.388-3.834,0.139-5.618-0.761c-0.1-0.05-0.244-0.058-0.352-0.026c-1.459,0.457-2.918,0.923-4.421,1.401
			c0.314-0.937,0.619-1.832,0.921-2.726c0.168-0.501,0.333-1.005,0.512-1.501c0.055-0.147,0.039-0.26-0.037-0.396
			c-0.874-1.53-1.246-3.181-1.047-4.926c0.328-2.849,1.755-5.015,4.259-6.408c4.913-2.735,11.061,0.084,12.226,5.578
			C62.772,373.706,59.82,378.174,55.391,379.056z"/>
                    </g>
                    <g>
                        <path fill="#161317" d="M59.194,407.077c-3.805,0-7.576,0-11.378,0c1.913,1.621,3.797,3.221,5.689,4.818
			C55.4,410.295,57.285,408.698,59.194,407.077z"/>
                        <path fill="#161317" d="M53.504,399.417c-6.848,0-12.399,5.551-12.399,12.398s5.551,12.399,12.399,12.399
			c6.847,0,12.397-5.551,12.397-12.399S60.351,399.417,53.504,399.417z M62.007,416.598c-0.03,0.107-0.062,0.223-0.094,0.33
			c-0.282,0.824-1.035,1.35-1.987,1.35c-4.283,0.006-8.562,0.002-12.845,0c-0.712,0-1.315-0.256-1.721-0.853
			c-0.167-0.245-0.245-0.548-0.361-0.827c0-3.189,0-6.377,0-9.567c0.036-0.107,0.062-0.22,0.098-0.33
			c0.279-0.821,1.031-1.344,1.984-1.347c4.283-0.005,8.562-0.005,12.845,0c0.712,0,1.318,0.256,1.723,0.853
			c0.169,0.246,0.243,0.548,0.358,0.824C62.007,410.221,62.007,413.409,62.007,416.598z"/>
                        <path fill="#161317" d="M60.29,408.508c-0.085,0.069-0.141,0.11-0.197,0.156c-1.868,1.579-3.735,3.156-5.604,4.736
			c-0.163,0.141-0.354,0.209-0.573,0.205c-0.267-0.003-0.535-0.006-0.802,0c-0.237,0.012-0.435-0.072-0.619-0.229
			c-1.869-1.582-3.74-3.162-5.614-4.741c-0.044-0.038-0.09-0.074-0.159-0.126c0,0.095,0,0.154,0,0.218
			c0,2.481,0.003,4.97-0.003,7.453c-0.002,0.264,0.052,0.379,0.382,0.379c4.271,0.003,8.539,0.003,12.807,0
			c0.325,0,0.389-0.11,0.389-0.376c-0.008-2.492-0.005-4.982-0.005-7.474C60.29,408.657,60.29,408.603,60.29,408.508z"/>
                    </g>
                    <text transform="matrix(1 0 0 1 75.3115 150.9541)" fill="#FFFFFF" fontFamily="'Roboto'" fontSize="90.7198">{user.name.charAt(0)}</text>

                    <text transform="matrix(1 0 0 1 70.3115 275.9541)" fill="#161317" fontFamily="'Roboto'" fontSize="12">{user.address.substring(0, 19)}</text>
                    <text transform="matrix(1 0 0 1 75.3115 290.9541)" fill="#161317" fontFamily="'Roboto'" fontSize="12">{user.address.substring(20, user.address.length)}</text>
                    <text transform="matrix(1 0 0 1 70.3115 375.9541)" fill="#161317" fontFamily="'Roboto'" fontSize="12">({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                    <text transform="matrix(1 0 0 1 70.3115 330.9541)" fill="#161317" fontFamily="'Roboto'" fontSize="12">({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                    <text transform="matrix(1 0 0 1 69.35 410.9141)" fill="#161317" fontFamily="'Roboto'" fontSize="12">{emailLenght()}</text>
                    <text transform="matrix(1 0 0 1 69.35 430.9141)" fill="#161317" fontFamily="'Roboto'" fontSize="12">{user.email.substring(email,user.email.length)}</text>
                </g>
                <g id="textos">
                    <text transform="matrix(1 0 0 1 226.0918 420.9448)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courseName} / {user.courseSchool}</text>
                    <text transform="matrix(1 0 0 1 226.0918 440.9448)" fill="#161317" fontFamily="'Roboto'" fontSize="14">Previsão de Conclusão - {user.courseEndYear}</text>
                    {/* <text transform="matrix(1 0 0 1 41.8999 499.832)"><tspan x="0" y="0" fill="#2C242D" fontFamily="'Roboto'" fontSize="12">{user.courseName} </tspan><tspan x="0" y="14.399" fill="#2C242D" fontFamily="'Roboto'" fontSize="12">{user.courseSchool}</tspan><tspan x="0" y="28.799" fill="#2C242D" fontFamily="'Roboto'" fontSize="12">Periodo {user.courseEndYear}</tspan></text> */}
                    {/* <text transform="matrix(1 0 0 1 41.8999 556.8125)"><tspan x="0" y="0" fill="#2C242D" fontFamily="'Roboto'" fontSize="12">Curso </tspan><tspan x="0" y="14.4" fill="#2C242D" fontFamily="'Roboto'" fontSize="12">Nome da Instituição</tspan><tspan x="0" y="28.801" fill="#2C242D" fontFamily="'Roboto'" fontSize="12">Periodo ( início e fim)</tspan></text> */}
                    <text transform="matrix(1 0 0 1 41.8999 499.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(0,20):<></>} </text>
                    <text transform="matrix(1 0 0 1 41.8999 519.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(20,40):<></>} </text>
                    <text transform="matrix(1 0 0 1 41.8999 539.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(40,60):<></>} </text>
                    <text transform="matrix(1 0 0 1 41.8999 559.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(60,80):<></>} </text>
                    <text transform="matrix(1 0 0 1 41.8999 579.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(80,100):<></>} </text>
                    <text transform="matrix(1 0 0 1 41.8999 599.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(100,120):<></>} </text>
                    <text transform="matrix(1 0 0 1 41.8999 619.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(120,140):<></>} </text>
                    <text transform="matrix(1 0 0 1 41.8999 639.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(140,160):<></>} </text>
                    <text transform="matrix(1 0 0 1 41.8999 659.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(160,180):<></>} </text>
                    <text transform="matrix(1 0 0 1 41.8999 679.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(180,200):<></>} </text>
                    <text transform="matrix(1 0 0 1 41.8999 699.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(200,220):<></>} </text>
                    <text transform="matrix(1 0 0 1 41.8999 719.832)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.courses!== 'NOT_PRINT'?user.courses.substring(220,240):<></>} </text>
                    <text transform="matrix(1 0 0 1 226.0918 582.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.companyOccupation !== "NOT_PRINT"? `Cargo: ${user.companyOccupation}` :<></>}</text>
                    <text transform="matrix(1 0 0 1 226.0918 596.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?`Empresa: ${user.companyName}`:user.companyName.substring(0,52)}</text>
                    <text transform="matrix(1 0 0 1 226.0918 612.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(53,user.companyName.length)}</text>
                    <text transform="matrix(1 0 0 1 226.0918 612.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14"> {user.companyStartEnd  !== "NOT_PRINT"?  `Período: ${user.companyStartEnd}` :<></>}</text>
                    <text transform="matrix(1 0 0 1 226.0918 630.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.companyDescription !== "NOT_PRINT" ?`Principais Atividades:`:<></>}</text>
                    <text transform="matrix(1 0 0 1 226.0918 647.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.companyDescription !== "NOT_PRINT" ?`${user.companyDescription.substring(0,53)}`:<></>}</text>
                    <text transform="matrix(1 0 0 1 226.0918 667.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.companyDescription !== "NOT_PRINT" ?`${user.companyDescription.substring(53,106)}`:<></>}</text>
                    <text transform="matrix(1 0 0 1 226.0918 687.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.companyDescription !== "NOT_PRINT" ?`${user.companyDescription.substring(106,159)}`:<></>}</text>
                    <text transform="matrix(1 0 0 1 226.0918 707.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.companyDescription !== "NOT_PRINT" ?`${user.companyDescription.substring(159,212)}`:<></>}</text>
                    <text transform="matrix(1 0 0 1 226.0918 727.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14">{user.companyDescription !== "NOT_PRINT" ?`${user.companyDescription.substring(212,user.companyDescription.length)}`:<></>}</text>
                    {/* <text transform="matrix(1 0 0 1 226.0918 654.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14">Cargo / Nome da Compainha</text>
                    <text transform="matrix(1 0 0 1 226.0918 729.9111)" fill="#161317" fontFamily="'Roboto'" fontSize="14">Cargo / Nome da Compainha</text> */}
                    <text transform="matrix(1 0 0 1 191.8022 94.3276)" fill="#FFFFFF" fontFamily="'Roboto'" fontSize="28">{user.name.indexOf(" ")>=25?user.name.substring(0,user.name.length).toUpperCase():user.name.substring(0,25).toUpperCase()}</text>
                    <text transform="matrix(1 0 0 1 191.8022 132.3276)" fill="#FFFFFF" fontFamily="'Roboto'" fontSize="28">{user.name.indexOf(" ")>=25?user.name.substring(25,user.name.length).toUpperCase():user.name.substring(25,user.name.length).toUpperCase()}</text>
                    <text transform="matrix(1 0 0 1 272.791 156.7739)" fill="#FFFFFF" fontFamily="'Roboto'" fontSize="22">{user.area} - {user.area_level}</text>
                    <text transform="matrix(1 0 0 1 229.2959 826.6973)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="24">Currículo feito pela Curvi</text>
                </g>
            </svg>
            </div>
        </div>
        </>
    )
}
export default Admin;