import { useNavigate } from "react-router-dom";
function ElectrocoagulationPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      {/* <!-- Wrapper container --> */}
      <div className="container pb-5" style={{ paddingTop: "6rem" }}>
        <div className="row">
          <div className="col my-auto">
            <img
              src="/assets/img/products/electrocoagulation.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              style={{ cursor: "pointer", minWidth: 350 }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal1"
            />
          </div>
          <div className="col">
            <h1 className="mb-3">
              Electrocoagulation Wastewater Treatment Solution
            </h1>
            <p className="lead">
              The Electrical Coagulation Machines are used where there are high
              levels of contamination. It helps reduce the need for high
              concentrations of chemicals to perform coagulation requirements
            </p>
            <ul>
              <li className="lead my-2">Chemical Free Technology</li>
              <li className="lead my-2">
                Optimum Total Dissolved Solids (TDS) Removal
              </li>
              <li className="lead my-2">
                Low-Sludge Production & Larger Flocs
              </li>
              <li className="lead my-2">Clear, Odorless Water Produced</li>
              <li className="lead my-2">Low Maintenance</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-5 pb-3 text-center">
        <button onClick={handleGoBack} className="btn btn-secondary">
          Return
        </button>
      </div>

      {/* Modal  */}
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
              src="/assets/img/products/electrocoagulation.jpg"
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

export default ElectrocoagulationPage;
