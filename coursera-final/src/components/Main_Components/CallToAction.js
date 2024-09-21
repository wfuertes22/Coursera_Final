import images from "../../images/images";

const CallToAction = () => {
    return (
        <section className="aboutLittleLemon container">
                <div id="title">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                </div>
                <p id="description">
                    We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist 
                </p>
                <button id="reserveButton">Reserve a Table</button>
                <img src={images.restaurantIMG} alt="restaurant food" id="restaurantFoodIMG"></img>
            </section>
    );
}

export default CallToAction;