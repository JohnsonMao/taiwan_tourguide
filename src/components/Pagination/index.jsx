import React, { useState, useEffect, useCallback } from "react";

import ActivityList from "../../components/ActivityList";
import CardList from "../../components/CardList";
import PageBar from "./PageBar";

export default function Pagination(props) {
  const { component, data, city, icon, title } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [indexList, setIndexList] = useState([]);
  const [lastPage, setLastPage] = useState(false);
  const displayNum = component === "ActivityList" ? 8 : 20;
  const totalNum = data.length;
  
  /* 換頁功能函式 */
  const handlePage = useCallback((pageNum) => {
    const newIndexList = [];
    let maxIndex = 0;
    if (totalNum <= displayNum * pageNum) {
      maxIndex = totalNum;
      setLastPage(true);
    } else {
      maxIndex = displayNum * pageNum;
      if (lastPage) {
        setLastPage(false)
      };
    }
    for (let i = (pageNum - 1) * displayNum; i < maxIndex; i++) {
      newIndexList.push(data[i]);
    }
    setIndexList(newIndexList);
  }, [data, displayNum, lastPage, totalNum]);

  /* 換頁按鈕功能 */
  const pageClick = (e) => {
    const { page } = e.target.dataset;
    switch (page) {
      case "next":
        if (!lastPage) setCurrentPage(currentPage + 1);
        break;
      case "prev":
        if (currentPage > 1) setCurrentPage(currentPage - 1);
        break;
      default:
        if (!isNaN(+page) && page > 0 && +page !== currentPage) setCurrentPage(+page);
    }
  };

  useEffect(() => {
    handlePage(currentPage);
  }, [currentPage, handlePage])

  return (
    <main onClick={pageClick}>
      {component === "ActivityList" ? (
        <ActivityList data={indexList} city={city} />
      ) : (
        <CardList title={title} icon={icon} data={indexList} city={city} />
      )}
      <PageBar
        currentPage={currentPage}
        totalNum={totalNum}
        lastPage={lastPage}
        displayNum={displayNum}
      />
    </main>
  );
}
