import { useNavigate } from "react-router-dom";
function StpElcomPage() {
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
              src="/assets/img/products/stp-elcom.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              style={{ cursor: "pointer", minWidth: 350 }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal"
            />
          </div>
          <div className="col">
            <h1 className="mb-3">STP-ELCOM</h1>
            <p className="lead">
              <u>ALL-IN-ONE</u> WASTEWATER TREATMENT EQUIPMENT
            </p>
            <ul>
              <li className="lead my-2">Optimum Suspended Solid Removal</li>
              <li className="lead my-2">Effective Sludge Production</li>
              <li className="lead my-2">Clear and Odorless Output</li>
              <li className="lead my-2">Energy Efficient</li>
              <li className="lead my-2">
                Expandable Design and Smaller Footprint
              </li>
              <li className="lead my-2">Lesser Concrete Tanks</li>
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
        id="gallery-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/stp-elcom.jpg"
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

export default StpElcomPage;
