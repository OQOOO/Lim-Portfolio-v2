import react from 'react';
import { useContext } from 'react';

import { ThemeContext } from '../../../contexts/ThemeContext';

import llmOutput from '../../../assets/gif/LLMOutput.gif';
import InfoSection from "./InfoSection";

import { FaGithub } from 'react-icons/fa';
/*
 * 
 * <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
   <h4 style={{color: theme.tertiary}}>{course}</h4>
   <h5 style={{color: theme.tertiary80}}>{institution}</h5>
 */

function AIWebServiceProject() {
    const { theme } = useContext(ThemeContext);

    return (
       
        <div style={{ fontFamily: "var(--primaryFont)"}}>
            <style>
                {`
                    p {
                        font-size: 1.1rem;
                        line-height: 1.6;
                    }
                `}
            </style>
            <h1 style={{color: theme.primary}}>AI 서비스 플랫폼</h1> 
            <p style={{color: theme.tertiary80, fontWeight: "bold"}}>
                AI 모델을 활용한 웹 서비스 구현 프로젝트
            </p>

            <p style={{color: theme.tertiary80, fontWeight: "bold"}}>
                진행 기간: 2025.05 ~ 2025.06
            </p>

            <br/>

            <img src={llmOutput} style={{ width: "100%", maxWidth: "500px", minWidth: "300px", borderRadius: "20px" }}/>
            <p style={{fontSize: "0.9rem", color: "rgb(120, 120, 120)" }}>(내부 프롬프트로 정해진 절차에 따라 논리적 오류를 찾아 설명하는 모습입니다.)</p>

            <p style={{ whiteSpace: 'pre-line', color: theme.tertiary80, fontSize: "1.1rem" }}>
                {`
                각종 AI 모델을 활용하여 서비스를 제공하는 웹 플랫폼입니다.

                AI 모델 활용 역량을 증명하기 위해 시작된 프로젝트로, 언어 모델과 글자 인식 모델, 객체 탐지 모델을 활용한 서비스를 제공합니다.



                `}
            </p>

            

            <h2 style={{color: theme.tertiary, color: theme.primary}}>사용 기술</h2>
            <p style={{color: theme.tertiary80, fontWeight: "bold"}}>
                ASP.NET, Entity Framework, JWT, FastAPI, MySQL, Docker, React
            </p>
            

            <br/><br/>

            <h2 style={{color: theme.tertiary, color: theme.primary}}>주요 기능</h2><br/>

            <InfoSection
                title="논리적 오류 찾기"
                description="LLM을 사용하여 사용자가 입력한 문장에서 논리적 오류를 찾아 설명하는 기능을 제공합니다."
            />
            <InfoSection
                title="글자 추출"
                description="PaddleOCR 모델을 활용하여 이미지에서 글자를 추출하는 기능을 제공합니다."
            />
            <InfoSection
                title="객체 탐지"
                description="Yolo 모델을 활용하여 이미지에서 객체를 탐지하는 기능을 제공합니다."
            />
            <InfoSection
                title="관리자 기능"
                description="관리자 계정을 통해 모델의 제공 여부를 선택할 수 있습니다."
            />

            <br/><br/>

            <h2 style={{color: theme.tertiary, color: theme.primary}}>수행 업무</h2><br/>

            <InfoSection
                title="AI 모델 활용"
                description="로컬에서 실행되는 AI 모델을 활용할 수 있는 인터페이스 서버를 구현했습니다. 제공받은 입력을 각 모델의 입력 형태에 맞도록 조정하고 모델의 출력을 되돌려주는 역할을 합니다. 각 모델에 접근할 수 있는 API는 FastAPI를 통해 구현되었으며, Docker 컨테이너로 실행됩니다."
            />

            <InfoSection
                title="OpenAI API 활용"
                description="OpenAI의 GPT 모델을 사용하여 논리적 오류 찾기 기능을 구현했습니다. 초기엔 당시 화제였던 Deepseek 모델을 사용하여 로컬에서 구현하려 시도했으나, 
                로컬에서 실행 가능한 크기의 모델로는 한계가 있어 계획을 변경하였습니다. 직접 LLM 인터페이스를 구현해 보았다는 점에 의의를 두고 있습니다."
            />

            <InfoSection
                title="스트리밍 구현"
                description="LLM 모델이 보내는 데이터를 스트리밍 방식으로 받아와서 사용자에게 실시간으로 보여주는 기능을 구현했습니다."
            />

            <InfoSection
                title="ASP.NET을 사용한 백엔드 구현"
                description="ASP.NET과 Entity Framework를 사용하여 백엔드를 서버를 구현했습니다. 해당 서버는 프론트와 AI 모델 인터페이스 서버, OpenAI API 서버를 연결하는 역할을 합니다."
            />

           
            <a
                href={'https://github.com/OQOOO/deepCider/tree/master'}
                target='_blank'
                style={{marginTop: "50px", display: "inline-block"}}
            >
                <FaGithub aria-label='GitHub' style={{width: "50px", height: "50px", color: theme.primary}}/>
            </a>



        </div>
    );
}




export default AIWebServiceProject;