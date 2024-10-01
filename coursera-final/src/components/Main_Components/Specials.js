import images from "../../images/images";

const Specials = ({specials}) => {
    return(
        <section className="weeksSpecials container">
                <div id="specialsHeader">
                    <h2 id="specialsTitle">This weeks specials</h2>
                    <button id="onlineMenu">Online Menu</button>
                </div>
                <div className="slider">
                    <section id="productCardList">
                        {specials.map((special) => (
                            <article className="productCard" key={special.id}>
                                <img className="foodCardIMG" src={special.cardIMG} alt={special.cardTitle}/>
                                <section className="cardDescriptionContainer">
                                    <p className="cardTitle">
                                        {special.cardTitle}
                                    </p>
                                    <p className="price">
                                        {special.price}
                                    </p>
                                    <div className="verticalScroll">
                                        <p className="productDescription">
                                            {special.description}
                                        </p>
                                    </div>
                                    <a href="../Order_Online">Order a delivery <img className="deliveryIMG" src={images.deliveryIcon} alt="delovery icon"></img></a>
                                </section>
                            </article>
                        ))}
                    </section>
                </div>
            </section>
    );
}

export default Specials;