import meetingImg from "/assets/img/home/meeting.jpg";
import solarPanelImg from "/assets/img/home/solar-panel.jpg";
import stpImage from "/assets/img/home/sewage-treatment-plant.jpg";
import whatWeDo1Img from "/assets/img/home/what-we-do-1.jpg";
import whatWeDo2Img from "/assets/img/home/what-we-do-2.jpg";

function HomePage() {
  return (
    <>
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
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <picture>
              <img
                src="/assets/img/home/meeting.jpg"
                className="d-block w-100 darker-image"
                alt="img"
                style={{ maxHeight: 700 }}
              />
            </picture>
            <div className="carousel-caption d-md-block">
              <h1>Green System Solution and Innovation</h1>
              <p>Green System Solution and Innovation</p>
            </div>
          </div>
          <div className="carousel-item">
            <picture>
              <img
                src="/assets/img/home/solar-panel.jpg"
                className="d-block w-100 darker-image"
                alt="img"
                style={{ maxHeight: 700 }}
              />
            </picture>
            <div className="carousel-caption d-md-block">
              <h1>Green System Solution and Innovation</h1>
              <p>Green System Solution and Innovation</p>
            </div>
          </div>
          <div className="carousel-item">
            <picture>
              <img
                src="/assets/img/home/sewage-treatment-plant.jpg"
                className="d-block w-100 darker-image"
                alt="img"
                style={{ maxHeight: 700 }}
              />
            </picture>
            <div className="carousel-caption d-md-block">
              <h1>Green System Solution and Innovation</h1>
              <p>Green System Solution and Innovation</p>
            </div>
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

      {/* <!-- WHAT WE DO --> */}
      <section className="container my-5">
        <h2 className="text-center mx-auto" style={{ color: "#145889" }}>
          What We Do
        </h2>
        <hr className="mx-auto h-hr" />
        <div className="what-we-do-grid">
          <div className="what-we-do-box">
            <img
              src="/assets/img/home/what-we-do-1.jpg"
              alt="img"
              className="w-100 rounded mx-auto mb-2"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#what-we-do-1-modal"
            />
          </div>
          <div className=" what-we-do-box d-flex align-items-center mb-2">
            <p>
              <strong>GSSI ENTERPRISE</strong> is committed to helping the small
              company that needs solution in wastewater management, sewage
              treatment plant and potable water facility by combining both
              conventional and advanced technologies. Our system is simple yet
              very effective in treating the wastewater through the application
              of CASPAM (Conventional Activated Sludge Process Anaerobic
              Microbes). Using this method means the World that we live in is
              safe so that our children and the next generation will still
              experience the beauty of the Earth.
            </p>
          </div>
          <div className="what-we-do-box d-flex align-items-center mt-2">
            <p>
              <strong>Our</strong> potable water is using a revolutionary
              filtration system which is called Nucleation Assisted
              Crystallization (NAC). It is a Catalytic process that converts Ca
              and Mg into harmless micro-crystals. It provides the best quality
              healthy water without the addition of Sodium or Phosphates. With
              this technology, we make our environment Clean & Green.
            </p>
          </div>
          <div className="what-we-do-box">
            <img
              src="/assets/img/home/what-we-do-2.jpg"
              alt="img"
              className="w-100 rounded mx-auto mt-2"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#what-we-do-2-modal"
              style={{ maxHeight: "20rem" }}
            />
          </div>
        </div>
      </section>

      {/* <!-- Modal 1 --> */}
      <div
        className="modal fade"
        id="what-we-do-1-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/home/what-we-do-1.jpg"
              className="modal-img mx-auto"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* <!-- Modal 2 --> */}
      <div
        className="modal fade"
        id="what-we-do-2-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/home/what-we-do-2.jpg"
              className="modal-img mx-auto"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
