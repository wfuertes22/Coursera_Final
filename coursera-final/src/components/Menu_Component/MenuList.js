const MenuList = ({menuItems}) =>{
    return(
        <section id="menuList">
            <h1>Menu</h1>
            <section>
                {menuItems.map((item) => (
                    <article className="itemCard" key={item.id}>
                        <img className="itemCardIMG" src={item.itemIMG} alt={item.itemName} />
                        <section className="itemCardDescription">
                            <p className="itemName">
                                {item.itemName}
                            </p>
                            <p className="itemDescription">
                                {item.description}
                            </p>
                            <p className="itemPrice">
                                {item.price}
                            </p>
                        </section>
                    </article>
                ))}
            </section>
        </section>
    );
}

export default MenuList;