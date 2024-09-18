import LogoTitle from '../../Assets/images/logo-s (2).png'
import { Link } from 'react-router-dom'
import './index.scss'; 
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react';
import Logo from './Logo'
import Loader from 'react-loaders';
const Home = () => {
    const  [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'n', 'a', 't', 'h', 'a', 'n', ',']
    const jobArray = ['F', 'u', 't', 'u', 'r', 'e', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                 <br />
                 <span className={`${letterClass} _13`}>I</span>
                 <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/> 
                <br /> 
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/> 
                </h1>
                <h2>Frontend/Backend Developer / Current Student / Future Software Engineer </h2>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home
