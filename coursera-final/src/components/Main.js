import restaurantIMG from "../images/restaurantfood.jpg"

const Main = () =>{
    return(
        <main>
            <section className="aboutLittleLemon">
                <div id="title">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                </div>
                <div id="description">
                    <p>
                        We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist 
                    </p>
                </div>
                <div id="buttonContainer">
                    <button id="reserveButton">Reserve a Table</button>
                </div>
                <div id="imgContainer">
                    <img src={restaurantIMG} alt="restaurant food" id="restaurantFoodIMG"></img>
                </div>
            </section>
            {/* -------------------------------------------- */}
            <section className="weeksSpecials">

            </section>
            {/*--------------------------------------------*/}
            <section className="testimonials">

            </section>
            {/*--------------------------------------------*/}
            <section className="aboutOwners">

            </section>
        </main>
    );
}

export default Main;