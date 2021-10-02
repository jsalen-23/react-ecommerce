import useAutoFocus from '../../hooks/useAutoFocus';
import { FormGroup } from './styles';
const ContactData = ({ email, phone, onChange }) => {
  const [input] = useAutoFocus();
  return (
    <>
      <FormGroup>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={onChange}
          ref={input}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor='phone'>Phone Number:</label>
        <input
          type='text'
          name='phone'
          id='phone'
          value={phone}
          onChange={onChange}
          required
        />
      </FormGroup>
    </>
  );
};

export default ContactData;
