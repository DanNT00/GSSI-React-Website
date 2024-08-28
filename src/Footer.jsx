function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="row mx-0">
          <div className="col-sm my-auto">
            <img
              src="/assets/img/logo.png"
              className="mx-auto"
              alt="img"
              style={{ width: 150 }}
            />
          </div>
          <div className="col-sm mt-5">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="/about">About</a>
              </li>
              <li className="list-inline-item">
                <a href="/products">Products</a>
              </li>
              <li className="list-inline-item">
                <a href="/services">Services</a>
              </li>
              <li className="list-inline-item">
                <a href="/projects">Projects</a>
              </li>
              <li className="list-inline-item">
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <div className="social">
              <a
                href="https://www.facebook.com/profile.php?id=100064865100649"
                target="_blank"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </div>
          </div>
          <div className="col-sm mt-5">
            <div className="row">
              <div className="col-sm">
                <div className="d-flex mb-1">
                  <i className="fa fa-envelope pe-2 text-warning pt-1"></i>
                  <p className="text-white">gssi_enterprise@yahoo.com</p>
                </div>
                <div className="d-flex mb-1">
                  <i className="fa fa-fax pe-2 text-warning pt-1"></i>
                  <p className="text-white">(02) 8395 4623 / (02) 8293 8026</p>
                </div>
                <div className="d-flex mb-1">
                  <i className="fa fa-mobile pe-2 text-warning fs-4"></i>
                  <p className="text-white">
                    (0926) 752 6438 / (0966) 870 0588 / (0991) 843 0220
                  </p>
                </div>
                <div className="d-flex mb-1">
                  <i className="fa fa-map-marker pe-2 text-warning fs-5"></i>
                  <p className="text-white">
                    Block 17, Lot 12 Armal Village, Sta.Ana, Taytay, Rizal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col text-center">
            <p className="copyright">
              © GSSI Enterprise {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
