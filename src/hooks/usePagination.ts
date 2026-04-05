import { useState, useMemo, useEffect } from "react";

export const usePagination = <T>(contents: T[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = useMemo(() => {
    return Math.ceil(contents.length / 10) || 1;
  }, [contents]);

  const pageUp = () => {
    setCurrentPage(Math.min(currentPage + 1, lastPage));
  };

  const pageDown = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const jumpToPage = (page: number) => {
    setCurrentPage(page);
  };

  const pagedContents = useMemo(() => {
    return contents.slice((currentPage - 1) * 10, currentPage * 10);
  }, [contents, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [contents]);

  return { pagedContents, currentPage, lastPage, pageUp, pageDown, jumpToPage };
};
