import React from 'react'
import './SkillCardStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>Frontend</h3>
                    <span className='bar-main'></span>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <span className='bar'></span>
                    <p>React</p>
                    <p>Vue</p>
                    <p>Svelte</p>
                    <span className='bar'></span>
                    <p>Next</p>
                    <p>Nuxt</p>
                    <p>NestJS</p>
                    <p>SvelteKit</p>
                </div>
                <div className='card'>
                    <h3>Backend</h3>
                    <span className='bar-main'></span>
                    <p>Java</p>
                    <p>PHP</p>
                    <p>Python</p>
                    <p>C++</p>
                    <span className='bar'></span>                    
                    <p>Laravel</p>
                    <p>Symfony</p>
                    <p>Spring Boot</p>
                    <p>Django</p>
                    <p>Flask</p>
                </div>
                <div className='card'>
                    <h3>Others</h3>
                    <span className='bar-main'></span>                    
                    <p>MySQL</p>
                    <p>Postgres</p>
                    <p>MongoDB</p>
                    <p>Firebase</p>
                    <span className='bar'></span>
                    <p>Eloquent, Doctrine</p>
                    <p>Prisma</p>
                    <span className='bar'></span>
                    <p>Docker</p>
                    <p>Git</p>
                    <p>WebScraping</p>
                    <p>(REST-) APIs</p>

                </div>
            </div>
        </div>
    )
}

export default Pricing
