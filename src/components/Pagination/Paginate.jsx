import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Paginate = ({ show, blogs, setCurrentBlog }) => {
    const blogPerPage = 3;
    const [firstBlog, setFirstBlog] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const lastBlog = firstBlog + blogPerPage;

        setCurrentBlog(blogs.slice(firstBlog, lastBlog));
        setPageCount(Math.ceil(blogs.length / blogPerPage))
    }, [firstBlog, blogPerPage, blogs]);

    // Invoke when there's a request to another page
    const handlePageClick = (event) => {
        const newOffset = (event.selected * blogPerPage) % blogs.length;

        setFirstBlog(newOffset);
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
