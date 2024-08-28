import { useNavigate } from "react-router-dom";
function VerticalOilSeparatorPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="container pb-5" style={{ paddingTop: "6rem" }}>
        <div className="row">
          <div className="col my-auto">
            <img
              src="/assets/img/products/vertical-oil-separator.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              role="button"
              style={{ cursor: "pointer", minWidth: 350 }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal1"
            />
          </div>
          <div className="col">
            <h1 className="mb-3">VERTICAL OIL SEPARATOR</h1>
            <p className="lead">
              <u>DESIGN AND BUILD</u> WASTEWATER TREATMENT
            </p>
            <p className="lead">
              The VOS is designed to replace conventional belt skimmers and
              coalescing plate separators and offers high separation performance
              with minimal water content in the recovered oils
            </p>
            <h3 className="mb-3">LIQUI-SKIM FLOATING SKIMMER</h3>
            <img
              src="/assets/img/products/liqui-skim.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              role="button"
              style={{ cursor: "pointer", minWidth: 350 }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal2"
            />
            <p className="lead mt-4">
              The Liqui-Skim is used together with FOG Separator or the Micro
              Air Bubble-Dissolved Air Floatation in the processing and
              treatment of wastewater
            </p>
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
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/vertical-oil-separator.jpg"
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
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/liqui-skim.jpg"
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

export default VerticalOilSeparatorPage;
