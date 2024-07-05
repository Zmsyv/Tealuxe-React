function KnowMore() {
  return (
    <section className="know-more container">
      <div>
        <div className="know-more-header">
          <h2 className="more-header">Want to know more?</h2>
        </div>
        <div className="left">
          <div className="know-more-content-left">
            <p className="know-more-description">
              Join our mailing list and stay up-to-date with the latest news,
              promotions,and exclusive offers from our tea store.Be the first to
              know about new tea arrivals, seasonal blends, and special
              discounts.Don't miss out on the tea-rrific perks - sign up today!
            </p>
          </div>
        </div>
      </div>
      <div className="know-more-content">
        <div className="hide">
          <h2>hidden word</h2>
        </div>
        <div className="know-more-content-right">
          <div className="join-us">
            <form action="#" className="subscribe">
              <input type="email" placeholder="name@email.com" />
              <a href="#">Join</a>
            </form>
          </div>
          <div className="check-subscribing">
            <form action="#">
              <input type="checkbox" />
            </form>
            <p>
              We take your privacy seriously and are comitted to protecting your
              perwsonal information. By subscribing to our mailing list, you are
              consenting to receive periodic emails from us about our products,
              promotions, and other tea=related information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KnowMore;
