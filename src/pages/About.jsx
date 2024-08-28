import { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <>
      <div className="bg-light">
        <div className="container pt-5">
          <div className="row h-100 align-items-center pt-5">
            <div className="col-lg-6">
              <h1 className="display-4" style={{ color: "#145889" }}>
                About Us
              </h1>
              <p className="lead text-muted mb-0 fw-bold">
                Green System Solution and Innovation
              </p>
              <p className="text-muted mt-2">
                GSSI Enterprise (Green System Solution and Innovation) is an
                industrial supplier, contractor and subcontractor company that
                aims to provide its customers RELIABLE, HIGH QUALITY and
                COST-EFFECTIVE industrial equipment and services in the field of
                PLUMBING & SANITARY, SEWAGE TREATMENT FACILITY, FIRE DETECTION
                ALARM AND SUPPRESSION, ELECTRICAL and MECHANICAL SYSTEM.{" "}
              </p>
              <p className="text-muted mt-2">
                Established on 2017 as GSSI Enterprise yet the group existed in
                2012 through partnership with one trading company and one
                enterprise company which offer the same products and services to
                customers that demand quality, cost efficient, and consistent
                aftersales services. The two companies facilitated in sourcing
                of industrial equipment, solar products, commercial and
                industrial motors, pumps and among others locally and overseas.
              </p>
              <p className="text-muted mt-2">
                The company also extends its services in design works, cost
                analysis and value engineering that appropriately parallels
                customer's expectation. Armed with the help of design and
                cost-oriented engineering professionals, sales executives and
                well-trained installers and fabricators, the company strives to
                achieve the topmost level of quality supply and services in its
                field.
              </p>
            </div>
            <div className="col-lg-6 d-lg-block">
              {/* <!-- CAROUSEL --> */}
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="false"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <picture>
                      <img
                        src="/assets/img/about/about-main-1.jpg"
                        className="d-block w-100"
                        alt="img"
                        style={{ maxHeight: 700 }}
                      />
                    </picture>
                  </div>
                  <div className="carousel-item">
                    <picture>
                      <img
                        src="/assets/img/about/about-main-2.jpg"
                        className="d-block w-100"
                        alt="img"
                        style={{ maxHeight: 700 }}
                      />
                    </picture>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* <!-- END CAROUSEL --> */}
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white my-5">
        <div className="container">
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="font-weight-light">
                <i className="fa-solid fa-trophy me-2 text-primary"></i>
                Vision
              </h2>
              <p className="font-italic text-muted mb-4">
                A greener environment now and in the coming generations.
              </p>
            </div>
            <div className="col-lg-5 px-5 order-1 order-lg-2">
              <picture>
                <img
                  src="/assets/img/about/vision.jpg"
                  alt="vision"
                  className="img-fluid mb-4 mx-auto mb-lg-0 rounded"
                />
              </picture>
            </div>
          </div>
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-5 px-5">
              <picture>
                <img
                  src="/assets/img/about/mission.jpg"
                  alt="mission"
                  className="img-fluid mb-4 mx-auto mb-lg-0 rounded"
                />
              </picture>
            </div>
            <div className="col-lg-6">
              <h2 className="font-weight-light">
                <i className="fa-solid fa-trophy me-2 text-primary"></i>
                Mission
              </h2>
              <p className="font-italic text-muted mb-4">
                Committed to the development of competent waste-water treatment,
                protect the lives and properties and offer clean energy to
                ordinary people with affordable and reasonable approach that
                results happiness of all stakeholders.
              </p>
            </div>
          </div>
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="font-weight-light">
                <i className="fa-solid fa-trophy me-2 text-primary"></i>
                Core Value
              </h2>
              <p className="font-italic text-muted mb-4">
                Customer first, Teamwork spirit, Embrace the change, Be
                responsible.
              </p>
            </div>
            <div className="col-lg-5 px-5 order-1 order-lg-2">
              <picture>
                <img
                  src="/assets/img/about/value.jpg"
                  alt="core value"
                  className="img-fluid mb-4 mx-auto mb-lg-0 rounded"
                />
              </picture>
            </div>
          </div>
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-5 px-5">
              <picture>
                <img
                  src="/assets/img/about/principle.jpg"
                  alt="principle"
                  className="img-fluid mb-4 mx-auto mb-lg-0 rounded"
                />
              </picture>
            </div>
            <div className="col-lg-6">
              <h2 className="font-weight-light">
                <i className="fa-solid fa-trophy me-2 text-primary"></i>
                Operation Principle
              </h2>
              <p className="font-italic text-muted mb-4">
                We have faith in development, innovation, high efficiency,
                honesty, credibility, and win-win relations.
              </p>
            </div>
          </div>
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="font-weight-light">
                <i className="fa-solid fa-trophy me-2 text-primary"></i>
                Responsibility
              </h2>
              <p className="font-italic text-muted mb-4">
                Make significant contribution to society, create value for
                clients, and bring happiness to people.
              </p>
            </div>
            <div className="col-lg-5 px-5 order-1 order-lg-2">
              <picture>
                <img
                  src="/assets/img/about/responsibility.jpg"
                  alt="responsibility"
                  className="img-fluid mb-4 mx-auto mb-lg-0 rounded"
                />
              </picture>
            </div>
          </div>
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-5 px-5">
              <picture>
                <img
                  src="/assets/img/about/spirit.jpg"
                  alt="spirit"
                  className="img-fluid mb-4 mx-auto mb-lg-0 rounded"
                />
              </picture>
            </div>
            <div className="col-lg-6">
              <h2 className="font-weight-light">
                <i className="fa-solid fa-trophy me-2 text-primary"></i>Our
                Spirit
              </h2>
              <p className="font-italic text-muted mb-4">
                Hard-working, Bravely developing, Highly effective, Be
                brilliant.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 className="display-4 font-weight-light mt-5">Our Team</h2>
              <p className="font-italic text-muted">
                Established on 2017 as GSSI Enterprise yet the group already
                started in 2012 through partnership with one trading company and
                one enterprise company which offer the same products and
                services to customers that demand quality, cost efficient, and
                consistent aftersales services.{" "}
              </p>
            </div>
          </div>

          <div className="row text-center">
            {/* <!-- Team item--> */}
            <div className="col-sm-6 mb-5">
              <div className="bg-white rounded shadow-lg py-5 px-4">
                <img
                  src="/assets/img/about/person-icon.jpg"
                  alt="img"
                  width="100"
                  className="d-inline-block img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">RCR, Jr.</h5>
                <span className="small text-uppercase text-muted">
                  General Manager
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}

            {/* <!-- Team item--> */}
            <div className="3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-lg py-5 px-4">
                <img
                  src="/assets/img/about/person-icon.jpg"
                  alt="img"
                  width="100"
                  className="d-inline-block img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Juvy Taduran</h5>
                <span className="small text-uppercase text-muted">
                  Project & Sales
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}

            {/* <!-- Team item--> */}
            <div className="col-sm-6 mb-5">
              <div className="bg-white rounded shadow-lg py-5 px-4">
                <img
                  src="/assets/img/about/person-icon.jpg"
                  alt="img"
                  width="100"
                  className="d-inline-block img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Stephen Inventor</h5>
                <span className="small text-uppercase text-muted">
                  Marketing & Sales
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}

            {/* <!-- Team item--> */}
            <div className="col-sm-6 mb-5 mx-auto">
              <div className="bg-white rounded shadow-lg py-5 px-4">
                <img
                  src="/assets/img/about/person-icon.jpg"
                  alt="img"
                  width="100"
                  className="d-inline-block img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Winefredo Wee</h5>
                <span className="small text-uppercase text-muted">
                  Project & Application
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
