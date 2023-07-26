import { createContext, useContext, useState } from "react";

interface FormContextProps {
  data: Record<string, unknown>;
  setFormValues: (values: Record<string, unknown>) => void;
}

export const FormContext = createContext<FormContextProps | null>(null);


interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [data, setData] = useState({});

  const setFormValues = (values: Record<string, unknown>) => {
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
