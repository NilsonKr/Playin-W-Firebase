import { useState } from "react";

type InitialValues = { [k: string]: any };
type ReturnObject = {
  form: InitialValues;
  handleChange: (value: string, key: string) => void;
};

export const useForm = (intialValues: InitialValues): ReturnObject => {
  const [form, setForm] = useState(intialValues);

  const handleChange = (value: string, key: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return { form, handleChange };
};
