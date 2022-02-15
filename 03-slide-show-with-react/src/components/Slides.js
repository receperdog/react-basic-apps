import React, { useState, useEffect } from "react";

function Slides(props) {
  const [isFirstPageDeactive, setIsFırstPageDeactive] = useState(true);
  const [isNextButtonDeactive, setIsNextButtonDeactive] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  let setPage = 0;
  const handleRestartButton = () => {
    setIsNextButtonDeactive(false);
    setIsFırstPageDeactive(true);
    setPageNumber(0);
  };
  const handlePrevButton = () => {
    setPage = pageNumber - 1;
    setPageNumber(setPage);
    if (setPage == 0) {
      setIsFırstPageDeactive(true);
      setIsNextButtonDeactive(false);
    }
  };
  const handleNextButton = () => {
    setPage = pageNumber + 1;
    setPageNumber(setPage);
    if (setPage == props.slides.length - 1) {
      setIsNextButtonDeactive(true);
    } else {
      setIsFırstPageDeactive(false);
    }
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          onClick={handleRestartButton}
          disabled={isFirstPageDeactive}
          className="small outlined"
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          onClick={handlePrevButton}
          disabled={isFirstPageDeactive}
          className="small"
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          onClick={handleNextButton}
          disabled={isNextButtonDeactive}
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{props.slides[pageNumber].title}</h1>
        <p data-testid="text">{props.slides[pageNumber].text}</p>
      </div>
    </div>
  );
}

export default Slides;
