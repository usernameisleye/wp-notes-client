import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Paginate = ({ show, posts, setCurrentPost }) => {
    const itemsPerPage = 3;
    const [firstPost, setFirstPost] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const lastPost = firstPost + itemsPerPage;

        setCurrentPost(posts.slice(firstPost, lastPost));
        setPageCount(Math.ceil(posts.length / itemsPerPage))
    }, [firstPost, itemsPerPage, posts]);

    // Invoke when there's a request to another page
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % posts.length;

        setFirstPost(newOffset);
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<IoIosArrowForward />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel={<IoIosArrowBack />}
                renderOnZeroPageCount={null}

                // Style classes
                containerClassName={`Pagination ${ show ? "*" : "none" }`}
                pageClassName="Pagination_body"
                pageLinkClassName="Pagination_num"
                nextLinkClassName="Pagination_btn next"
                previousClassName="Pagination_btn prev"
                activeClassName="Pagination_active"
            />
        </>
    );
}
 
export default Paginate;
