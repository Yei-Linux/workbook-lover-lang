import { Input } from '@nextui-org/react';
import { FC } from 'react';

export interface ISearch {
  value: string;
  onSearch: (textSearch: string) => void;
}

export const Search: FC<ISearch> = ({ value, onSearch }) => {
  return (
    <div className="w-full">
      <Input
        type="search"
        label="Search"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
