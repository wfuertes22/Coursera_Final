import { useState } from "react";

const BookingPageCalendar = () =>{
    const [reservationDate, setReservationDate ] = useState('reservationDate');
    const [numOfDiners, setNumOfDiners ] = useState('numOfDiners');
    const [occasion, setOccasion ] = useState('occasion');
    const [time, setTime ] = useState('time');

    const handleDateChange = (e) => {
        if (e.target.value === "default"){
            setReservationDate('reservationDate')
        }
        else{
            setReservationDate('changedInputBox')
        }
    }

    const handleNumOfDinersChange = (e) =>{
        if (e.target.value === "default"){
            setNumOfDiners('numOfDiners')
        }
        else{
            setNumOfDiners('changedInputBox')
        }
    }

    const handleOccasionChange = (e) =>{
        if (e.target.value === "default"){
            setOccasion('numOfDiners')
        }
        else{
            setOccasion('changedInputBox')
        }
    }

    const handleTimeChange = (e) =>{
        if (e.target.value === "default"){
            setTime('numOfDiners')
        }
        else{
            setTime('changedInputBox')
        }
    }

    return(
        <section className="reservationContainer container">
            <h2 id="reservationTitle">Reservations</h2>
            <section className="reservationOptions">
                <section className="gridBox">
                    <label htmlFor="indoor">Indoor<input type="radio" id="indoor" name="seating"/></label>
                </section>
                <section className="gridBox">
                    <label htmlFor="outDoor">Outdoor<input type="radio" id="outdoor" name="seating"/></label>
                </section>
                <section className="gridBox">
                    <label htmlFor="reservationDate" id="reservationTextLabel">Date of Reservation</label>
                    <input type="date" className={reservationDate} id="reservationDate" onChange={handleDateChange}/>
                </section>
                <section className="gridBox">
                    <label htmlFor="numOfDiners" id="numOfDinersLabel">Number of Diners</label>
                    <select className={numOfDiners} id="numOfDiners" onChange={handleNumOfDinersChange}>
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
                    <label htmlFor="occasion" id="occasionLabel">Occasion</label>
                    <select className={occasion} id="occasion" onChange={handleOccasionChange}>
                        <option value="default">Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Aniversary">Aniversary</option>
                    </select>
                </section>
                <section className="gridBox">
                    <label htmlFor="time" id="timeLabel">Time</label>
                    <select className={time}  id="time" onChange={handleTimeChange}>
                        <option value="default">Select Time</option>
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