import { useNavigate } from "react-router-dom";
function DuctingAndAccessoriesPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {/* // <!-- Wrapper container --> */}
      <div className="container pb-5" style={{ paddingTop: "6rem" }}>
        <h1 className="mb-3 text-center">Ducting And Accessories</h1>
        <div className="row">
          <div className="col m-auto mt-4">
            <img
              src="/assets/img/products/ducting-and-accessories.jpg"
              className="gallery-item img-thumbnail"
              alt="img"
              style={{ cursor: "pointer", minWidth: 350 }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal1"
            />
          </div>
          <div className="col m-auto mt-4">
            <img
              src="/assets/img/products/ducting-and-accessories3.jpg"
              className="gallery-item img-thumbnail mx-auto"
              alt="img"
              style={{
                cursor: "pointer",
                minWidth: 350,
                width: "100%",
                maxHeight: 303,
              }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal2"
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <img
              src="/assets/img/products/ducting-and-accessories2.jpg"
              className="gallery-item img-thumbnail mx-auto"
              alt="img"
              style={{ cursor: "pointer", maxWidth: 700, width: "100%" }}
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal3"
            />
          </div>
        </div>
      </div>
      <div className="mb-5 pb-3 text-center">
        <button onClick={handleGoBack} className="btn btn-secondary">
          Return
        </button>
      </div>

      {/* Modal 1 */}
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
              src="/assets/img/products/ducting-and-accessories.jpg"
              className="modal-img mx-auto"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* Modal 3 */}
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
              src="/assets/img/products/ducting-and-accessories3.jpg"
              className="modal-img mx-auto"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* Modal 2 */}
      <div
        className="modal fade"
        id="gallery-modal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/ducting-and-accessories2.jpg"
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

export default DuctingAndAccessoriesPage;
