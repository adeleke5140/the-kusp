import { useFormData } from "~/lib/context/form-context"
import { useForm } from "react-hook-form"
import { Button } from "~/components/button"
import { Globe, Instagram, Youtube } from "lucide-react"
interface FormProps {
  formStep: number,
  nextFormStep: () => void
}

const SocialLinks = ({ formStep, nextFormStep }: FormProps) => {
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
    <section className={`w-full mb-16 ${formStep === 3 ? 'block' : 'hidden'}`}>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">Tell us about yourself</h1>
        <p className="text-secondary text-sm">Please include links to your work, website and other relevant digital<br /> platforms</p>
      </div>
      <form className="pr-40 flex flex-col divide-y-2" onSubmit={handleSubmit(onSubmit)}>
        <section className="flex flex-col gap-8 pb-8 pt-8 ">
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="website" className="text-sm block flex gap-2 items-center">
              <Globe size={16} />
              Website</label>
            <input
              type="url"
              id="website"
              className="rounded-lg border-2 border-gray-200 px-3 py-3"
              {...register("website", { required: true })}
            />
            {errors.website && (
              <span className="text-xs text-red-500 absolute top-0 right-0">website is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="instagram" className="text-sm block flex gap-2 items-center">
              <Instagram size={16} />
              Instagram
              <span className="text-secondary">*optional</span>
            </label>
            <input
              type="number"
              id="instagram"
              className="rounded-lg border-2 border-gray-200 px-3 py-3"
              {...register("instagram", { required: false })}
            />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="youtube" className="text-sm block flex gap-2 items-center">
              <Youtube size={16} />
              Youtube
              <span className="text-secondary">*optional</span>
            </label>
            <input
              type="number"
              id="youtube"
              className="rounded-lg border-2 border-gray-200 px-3 py-3"
              {...register("youtube", { required: false })}
            />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="vimeo" className="text-sm block flex gap-2 items-center">
              <Globe size={16} />
              Vimeo
              <span className="text-secondary">*optional</span></label>
            <input
              type="number"
              id="vimeo"
              className="rounded-lg border-2 border-gray-200 px-3 py-3"
              {...register("vimeo", { required: false })}
            />
          </div>
        </section>

        <Button className="w-full mt-12">
          Continue
        </Button>
      </form>
    </section>)
}

export { SocialLinks }
