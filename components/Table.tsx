
import React from 'react';
import type { TableData } from '../types';
import ColorizedText from './ColorizedText';

interface TableProps {
  data: TableData;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto my-6 rounded-lg border border-slate-700">
      <table className="min-w-full divide-y divide-slate-700">
        <thead className="bg-slate-700/50">
          <tr>
            {data.headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-slate-800 divide-y divide-slate-700">
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-slate-700/40 transition-colors">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-slate-300"
                >
                  <ColorizedText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;