import { useState } from "react";
import BookingImages from "./BookingImages";
import {Link, Outlet} from "react-router-dom";



const ReservationForm = () =>{

    const [formInputState, setFormInputState ]= useState({
        reservationDate: 'reservationDate',
        numOfDiners: "numOfDiners",
        occasion: "occasion",
        time: "time"
    })

    const handleLayoutChange = (e) => {
        if (e.target.value === "default"){
            setFormInputState('reservationDate')
        }
        else{
            setFormInputState('changedInputBox')
        }
    }

        return(
            <>
                <section className="reservationContainer container">
                    <h2 id="reservationTitle">Reservations</h2>
                    <form>
                        <section className="reservationOptions">
                            <section className="gridBox">
                                <label htmlFor="indoor">Indoor<input type="radio" id="indoor" name="seating"/></label>
                            </section>
                            <section className="gridBox">
                                <label htmlFor="outDoor">Outdoor<input type="radio" id="outDoor" name="seating"/></label>
                            </section>
                            <section className="gridBox">
                                <label htmlFor="reservationDate" id="reservationTextLabel">Date of Reservation</label>
                                <input type="date" className={formInputState.reservationDate} id="reservationDate" onChange={handleLayoutChange}/>
                            </section>
                            <section className="gridBox">
                                <label htmlFor="numOfDiners" id="numOfDinersLabel">Number of Diners</label>
                                <select className={formInputState.numOfDiners} id="numOfDiners" onChange={handleLayoutChange}>
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
                                <select className={formInputState.occasion} id="occasion" onChange={handleLayoutChange}>
                                    <option value="default">Occasion</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Engagement">Engagement</option>
                                    <option value="Aniversary">Aniversary</option>
                                </select>
                            </section>
                            <section className="gridBox">
                                <label htmlFor="time" id="timeLabel">Time</label>
                                <select className={formInputState.time}  id="time" onChange={handleLayoutChange}>
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
                    </form>
                </section>

                <BookingImages />
                {/*pass form data as props to display in the next subroute*/}
                <Link to="user-info" id="goToUserInfoButton" className="container"><button id="nextButton">Next</button></Link>
                <Outlet />
            </>
        );
}

export default ReservationForm;