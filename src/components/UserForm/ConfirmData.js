import { InfoCard, InfoLabel, Label } from './styles';

const ConfirmData = ({
  name,
  lastName,
  email,
  country,
  city,
  address,
  zip,
  phone,
}) => {
  return (
    <>
      <Label>Please, confirm your data:</Label>
      <InfoCard>
        <InfoLabel>
          Full Name: <span>{`${name} ${lastName}`}</span>
        </InfoLabel>
      </InfoCard>
      <InfoCard>
        <InfoLabel>
          Email: <span>{email}</span>
        </InfoLabel>
      </InfoCard>
      <InfoCard>
        <InfoLabel>
          Phone: <span>{phone}</span>
        </InfoLabel>
      </InfoCard>
      <InfoCard>
        <InfoLabel>
          Country: <span>{country}</span>
        </InfoLabel>
      </InfoCard>
      <InfoCard>
        <InfoLabel>
          City: <span>{city}</span>
        </InfoLabel>
      </InfoCard>
      <InfoCard>
        <InfoLabel>
          Address: <span>{address}</span>
        </InfoLabel>
      </InfoCard>
      <InfoCard>
        <InfoLabel>
          Zip Code: <span>{zip}</span>
        </InfoLabel>
      </InfoCard>
    </>
  );
};

export default ConfirmData;
