import React from 'react';

// COMPONENTS
import animatedGraph from '../../images/page_break.png'
import About from './About'
import Steps from './Steps'
import Team from './Team'
import Contact from './Contact'
class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                </div>
                <div id="description_div">
                    <p id="description">
                        Bringing the methods, metrics, and power of A/B testing from the digital world of e-commerce into the physical world of brick & mortar retail displays.</p>
                </div>
                <About/>
                <Steps />
                <Contact />
                <div><img id="page_break" src={animatedGraph} alt="animated graph" /></div>
                <Team />
            </div>
        );
    }
}

export default Home;
