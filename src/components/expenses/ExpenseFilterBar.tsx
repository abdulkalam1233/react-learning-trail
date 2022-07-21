import React, { useEffect } from 'react';
import DropDown from '../ui/DropDown';
import Search from '../ui/Search';

function ExpenseFilterBar({
  filters,
  setFilters,
}: {
  filters: { search: string; year: number | string };
  setFilters: (data: { search: string; year: number | string }) => void;
}) {
  const ref = React.createRef<HTMLInputElement>();
  const date = new Date();
  const years: Array<number> = [
    date.getFullYear() - 0,
    date.getFullYear() - 1,
    date.getFullYear() - 2,
  ];

  const handleSearchChange = () => {
    setFilters({
      ...filters,
      search: ref?.current?.value ?? '',
    });
  };

  const handleYearChange = (year: number | string) => {
    console.log(year);
    setFilters({
      ...filters,
      year: year,
    });
  };

  return (
    <div className="mb-4 text-black flex justify-between">
      <Search ref={ref} onChange={handleSearchChange} />
          <DropDown data={years} onChange={handleYearChange} defaultValue={ filters.year} />
    </div>
  );
}

export default ExpenseFilterBar;
