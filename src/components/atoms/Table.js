// src/components/atoms/Table.js
import React from 'react';

const Table = ({ headers, children }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

export default Table;
