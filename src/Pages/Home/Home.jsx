
import About from '../../Components/About';
import Skils from '../../Components/Skils';
import Projects from '../../Components/Projects';
import Banner from '../../Components/Banner';
import Contact from '../../Components/Contact';
import { useScrollRefs } from '../ScrollContext';

const Home = () => {
    const { aboutRef, projectsRef, skillsRef, contactRef } = useScrollRefs();

    return (
        <div>
            <Banner />
            <div ref={aboutRef}>
                <About />
            </div>
           <div ref={skillsRef}>
             <Skils />
           </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
           <div ref={contactRef}>
             <Contact />
           </div>
        </div>
    );
};

export default Home;
