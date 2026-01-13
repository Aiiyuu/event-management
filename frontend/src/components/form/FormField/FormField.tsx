'use-client';

import { TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material';

export type Props = Omit<TextFieldProps, 'variant'> & {
  name: string;
};

export const FormField = ({ name, ...props }: Props) => {
  return <TextField fullWidth name={name} variant="outlined" {...props} />;
};
