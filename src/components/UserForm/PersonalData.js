import useAutoFocus from '../../hooks/useAutoFocus';
import { FormGroup } from './styles';
const PersonalData = ({ name, lastName, onChange }) => {
  const [input] = useAutoFocus();
  return (
    <>
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
