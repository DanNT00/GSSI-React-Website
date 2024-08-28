import { useNavigate } from "react-router-dom";
function SmallLargeFoodWasteStrainerPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      {/* <!-- Wrapper container --> */}
      <div className="container pb-5" style={{ paddingTop: "6rem" }}>
        <div className="row">
          <div className="col">
            <div className="d-flex">
              <img
                src="/assets/img/products/small-food-waste-strainer.jpg"
                className="gallery-item img-thumbnail mx-auto"
                alt="img"
                style={{ cursor: "pointer", minWidth: 150 }}
                data-bs-toggle="modal"
                data-bs-target="#gallery-modal1"
              />
              <img
                src="/assets/img/products/large-food-waste-strainer.jpg"
                className="gallery-item img-thumbnail mx-auto"
                alt="img"
                style={{ cursor: "pointer", minWidth: 150 }}
                data-bs-toggle="modal"
                data-bs-target="#gallery-modal2"
              />
            </div>
            <div className="d-flex">
              <p className="mx-auto">Small Under Sink Drawer</p>
              <p className="mx-auto">Large Under Sink Drawer</p>
            </div>
          </div>
          <div className="col">
            <h1 className="mb-3">Small/Large Food Waste Strainer</h1>
            <p className="lead">
              <u>DESIGN AND BUILD</u> WASTEWATER TREATMENT
            </p>
            <p className="lead">
              FWS removes waste food solids & separates fats, oil & grease
              before kitchen wastewater discharges into output drain with low
              surface aerator
            </p>
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
              src="/assets/img/products/small-food-waste-strainer.jpg"
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
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/large-food-waste-strainer.jpg"
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

export default SmallLargeFoodWasteStrainerPage;
