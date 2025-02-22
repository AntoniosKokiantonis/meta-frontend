export default function Description() {
  return (
    <>
      <div className="restaurant-desc-parent">
        <div className="restaurant-desc">
          <p className="title desc-title">Little Lemon</p>
          <p className="subtitle desc-subtitle">Cyprus</p>
          <p className="desc-text desc">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <img
          className="desc-img"
          src="/images/restaurant-green.jpg"
          alt="hero image"
        />
      </div>
    </>
  );
}
