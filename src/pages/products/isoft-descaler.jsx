import { useNavigate } from "react-router-dom";
function IsoftDescalerPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <img
        src="/assets/img/products/isoft-descaler.jpg"
        className="w-100 mt-5 pt-2"
      />

      <div className="container text-center mt-5">
        <h3>
          <b>Cleaning</b> <small className="text-muted">+</small>
          <b>Disinfecting Industrial Water Systems</b>
        </h3>
        <h4 className="text-muted">including</h4>
        <h3>
          <b>Cooling Water</b> <small className="text-muted">&</small>
          <b>Boiler Water Systems</b>
        </h3>
      </div>

      <div className="main-grid p-0" style={{ gap: 0 }}>
        <div className="isoft-box mx-4">
          <h4 className="fw-bold text-primary">Features:</h4>
          <ul>
            <li className="text-primary">
              Heavy Duty Industrial Water Treatment Compound
            </li>
            <li className="text-primary">
              Recalculating any water system cleaner
            </li>
            <li className="text-primary">
              Scale & Corrosion prevention, Dispersant & Cleaner
            </li>
          </ul>
        </div>
        <div className="main-grid isoft-box p-0">
          {/* Modal 1 */}
          <img
            src="/assets/img/products/isoft-descaler1.jpg"
            alt="img"
            className="gallery-item isoft-box-img h-100"
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#gallery-modal1"
          />
          {/* Modal 2 */}
          <img
            src="/assets/img/products/isoft-descaler2.jpg"
            alt="img"
            className="gallery-item isoft-box-img h-100"
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#gallery-modal2"
          />
          {/* Modal 3 */}
          <img
            src="/assets/img/products/isoft-descaler3.jpg"
            alt="img"
            className="gallery-item isoft-box-img h-100"
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#gallery-modal3"
          />
          {/* Modal 4 */}
          <img
            src="/assets/img/products/isoft-descaler4.jpg"
            alt="img"
            className="gallery-item isoft-box-img h-100"
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#gallery-modal4"
          />
          <img
            src="/assets/img/products/isoft-descaler5.jpg"
            alt="img"
            className="isoft-box-img h-100"
          />
        </div>
      </div>
      <div
        className="main-grid isoft-box"
        style={{ gap: 0, gridTemplateColumns: "repeat(6, 1fr)" }}
      >
        <div className="d-flex flex-column">
          <img
            src=" /assets/img/products/isoft-descaler6.jpg"
            alt="img"
            className="isoft-descaler6-img mx-auto"
            style={{ width: "7rem" }}
          />
          <h3
            className="text-success text-center fw-bolder"
            style={{ fontFamily: "cursive" }}
          >
            Green
            <br />
            Technology
          </h3>
        </div>
        <ul className="d-grid" style={{ gridColumn: "span 3" }}>
          <li className="lead">
            <i>
              No <span className="text-danger">Phosphates</span> or{" "}
              <span className="text-danger">Phosphonates</span>
            </i>
          </li>
          <li className="lead">
            <i>Disinfect the system from microbial growth</i>
          </li>
          <li className="lead">
            <i>
              100% <span className="text-success">Biodegradable</span>{" "}
              formulation
            </i>
          </li>
          <li className="lead">
            <i>Prevents bio-film development</i>
          </li>
        </ul>

        <div className="isoft-box mx-4 mt-4">
          <a
            className="btn btn-primary"
            href="/assets/PDFs/ISOFT-DESCALER-Brochure.pdf"
          >
            Download Full Brochure
          </a>
          <button onClick={handleGoBack} className="btn btn-secondary mx-2">
            Return
          </button>
        </div>
      </div>
      <div className="container my-2"></div>

      {/* Modal 1 */}
      <div
        className="modal fade"
        id="gallery-modal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/isoft-descaler1.jpg"
              className="modal-img"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* Modal 2 */}
      <div
        className="modal fade"
        id="gallery-modal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/isoft-descaler2.jpg"
              className="modal-img"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* Modal 3 */}
      <div
        className="modal fade"
        id="gallery-modal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/isoft-descaler3.jpg"
              className="modal-img"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* Modal 4 */}
      <div
        className="modal fade"
        id="gallery-modal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/isoft-descaler4.jpg"
              className="modal-img"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default IsoftDescalerPage;
