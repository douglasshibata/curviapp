import React from 'react';
import { Form } from '../style';
const saveSvgAsPng = require('save-svg-as-png');

function AdmBasic(props) {
    const user = props.user;
    const imageOptions = {
        backgroundColor: 'white',
      }
        function downloadResume(){
            saveSvgAsPng.saveSvgAsPng(document.getElementById('resumeBackground'),`${user.name}.png`,imageOptions)
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

            <svg version="1.1" id="resumeBackground" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               widths="595.28px" height="841.89px" viewBox="0 0 595.28 841.89" enableBackground="new 0 0 595.28 841.89" xmlSpace="preserve">
                <text transform="matrix(1 0 0 1 23.2832 57.4688)" fill="#414042" fontFamily="'MyriadPro-Semibold'" fontSize="30">{user.name.substring(0,fullname[3])}</text>
                <text transform="matrix(1 0 0 1 28.2832 87.4688)" fill="#414042" fontFamily="'MyriadPro-Semibold'" fontSize="30">{user.name.substring(fullname[3],fullname.length>3?fullname[6]:<></>)}</text>
                <text transform="matrix(1 0 0 1 220.0063 114.7466)" fill="#58595B" fontFamily="'MyriadPro-Regular'" fontSize="16">{user.area}-{user.area_level}</text>
                <text transform="matrix(1 0 0 1 199.2959 279.1904)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="14">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?`Empresa: ${user.companyName}`:user.companyName.substring(0,52)}</text>
                <text transform="matrix(1 0 0 1 199.2959 299.1904)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="14">{user.companyName !== 'Primeiro emprego objetivando adquirir conhecimento e experiência necessária junto à empresa.'?``:user.companyName.substring(53,user.companyName.length)}</text>
                <text transform="matrix(1 0 0 1 70.6631 279.1904)"><tspan x="0" y="0" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyOccupation !== "NOT_PRINT"? `Cargo: ${user.companyOccupation}` :<></>}</tspan><tspan x="-42.899" y="20.4" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12"> {user.companyStartEnd  !== "NOT_PRINT"?  `\nPeríodo: ${user.companyStartEnd}` :<></>}</tspan></text>
                <line fill="none" stroke="#58595B" strokeMiterlimit="10" x1="383.709" y1="110.563" x2="566.867" y2="110.563" />
                <line fill="none" stroke="#58595B" strokeMiterlimit="10" x1="28.284" y1="110.563" x2="209.444" y2="110.563" />
                <line fill="none" stroke="#58595B" strokeMiterlimit="10" x1="240.686" y1="242.896" x2="528.269" y2="242.896" />
                <line fill="none" stroke="#58595B" strokeMiterlimit="10" x1="205.824" y1="434.368" x2="528.269" y2="434.368" />
                <line fill="none" stroke="#58595B" strokeMiterlimit="10" x1="228.571" y1="627.702" x2="527.139" y2="627.702" />
                <rect x="28.711" y="181.896" fill="#DCDDDE" width="553.156" height="24" />
                <rect x="28.711" y="228.229" fill="#DCDDDE" width="208.225" height="24" />
                <rect x="28.711" y="422.368" fill="#DCDDDE" width="174.433" height="24" />
                <rect x="28.284" y="615.701" fill="#DCDDDE" width="197.194" height="24" />
                <rect x="179.225" y="288.552" fill="none" width="387.641" height="26.561" />
                <text transform="matrix(1 0 0 1 200.2251 297.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ?`Principais Atividades:`:<></>}</text>
                <text transform="matrix(1 0 0 1 200.2251 317.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(0,companyDescriptionArr.length>5?companyDescriptionArr[5]:<></>):<></>}</text>
                <text transform="matrix(1 0 0 1 200.2251 337.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[5],companyDescriptionArr.length>5?companyDescriptionArr[10]:<></>):<></>}</text>
                <text transform="matrix(1 0 0 1 200.2251 357.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[10],companyDescriptionArr.length>10?companyDescriptionArr[15]:<></>):<></>}</text>
                <text transform="matrix(1 0 0 1 200.2251 377.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[15],companyDescriptionArr.length>15?companyDescriptionArr[20]:<></>):<></>}</text>
                <text transform="matrix(1 0 0 1 200.2251 497.0723)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.companyDescription !== "NOT_PRINT" ? user.companyDescription.substring(companyDescriptionArr[20],companyDescriptionArr.length>20?companyDescriptionArr[25]:<></>):<></>}</text>
                <text transform="matrix(1 0 0 1 88.9209 479.8867)"><tspan x="0" y="0" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courseName}</tspan><tspan x="-46.571" y="20.4" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">   {user.courseEndYear === 'Completo'?user.courseEndYear:`Previsão de Conclusão: ${user.courseEndYear}`}</tspan></text>
                <text transform="matrix(1 0 0 1 189.2959 479.8887)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="14">{user.courseSchool}</text>
                <rect x="180.521" y="489.25" fill="none" width="386.346" height="24.898" />
                {/* <text transform="matrix(1 0 0 1 190.5215 497.7695)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">breve descrção do curso: carga horária, componentes etc.</text> */}
                <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M387.261,200.272c0-3.19,0-6.378,0-9.568
      c0.036-0.107,0.062-0.22,0.098-0.33c0.279-0.821,1.031-1.344,1.984-1.347c4.283-0.005,8.562-0.005,12.845,0
      c0.712,0,1.318,0.256,1.723,0.853c0.169,0.246,0.243,0.548,0.358,0.824c0,3.19,0,6.378,0,9.568c-0.03,0.107-0.062,0.223-0.094,0.33
      c-0.282,0.824-1.035,1.35-1.987,1.35c-4.283,0.005-8.562,0.002-12.845,0c-0.712,0-1.315-0.257-1.721-0.854
      C387.455,200.854,387.377,200.552,387.261,200.272z M402.551,192.182c-0.085,0.069-0.141,0.11-0.197,0.156
      c-1.868,1.579-3.735,3.156-5.604,4.736c-0.163,0.141-0.354,0.21-0.573,0.205c-0.267-0.003-0.535-0.005-0.802,0
      c-0.237,0.013-0.435-0.072-0.619-0.229c-1.869-1.582-3.74-3.161-5.614-4.741c-0.044-0.038-0.09-0.074-0.159-0.126
      c0,0.095,0,0.154,0,0.218c0,2.481,0.003,4.97-0.003,7.453c-0.002,0.264,0.052,0.379,0.382,0.379c4.271,0.003,8.539,0.003,12.807,0
      c0.325,0,0.389-0.11,0.389-0.376c-0.008-2.491-0.005-4.982-0.005-7.474C402.551,192.33,402.551,192.276,402.551,192.182z
       M401.455,190.75c-3.805,0-7.576,0-11.378,0c1.913,1.621,3.797,3.221,5.689,4.818C397.661,193.969,399.546,192.371,401.455,190.75z"
                />
                <g>
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M248.986,202.908c0.314-0.937,0.619-1.832,0.921-2.727
              c0.168-0.501,0.333-1.005,0.512-1.501c0.055-0.146,0.039-0.26-0.037-0.396c-0.874-1.53-1.246-3.181-1.047-4.926
              c0.328-2.849,1.755-5.015,4.259-6.408c4.913-2.735,11.061,0.084,12.225,5.577c0.939,4.415-2.012,8.884-6.441,9.766
              c-1.963,0.389-3.834,0.14-5.618-0.761c-0.1-0.05-0.244-0.058-0.352-0.026C251.948,201.964,250.489,202.431,248.986,202.908z
               M251.074,200.856c0.118-0.032,0.194-0.053,0.265-0.074c0.753-0.238,1.503-0.482,2.259-0.711c0.094-0.028,0.233-0.013,0.32,0.039
              c1.683,1.008,3.475,1.292,5.382,0.854c3.708-0.854,6.072-4.677,5.175-8.367c-0.882-3.633-4.354-5.918-8.085-5.26
              c-4.915,0.867-7.418,6.44-4.61,10.69c0.123,0.184,0.147,0.331,0.071,0.541C251.589,199.308,251.342,200.059,251.074,200.856z"/>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M253.559,192.332c0.008-0.597,0.221-1.108,0.611-1.555
              c0.31-0.354,0.72-0.408,1.145-0.385c0.1,0.007,0.239,0.135,0.289,0.243c0.254,0.558,0.493,1.127,0.724,1.696
              c0.089,0.218-0.042,0.401-0.163,0.566c-0.11,0.152-0.239,0.295-0.37,0.432c-0.134,0.141-0.155,0.277-0.052,0.446
              c0.674,1.123,1.611,1.934,2.836,2.407c0.155,0.061,0.278,0.036,0.384-0.089c0.201-0.243,0.414-0.478,0.598-0.733
              c0.139-0.198,0.297-0.248,0.506-0.149c0.552,0.259,1.104,0.511,1.644,0.788c0.092,0.048,0.165,0.216,0.165,0.327
              c-0.002,0.834-0.611,1.517-1.445,1.692c-0.465,0.098-0.898,0.039-1.35-0.078c-1.976-0.522-3.461-1.701-4.6-3.367
              c-0.37-0.545-0.729-1.091-0.858-1.75C253.591,192.662,253.58,192.497,253.559,192.332z"/>
                    </g>
                </g>
                <text transform="matrix(1 0 0 1 30.2837 246.7466)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="17">Experiências Profissionais</text>
                <text transform="matrix(1 0 0 1 30.2837 440.0439)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="17">Formação Acadêmica</text>
                <text transform="matrix(1 0 0 1 30.2842 633.377)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="17">Cursos Complementares</text>
                <path fill="#414042" d="M564.031,231.407h-7.668v-1.069c0-1.565-1.271-2.835-2.836-2.835h-7.336c-1.566,0-2.836,1.27-2.836,2.835
      v1.069h-7.668c-1.566,0-2.836,1.27-2.836,2.836v16.763c0,1.566,1.27,2.836,2.836,2.836h28.344c1.566,0,2.836-1.27,2.836-2.836
      v-16.763C566.867,232.677,565.598,231.407,564.031,231.407z M544.666,231.142c0-1.148,0.932-2.079,2.08-2.079h6.226
      c1.149,0,2.081,0.931,2.081,2.079v0.266h-10.387V231.142z"/>
                <g>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M564.276,432.851c-0.73,0.383-1.424,0.75-2.121,1.107
          c-1.066,0.549-2.139,1.087-3.203,1.639c-1.284,0.665-2.562,1.343-3.845,2.01c-1.445,0.752-2.896,1.493-4.339,2.251
          c-0.603,0.316-1.184,0.31-1.782-0.002c-1.757-0.915-3.519-1.821-5.278-2.733c-0.987-0.512-1.973-1.025-2.959-1.54
          c-0.984-0.514-1.966-1.032-2.953-1.542c-1.31-0.675-2.625-1.34-3.936-2.015c-0.985-0.509-1.315-1.649-0.693-2.509
          c0.188-0.26,0.479-0.476,0.767-0.629c1.402-0.744,2.821-1.459,4.231-2.188c2.299-1.188,4.596-2.378,6.893-3.569
          c1.315-0.682,2.633-1.361,3.943-2.052c0.579-0.305,1.146-0.292,1.716,0.003c1.738,0.898,3.476,1.799,5.214,2.696
          c1.273,0.657,2.549,1.312,3.821,1.972c2.057,1.065,4.106,2.146,6.171,3.197c1.06,0.539,1.238,1.959,0.479,2.705
          c-0.149,0.146-0.33,0.27-0.515,0.37c-0.138,0.075-0.177,0.159-0.177,0.309c0.005,1.795,0.002,3.59,0.005,5.385
          c0.001,0.084,0.015,0.191,0.066,0.246c0.667,0.72,0.815,1.602,0.804,2.532c-0.009,0.694-0.171,1.352-0.573,1.926
          c-0.3,0.428-0.688,0.71-1.252,0.574c-0.356-0.085-0.618-0.318-0.792-0.621c-0.759-1.32-0.747-2.662-0.066-4.011
          c0.019-0.036,0.039-0.077,0.07-0.101c0.333-0.248,0.322-0.6,0.319-0.967c-0.01-1.418-0.004-2.836-0.005-4.254
          C564.287,432.991,564.281,432.942,564.276,432.851z"/>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M537.847,435.374c0.446,0.225,0.861,0.43,1.271,0.643
          c2.122,1.1,4.243,2.204,6.365,3.303c1.178,0.609,2.361,1.209,3.539,1.818c0.584,0.303,1.153,0.295,1.737-0.01
          c1.843-0.965,3.688-1.922,5.536-2.875c1.751-0.903,3.507-1.798,5.26-2.697c0.099-0.051,0.196-0.106,0.326-0.178
          c0.008,0.176,0.02,0.313,0.02,0.45c0.001,1.877-0.003,3.753,0.006,5.63c0,0.193-0.063,0.287-0.232,0.374
          c-2.185,1.122-4.365,2.252-6.547,3.38c-1.688,0.871-3.376,1.74-5.061,2.617c-0.141,0.073-0.241,0.07-0.382-0.002
          c-1.953-1.017-3.909-2.027-5.866-3.037c-1.812-0.934-3.625-1.865-5.438-2.797c-0.533-0.274-0.534-0.272-0.534-0.877
          c0-1.818,0-3.637,0-5.455C537.847,435.581,537.847,435.502,537.847,435.374z"/>
                </g>
                <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M554.032,643.461c-0.327,0-0.653,0-0.98,0
      c-0.041-0.028-0.076-0.069-0.123-0.081c-5.008-1.276-10.019-2.546-15.025-3.825c-1.359-0.349-2.844-0.532-3.764-1.545
      c-1.44-1.585-1.688-3.293-0.669-5.081c0.206-0.364,0.246-0.623,0.009-1.008c-0.979-1.59-0.905-4.803,1.109-6.537
      c4.007-3.45,7.921-6.972,11.835-10.49c0.667-0.602,1.334-0.769,2.295-0.591c5.544,1.028,11.095,2.026,16.644,3.032
      c1.639,0.298,1.956,1.056,0.867,2.079c-4.095,3.853-8.206,7.695-12.27,11.57c-0.681,0.649-1.319,0.782-2.32,0.533
      c-4.578-1.143-9.177-2.229-13.768-3.335c-1.248-0.301-2.115,0.181-2.126,1.222c-0.004,0.406-0.011,0.854,0.193,1.206
      c0.191,0.328,0.601,0.701,1.014,0.806c5.123,1.293,10.266,2.538,15.402,3.804c0.47,0.115,0.755,0.051,1.091-0.283
      c3.159-3.146,6.342-6.278,9.547-9.396c0.523-0.509,0.879-0.993,0.777-1.684c-0.052-0.351,0.092-0.729,0.202-1.083
      c0.267-0.847,0.915-1.239,1.759-1.096c0.864,0.146,1.223,0.719,1.03,1.589c-0.074,0.338-0.098,0.685-0.122,1.028
      c-0.04,0.521,0.061,1.071-0.113,1.562c-0.478,1.354-0.633,2.704,0.026,4.021c0.412,0.818,0.218,1.419-0.46,2.068
      c-2.985,2.867-5.924,5.767-8.9,8.64C556.174,641.567,555.087,642.504,554.032,643.461z M536.289,633.669
      c-1.169,1.451-0.528,2.918,1.436,3.424c4.483,1.155,8.988,2.262,13.442,3.487c1.365,0.376,2.147,0.249,3.074-0.699
      c2.956-3.024,6.072-5.95,9.111-8.925c0.181-0.179,0.323-0.46,0.298-0.68c-0.05-0.416-0.233-0.823-0.384-1.306
      c-0.242,0.212-0.447,0.375-0.629,0.555c-2.551,2.506-5.098,5.016-7.646,7.524c-0.835,0.82-1.19,0.904-2.444,0.597
      C547.141,636.321,541.73,635.001,536.289,633.669z M557.551,620.192c-0.371-0.14-0.636-0.287-0.929-0.344
      c-2.707-0.539-5.432-1.028-8.125-1.605c-1.197-0.257-2.027-0.07-2.72,0.766c-0.578,0.696-0.587,0.786,0.474,0.993
      c2.684,0.522,5.381,1.004,8.046,1.575c1.093,0.234,1.898,0.102,2.533-0.647C557.012,620.716,557.228,620.521,557.551,620.192z"/>
                <g>
                    <rect x="28.711" y="132.636" fill="none" width="538.156" height="45.483" />
                    <text transform="matrix(1 0 0 1 28.8696 131.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(0,fullgoal[12])}</text>
                    <text transform="matrix(1 0 0 1 28.8696 141.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(fullgoal[12], fullgoal.length > 12 ? fullgoal[24] : <></>)}</text>
                    <text transform="matrix(1 0 0 1 28.8696 151.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(fullgoal[24], fullgoal.length > 24 ? fullgoal[36] : <></>)}</text>
                    <text transform="matrix(1 0 0 1 28.8696 161.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(fullgoal[36], fullgoal.length > 36 ? fullgoal[48] : <></>)}</text>
                    <text transform="matrix(1 0 0 1 28.8696 171.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(fullgoal[48], fullgoal.length > 48 ? fullgoal[60] : <></>)}</text>
                    <text transform="matrix(1 0 0 1 28.8696 181.1563)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.goal.substring(fullgoal[60], fullgoal.length > 60 ? fullgoal[72] : <></>)}</text>
                </g>
                <g>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M37.749,185.205c0.338,0.147,0.449,0.407,0.444,0.77
          c-0.015,1.057-0.005,2.114-0.005,3.171c0,0.46-0.224,0.685-0.687,0.688c-0.294,0.002-0.588,0.002-0.882,0
          c-0.471-0.003-0.696-0.229-0.697-0.698c-0.001-1.04,0.009-2.08-0.005-3.12c-0.004-0.365,0.088-0.65,0.438-0.81
          C36.821,185.205,37.285,185.205,37.749,185.205z"/>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M47.188,185.205c0.346,0.152,0.446,0.427,0.442,0.79
          c-0.014,1.046-0.005,2.092-0.005,3.137c-0.001,0.473-0.224,0.698-0.693,0.701c-0.306,0.002-0.61,0.004-0.916-0.001
          c-0.425-0.006-0.657-0.241-0.657-0.667c-0.002-1.057,0.009-2.114-0.006-3.171c-0.005-0.364,0.097-0.637,0.442-0.789
          C46.26,185.205,46.724,185.205,47.188,185.205z"/>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M34.803,187.129c0,0.499-0.001,0.963,0.001,1.426
          c0,0.255-0.011,0.51,0.009,0.764c0.075,0.973,0.78,1.625,1.756,1.634c0.334,0.003,0.668,0.003,1.002,0
          c1.029-0.011,1.768-0.753,1.772-1.784c0.002-0.611,0-1.222,0-1.833c0-0.061,0-0.122,0-0.192c1.633,0,3.249,0,4.892,0
          c0,0.058,0,0.117,0,0.176c0,0.617-0.002,1.233,0.001,1.851c0.003,0.893,0.548,1.569,1.419,1.754
          c0.143,0.03,0.293,0.026,0.439,0.028c0.3,0.004,0.6,0.003,0.899,0.001c1.039-0.007,1.771-0.73,1.78-1.771
          c0.006-0.611,0.001-1.222,0.001-1.833c0-0.062,0-0.123,0-0.202c0.34,0.006,0.629,0.113,0.885,0.308
          c0.438,0.331,0.632,0.78,0.632,1.323c-0.001,4.058,0.003,8.114-0.003,12.171c-0.002,0.99-0.673,1.641-1.659,1.641
          c-4.566,0-9.133,0-13.699,0c-0.805,0-1.393-0.44-1.593-1.205c-0.041-0.156-0.048-0.325-0.048-0.487
          c-0.002-4.023,0.003-8.046-0.006-12.069c-0.002-0.855,0.502-1.448,1.149-1.625C34.545,187.171,34.663,187.156,34.803,187.129z
           M41.783,193.217c-1.901,0-3.803,0-5.704,0c-0.543,0-0.801,0.257-0.801,0.8c-0.001,2.037-0.001,4.073,0,6.11
          c0,0.542,0.26,0.8,0.802,0.8c3.797,0,7.594,0,11.391,0c0.541,0,0.802-0.26,0.802-0.801c0.001-2.036,0.001-4.073,0-6.11
          c0-0.54-0.26-0.799-0.803-0.799C45.574,193.217,43.678,193.217,41.783,193.217z"/>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M41.79,194.402c0.221,0,0.441-0.004,0.661,0.002
          c0.267,0.007,0.419,0.16,0.422,0.427c0.005,0.436,0.005,0.871,0,1.307c-0.003,0.269-0.16,0.429-0.438,0.434
          c-0.43,0.009-0.859,0.009-1.289,0c-0.291-0.006-0.439-0.171-0.44-0.467c-0.002-0.413-0.002-0.826,0-1.239
          c0.002-0.308,0.15-0.458,0.457-0.463C41.371,194.399,41.58,194.402,41.79,194.402L41.79,194.402z"/>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M38.356,200.009c-0.215-0.001-0.43,0.002-0.645-0.001
          c-0.282-0.003-0.439-0.145-0.444-0.421c-0.008-0.44-0.008-0.882,0-1.323c0.005-0.267,0.16-0.419,0.428-0.423
          c0.436-0.007,0.871-0.007,1.307,0c0.27,0.004,0.427,0.161,0.434,0.439c0.01,0.43,0.01,0.86,0,1.29
          c-0.007,0.294-0.169,0.436-0.468,0.438C38.764,200.01,38.56,200.009,38.356,200.009z"/>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M41.78,200.008c-0.209,0-0.418,0.003-0.627,0
          c-0.288-0.004-0.445-0.154-0.447-0.438c-0.005-0.43-0.005-0.859,0-1.289c0.002-0.272,0.159-0.436,0.432-0.439
          c0.435-0.007,0.871-0.007,1.306,0c0.271,0.004,0.428,0.168,0.431,0.44c0.004,0.431,0.004,0.86,0,1.29
          c-0.003,0.282-0.161,0.434-0.448,0.437C42.21,200.011,41.995,200.008,41.78,200.008z"/>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M46.313,198.923c0,0.22,0.006,0.441-0.001,0.661
          c-0.01,0.277-0.162,0.422-0.442,0.424c-0.424,0.003-0.849,0.002-1.272,0c-0.285-0.002-0.446-0.147-0.453-0.435
          c-0.011-0.43-0.01-0.86-0.001-1.29c0.007-0.292,0.171-0.441,0.465-0.443c0.419-0.004,0.837-0.004,1.256,0
          c0.287,0.003,0.437,0.153,0.45,0.438c0,0.012,0,0.022,0,0.034C46.314,198.515,46.314,198.719,46.313,198.923
          C46.314,198.923,46.314,198.923,46.313,198.923z"/>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M37.264,195.474c0-0.203-0.003-0.407,0.001-0.61
          c0.006-0.312,0.15-0.458,0.458-0.46c0.418-0.004,0.837-0.004,1.256,0c0.289,0.002,0.448,0.145,0.455,0.432
          c0.011,0.435,0.012,0.871,0,1.307c-0.008,0.275-0.167,0.425-0.443,0.43c-0.43,0.008-0.86,0.009-1.29,0
          c-0.285-0.006-0.429-0.162-0.436-0.452C37.26,195.904,37.264,195.689,37.264,195.474z"/>
                    <path fillRule="evenodd" clipRule="evenodd" fill="#414042" d="M45.232,194.402c0.22,0,0.441-0.005,0.661,0.002
          c0.261,0.007,0.413,0.15,0.418,0.412c0.008,0.44,0.008,0.882,0.001,1.323c-0.005,0.275-0.158,0.427-0.438,0.432
          c-0.43,0.008-0.859,0.009-1.289,0c-0.282-0.006-0.436-0.164-0.441-0.451c-0.008-0.424-0.009-0.849,0-1.272
          c0.006-0.296,0.164-0.44,0.461-0.445C44.813,194.399,45.022,194.402,45.232,194.402L45.232,194.402z"/>
                </g>
                <g>
                    <path fill="#414042" d="M150.577,194.619c2.628,0.097,4.73-1.954,4.785-4.456c0.059-2.653-1.967-4.74-4.568-4.77
          c-2.536-0.03-4.624,2.021-4.655,4.568C146.109,192.421,148.041,194.526,150.577,194.619z"/>
                    <path fill="#414042" d="M158.01,200.062c0-0.871-0.264-1.641-0.861-2.276c-0.121-0.129-0.544-0.604-1.702-0.999
          c-0.979-0.334-2.01-0.49-3.009-0.758c-0.401-0.107-0.708-0.034-0.982,0.276c-0.217,0.247-0.463,0.468-0.692,0.695
          c-0.281-0.276-0.531-0.514-0.771-0.761c-0.245-0.25-0.517-0.313-0.859-0.224c-1.021,0.268-2.047,0.515-3.07,0.77
          c-1.002,0.249-1.752,0.822-2.224,1.746c-0.294,0.577-0.338,1.195-0.336,1.834c0.001,0.678-0.001,1.356,0,2.035h14.505
          C158.007,201.621,158.009,200.841,158.01,200.062z"/>
                </g>
                <g>
                    <text transform="matrix(1 0 0 1 57.1006 198.9238)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.age}</text>
                </g>
                <g>
                    <text transform="matrix(1 0 0 1 165.7563 198.9229)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.area}</text>
                </g>
                <g>
                    <text transform="matrix(1 0 0 1 273.9355 198.9229)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">({user.cellphone.substring(0,2)}) {user.cellphone.substring(2,user.cellphone.length)}</text>
                </g>
                <g>
                    <text transform="matrix(1 0 0 1 411.6025 198.9229)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.email}</text>
                </g>
                
                {/* <text transform="matrix(1 0 0 1 128.9209 667.625)"><tspan x="0" y="0" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses}</tspan><tspan x="-76.571" y="14.399" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">Período ( inicio e fim)</tspan></text>
                <text transform="matrix(1 0 0 1 179.2959 667.625)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="14">Instituição de ensino</text> */}
                <rect x="180.521" y="676.987" fill="none" width="386.346" height="24.898" />
                <text transform="matrix(1 0 0 1 50.5215 685.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(0,extraCourses[7]):<></>} </text>
                <text transform="matrix(1 0 0 1 50.5215 705.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[7],extraCourses.length > 7 ? extraCourses[14] : <></>):<></>} </text>
                <text transform="matrix(1 0 0 1 50.5215 725.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[14],extraCourses.length > 14 ? extraCourses[21] : <></>):<></>} </text>
                <text transform="matrix(1 0 0 1 50.5215 745.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[21],extraCourses.length > 21 ? extraCourses[28] : <></>):<></>} </text>
                <text transform="matrix(1 0 0 1 50.5215 765.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[28],extraCourses.length > 28 ? extraCourses[35] : <></>):<></>} </text>
                <text transform="matrix(1 0 0 1 50.5215 785.5078)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.courses!== 'NOT_PRINT'?user.courses.substring(extraCourses[35],extraCourses.length > 35 ? extraCourses[42] : <></>):<></>} </text>
                <text transform="matrix(1 0 0 1 229.2959 826.6973)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="24">Currículo feito pela Curvi</text>
                {/* <text transform="matrix(1 0 0 1 128.9209 726.6973)"><tspan x="0" y="0" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{(user.linkedln_link !== 'NOT_PRINT') ? `Linkedln: ${user.linkedln_link}` : ''}</tspan><tspan x="-76.571" y="14.399" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">Período {user.city}</tspan></text>
                <text transform="matrix(1 0 0 1 179.2959 726.6973)" fill="#58595B" fontFamily="'MyriadPro-Semibold'" fontSize="14">{user.state}</text>
                <rect x="180.521" y="736.06" fill="none" width="386.346" height="24.898" />
                <text transform="matrix(1 0 0 1 180.5215 744.5801)" fill="#808285" fontFamily="'MyriadPro-Regular'" fontSize="12">{user.address}</text> */}
            </svg>
            </div>
        </div>
        </>
    )
}
export default AdmBasic;