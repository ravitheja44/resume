import React, { Component } from 'react';
class Header extends Component {
    render () {
        return (
            <header id="home">
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
                    <div className="container">
                    <a className="navbar-brand" href="index.html"><span>R</span>onaldo</a>
                    <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                    </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav nav ml-auto">
                                <li className="nav-item"><a href="/#home-section" className="nav-link"><span>Home</span></a></li>
                                <li className="nav-item"><a href="/#about-section" className="nav-link"><span>About</span></a></li>
                                <li className="nav-item"><a href="/#resume-section" className="nav-link"><span>Resume</span></a></li>
                                <li className="nav-item"><a href="/#services-section" className="nav-link"><span>Services</span></a></li>
                                <li className="nav-item"><a href="/#projects-section" className="nav-link"><span>Projects</span></a></li>
                                <li className="nav-item"><a href="/#blog-section" className="nav-link"><span>My Blog</span></a></li>
                                <li className="nav-item"><a href="/#contact-section" className="nav-link"><span>Contact</span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="hero-wrap js-fullheight">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
          <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
          	<div className="text text-center">
          		<span className="subheading">Hey! I am</span>
		  				<h1>Ronaldo Fredrickson</h1>
			  				<h2>I'm a 
								  <span
								     className="txt-rotate"
								     data-period="2000"
								     data-rotate='[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'></span>
								</h2>
							</div>
            </div>
          </div>
        </div>
      <div className="mouse">
				<a href="/#" className="mouse-icon">
					<div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
				</a>
			</div>
    </section>

            </header>
        );
    }
}

export default Header;