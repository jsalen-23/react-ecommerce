import { useContext, useState, lazy, Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useForm } from '../../hooks/useForm';
import Button from '../Button';
import Loading from '../Loading';

import { Header, ButtonWrapper } from './styles';

const ConfirmData = lazy(() => import('./ConfirmData'));
const ContactData = lazy(() => import('./ContactData'));
const PersonalData = lazy(() => import('./PersonalData'));
const ShippingData = lazy(() => import('./ShippingData'));

const UserForm = () => {
  const history = useHistory();
  const { addBuyer } = useContext(AppContext);
  const initialState = {
    name: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    address: '',
    zip: '',
    phone: '',
  };
  const [state, onChange] = useForm(initialState);
  const { name, lastName, email, country, city, address, zip, phone } = state;
  const [step, setStep] = useState(1);

  const handleBack = (e) => {
    e.preventDefault();
    if (step === 1) return history.push('/cart');

    setStep(step - 1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBuyer(state);
    history.push('/checkout/payment');
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header>Step: {step}/3</Header>
        <form>
          {step === 1 && (
            <PersonalData name={name} lastName={lastName} onChange={onChange} />
          )}
          {step === 2 && (
            <ContactData email={email} phone={phone} onChange={onChange} />
          )}
          {step === 3 && (
            <ShippingData
              address={address}
              country={country}
              city={city}
              zip={zip}
              onChange={onChange}
            />
          )}
          {step === 4 && <ConfirmData {...state} />}
          <ButtonWrapper>
            <Button size='md' variant='warning' onClick={handleBack}>
              {step === 1 ? 'Cancel' : 'Back'}
            </Button>
            <Button
              size='md'
              variant='primary'
              onClick={step === 4 ? handleSubmit : handleNext}
            >
              {step === 4 ? 'Submit' : 'Next'}
            </Button>
          </ButtonWrapper>
        </form>
      </Suspense>
    </>
  );
};

export default UserForm;
