import { createContext, useContext, useState } from "react";

interface FormContextProps {
  data: { [key: string]: any };
  setFormValues: (values: any) => void;
}

export const FormContext = createContext<FormContextProps>(
  {
    data: {},
    setFormValues: () => { }
  }
);


interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [data, setData] = useState({});

  const setFormValues = (values: any) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values
    }))
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
