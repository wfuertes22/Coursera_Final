import images from "../../images/images";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSays from "./CustomersSay";
import Chicago from "./Chicago";
import BookingPageCalendar from "../Booking_Components/BookingPageCalendar";

const Main = () =>{

    const specials = [
        { cardTitle: "Greek Salad", id: "greekSalad", cardIMG: images.greekSalad, price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."},
        { cardTitle: "Bruchetta", id: "bruchetta", cardIMG: images.bruchetta, price: "$ 5.99", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."},
        { cardTitle: "Lemon Dessert", id: "lemonDessert", cardIMG: images.lemonDessert, price: "$ 5.00", description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."},
    ];

    const reviews = [
        {name: "Liam Foster", id: "LiamsReview", review: "Little Lemon is a true Mediterranean treasure that has quickly become a favorite spot for foodies seeking bold, fresh flavors and a welcoming atmosphere."},
        {name: "Emily Carter", id: "EmilysReview", review: "Little Lemon is a delightful Mediterranean restaurant that strikes a perfect balance between authenticity and comfort. Whether you’re a fan of Mediterranean cuisine or a first-timer, this place has something special to offer."},
        {name: "Jacob Martinez", id: "JacobsReview", review: "If you’re craving a Mediterranean escape, Little Lemon delivers. The combination of fresh, flavorful food, great service, and a relaxed ambiance makes it a standout. It’s a place that I’ll gladly return to, and I can’t wait to explore more of their menu."},
        {name: "Sophia Bennett", id: "SophiasReview", review: "Little Lemon is a hidden gem for lovers of Mediterranean cuisine! From the moment I stepped inside, I was greeted with a cozy and welcoming atmosphere that instantly transported me to the sun-drenched shores of the Mediterranean."}

    ];

    return(
        <main>
            <CallToAction />
            {/* -------------------------------------------- */}
            <Specials specials={specials} />
            {/*--------------------------------------------*/}
            <CustomersSays reviews={reviews} />
            {/*--------------------------------------------*/}
            <Chicago />
        </main>
    );
}

export default Main;