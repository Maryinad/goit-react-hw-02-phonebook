import React from 'react';
import { Title, InputBlock } from './Filter.styled';

export function Filter({ value, onFilterChange }) {
  return (
    <>
      <Title>Find contact by name</Title>
      <InputBlock
        type="text"
        name="filter"
        onChange={onFilterChange}
        value={value}
      />
    </>
  );
}
