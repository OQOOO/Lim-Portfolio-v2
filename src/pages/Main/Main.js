import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement, Certifications } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            {/* <About /> */}
            <Skills />
            <Education />       
            <Certifications />
            <Projects />
            <Achievement /> {/* Experience로 사용됨 */}
            {/* <Blog /> */}
            <Contacts />
            {/* <Footer /> */}
        </div>
    )
}

export default Main
