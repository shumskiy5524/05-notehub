import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <ReactPaginate
      pageCount={totalPages}
      onPageChange={(e) => onPageChange(e.selected + 1)}
      containerClassName={css.paginationContainer}
      pageClassName={css.pageItem}
      pageLinkClassName={css.pageLink}
      previousClassName={css.previousItem}
      previousLinkClassName={css.previousLink}
      nextClassName={css.nextItem}
      nextLinkClassName={css.nextLink}
      activeClassName={css.active}
      breakLabel="..."
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      previousLabel="<"
      nextLabel=">"
    />
  );
}
