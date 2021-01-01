import React, { FC } from 'react';
import { SearchResultItem } from '../typings';

const Results: FC<TProps> = ({ items = [] }) => {
  return (
    <table className="results">
      <thead className="results__header">
        <tr>
          <th className="results__header-data">Name</th>
          <th className="results__header-data">Gender</th>
          <th className="results__header-data">Age</th>
          <th className="results__header-data">Eye color</th>
          <th className="results__header-data">Favorite fruit</th>
        </tr>
      </thead>
      <tbody>
        {items.map((d) => (
          <tr key={d.id}>
            <td className="results__data">{d.name}</td>
            <td className="results__data">{d.gender}</td>
            <td className="results__data">{d.age}</td>
            <td className="results__data">{d.eyeColor}</td>
            <td className="results__data">{d.favoriteFruit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

type TProps = {
  items: SearchResultItem[];
};

export default Results;