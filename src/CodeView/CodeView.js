import React from "react";
import { Link } from "react-router-dom";
function CodeView() {
  return (
    <div>
      <div class="wrapper">
        <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
          <div class="container container">
            <a class="navbar-brand" href="#">
              ShortKode
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto navbar-right">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#main">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#features">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#services">
                    Services
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#reviews">
                    Reviews
                  </a>
                </li>
             
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#pricing">
                    Pricing
                  </a>
                </li>
             */}
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#buy">
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div id="main" class="main">
          <div class="hero">
            <div class="container">
              <div class="row align-center">
                <div class="col-md-12 col-lg-5">
                  <div class="hero-content">
                    <h5 class="d-none d-sm-block"> </h5>
                    <h2>Get Instant Access to Teachers and Schools near you</h2>
                    <p>
                      Why wait 2 months+ to hire that next teacher or to get
                      hired by a school of your choice. Click on get started,
                      and be connected in 14 days!
                    </p>
                    {/* <div class="form">
                      <form
                        id="chimp-form"
                        class="subscribe-form"
                        action="assets/php/subscribe.php"
                        method="post"
                        accept-charset="UTF-8"
                        enctype="application/x-www-form-urlencoded"
                        autocomplete="off"
                        novalidate
                      >
                        <input
                          class="mail"
                          id="chimp-email"
                          type="email"
                          name="email"
                          placeholder="Type your email address"
                          autocomplete="off"
                        />
                        <input
                          class="submit-button"
                          type="submit"
                          value="Get started"
                        />
                      </form>
                      <div id="response"></div>
                    </div>
                    <div class="form-note">
                      <p>14-day free trial and no credit card required.</p>
                    </div> */}
                    <Link to="/start" style={{ textDecoration: "none" }}>
                      <a href="" class="btn btn-action">
                        <span>Get Started</span>
                      </a>
                    </Link>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 offset-lg-1">
                  <img class="img-fluid" src="assets/images/1.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>

          <div id="features" class="features">
            <div class="container-m">
              <div class="row text-center">
                <div class="col-md-12">
                  <div class="features-intro">
                    <h2>Here at ShortKode, Teachers and Schools come first.</h2>
                    <p>
                      Let's connect you with our network of Teachers and Schools
                      in 5+ Nigerian&#x1F1F3;&#x1F1EC; states, who are looking
                      to find jobs and hire teachers respectively.{" "}
                    </p>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                  <div class="feature-list">
                    <div class="card-icon">
                      <div class="card-img">
                        <img
                          src="assets/icons/search.png"
                          width="60"
                          alt="Feature"
                        />
                      </div>
                    </div>
                    <div class="card-text">
                      <h3>Hire Teachers</h3>
                      <p>
                        Let's help you pick from our pool of verified, highly
                        qualified, ready-to-work teachers to fill that teaching
                        role.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-lg-4">
                  <div class="feature-list">
                    <div class="card-icon">
                      <div class="card-img">
                        <img
                          src="assets/icons/job.png"
                          width="60"
                          alt="Feature"
                        />
                      </div>
                    </div>
                    <div class="card-text">
                      <h3>Get Hired</h3>
                      <p>
                        Are you a qualified teacher, passionate about imparting
                        knowledge? Schools within our network want to hire you.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                  <div class="feature-list">
                    <div class="card-icon">
                      <div class="card-img">
                        <img
                          src="assets/icons/trainer.png"
                          width="60"
                          alt="Feature"
                        />
                      </div>
                    </div>
                    <div class="card-text">
                      <h3>Train-the-Trainer</h3>
                      <p>
                        Are you a school administrator? Teachers in your school
                        should upskill periodically. Our training consultants
                        are here to help.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div class="col-sm-6 col-lg-4">
                  <div class="feature-list">
                    <div class="card-icon">
                      <div class="card-img">
                        <img
                          src="assets/icons/p4.png"
                          width="60"
                          alt="Feature"
                        />
                      </div>
                    </div>
                    <div class="card-text">
                      <h3>User Friendly</h3>
                      <p>
                        Deliver the best stories and ideas on the topics you
                        care about most straight to you.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                  <div class="feature-list">
                    <div class="card-icon">
                      <div class="card-img">
                        <img
                          src="assets/icons/p5.png"
                          width="60"
                          alt="Feature"
                        />
                      </div>
                    </div>
                    <div class="card-text">
                      <h3> AI Algorithms</h3>
                      <p>
                        Deliver the best stories and ideas on the topics you
                        care about most straight to you.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* 
                <div class="col-sm-6 col-lg-4">
                  <div class="feature-list">
                    <div class="card-icon">
                      <div class="card-img">
                        <img
                          src="assets/icons/p6.png"
                          width="60"
                          alt="Feature"
                        />
                      </div>
                    </div>
                    <div class="card-text">
                      <h3>Built-in Camera</h3>
                      <p>
                        Deliver the best stories and ideas on the topics you
                        care about most straight to you.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div id="services" class="ar-ft-single">
            <div class="container-m">
              <div class="ar-feature">
                <div class="ar-list">
                  <ul>
                    <li>
                      <div class="ar-icon">
                        <img
                          src="assets/icons/community.png"
                          width="40"
                          alt="Icon"
                        />
                      </div>
                      <div class="ar-text">
                        <h3>Teacher Community</h3>
                        <p>Fostering collaboration and development.</p>
                      </div>
                    </li>
                    <li>
                      <div class="ar-icon">
                        <img
                          src="assets/icons/opportunities.png"
                          width="40"
                          alt="Icon"
                        />
                      </div>
                      <div class="ar-text">
                        <h3>Trainings</h3>
                        <p>Unlimited personal development materials.</p>
                      </div>
                    </li>
                    <li>
                      <div class="ar-icon">
                        <img
                          src="assets/icons/training.png"
                          width="40"
                          alt="Icon"
                        />
                      </div>
                      <div class="ar-text">
                        <h3>Opportunities</h3>
                        <p>Jobs, events, workshops and many more.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="ar-image">
                  <img
                    class="ar-img img-fluid"
                    src="assets/images/2.png"
                    width="420"
                    alt="Hero 2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex-split">
            <div class="f-left">
              <div class="left-content">
                <h2>
                  <span>We</span> do the hardwork for school admins.
                </h2>
                <p>
                  By using our system, we take the hardwork off you; helping you
                  find the most qualified teacher, within your location, for
                  that open role.
                </p>
                <a
                  href="https://ju6cpfcorag.typeform.com/to/irVKJHSN"
                  class="btn btn-action"
                >
                  <span>Hire Teachers</span>
                </a>
              </div>
            </div>
            <div class="f-right">
              <div class="ar-image">
                <img
                  class="ar-img img-fluid"
                  src="assets/images/3 (1).png"
                  alt="Hero 3"
                />
              </div>
              <div class="video-icon hidden-xs text-center">
                {/* <a
                  class="popup"
                  href="https://www.youtube.com/watch?v=6NC_ODHu5jg"
                >
                  <i class="ion-ios-play"></i>
                </a> */}
              </div>
            </div>
          </div>

          {/* <!-- Counter Section --> */}
          <div class="yd-stats">
            <div class="container-s">
              <div class="row text-center">
                <div class="col-sm-12">
                  <div class="intro">
                    <h4>OUR NUMBERS</h4>
                    <h2>Here's a measure of the impact of the work we do</h2>
                  </div>
                </div>
                <div class="col-6 col-sm-3">
                  <div class="counter-up">
                    <div class="counter-icon">
                      <img src="assets/icons/schools.png" alt="Icon" />
                    </div>
                    <h3>
                      <span class="counter">50</span>
                    </h3>
                    <div class="counter-text">
                      <h2>Schools</h2>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-3">
                  <div class="counter-up">
                    <div class="counter-icon">
                      <img src="assets/icons/teachers.png" alt="Icon" />
                    </div>
                    <h3>
                      <span class="counter">250</span>
                    </h3>
                    <div class="counter-text">
                      <h2>Teachers</h2>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-3">
                  <div class="counter-up">
                    <div class="counter-icon">
                      <img src="assets/icons/i3.png" alt="Icon" />
                    </div>
                    <h3>
                      <span class="counter">128</span>
                    </h3>
                    <div class="counter-text">
                      <h2>Requests Processed</h2>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-3">
                  <div class="counter-up">
                    <div class="counter-icon">
                      <img src="assets/icons/i6.png" alt="Icon" />
                    </div>
                    <h3>
                      <span class="counter">75</span>
                    </h3>
                    <div class="counter-text">
                      <h2>Completed Matches</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div id="reviews" class="yd-reviews"> */}
          {/* <div class="container-s">
              <div class="row text-center">
                <div class="col-sm-12 col-lg-8 offset-lg-2">
                  <div class="intro">
                    <h1>Served our best for the awesome clients</h1>
                    <p>
                      We have very fair pricing policy that would benefit you
                      and us at the same time. Get the free plan &amp; if you
                      need more - pay.
                    </p>
                  </div>
                </div>

                <div class="col-sm-12 col-lg-6 offset-lg-3 text-center">
                  <div class="review-cards owl-carousel owl-theme">
                    <div class="card-single">
                      <div class="review-text">
                        <h1>
                          "Team hangouts and instant text messaging right from
                          the main dashboard. Deliver the best stories and
                          ideas. Get the free plan & if you need more - pay."
                        </h1>
                      </div>
                      <div class="review-attribution">
                        <div class="review-img">
                          <img
                            class="img-fluid rounded-circle"
                            src="assets/icons/review-1.png"
                            alt="Review"
                          />
                        </div>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-ios-star-half"></i>
                        <h2> Albert Rossi</h2>
                        <h6>Stack Developer</h6>
                        <a href="#">Dropboxes Inc</a>
                      </div>
                    </div>
                    <div class="card-single">
                      <div class="review-text">
                        <h1>
                          "We have very fair pricing policy that would benefit
                          you and us at the same time. Choose what price you're
                          willing to pay."
                        </h1>
                      </div>
                      <div class="review-attribution">
                        <div class="review-img">
                          <img
                            class="img-fluid rounded-circle"
                            src="assets/icons/review-2.png"
                            alt="Review"
                          />
                        </div>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-ios-star-half"></i>
                        <h2> Melissa Vanbergh</h2>
                        <h6>Vice President</h6>
                        <a href="#">Vestor Corp</a>
                      </div>
                    </div>
                    <div class="card-single">
                      <div class="review-text">
                        <h1>
                          "Team hangouts and instant text messaging right from
                          the main dashboard. Deliver the best stories and
                          ideas. Get the free plan & if you need more - pay."
                        </h1>
                      </div>
                      <div class="review-attribution">
                        <div class="review-img">
                          <img
                            class="img-fluid rounded-circle"
                            src="assets/icons/review-3.png"
                            alt="Review"
                          />
                        </div>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-star"></i>
                        <i class="ion ion-star"></i>
                        <h2> Joshua Peterson</h2>
                        <h6>Product Developer</h6>
                        <a href="#">Betabet Inc</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          <div>
            {/* <div id="pricing" class="pricing-section text-center">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-8 offset-sm-2">
                      <div class="pricing-intro">
                        <h1>Our Pricing Plans.</h1>
                        <p>
                          Our plans are designed to meet the requirements of
                          both beginners <br class="hidden-xs" /> and players.
                          Get the right plan that suits you.
                        </p>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="table-left">
                            <h3>Limited Freemium</h3>
                            <p>Free limited features</p>
                            <div class="pricing-details">
                              <span>Free</span>
                            </div>
                            <button
                              class="btn btn-primary btn-action"
                              type="button"
                            >
                              Download
                            </button>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="table-right">
                            <h3>Subscription</h3>
                            <p>Unlimited Lifetime</p>

                            <div class="pricing-details">
                              <span>$99.99</span>
                            </div>
                            <button
                              class="btn btn-primary btn-action btn-white"
                              type="button"
                            >
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </div>
                      <p class="refund-txt">
                        * Refund requests can be placed with in 7 days of the
                        purchase
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

            <div id="buy" class="cta-sm">
              <div class="container-m text-center">
                <div class="cta-content">
                  <h4>WHAT ARE YOU WAITING FOR?</h4>
                  <h1>
                    Let's help you match with that school, teacher, or training
                    consultant.
                  </h1>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/start"
                  >
                    <a class="btn-action" to="/start">
                      Get Started now
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* <!-- ShortKode Footer Section --> */}
            <div class="footer-sm">
              <div class="container-m">
                <div class="row">
                  <div class="col-md-4">
                    <h6>&copy; 2021 All Rights Reserved</h6>
                    <a class="footer-logo" href="#">
                      &copy; 2021 All Rights Reserved
                    </a>
                  </div>
                  <div class="col-md-4">
                    <h6>hi@shortkode.com.ng | +234 810 361 5877</h6>
                  </div>
                  <div class="col-md-4">
                    <ul>
                      <li>
                        <a href="https://web.facebook.com/ShortKode-104043918027794/">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/short_kode">Twitter</a>
                      </li>
                      <li>
                        <a href="#">Linkedin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Scroll To Top --> */}
          <div id="back-top" class="bk-top">
            <div class="bk-top-txt">
              <a class="back-to-top js-scroll-trigger" href="#main">
                Up
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Jquery and Js Plugins --> */}
    </div>

    // </div>
  );
}

export default CodeView;
