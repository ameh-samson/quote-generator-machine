import { FaQuoteLeft, FaXTwitter, FaFacebookF } from "react-icons/fa6";

export default function QuoteCard() {
  return (
    <div className="quoteCard-container">
      <blockquote>
        <p>
          <FaQuoteLeft className="quote-icon" />
          <span className="quote">
            Your actual income is not what you get, but what you give.
          </span>
        </p>
        <footer className="author">- Author Name</footer>
      </blockquote>
      <div className="quote-share">
        <FaXTwitter className="share-icon" />
        <FaFacebookF className="share-icon" />
        <button className="new-quote-btn">New quote</button>
      </div>
    </div>
  );
}
