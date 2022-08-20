import React, { useState, useMemo } from 'react';
// import data from '../data/mock-data.json';
import Pagination from '../components/pagination/pagination';
import '../styles/pagination/style.css';
import { useSelector } from 'react-redux';

let PageSize = 3;

function TodoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const data = useSelector((state) => state.todo.todos);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className='todolist__container'>
      <div className='todolist__block'>
        {currentTableData.map((item, idx) => {
          return (
            <div className='item' key={idx}>
              {item}
            </div>
          );
        })}
      </div>
      <Pagination
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default TodoList;
