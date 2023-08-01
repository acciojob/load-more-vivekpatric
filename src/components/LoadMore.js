import React, { useState } from "react";

const LoadMore = ({ items }) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [page, setPage] = useState(0);

  const loadMore = () => {
    const nextPage = page + 1;
    const startIndex = (nextPage - 1) * 10;
    const endIndex = startIndex + 10;

    // Load next 10 items asynchronously
    setTimeout(() => {
      setDisplayedItems([
        ...displayedItems,
        ...items.slice(startIndex, endIndex)
      ]);
      setPage(nextPage);
    }, 500);
  };

  return (
    <div>
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {displayedItems.length < items.length && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default LoadMore;