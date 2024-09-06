import restaurantIMG from "../images/restaurantfood.jpg"
import greekSalad from "../images/greek_salad.jpg"
import bruchetta from "../images/Bruschetta.jpg"
import lemonDessert from "../images/lemon_dessert.jpg"

const Main = () =>{
    return(
        <main>
            <section className="aboutLittleLemon container">
                <div id="title">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                </div>
                <p id="description">
                    We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist 
                </p>
                <button id="reserveButton">Reserve a Table</button>
                <img src={restaurantIMG} alt="restaurant food" id="restaurantFoodIMG"></img>
            </section>
            {/* -------------------------------------------- */}
            <section className="weeksSpecials container">
                <div id="specialsHeader">
                    <h2 id="specialsTitle">This weeks specials</h2>
                    <button id="onlineMenu">Online Menu</button>
                </div>
                <section id="productCardList">
                    <article className="productCard">
                        <img className="foodCardIMG" id="greekSaladIMG" src={greekSalad} alt="Greek Salad"></img>
                    </article>
                    <article className="productCard">
                        <img className="foodCardIMG" id="bruchettaIMG"src={bruchetta} alt="Bruchetta"></img>
                    </article>
                    <article className="productCard">
                    <img className="foodCardIMG" id="lemonDessertIMG" src={lemonDessert} alt="Lemon Dessert"></img>
                    </article>
                </section>
            </section>
            {/*--------------------------------------------*/}
            <section className="testimonials">
                <div className="container">
                </div>
            </section>
            {/*--------------------------------------------*/}
            <section className="aboutOwners">
                <div className="container">
                </div>
            </section>
        </main>
    );
}

export default Main;