import { useFormData } from "~/lib/context/form-context"
import { useForm } from "react-hook-form"
import { Button } from "~/components/button"
interface FormProps {
  formStep: number,
  nextFormStep: () => void
}

const Skills = ({ formStep, nextFormStep }: FormProps) => {
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
    <section className={`w-full mb-16 ${formStep === 1 ? 'block' : 'hidden'}`}>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-medium">Select your notable skills <br /> and aspirations</h1>
        <p className="text-secondary text-sm">Please select up to 5, this will help us match you with the relevant<br /> jobs that employeers are looking to hire for.</p>
      </div>
      <form className="pr-40 flex flex-col divide-y-2" onSubmit={handleSubmit(onSubmit)}>
        <section className="pt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1 relative flex-1">
            <label htmlFor="country" className="text-sm block">Notable Skills</label>
            <select
              id="skill"
              className="basis-1/2 rounded-lg border-2 border-gray-200 px-3 py-3 w-full"
              {...register("skill", { required: true })}
            >
              <option value="">Select skills</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
            {errors.skill && (
              <span className="text-xs text-red-500 absolute top-0 right-0">Skills is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1 relative flex-1">
            <label htmlFor="aspiration" className="text-sm block">Aspirations</label>
            <select
              id="aspiration"
              className="basis-1/2 rounded-lg border-2 border-gray-200 px-3 py-3"
              {...register("aspiration", { required: true })}
            >
              <option value="">Select an aspiration</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
            {errors.aspiration && (
              <span className="text-xs text-red-500 absolute top-0 right-0">Aspiration is required</span>
            )}
          </div>
        </section>
        <Button className="w-full mt-12">
          Continue
        </Button>
      </form>
    </section>)
}

export { Skills }
