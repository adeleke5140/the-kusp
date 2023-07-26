import { useFormData } from "~/lib/context/form-context"
import { useForm } from "react-hook-form"
import { Button } from "~/components/button"
interface FormProps {
  formStep: number,
  nextFormStep: () => void
}

const CVForm = ({ formStep, nextFormStep }: FormProps) => {
  const formData = useFormData()
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" })

  const onSubmit = (values: Record<string, unknown>) => {
    formData?.setFormValues(values)
    nextFormStep()
  }
  return (
    <section className={`w-full mb-16 ${formStep === 2 ? 'block' : 'hidden'}`}>
      <h1 className="text-3xl mb-12 font-medium">Upload your CV</h1>
      <form className="pr-40 flex flex-col divide-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label className="text-sm block" htmlFor="image">
            CV Document
          </label>
          <input
            type="file"
            id="image"
            {...register("image", { required: true })}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-black hover:file:bg-primary/20"
          />
          <span className="text-xs text-secondary">Max size: 20MB</span>
          {errors.image && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        <Button className="w-full mt-12">
          Continue
        </Button>
      </form>
    </section>)
}

export { CVForm }
