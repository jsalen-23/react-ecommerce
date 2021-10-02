import { useEffect, useRef } from 'react';

const useAutoFocus = () => {
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  }, []);

  return [input];
};

export default useAutoFocus;
