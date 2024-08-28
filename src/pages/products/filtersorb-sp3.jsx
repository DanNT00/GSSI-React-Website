import { useNavigate } from "react-router-dom";
function FiltersorbSP3Page() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <img
        src="/assets/img/products/filtersorb.jpg"
        className="w-100 mt-5 pt-2"
      />
      <div className="main-grid my-2">
        <div className="filtersorb-box mx-2">
          <h1 className="text-info">Advantages</h1>
          <ul className="ps-5">
            <li className="mb-2">
              <b>No salt</b> required
            </li>
            <li className="mb-2">
              <b>No backwashing</b> required
            </li>
            <li className="mb-2">
              <b>No regeneration</b> cycle required
            </li>
            <li className="mb-2">
              <b></b>No increase in sodium content in water
            </li>
            <li className="mb-2">Removes the previous scales of plumbing</li>
            <li className="mb-2">
              Catalytic process converts <b>Ca</b> and <b>Mg</b> into harmless
              micro crystals
            </li>
            <li className="mb-2">
              <b>Maintenance free.</b>
              <br />
              No extra cost incurred.
            </li>
            <li className="mb-2">
              <b>No chemicals</b> required for disinfection
            </li>
            <li className="mb-2">
              <b>No electrical connections required</b>
            </li>
            <li className="mb-2">No drain connections required</li>
            <li className="mb-2">No control valves required</li>
            <li className="mb-2">Very easy to install</li>
            <li className="mb-2">
              Great savings against conventional salt based water softeners
            </li>
            <li className="mb-2">
              Provide the best quality healthy water without the addition of
              Sodium or Phosphates
            </li>
          </ul>
        </div>
        <div className="filtersorb-box mx-2">
          <h1 className="text-info">Green Technology!</h1>
          <img
            src="/assets/img/products/filtersorb1.jpg"
            alt="img"
            className="gallery-item filtersorb-img"
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#gallery-modal1"
          />
          <h1 className="text-info">Features</h1>
          <ul className="ps-4">
            <li className="mb-2">3 - 5 years of media life</li>
            <li className="mb-2">Nucleation Assisted Crystallization (NAC)</li>
            <li className="mb-2">Best Quality Drinking Water</li>
          </ul>
        </div>
        <div className="filtersorb-box mx-2">
          <img
            src="/assets/img/products/filtersorb2.jpg"
            alt="img"
            className="gallery-item filtersorb-img"
            role="button"
          />
        </div>

        <div className="container my-2">
          <a
            className="btn btn-primary"
            href="/assets/PDFs/Filtersorb-SP3-brochure.pdf"
          >
            Download Full Brochure
          </a>
          <button onClick={handleGoBack} className="btn btn-secondary mx-2">
            Return
          </button>
        </div>
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
              src="/assets/img/products/filtersorb1.jpg"
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

export default FiltersorbSP3Page;
