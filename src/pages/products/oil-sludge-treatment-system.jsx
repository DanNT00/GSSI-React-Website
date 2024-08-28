import { useNavigate } from "react-router-dom";
function OilSludgeTreatmentSystemPage() {
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
              src="/assets/img/products/oil-sludge-treatment-system.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              role="button"
              style={{ cursor: "pointer", minWidth: 350 }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal"
            />
          </div>
          <div className="col">
            <h1 className="mb-3">OIL SLUDGE TREATMENT SYSTEM</h1>
            <p className="lead">
              The OSTS (Oil Sludge Treatment System) is a customized wastewater
              treatment plant where very high concentration of FOGs are to be
              removed
            </p>
          </div>
        </div>
      </div>

      <div className="mb-5 pb-3 text-center">
        <button onClick={handleGoBack} className="btn btn-secondary">
          Return
        </button>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="gallery-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/oil-sludge-treatment-system.jpg"
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

export default OilSludgeTreatmentSystemPage;
