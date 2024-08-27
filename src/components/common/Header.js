import React from 'react'
import "../../styles/Header.css"

const Header = () => {
    return (
        <nav
            className="navbar navbar-expand-lg  ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
        >
            <div className="container">
                <div className="header__logo">
                    <a
                        className="footer__logo--link display-block"
                        href="index-2.html"
                    >
                        <img
                            className="footer__logo--img"
                            src="./../assets/wpm-1 1.jpg"
                            alt="logo-img"
                        />
                    </a>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="oi oi-menu" /> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a href="index.html" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="dropdown04"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Shop
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdown04">
                                <a className="dropdown-item" href="shop.html">
                                    Shop
                                </a>
                                <a className="dropdown-item" href="wishlist.html">
                                    Wishlist
                                </a>
                                <a className="dropdown-item" href="product-single.html">
                                    Single Product
                                </a>
                                <a className="dropdown-item" href="cart.html">
                                    Cart
                                </a>
                                <a className="dropdown-item" href="checkout.html">
                                    Checkout
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="about.html" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="blog.html" className="nav-link">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="contact.html" className="nav-link">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item cta cta-colored">
                            <a href="cart.html" className="nav-link">
                                <span className="icon-shopping_cart" />
                                [0]
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header