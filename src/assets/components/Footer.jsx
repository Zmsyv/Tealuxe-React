function Footer() {
  return (
    <footer class="footer container">
      <div class="footer-top">
        <div class="footer-content">
          <h2 class="footer-title">Products</h2>
          <div class="footer-description">
            <a href="" class="footer-link">
              Black tea
            </a>
            <br />
            <a href="" class="footer-link">
              Green tea
            </a>
            <br />
            <a href="" class="footer-link">
              White tea
            </a>
            <br />
            <a href="" class="footer-link">
              Oolong tea
            </a>
            <br />
            <a href="" class="footer-link">
              Pu-erh tea
            </a>
          </div>
        </div>
        <div class="footer-content">
          <h2 class="footer-title">Company</h2>
          <div class="footer-description">
            <a href="" class="footer-link">
              About Us
            </a>
            <br />
            <a href="" class="footer-link">
              Contact Us
            </a>
            <br />
            <a href="" class="footer-link">
              Our Blog
            </a>
            <br />
            <a href="" class="footer-link">
              FAQ
            </a>
            <br />
            <a href="" class="footer-link">
              Shipping & Delivery
            </a>
            <br />
            <a href="" class="footer-link">
              Refund Policy
            </a>
            <br />
            <a href="" class="footer-link">
              Terms of Service
            </a>
          </div>
        </div>
        <div class="footer-content-third">
          <h2 class="footer-title hide">hidden word</h2>
          <div class="footer-description-hide">
            <h2>
              “Tea is a journey. It can take you to new places and open your
              mind to new experiences. Let every sip transport you to a world of
              wonder and possibility”
            </h2>
            <a href="" class="footer-link">
              Dragomir Teodorescu, <br /> Tealuxe owner
            </a>
          </div>
        </div>
        <div class="footer-content-fourht">
          <h2 class="footer-title">Stay In Touch</h2>
          <div class="please-content">
            <p class="please-title">
              Please feel free to contact us via the email of phone. We would be
              happy to hear from you!
            </p>
          </div>
          <div class="footer-logo-content">
            <img
              class="footer-logo"
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
      <div class="footer-bottom">
        <h2>c Tealuxe,2023</h2>
      </div>
    </footer>
  );
}
export default Footer;
