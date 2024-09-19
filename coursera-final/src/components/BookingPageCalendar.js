const BookingPageCalendar = () =>{
    return(
        <section className="calendar container">
            <label htmlFor="reservationDate" id="reservationText">Date of Reservation</label>
            <input type="datetime-local" id="reservationDate" />
        </section>
    );
}

export default BookingPageCalendar;