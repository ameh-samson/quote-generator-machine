import { FaQuoteLeft, FaXTwitter, FaFacebookF } from "react-icons/fa6";

export default function QuoteCard({ quote, onButtonClick, bgColor }) {
  return (
    <div className="quoteCard-container">
      <blockquote style={{ color: bgColor }}>
        <p>
          <FaQuoteLeft className="quote-icon" />
          <span className="quote">{quote.quote}</span>
        </p>
        <footer className="author">- {quote.author}</footer>
      </blockquote>
      <div className="quote-share">
        <FaXTwitter
          className="share-icon"
          style={{ backgroundColor: bgColor }}
        />
        <FaFacebookF
          className="share-icon"
          style={{ backgroundColor: bgColor }}
        />
        <button
          className="new-quote-btn"
          onClick={onButtonClick}
          style={{ backgroundColor: bgColor }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}
