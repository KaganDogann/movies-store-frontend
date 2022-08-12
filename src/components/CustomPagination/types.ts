export interface CustomPaginationProps {
    pagesCount: number;
    currentPage: number;
    setCurrentPage: (pageNumber: number) => void;
    alwaysShown?: boolean;
  }
  