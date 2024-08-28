import { useNavigate } from "react-router-dom";

function SolarPumpPage() {
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
              src="/assets/img/products/solar-pump.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              style={{ cursor: "pointer", minWidth: 350 }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal1"
            />
          </div>
          <div className="col">
            <h1 className="mb-3">Solar Pump</h1>
            <p className="lead">
              <u>Highlights</u>{" "}
            </p>
            <ul>
              <li className="lead my-2">
                First and biggest manufacturing of solar pumps in China
              </li>
              <li className="lead my-2">
                Energy-saving and environment-protected green products
              </li>
              <li className="lead my-2">Advanced 3 phase DC brushless motor</li>
              <li className="lead my-2">
                MPPT and DSP technology for the controller
              </li>
              <li className="lead my-2">
                Cost saving product, no need of any electricity or fuel
              </li>
              <li className="lead my-2">Portable and foldable</li>
              <li className="lead my-2">
                Fast and simple to install the complete system
              </li>
              <li className="lead my-2">
                Maintenance-free and long working life
              </li>
              <li className="lead my-2">
                Rechargeable batteries for night use
              </li>
              <li className="lead my-2">Patented products</li>
              <li className="lead my-2">CE certificate</li>
              <li className="lead my-2">
                3 years warranty for the solar pumps
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-5 pb-3 text-center">
        <button onClick={handleGoBack} className="btn btn-secondary">
          Return
        </button>
      </div>

      {/* Modal */}
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
              src="/assets/img/products/solar-pump.jpg"
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

export default SolarPumpPage;
