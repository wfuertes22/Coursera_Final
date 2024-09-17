import images from "../images/images";
import { Routes, Route, Link } from 'react-router-dom';

const Main = () =>{

    const specials = [
        { cardTitle: "Greek Salad", id: "greekSalad", cardIMG: images.greekSalad, price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."},
        { cardTitle: "Bruchetta", id: "bruchetta", cardIMG: images.bruchetta, price: "$ 5.99", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."},
        { cardTitle: "Lemon Dessert", id: "lemonDessert", cardIMG: images.lemonDessert, price: "$ 5.00", description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."},
    ];

    const reviews = [
        {name: "Liam Foster", review: "Little Lemon is a true Mediterranean treasure that has quickly become a favorite spot for foodies seeking bold, fresh flavors and a welcoming atmosphere."},
        {name: "Emily Carter", review: "Little Lemon is a delightful Mediterranean restaurant that strikes a perfect balance between authenticity and comfort. Whether you’re a fan of Mediterranean cuisine or a first-timer, this place has something special to offer."},
        {name: "Jacob Martinez", review: "If you’re craving a Mediterranean escape, Little Lemon delivers. The combination of fresh, flavorful food, great service, and a relaxed ambiance makes it a standout. It’s a place that I’ll gladly return to, and I can’t wait to explore more of their menu."},
        {name: "Sophia Bennett", review: "Little Lemon is a hidden gem for lovers of Mediterranean cuisine! From the moment I stepped inside, I was greeted with a cozy and welcoming atmosphere that instantly transported me to the sun-drenched shores of the Mediterranean."}

    ];

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
                <img src={images.restaurantIMG} alt="restaurant food" id="restaurantFoodIMG"></img>
            </section>
            {/* -------------------------------------------- */}
            <section className="weeksSpecials container">
                <div id="specialsHeader">
                    <h2 id="specialsTitle">This weeks specials</h2>
                    <button id="onlineMenu">Online Menu</button>
                </div>
                <div className="slider">
                    <section id="productCardList">
                        {specials.map((special) => (
                            <article className="productCard">
                                <img className="foodCardIMG" src={special.cardIMG} alt={special.cardTitle}/>
                                <div className="cardDescriptionContainer">
                                    <p className="cardTitle">
                                        {special.cardTitle}
                                    </p>
                                    <p className="price">
                                        {special.price}
                                    </p>
                                    <div className="verticalScroll">
                                        <p className="productDescription">
                                            {special.description}
                                        </p>
                                    </div>
                                    <a href="../Order_Online">Order a delivery <img className="deliveryIMG" src={images.deliveryIcon} alt="delovery icon"></img></a>
                                </div>
                            </article>
                        ))};
                    </section>
                </div>
            </section>
            {/*--------------------------------------------*/}
            <section className="testimonials container">
                <h2 id="testimonialTitle">Testimonials</h2>
                <div className="slider">
                    <section className="testimonialGrid">
                        {reviews.map((review) => (
                            <article className="testimonialReview">
                                <div className="reviewContainer">
                                    <p className="rating">Rating</p>
                                    <img className="profileIMG" src={images.profileIMG} alt="profile icon"></img>
                                    <p className="userName">{review.name}</p>
                                    <div className="visibleVerticalScroll">
                                        <q><i>{review.review}</i></q>
                                    </div>
                                </div>
                            </article>
                        ))};
                    </section>
                </div>
            </section>
            {/*--------------------------------------------*/}
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
        </main>
    );
}

export default Main;