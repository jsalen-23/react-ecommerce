import useAutoFocus from '../../hooks/useAutoFocus';
import { FormGroup, Label } from './styles';

const PersonalData = ({ name, lastName, onChange }) => {
  const [input] = useAutoFocus();
  return (
    <>
      <Label>Personal Information</Label>
      <FormGroup>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={onChange}
          required
          ref={input}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          name='lastName'
          id='last-name'
          value={lastName}
          onChange={onChange}
          required
        />
      </FormGroup>
    </>
  );
};

export default PersonalData;
