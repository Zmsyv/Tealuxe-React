function KnowMore() {
  return (
    <section class="know-more container">
      <div>
        <div class="know-more-header">
          <h2 class="more-header">Want to know more?</h2>
        </div>
        <div class="left">
          <div class="know-more-content-left">
            <p class="know-more-description">
              Join our mailing list and stay up-to-date with the latest news,
              promotions,and exclusive offers from our tea store.Be the first to
              know about new tea arrivals, seasonal blends, and special
              discounts.Don't miss out on the tea-rrific perks - sign up today!
            </p>
          </div>
        </div>
      </div>
      <div class="know-more-content">
        <div class="hide">
          <h2>hidden word</h2>
        </div>
        <div class="know-more-content-right">
          <div class="join-us">
            <form action="#" class="subscribe">
              <input type="email" placeholder="name@email.com" />
              <a href="#">Join</a>
            </form>
          </div>
          <div class="check-subscribing">
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
