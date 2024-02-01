import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { useSearchParams } from "react-router-dom";

const TablePagination = ({
  next = true,
  previous = false,
  currentPage = 1,
  pageQueryName,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function nextPage() {
    if (!next) return;
    searchParams.set(pageQueryName, currentPage + 1);

    setSearchParams(searchParams);
  }

  function prevPage() {
    if (!previous) return;
    searchParams.set(pageQueryName, currentPage - 1);

    setSearchParams(searchParams);
  }

  if (!next && !previous) return null;

  return (
    <Pagination>
      <PaginationContent>
        {previous && (
          <PaginationItem>
            <PaginationPrevious onClick={prevPage} />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink>{currentPage}</PaginationLink>
        </PaginationItem>
        {next && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={nextPage} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
