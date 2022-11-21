/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
const PaginationData = ({ itemsPerPage, totalDataCount, handleClickPaginationButton, searchWord }) => {


    const [items, setItems] = useState([])



    const [itemOffset, setItemOffset] = useState(0);


    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        handleClickPaginationButton(event.selected + 1, itemsPerPage, searchWord)
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    useEffect(() => {
        // handlePageClick({ selected: 0 })
        setItems([...Array(totalDataCount).keys()])
    }, [itemsPerPage, totalDataCount])
    console.log("item per page", itemOffset)
    console.log("This is page count", pageCount)
    return (
        <>
            {/* <Items currentItems={currentItems} /> */}
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={0}
            />
        </>
    );
}



export default PaginationData