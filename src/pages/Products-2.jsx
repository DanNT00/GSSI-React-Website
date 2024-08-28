import { Link } from "react-router-dom";

const products = [
  {
    title: "Electrocoagulation Wastewater Treatment Solution",
    imgSrc: "/assets/img/products/electrocoagulation.jpg",
    link: "/products/electrocoagulation",
  },
  {
    title: "STP-ELCOM",
    imgSrc: "/assets/img/products/stp-elcom.jpg",
    link: "/products/stp-elcom",
  },
  {
    title: "Ducting and Accessories",
    imgSrc: "/assets/img/products/ducting-and-accessories.jpg",
    link: "/products/ducting-and-accessories",
  },
  {
    title: "Solar Power Generator",
    imgSrc: "/assets/img/products/solar-power-generator.jpg",
    link: "/products/solar-power-generator",
  },
  {
    title: "Solar Pump",
    imgSrc: "/assets/img/products/solar-pump.jpg",
    link: "/products/solar-pump",
  },
  {
    title: "Vertical Oil Separator",
    imgSrc: "/assets/img/products/vertical-oil-separator.jpg",
    link: "/products/vertical-oil-separator",
  },
];

function ProductsPage2() {
  return (
    <div className="container pb-5" style={{ paddingTop: "6rem" }}>
      <div className="row">
        <div className="col-md-12 pb-2 text-center">
          <h1 style={{ color: "#145889" }}>Products</h1>
        </div>
      </div>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-6 col-md-4 text-center my-4">
            <Link to={product.link}>
              <img
                src={product.imgSrc}
                alt={product.title}
                className="mx-auto"
                style={{ maxHeight: "200px" }}
              />
            </Link>
            <Link
              to={product.link}
              role="button"
              className="text-uppercase btn btn-link"
            >
              {product.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center py-4">
        <div className="custom-pagination">
          <Link to="/products" className="prev">
            Previous
          </Link>
          <Link to="/products">1</Link>
          <Link
            to="/products-2"
            className="active text-white"
            style={{ backgroundColor: "#427ece" }}
          >
            2
          </Link>
          <Link
            to="#"
            className="next page-link disabled text-secondary"
            tabIndex="-1"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage2;
