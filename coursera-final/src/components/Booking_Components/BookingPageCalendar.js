import BookingOptions from "./BookingOptions";
import BookingImages from "./BookingImages";

const BookingPageCalendar = () =>{
    return(
        <>
            <section className="reservationContainer container">
                <h2 id="reservationTitle">Reservations</h2>
                <BookingOptions />
            </section>
            <BookingImages />
        </>

    );
}

export default BookingPageCalendar;