import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaSearchLocation, FaGithub, FaXing } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>                            
                            <h4>Hamburg, Germany</h4>
                        </div>
                    </div>                    
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />b.schroeter79@gmx.de</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>Passion for web development?</h4>
                    <p>Please feel free to contact me at any time.</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <a target="_blank" rel="noreferrer" href="https://github.com/HaudegenHH">
                          <FaGithub size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        </a>
                        <FaXing size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer