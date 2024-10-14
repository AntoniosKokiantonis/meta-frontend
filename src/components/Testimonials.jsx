export default function Testimonials() {
  return (
    <div className="testimonials-parent">
      <p className="testimonials-title">Satisfaction</p>
      <div className="testimonials">
        <div className="testimonial">
          <img
            className="reviewer-img"
            src="/images/reviewer1.png"
            alt="Reviewer1"
          />
          <div className="name-rating">
            <p className="reviewer-name">John Doer</p>
            <p className="reviewer-rating">*****</p>
          </div>
          <div className="review-text">
            <p>
              “Absolutely delightful! The flavors were authentic, and the
              ambiance was perfect. The lamb kebabs were the best I’ve ever had.
              Highly recommend this gem for a true Mediterranean experience!”{" "}
            </p>
          </div>
        </div>
        <div className="testimonial">
          <img
            className="reviewer-img"
            src="/images/reviewer2.png"
            alt="Reviewer2"
          />
          <div className="name-rating">
            <p className="reviewer-name">Maria Stable</p>
            <p className="reviewer-rating">*****</p>
          </div>
          <div className="review-text">
            <p>
              “A culinary journey through the Mediterranean! The fresh
              ingredients and vibrant dishes left us craving more. The staff was
              friendly and attentive. Can’t wait to return for another delicious
              meal!”{" "}
            </p>
          </div>
        </div>
        <div className="testimonial">
          <img
            className="reviewer-img"
            src="/images/reviewer4.png"
            alt="Reviewer3"
          />
          <div className="name-rating">
            <p className="reviewer-name">Bruce Lee</p>
            <p className="reviewer-rating">*****</p>
          </div>
          <div className="review-text">
            <p>
              “Incredible dining experience! The hummus and falafel were out of
              this world. The chef’s passion for Mediterranean cuisine shines
              through every dish. A must-visit for food lovers seeking authentic
              flavors!”{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
