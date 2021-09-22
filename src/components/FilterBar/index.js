import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Wrapper, Select } from './styles';

const FilterBar = () => {
  const { changeCategory, category } = useContext(AppContext);

  const handleChange = ({ target }) => {
    changeCategory(target.value !== 'all' ? target.value : null);
  };

  return (
    <Wrapper>
      <Select name='filter' onChange={handleChange}>
        <option value='' hidden defaultValue>
          Filter Category
        </option>
        {category !== null && <option value={'all'}>Everything</option>}
        <option value='electronics'>Electronics</option>
        <option value='jewelery'>Jewelery</option>
        <option value={`men's clothing`}>Men's Clothing</option>
        <option value={`women's clothing`}>Womens Clothing</option>
      </Select>
    </Wrapper>
  );
};

export default FilterBar;
