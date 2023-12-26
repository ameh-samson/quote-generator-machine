import { useEffect, useState } from "react";
import QuoteCard from "./component/QuoteCard";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState({});
  const [backgroundColor, setBackgroundColor] = useState("#472E32");

  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        setSelectedQuote(data.quotes[randomIndex]);
      });
  }, []);

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSelectedQuote(quotes[randomIndex]);
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);

    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div>
      <QuoteCard
        quote={selectedQuote}
        onButtonClick={getRandomQuote}
        bgColor={backgroundColor}
      />
    </div>
  );
}
