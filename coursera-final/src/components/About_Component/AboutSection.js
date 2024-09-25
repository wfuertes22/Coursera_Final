import images from "../../images/images";
const AboutSection = () =>{
    return(
        <>
            <section className="aboutSection container">
                <section id="imageBackground">
                    <h1 id="littleLemonSlogan">A Garden of Mediterranean Delights.</h1>
                </section>
            </section>
            <section className="visionSection container">
                <article>
                    <h1 className="visionTitle">Our Vision</h1>
                    <p id="visionText">Our vision is to bring the vibrant flavors, warmth, and spirit of Mediterranean culture to our community, creating an authentic dining experience where every guest feels transported to the sun-soaked coasts of the Mediterranean. We envision a space where fresh, healthy ingredients and traditional recipes come together in harmony, fostering a sense of connection, joy, and celebration with every meal.</p>
                </article>
                <img className="mediterraneanFood"src={images.bruchetta}/>
            </section>
            <section className="ownersHeadshot container">
                <h1 className="ownerTitles">The Owners</h1>
                <img src={images.marioAdrianA} className="headshot" id="marioAdrianA" alt="mario and adrian headshot"/>
                <img src={images.marioAdrianB} className="headshot" id="marioAdrianB" alt="mario and adrian headshot"/>
            </section>
        </>
    );
}

export default AboutSection;