import images from "../../images/images";
import {Routes, Link, Route} from "react-router-dom";
import BookingUserInfo from "./BookingUserInfo";

const BookingImages = () =>{

    return(
        <>
            <section className="container" id="imageSection">
                    <img src={images.scenery} alt="outside the restaurant" className="bookingIMG"></img>
                    <img src={images.chef} alt="a chef seasoning a dish"  className="bookingIMG"></img>
                    <img src={images.restaurantIMG} alt="a plate of food"  className="bookingIMG"></img>
                    <Link to="./user-info" id="goToUserInfoButton"><button >Next</button></Link>
            </section>
            <Routes>
                <Route path="./user-info" element={<BookingUserInfo />} />
            </Routes>
        </>
    );
}

export default BookingImages;