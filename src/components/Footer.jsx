function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-content">
          <h2 className="footer-title">Products</h2>
          <div className="footer-description">
            <a href="" className="footer-link">
              Black tea
            </a>
            <br />
            <a href="" className="footer-link">
              Green tea
            </a>
            <br />
            <a href="" className="footer-link">
              White tea
            </a>
            <br />
            <a href="" className="footer-link">
              Oolong tea
            </a>
            <br />
            <a href="" className="footer-link">
              Pu-erh tea
            </a>
          </div>
        </div>
        <div className="footer-content">
          <h2 className="footer-title">Company</h2>
          <div className="footer-description">
            <a href="" className="footer-link">
              About Us
            </a>
            <br />
            <a href="" className="footer-link">
              Contact Us
            </a>
            <br />
            <a href="" className="footer-link">
              Our Blog
            </a>
            <br />
            <a href="" className="footer-link">
              FAQ
            </a>
            <br />
            <a href="" className="footer-link">
              Shipping & Delivery
            </a>
            <br />
            <a href="" className="footer-link">
              Refund Policy
            </a>
            <br />
            <a href="" className="footer-link">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="footer-content-third">
          <h2 className="footer-title hide">hidden word</h2>
          <div className="footer-description-hide">
            <h2>
              “Tea is a journey. It can take you to new places and open your
              mind to new experiences. Let every sip transport you to a world of
              wonder and possibility”
            </h2>
            <a href="" className="footer-link">
              Dragomir Teodorescu, <br /> Tealuxe owner
            </a>
          </div>
        </div>
        <div className="footer-content-fourht">
          <h2 className="footer-title">Stay In Touch</h2>
          <div className="please-content">
            <p className="please-title">
              Please feel free to contact us via the email of phone. We would be
              happy to hear from you!
            </p>
          </div>
          <div className="footer-logo-content">
            <img
              className="footer-logo"
              src="./src/assets/images/logo.svg"
              alt=""
            />
            <div className="forwrap">
              <div className="mailnum">
                <img
                  className="mailnum-img"
                  src="./src/assets/images/icon1.svg"
                  alt=""
                />
                <p>+370 680 123456</p>
              </div>
              <div className="mailnum">
                <img
                  className="mailnum-img"
                  src="./src/assets/images/icon2.svg"
                  alt=""
                />
                <p>info@tealuxe.com</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="footer-bottom">
        <h2>c Tealuxe,2023</h2>
      </div>
    </footer>
  );
}
export default Footer;
