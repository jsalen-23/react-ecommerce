import { useState } from 'react';

export const useForm = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onChange = (e) =>
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });

  return [value, onChange];
};
