import { FormGroup } from './styles';

const ShippingData = ({ address, country, city, zip, onChange }) => {
  return (
    <>
      <FormGroup>
        <label htmlFor='country'>Country:</label>
        <select name='country' id='country' required onChange={onChange}>
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
        <input
          type='text'
          name='city'
          id='city'
          value={city}
          onChange={onChange}
          required
        />
        <label htmlFor='address'>Address:</label>
        <input
          type='text'
          name='address'
          id='address'
          value={address}
          onChange={onChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor='zip'>Zip Code:</label>
        <input
          type='number'
          name='zip'
          id='zip'
          value={zip}
          onChange={onChange}
          required
        />
      </FormGroup>
    </>
  );
};

export default ShippingData;
