import { useFormData } from "~/lib/context/form-context";

const FormCompleted = () => {
  const formData = useFormData();
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-medium">Thank you for your signing up! 🎉</h2>
      <pre>{JSON.stringify(formData?.data, null, 2)}</pre>
    </div>
  )
}

export { FormCompleted }
