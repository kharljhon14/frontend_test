import Select from 'react-select';
import { Option, SortValue } from '@/app/types/sort';

const FIELD_OPTIONS: Option[] = [
  { label: 'Name', value: 'name' },
  { label: 'Company', value: 'company' },
  { label: 'Email', value: 'email' },
];
const DIRETION_OPTIONS: Option[] = [
  { label: 'Ascending', value: 'ascending' },
  { label: 'Descending', value: 'descending' },
];

interface ControlProps {
  handleSortValues(newSortValue: SortValue): void;
  sortValue: SortValue;
}

const Controls = ({ handleSortValues, sortValue }: ControlProps) => {
  const sortFieldOnChange = (value?: string) => {
    handleSortValues({ ...sortValue, sortKey: value });
  };

  const sortDirectionFieldOnChange = (value?: string) => {
    handleSortValues({ ...sortValue, direction: value });
  };

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label
          htmlFor="sort-field"
          className="label"
        >
          Sort Field
        </label>
        <Select
          options={FIELD_OPTIONS}
          onChange={(e) => sortFieldOnChange(e?.value)}
          inputId="sort-field"
          className="input"
        />
      </div>
      <div className="form-group group">
        <label
          htmlFor="sort-direction"
          className="label"
        >
          Sort Direction
        </label>
        <Select
          options={DIRETION_OPTIONS}
          inputId="sort-direction"
          onChange={(e) => sortDirectionFieldOnChange(e?.value)}
          className="input"
        />
      </div>
    </div>
  );
};

export default Controls;
