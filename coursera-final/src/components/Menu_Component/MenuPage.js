import images from "../../images/images";
import MenuList from "./MenuList";
import CallToAction from "../Main_Components/CallToAction";

const MenuPage = () =>{
    const menuItems = [
        { itemName: "Greek Salad", id: "greekSalad", itemIMG: images.greekSalad, price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."},
        { itemName: "Bruchetta", id: "bruchetta", itemIMG: images.bruchetta, price: "$ 5.99", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."},
        { itemName: "Grilled Fish", id:"grilledFish", itemIMG: images.grilledFish, price: "$ 7.99", description:"Perfectly grilled whole fish marinated in olive oil, garlic, and herbs, with crispy skin and tender, flaky meat. Served with a side of roasted vegetables and a squeeze of fresh lemon for a bright finish."},
        { itemName: "Pasta alla Puttanesca", id:"pastaAllaPuttanesca", itemIMG: images.pastaAllaPuttanesca, price:"$14.99", description: "A bold, flavorful dish featuring spaghetti tossed in a tomato sauce with olives, capers, anchovies, garlic, and a touch of chili for spice."},
        { itemName: "Lemon Dessert", id: "lemonDessert", itemIMG: images.lemonDessert, price: "$ 5.00", description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."},
    ];

    return(
        <>
            <CallToAction />
            <section className="menuListContainer container">
                <MenuList menuItems={menuItems} />
            </section>
        </>
    );
}

export default MenuPage;