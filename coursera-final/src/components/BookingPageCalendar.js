import { useState } from "react";

const BookingPageCalendar = () =>{
    

    // const [occasion, setOccasion] = useState('Occasion');


    // const handleChange = (e) => {

    // }

    return(
        <section className="reservationContainer container">
            <section className="reservationOptions">
                <section className="gridBox">
                    <label htmlFor="reservationDate" id="reservationText">Date of Reservation</label>
                    <input className="inputBox" type="date" id="reservationDate"/>
                </section>
                <section className="gridBox">
                    <label htmlFor="numOfDiners" id="numOfDiners">Number of Diners</label>
                    <select className="inputBox" id="numOfDiners">
                        <option value="default">No. of Diners</option>
                        <option value="1">1 Diner</option>
                        <option value="2">2 Diners</option>
                        <option value="3">3 Diners</option>
                        <option value="4">4 Diners</option>
                        <option value="5">5 Diners</option>
                        <option value="6">6 Diners</option>
                        <option value="7">7 Diners</option>
                        <option value="8">8 Diners</option>
                        <option value="9">9 Diners</option>
                        <option value="10">10 Diners</option>
                    </select>
                </section>
                <section className="gridBox">
                    <label htmlFor="Occasion" id="Occasion">Occasion</label>
                    <select className="inputBox" id="Occasion">
                        <option value="Occasion">Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Aniversary">Aniversary</option>
                    </select>
                </section>
                <section className="gridBox">
                    <label htmlFor="Time" id="time">Time</label>
                    <select className="inputBox">
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                    </select>
                </section>
            </section>
            <button type="submit">Next</button>

        </section>
    );
}

export default BookingPageCalendar;