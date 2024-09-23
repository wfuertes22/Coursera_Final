import images from "../../images/images";

const BookingImages = () =>{
    return(
        <section className="container" id="imageSection">
                <img src={images.scenery} alt="outside the restaurant" className="bookingIMG"></img>
                <img src={images.chef} alt="a chef seasoning a dish"  className="bookingIMG"></img>
                <img src={images.restaurantIMG} alt="a plate of food"  className="bookingIMG"></img>
                <button type="submit" id="goToUserInfoButton">Next</button>
        </section>
    );
}

export default BookingImages;