import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Button from '../Button';

import { Wrapper, FormGroup } from './styles';

const UserForm = () => {
  const { addBuyer } = useContext(AppContext);

  return (
    <Wrapper>
      <form>
        <FormGroup>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' required />
        </FormGroup>
        <FormGroup>
          <label htmlFor='last-name'>Last Name:</label>
          <input type='text' name='last-name' id='last-name' required />
        </FormGroup>
        <FormGroup>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' id='email' required />
          <label htmlFor='country'>Country:</label>
          <select name='country' id='country'>
            <option value='' hidden defaultValue>
              Select Country
            </option>
            <option value='Argentina'>Argentina</option>
            <option value='Chile'>Chile</option>
            <option value='Colombia'>Colombia</option>
            <option value='Peru'>Peru</option>
            <option value='Venezuela'>Venezuela</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor='city'>City:</label>
          <input type='text' name='city' id='city' required />
          <label htmlFor='address'>Address:</label>
          <input type='text' name='address' id='address' required />
        </FormGroup>
        <FormGroup>
          <label htmlFor='zip'>Zip Code:</label>
          <input type='number' name='zip' id='zip' required />
          <label htmlFor='phone'>Phone Number:</label>
          <input type='text' name='phone' id='phone' required />
        </FormGroup>
      </form>
      <div>
        <Button size='md' variant='warning'>
          Back
        </Button>
        <Button size='md' variant='primary'>
          Submit
        </Button>
      </div>
    </Wrapper>
  );
};

export default UserForm;
