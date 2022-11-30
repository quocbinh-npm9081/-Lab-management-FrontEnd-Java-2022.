import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

interface ITextLield {
  name: string;
  label: string;
  type: string;
  id: string;
}
const TextFieldControl: React.FC<ITextLield> = ({
  name,
  label,
  type = 'text',
  id,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          margin="normal"
          required
          fullWidth
          label={label}
          type={type}
          id={id}
        />
      )}
    />
  );
};

export default TextFieldControl;
