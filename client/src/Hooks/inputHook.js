import {useState} from 'react';

export const useInput = orgValue => {
  const [value, setValue] = useState(orgValue);

  return{
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: e => {
        setValue(e.target.value); 
      }
    }
  }
}