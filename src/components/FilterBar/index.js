import { Wrapper, Select } from './styles';
import { MdFilterList } from 'react-icons/md';

const FilterBar = () => {
  return (
    <Wrapper>
      <Select name='filter'>
        <option value='' hidden defaultValue>
          Filter Category
        </option>
        <option value='electronics'>Electronics</option>
        <option value='jewelery'>Jewelery</option>
        <option value={`men's clothing`}>Men's Clothing</option>
        <option value={`women's clothing`}>Womens Clothing</option>
      </Select>
    </Wrapper>
  );
};

export default FilterBar;
