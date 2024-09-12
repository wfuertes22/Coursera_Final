import restaurantIMG from "../images/restaurantfood.jpg"
import greekSalad from "../images/greek_salad.jpg"
import bruchetta from "../images/Bruschetta.jpg"
import lemonDessert from "../images/lemon_dessert.jpg"
import deliveryIcon from "../images/delivery_Icon.png"
import profileIMG from "../images/profile.png"

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
                <div className="slider">
                    <section id="productCardList">
                        <article className="productCard">
                            <img className="foodCardIMG" id="greekSaladIMG" src={greekSalad} alt="Greek Salad"></img>
                            <div className="cardDescriptionContainer">
                                <p className="cardTitle">
                                    Greek Salad
                                </p>
                                <p className="price">
                                    $12.99
                                </p>
                                <div className="verticalScroll">
                                    <p className="productDescription">
                                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                                    </p>
                                </div>
                                <a href="../Order_Online">Order a delivery <img className="deliveryIMG" src={deliveryIcon} alt="delovery icon"></img></a>
                            </div>
                        </article>
                        <article className="productCard">
                            <img className="foodCardIMG" id="bruchettaIMG"src={bruchetta} alt="Bruchetta"></img>
                            <div className="cardDescriptionContainer">
                                <p className="cardTitle">
                                    Bruchetta
                                </p>
                                <p className="price">
                                    $ 5.99
                                </p>
                                <div className="verticalScroll">
                                    <p className="productDescription">
                                    Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
                                    </p>
                                </div>
                                <a href="../Order_Online">Order a delivery <img className="deliveryIMG" src={deliveryIcon} alt="delovery icon"></img></a>
                            </div>
                        </article>
                        <article className="productCard">
                            <img className="foodCardIMG" id="lemonDessertIMG" src={lemonDessert} alt="Lemon Dessert"></img>
                            <div className="cardDescriptionContainer">
                                <p className="cardTitle">
                                    Lemon Dessert
                                </p>
                                <p className="price">
                                    $ 5.00
                                </p>
                                <div className="verticalScroll">
                                    <p className="productDescription">
                                        This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                                    </p>
                                </div>
                                <a href="../Order_Online">Order a delivery <img className="deliveryIMG" src={deliveryIcon} alt="delovery icon"></img></a>
                            </div>
                        </article>
                    </section>
                </div>
            </section>
            {/*--------------------------------------------*/}
            <section className="testimonials container">
                <h2 id="testimonialTitle">Testimonials</h2>
                <div className="slider">
                    <section className="testimonialGrid">
                        <article className="testimonialReview">
                            <div className="reviewContainer">
                                <p className="rating">Rating</p>
                                <img className="profileIMG" src={profileIMG} alt="profile icon"></img>
                                <p className="userName">Liam Foster</p>
                                <div className="visibleVerticalScroll">
                                    <q><i>Little Lemon is a true Mediterranean treasure that has quickly become a favorite spot for foodies seeking bold, fresh flavors and a welcoming atmosphere.</i></q>
                                </div>                        </div>
                        </article>
                        <article className="testimonialReview">
                            <div className="reviewContainer">
                                <p className="rating">Rating</p>
                                <img className="profileIMG" src={profileIMG} alt="profile icon"></img>
                                <p className="userName">Emily Carter</p>
                                <div className="visibleVerticalScroll">
                                    <q><i>Little Lemon is a delightful Mediterranean restaurant that strikes a perfect balance between authenticity and comfort. Whether you’re a fan of Mediterranean cuisine or a first-timer, this place has something special to offer.</i></q>
                                </div>                        </div>
                        </article>
                        <article className="testimonialReview">
                            <div className="reviewContainer">
                                <p className="rating">Rating</p>
                                <img className="profileIMG" src={profileIMG} alt="profile icon"></img>
                                <p className="userName">Jacob Martinez</p>
                                <div className="visibleVerticalScroll">
                                    <q><i>If you’re craving a Mediterranean escape, Little Lemon delivers. The combination of fresh, flavorful food, great service, and a relaxed ambiance makes it a standout. It’s a place that I’ll gladly return to, and I can’t wait to explore more of their menu.</i></q>
                                </div>
                            </div>
                        </article>
                        <article className="testimonialReview">
                            <div className="reviewContainer">
                                <p className="rating">Rating</p>
                                <img className="profileIMG" src={profileIMG} alt="profile icon"></img>
                                <p className="userName">Sophia Bennett</p>
                                <div className="visibleVerticalScroll">
                                    <q><i>Little Lemon is a hidden gem for lovers of Mediterranean cuisine! From the moment I stepped inside, I was greeted with a cozy and welcoming atmosphere that instantly transported me to the sun-drenched shores of the Mediterranean.</i></q>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </section>
            {/*--------------------------------------------*/}
            <section className="aboutOwners container">

            </section>
        </main>
    );
}

export default Main;