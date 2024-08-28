import { useNavigate } from "react-router-dom";
function SolarPowerGeneratorPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="container pb-5" style={{ paddingTop: "6rem" }}>
        <h1 className="mb-3 text-center">Solar Power Generator</h1>
        <div className="row">
          <div className="col-sm m-auto mb-4">
            <img
              src="/assets/img/products/solar-power-generator.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              role="button"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal1"
            />
          </div>
          <div className="col-sm m-auto mb-4">
            <img
              src="/assets/img/products/solar-power-generator2.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              role="button"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal2"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm m-auto mb-4">
            <img
              src="/assets/img/products/solar-power-generator3.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              role="button"
              style={{ cursor: "pointer", minWidth: 350 }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal3"
            />
          </div>
          <div className="col-sm m-auto mb-4">
            <img
              src="/assets/img/products/solar-power-generator4.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              role="button"
              style={{ cursor: "pointer", minWidth: 350 }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal4"
            />
          </div>
        </div>
        <div className="row m-auto mb-4">
          <div className="col-sm">
            <img
              src="/assets/img/products/solar-power-generator5.jpg"
              className="gallery-item img-thumbnail mx-auto"
              alt="img"
              role="button"
              style={{ cursor: "pointer", minWidth: 310 }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal5"
            />
          </div>
        </div>
      </div>

      <div className="mb-5 pb-3 text-center">
        <button onClick={handleGoBack} className="btn btn-secondary">
          Return
        </button>
      </div>

      {/* <!-- Modal 1 --> */}
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
              src="/assets/img/products/solar-power-generator.jpg"
              className="modal-img"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* <!-- Modal 2 --> */}
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
              src="/assets/img/products/solar-power-generator2.jpg"
              className="modal-img"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* <!-- Modal 3 --> */}
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
              src="/assets/img/products/solar-power-generator3.jpg"
              className="modal-img"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* <!-- Modal 4 --> */}
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
              src="/assets/img/products/solar-power-generator4.jpg"
              className="modal-img"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* <!-- Modal 5 --> */}
      <div
        className="modal fade"
        id="gallery-modal5"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/solar-power-generator5.jpg"
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

export default SolarPowerGeneratorPage;
