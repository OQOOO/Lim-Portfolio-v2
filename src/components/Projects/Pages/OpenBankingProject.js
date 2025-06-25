import react from 'react';
import { useContext } from 'react';

import { ThemeContext } from '../../../contexts/ThemeContext';

import openBankingImage from '../../../assets/gif/op1.gif';
import InfoSection from "./InfoSection";

import { FaGithub } from 'react-icons/fa';

/*
 * 
 * <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
   <h4 style={{color: theme.tertiary}}>{course}</h4>
   <h5 style={{color: theme.tertiary80}}>{institution}</h5>
 */

function OpenBankingProject() {
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
            <h1 style={{color: theme.primary}}>오픈뱅킹</h1> 
            <p style={{color: theme.tertiary80, fontWeight: "bold"}}>
                스프링을 사용한 오픈뱅킹 구현 프로젝트
            </p>

            <p style={{color: theme.tertiary80, fontWeight: "bold"}}>
                진행 기간: 2023.06 ~ 2023.07
            </p>

            <br/>

            <img src={openBankingImage} style={{ width: "100%", maxWidth: "500px", minWidth: "300px", borderRadius: "20px" }}/>
            <p style={{fontSize: "0.9rem", color: "rgb(120, 120, 120)" }}>(순서대로 API 로그인, 송금기록, 페이징 기능, 계좌송금, 송금기록 확인입니다.)</p>

            <p style={{ whiteSpace: 'pre-line', color: theme.tertiary80, fontSize: "1.1rem" }}>
                {`
                여러 금융 서비스(모의 은행)의 계좌를 조회하고 자금을 이체할 수 있는 오픈뱅킹 서비스입니다.
                타 서버로 구현된 모의 은행들의 계좌를 조회, 관리하고, 송금을 진행할 수 있으며, 모의 자금의 송금 과정을 트랜잭션으로 관리합니다.

                기본적으로 팀 프로젝트지만 팀원 각자가 구현한 모의 은행을 연결하는 식으로 진행되어 개인 프로젝트의 성격도 강한 형태의 프로젝트로, 저는 해당 프로젝트에서 주도적으로 설계와 구현을 진행하고 팀원들에게 공유하는 역할을 맡았습니다.

                `}
            </p>

            

            <h2 style={{color: theme.tertiary, color: theme.primary}}>사용 기술</h2>
            <p style={{color: theme.tertiary80, fontWeight: "bold"}}>
                Spring, Mybatis, JSP, Oracle, HTML5, CSS3, JavaScript
            </p>
            

            <br/><br/>

            <h2 style={{color: theme.tertiary, color: theme.primary}}>주요 기능</h2><br/>

            <InfoSection
                title="모의 현금 송금"
                description="여러 모의 은행의 계좌를 조회하고, 자금을 이체할 수 있는 기능을 제공합니다. 송금시 양측에 송금 내역이 남으며, 트랜잭션을 통해 송금 과정이 안전하게 관리됩니다."
            />
            <InfoSection
                title="사용자 계정 및 계좌 관리"
                description="사용자가 계정을 생성하고 여러 모의 은행의 계좌를 등록하여 관리할 수 있습니다."
            />
            <InfoSection
                title="카카오 API를 활용한 로그인"
                description="카카오 계정 연동을 통해 사용자가 카카오 계정으로 로그인할 수 있습니다."
            />
            <InfoSection
                title="네이버 API를 활용한 뉴스 조회"
                description="네이버의 뉴스 API를 활용하여 금융 관련 뉴스를 조회할 수 있습니다."
            />

            <br/><br/>

            <h2 style={{color: theme.tertiary, color: theme.primary}}>수행 업무</h2><br/>

            <InfoSection
                title="네이버 API를 활용한 뉴스 조회"
                description="네이버의 뉴스 API를 활용하여 금융 관련 뉴스를 조회할 수 있습니다."
                color={theme.tertiary80}
            />

            <InfoSection
                title="Spring을 활용한 백엔드 구현"
                description="Spring 프레임워크를 사용하여 RESTful API를 구현하고, Mybatis를 통해 데이터베이스와의 연동을 처리했습니다."
                color={theme.tertiary80}
            />

            <InfoSection
                title="데이터 전송간 트랜잭션 구현"
                description="송금시 해당 과정에 관여하는 데이터베이스 연결을 별도로 관리하여 해당 기능이 모두 정상 처리되면 커밋, 오류 발생시 롤백하는 방식으로 트랜잭션을 구현했습니다."
                color={theme.tertiary80}
            />

            <InfoSection
                title="OPEN API 활용"
                description="카카오, 네이버 API를 사용하여 카카오 계정 연동, 네이버 뉴스 가져오기 기능을 구현했습니다."
                color={theme.tertiary80}
            />

            <InfoSection
                title="CRUD 구현"
                description="은행 송금기록, 게시판의 CRUD 기능을 구현했습니다."
                color={theme.tertiary80}
            />

            <InfoSection
                title="데이터 전송간 트랜잭션 구현"
                description="송금시 해당 과정에 관여하는 데이터베이스 연결을 별도로 관리하여 해당 기능이 모두 정상 처리되면 커밋, 오류 발생시 롤백하는 방식으로 트랜잭션을 구현했습니다."
                color={theme.tertiary80}
            />

            <InfoSection
                title="숫자값 한글 단위 표기 구현"
                description="각종 숫자값 입력시 한글 단위로 보조 표기하는 기능을 구현했습니다. (1234억 567만 89 원)"
                color={theme.tertiary80}
            />

            <InfoSection
                title="JSP를 활용한 프론트엔드 구현"
                description="JSP와 HTML5, CSS3, JavaScript를 사용하여 사용자 인터페이스를 구현했습니다."
                color={theme.tertiary80}
            />

            <InfoSection
                title="페이징 기능 구현"
                description="페이지의 정보를 담고 있는 객체를 백엔드 단에서 리스트로 처리하여 구현했습니다."
                color={theme.tertiary80}
            />
            

            <a
                href={'https://github.com/OQOOO/OpenBankingProject'}
                target='_blank'
                style={{marginTop: "50px", display: "inline-block"}}
            >
                <FaGithub aria-label='GitHub' style={{width: "50px", height: "50px", color: theme.primary}}/>
            </a>

        </div>
    );
}




export default OpenBankingProject;