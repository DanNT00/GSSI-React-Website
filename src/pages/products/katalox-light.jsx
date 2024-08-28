import { useNavigate } from "react-router-dom";
function KataloxLightPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <img
        src="/assets/img/products/katalox-light.jpg"
        className="w-100 mt-5 pt-2"
      />
      <div className="main-grid my-2">
        <div className="katalox-box">
          <h1 className="text-success">Filtration of</h1>
          <ul className="ps-5">
            <li className="mb-2">Less than 3 micron</li>
            <li className="mb-2">Suspended solids</li>
            <li className="mb-2">Sediments</li>
            <li className="mb-2">Turbidity</li>
            <li className="mb-2">Organics</li>
            <li className="mb-2">Color</li>
            <li className="mb-2">Odor</li>
          </ul>
        </div>
        <div className="katalox-box">
          <h1 className="text-success">Removal of</h1>
          <ul className="ps-5">
            <li className="mb-2">Iron</li>
            <li className="mb-2">Manganese</li>
            <li className="mb-2">Hydrogen Sulfide</li>
            <li className="mb-2">Arsenic</li>
            <li className="mb-2">Radium</li>
            <li className="mb-2">Heavy Metals</li>
            <li className="mb-2">Radionuclides</li>
          </ul>
        </div>
        <div className="katalox-box">
          <h1 className="text-success">Advantages</h1>
          <ul className="ps-5">
            <li className="mb-2">
              High content MnO<sub>2</sub> coating (10%)
            </li>
            <li className="mb-2">Very High Surface Area</li>
            <li className="mb-2">Contains NO Crystalline Silica</li>
            <li className="mb-2">
              Light Weight - providing significant savings on backwash water
            </li>
            <li className="mb-2">Higher Filtration rates</li>
            <li className="mb-2">
              Filtration of sand, sediment and suspended solids, down to 3
              micron
            </li>
            <li className="mb-2">
              High efficiency removal capacity of Iron, Manganese and Hydrogen
              sulfide
            </li>
            <li className="mb-2">
              Effective reduction of Arsenic, Zinc, Copper, Lead, Radium,
              Uranium, radionuclides and other heavy metals
            </li>
            <li className="mb-2">Media replacement every 7 - 10 years</li>
            <li className="mb-2">No disinfection by-product</li>
            <li className="mb-2">
              No mandatory KMnO<sub>4</sub> chlorine or chlorine dioxide dosing
            </li>
            <li className="mb-2">Low operational costs</li>
            <li className="mb-2">
              Unique product, unmatched by our competitors
            </li>
          </ul>
        </div>
        <div className="katalox-box grid-col-span-2">
          <div className="d-grid katalox-img-grid">
            <img
              src="/assets/img/products/katalox-light1.jpg"
              alt="img"
              className="gallery-item rounded border border-2 border-dark katalox-img po"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal1"
            />
            <img
              src="/assets/img/products/katalox-light2.jpg"
              alt="img"
              className="gallery-item rounded border border-2 border-dark katalox-img"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal2"
            />
            <img
              src="/assets/img/products/katalox-light3.jpg"
              alt="img"
              className="gallery-item rounded border border-2 border-dark katalox-img grid-col-span-2"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal3"
            />
            <img
              src="/assets/img/products/katalox-light4.jpg"
              alt="img"
              className="gallery-item h-100 rounded border border-2 border-dark katalox-img"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal4"
            />
            <img
              src="/assets/img/products/katalox-light5.jpg"
              alt="img"
              className="gallery-item h-100 rounded border border-2 border-dark katalox-img"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#gallery-modal5"
            />
          </div>
        </div>

        <div className="container my-2">
          <a
            className="btn btn-primary"
            href="/assets/PDFs/KL_Brochure_NEW_ver_1.1.pdf"
          >
            Download Full Brochure
          </a>
          <button onClick={handleGoBack} className="btn btn-secondary mx-2">
            Return
          </button>
        </div>
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
              src="/assets/img/products/katalox-light1.jpg"
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
        id="gallery-modal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/katalox-light2.jpg"
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
        id="gallery-modal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/katalox-light3.jpg"
              className="modal-img mx-auto"
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
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/katalox-light4.jpg"
              className="modal-img mx-auto"
              alt="modal img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* Modal 5 */}
      <div
        className="modal fade"
        id="gallery-modal5"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img
              src="/assets/img/products/katalox-light5.jpg"
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

export default KataloxLightPage;
