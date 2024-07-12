import { useEffect, useState } from "react";

type UsePaginationItem = {
  onClick: React.ReactEventHandler;
  type: string | number;
  page: number | string;
  selected: boolean;
};

type ItemsTypes = {
  items: UsePaginationItem[];
  previous: () => void;
  disabledPrevious: boolean;
  disabledNext: boolean;
  next: () => void;
  page: number;
};

type Props = {
  boundaryCount?: number;
  count: number;
  onChange?: (page: number) => void;
  page?: number;
  siblingCount?: number;
};

export default function usePagination(props: Props): ItemsTypes {
  const {
    boundaryCount = 1,
    count = 0,
    onChange: handleChange,
    page: pageProp,
    siblingCount = 1,
  } = props;
  
  const [page, setPage] = useState<number>(pageProp || 1);

  useEffect(() => {
    if (pageProp !== undefined && pageProp !== page) {
      setPage(pageProp);
    }
  }, [pageProp, page]);

  const handleClick = (value: number) => {
    setPage(value);
    if (handleChange) {
      handleChange(value);
    }
  };

  const range = (start: number, end: number): number[] => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count
  );

  const siblingsStart = Math.max(
    Math.min(page - siblingCount, count - boundaryCount - siblingCount - 1),
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount + 2),
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  );

  const itemList: (number | string)[] = [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2
      ? ["start-ellipsis"]
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < count - boundaryCount - 1
      ? ["end-ellipsis"]
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),
    ...endPages,
  ];

  function previous() {
    if (page > 1) {
      handleClick(page - 1);
    }
  }

  function next() {
    if (count > page) {
      handleClick(page + 1);
    }
  }

  function getList(item: number | string): UsePaginationItem {
    return {
      onClick: () => handleClick(item as number),
      page: item,
      type: item,
      selected: item === page,
    };
  }

  const items: UsePaginationItem[] = itemList.map((item) => getList(item));

  return {
    items,
    previous,
    disabledPrevious: page <= 1,
    disabledNext: page >= count,
    next,
    page,
  };
}