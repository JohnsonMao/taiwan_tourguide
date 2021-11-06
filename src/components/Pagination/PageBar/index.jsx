import React from "react";
import { Pagination, Button } from "react-bootstrap";

export default function PageBar(props) {
  const { currentPage, totalNum, lastPage, displayNum } = props;

  /* 頁碼陣列 */
  const pageArr = [];
  /* 起始頁碼 */
  let beginPage;
  /* 頁碼陣列長度上限 */
  let maxPage;
  const totalPage = Math.ceil(totalNum / displayNum);

  /* 最多顯示五個頁碼 */
  if (totalPage > 5) {
    // 超過五頁的顯示
    maxPage = 5;
    if (currentPage >= totalPage - 2) {
      // 控制起始頁碼數字
      beginPage = totalPage - 4;
    } else if (currentPage <= 3) {
      beginPage = 1;
    } else {
      beginPage = currentPage - 2;
    }
  } else {
    // 沒超過五頁的顯示
    maxPage = totalPage;
    beginPage = 1;
  }

  for (let i = 0; i < maxPage; i++) {
    let pageNum = beginPage + i;
    if (currentPage === pageNum) {
      pageArr.push({ pageNum, isCurrentPage: true });
    } else {
      pageArr.push({ pageNum, isCurrentPage: false });
    }
  }

  const Pages = pageArr.map((item) => (
    <Pagination.Item
      key={item.pageNum}
      className={`p-2 ${item.isCurrentPage ? "active" : null}`}
      data-page={item.pageNum}
      aria-label={item.pageNum + "page"}
      as="li"
    >
      {item.pageNum}
    </Pagination.Item>
  ));

  return (
    <nav aria-label="Page navigation" className="d-flex justify-content-center">
      <Pagination as="ul" className="d-flex align-item-center">
        <li>
          <Button
            as="button"
            className="swiper-button-prev"
            data-page="prev"
            aria-label="previous page button"
            disabled={currentPage === 1}
          ></Button>
        </li>
        {Pages}
        <li>
          <Button
            as="button"
            className="swiper-button-next"
            data-page="next"
            aria-label="next page button"
            disabled={lastPage}
          ></Button>
        </li>
      </Pagination>
    </nav>
  );
}
