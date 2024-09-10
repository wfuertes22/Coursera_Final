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
                <section className="testimonialGrid">
                    <article className="testimonialReview">
                        <div className="reviewContainer">
                            <p className="rating">Rating</p>
                            <img className="profileIMG" src={profileIMG} alt="profile icon"></img>
                            <p className="userName">Name</p>
                            <blockquote>Review Text</blockquote>
                        </div>
                    </article>
                    <article className="testimonialReview">
                        <div className="reviewContainer">
                            <p className="rating">Rating</p>
                            <img className="profileIMG" src={profileIMG} alt="profile icon"></img>
                            <p className="userName">Name</p>
                            <blockquote>Review Text</blockquote>
                        </div>
                    </article>
                    <article className="testimonialReview">
                        <div className="reviewContainer">
                            <p className="rating">Rating</p>
                            <img className="profileIMG" src={profileIMG} alt="profile icon"></img>
                            <p className="userName">Name</p>
                            <blockquote>Review Text</blockquote>
                        </div>
                    </article>
                    <article className="testimonialReview">
                        <div className="reviewContainer">
                            <p className="rating">Rating</p>
                            <img className="profileIMG" src={profileIMG} alt="profile icon"></img>
                            <p className="userName">Name</p>
                            <blockquote>Review TextReview TextReview TextReview TextReview TextReview TextReview TextReview TextReview Text</blockquote>
                        </div>
                    </article>
                </section>
            </section>
            {/*--------------------------------------------*/}
            <section className="aboutOwners container">

            </section>
        </main>
    );
}

export default Main;