import { useNavigate } from "react-router-dom";
function PackagedTypeFirePumpSystemPage() {
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
              src="/assets/img/products/packaged-type-fire-pump-system.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              role="button"
              style={{ cursor: "pointer", minWidth: 350 }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal"
            />
          </div>
          <div className="col">
            <h1 className="mb-3">Packaged Type Fire Pump System</h1>
            <p className="lead">
              <u>FIRE-PUMP-SYSTEM</u> COMPACT PACKAGED TYPE
            </p>
            <p className="lead">
              <u>FEATURES</u>{" "}
            </p>
            <ul>
              <li className="lead my-2">Space Saving Design</li>
              <li className="lead my-2">Plug & Play Setup</li>
              <li className="lead my-2">Easy Maintenance</li>
              <li className="lead my-2">
                50% Savings on Equipment & Installation
              </li>
              <li className="lead my-2">
                Inclusive Steel Base & Pipe Trimmings, Test Connection, Pump
                Connection, Valves & Accessories
              </li>
            </ul>
            <p className="lead">
              <u>CAPACITY</u>
            </p>
            <ul>
              <li className="lead my-2">0-500GPM/0.75HP</li>
            </ul>

            <p className="lead">
              <u>DIMENSIONS</u>
            </p>
            <ul>
              <li className="lead my-2">L-1200mm W- 900mm H- 1500mm</li>
            </ul>

            <h1 className="mb-3">AUSTRALIAN PUMP TECHNOLOGY</h1>
            <div className="row row-cols-4">
              <div className="col bg-secondary text-white text-center border border-dark">
                Model
              </div>
              <div className="col bg-secondary text-white text-center border border-dark">
                Fire Pump
              </div>
              <div className="col bg-secondary text-white text-center border border-dark">
                jockey Plump
              </div>
              <div className="col bg-secondary text-white text-center border border-dark">
                System Pressure
              </div>
            </div>

            <div className="row row-cols-4">
              <div className="col text-dark text-center border border-dark lead">
                PYRO 300
              </div>
              <div className="col text-dark text-center border border-dark text-break">
                300gpm/25hp max
              </div>
              <div className=" col text-dark text-center border border-dark text-break">
                500gpm/75hp max
              </div>
              <div className="col text-dark text-center border border-dark text-break">
                0-150psi
              </div>
            </div>

            <div className="row row-cols-4">
              <div className="col text-dark text-center border border-dark lead">
                PYRO 500
              </div>
              <div className="col text-dark text-center border border-dark text-break">
                40gpm/5hp max
              </div>
              <div className="col text-dark text-center border border-dark text-break">
                100gpm/7.5hp max
              </div>
              <div className="col text-dark text-center border border-dark text-break">
                0-150psi
              </div>
            </div>
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
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/packaged-type-fire-pump-system.jpg"
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

export default PackagedTypeFirePumpSystemPage;
