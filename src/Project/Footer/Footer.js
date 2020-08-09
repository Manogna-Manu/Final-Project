import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="">
            <footer >
                <nav class="navbar navbar-expand-lg navbar-light  py-2 nav-styles1 footer  ">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="ml-auto" href="/">
                                <Nav.Link>
                                    <img
                                        alt=""
                                        src="https://cdn1.iconfinder.com/data/icons/celebration-color-1/64/open-box-surprise-boxing-day-gift-512.png"
                                        width="50"
                                        height="32"
                                        className="d-inline-block align-top"
                                    />{' '}
                                    <b> Surpr!Ze Guru</b></Nav.Link>
                            </Link>
                        </li>

                        <li>
                            <Link><Nav.Link className="btn btn-quaternary" href="#About Us">About Us</Nav.Link></Link>
                        </li>
                        <li><Link><Nav.Link className="btn btn-quaternary" href="#Contact Us">Contact Us</Nav.Link></Link>
                        </li>
                        <li> <Link><Nav.Link className="btn btn-quaternary" href="#Privacy Policy">Privacy Policy</Nav.Link></Link>
                        </li>
                        <li> <Link><Nav.Link className="btn btn-quaternary" href="#SHelp and Support">Help and Support</Nav.Link></Link>

                        </li>

                    </ul>
                    <div class=" ml-auto ">
                        <ul class="navbar-nav">
                            <li class="nav-item">

                            </li>
                            <li class="nav-item ">
                                <Link class="mx-2" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="mx-2" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/linkedin.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="mx-2" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="mx-2" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer;
