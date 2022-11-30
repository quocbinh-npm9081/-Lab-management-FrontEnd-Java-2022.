import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { IUserSubmit } from '../../views/Login';
interface IPropsForm {
  onSubmit: (data: any) => void;
  children: any;
  defaultValues: IUserSubmit;
}
const Form: React.FC<IPropsForm> = ({ onSubmit, children, defaultValues }) => {
  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
export default Form;
