import images from "../images/images"

const CustomersSays = ({reviews}) =>{
    return(
        <section className="testimonials container">
                <h2 id="testimonialTitle">Testimonials</h2>
                <div className="slider">
                    <section className="testimonialGrid">
                        {reviews.map((review) => (
                            <article className="testimonialReview" key={review.id}>
                                <div className="reviewContainer">
                                    <p className="rating">Rating</p>
                                    <img className="profileIMG" src={images.profileIMG} alt="profile icon"></img>
                                    <p className="userName">{review.name}</p>
                                    <div className="visibleVerticalScroll">
                                        <q><i>{review.review}</i></q>
                                </div>
                            </div>
                        </article>
                    ))};
                </section>
            </div>
        </section>
    );
}

export default CustomersSays;