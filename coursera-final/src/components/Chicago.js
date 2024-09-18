import images from "../images/images";

const Chicago = () =>{
    return(
        <section className="aboutOwners container">
                <section id="darkTitle">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p id="descriptionOfOwners">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.                     
                    </p>
                </section>
                <section id="ownersIMG">
                    <img src={images.frontIMG} alt="Mario and Adrian" id="frontIMG"></img>
                    <img src={images.backIMG} alt="Mario and Adrian" id="backIMG"></img>
                </section>
            </section>
    );
}

export default Chicago;