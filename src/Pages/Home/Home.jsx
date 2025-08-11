import React, { useRef } from 'react';
import About from '../../Components/About';
import Skils from '../../Components/Skils';
import Projects from '../../Components/Projects';
import Banner from '../../Components/Banner';
import Contact from '../../Components/Contact';


const Home = () => {
    const projectsRef = useRef(null);
    return (
        <div>
            <Banner projectsRef={projectsRef} />
            <About />
            <Skils />
            <div ref={projectsRef}>
                <Projects />
            </div>
            <Contact />
        </div>
    );
};

export default Home;