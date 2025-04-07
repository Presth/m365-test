import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

function Items({ currentItems, renderItem }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => {
          return renderItem(item);
        })}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage, items, renderItem }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} renderItem={renderItem} />
      <div className="my-4">
        <ReactPaginate
          nextLabel={
            <button className="flex items-center px-3 py-1 border rounded-md ml-2 bg-white text-black">
              Next
            </button>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel={
            <button className="flex items-center px-3 py-1 border rounded-md mr-2 bg-primary text-white">
              Previous
            </button>
          }
          renderOnZeroPageCount={null}
          containerClassName="flex items-center"
          pageClassName="mx-1"
          pageLinkClassName="px-3 py-1 hover:bg-gray-50"
          activeClassName="active"
          activeLinkClassName="bg-primary rounded-2xl text-white hover:bg-blue-600"
          disabledClassName="opacity-50 cursor-not-allowed"
          disabledLinkClassName="text-gray-300"
        />
      </div>
    </>
  );
}
