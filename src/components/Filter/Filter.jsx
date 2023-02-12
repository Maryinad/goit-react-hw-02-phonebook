import React from 'react';
export function Filter({ value, onFilterChange }) {
  return (
    <>
      <h2>Find contact by name</h2>
      <input
        type="text"
        name="filter"
        onChange={onFilterChange}
        value={value}
      />
    </>
  );
}
