import { Link } from "react-router-dom";

const products = [
  {
    title: "Katalox Light",
    imgSrc: "/assets/img/products/katalox-light4.jpg",
    link: "/products/katalox-light",
  },
  {
    title: "Isoft Descaler",
    imgSrc: "/assets/img/products/isoft-descaler2.jpg",
    link: "/products/isoft-descaler",
  },
  {
    title: "Filtersorb-SP3",
    imgSrc: "/assets/img/products/filtersorb1.jpg",
    link: "/products/filtersorb-sp3",
  },
  {
    title: "Oil Sludge Treatment System",
    imgSrc: "/assets/img/products/oil-sludge-treatment-system.jpg",
    link: "/products/oil-sludge-treatment-system",
  },
  {
    title: "Small/Large Food Waste Strainer",
    imgSrc: "/assets/img/products/small-food-waste-strainer.jpg",
    link: "/products/small-large-food-waste-strainer",
  },
  {
    title: "Packaged Type Fire Pump System",
    imgSrc: "/assets/img/products/packaged-type-fire-pump-system.jpg",
    link: "/products/packaged-type-fire-pump-system",
  },
];

function ProductsPage1() {
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
          <Link
            to="#"
            className="prev page-link disabled text-secondary"
            tabIndex="-1"
          >
            Previous
          </Link>
          <Link
            to="/products"
            className="active text-white"
            style={{ backgroundColor: "#427ece" }}
          >
            1
          </Link>
          <Link to="/products-2">2</Link>
          <Link to="/products-2" className="next">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage1;
