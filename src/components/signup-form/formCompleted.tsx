import { useFormData } from "~/lib/context/form-context";

const FormCompleted = () => {
  const { data } = useFormData();
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}

export { FormCompleted }
