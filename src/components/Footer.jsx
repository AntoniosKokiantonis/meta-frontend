import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <img src="/images/footer.png" alt="little lemon" />
      <div className="footer-content">
        <div className="footer-nav">
          <p className="footer-head">Navigation</p>
          <Link to="/" className="footer-item">
            Home
          </Link>
          <a href="#" className="footer-item">
            About
          </a>
          <a href="#" className="footer-item">
            Menu
          </a>
          <Link to="/booking" className="footer-item">
            Reservations
          </Link>
          {/* <a href="#" className="footer-item"> */}
          <a>
            <Link to="/online" className="footer-item">
              Order Online
            </Link>
          </a>
          {/* <a href="#" className="footer-item"> */}
          <a>
            <Link to="/Login" className="footer-item">
              Login
            </Link>
          </a>
        </div>
        <div className="footer-contact">
          <p className="footer-head">Contact</p>
          <a href="#" className="footer-item">
            <p>Addres:</p>
            <p> Alexander Avenue, 235, </p>
            <p> 2035, Paphos</p>
          </a>
          <a href="#" className="footer-item">
            <p>Tel:</p>
            <p>(357) 26779477</p>
          </a>
          <a href="#" className="footer-item">
            <p>Email:</p>
            <p>littlelemon@rest.com</p>
          </a>
        </div>
        <div className="footer-social">
          <p className="footer-head">Social Media</p>
          <div className="footer-item-fb">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer-item"
            >
              <FaFacebookSquare />
            </a>
          </div>

          <div className="footer-item-tik">
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              className="footer-item"
            >
              <AiFillTikTok />
            </a>
          </div>
          <div className="footer-item-insta">
            {" "}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer-item"
            >
              <FaInstagramSquare />
            </a>
          </div>
          <div className="footer-item-x">
            <a href="https://x.com/" target="_blank" className="footer-item">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
