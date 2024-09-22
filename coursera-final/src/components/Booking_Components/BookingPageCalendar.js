import BookingOptions from "./BookingOptions";


const BookingPageCalendar = () =>{
    return(
        <>
            <section className="reservationContainer container">
                <h2 id="reservationTitle">Reservations</h2>
                <BookingOptions />
            </section>
        </>

    );
}

export default BookingPageCalendar;