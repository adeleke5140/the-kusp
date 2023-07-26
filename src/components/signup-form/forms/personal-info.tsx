import { useFormData } from "~/lib/context/form-context"
import { useForm } from "react-hook-form"
import { Button } from "~/components/button"
interface FormProps {
  formStep: number,
  nextFormStep: () => void
}

const PersonalInfo = ({ formStep, nextFormStep }: FormProps) => {
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
    <section className={`w-full mb-16 ${formStep === 0 ? 'block' : 'hidden'}`}>
      <h1 className="text-3xl mb-12 font-medium">Tell us about yourself</h1>
      <form className="pr-40 flex flex-col divide-y-2" onSubmit={handleSubmit(onSubmit)}>
        <section className="flex flex-col gap-8 pb-8 ">
          <div>
            <label className="sr-only" htmlFor="image">
              Upload image
            </label>
            <input
              type="file"
              id="image"
              {...register("image", { required: true })}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-black hover:file:bg-primary/20"
            />
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="firstName" className="block text-sm">First Name</label>
              <input
                type="text"
                id="firstName"
                className="rounded-lg border-2 border-gray-200 px-3 py-3"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-xs text-red-500 absolute top-0 right-0">First Name is required</span>
              )}
            </div>
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="lastName" className="block text-sm">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="rounded-lg border-2 border-gray-200 px-3 py-3"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="text-xs text-red-500 absolute top-0 right-0">Last Name is required</span>
              )}
            </div>
          </div>
          <div>
            <fieldset className="flex flex-col gap-3">
              <legend className="block mb-1">Gender</legend>
              <div className="flex gap-3 justify-between">
                <div>
                  <label className="flex gap-4 rounded-lg border-2 border-gray-200 px-3 py-3">
                    <input
                      type="radio"
                      id="male"
                      {...register("gender", { required: true })}
                    />
                    <span>Male</span>
                  </label>
                </div>
                <div>
                  <label className="flex gap-4 rounded-lg border-2 border-gray-200 px-3 py-3">
                    <input
                      type="radio"
                      id="female"
                      {...register("gender", { required: true })}
                    />
                    <span> Female</span>
                  </label>
                </div>
                <div>
                  <label className="flex gap-4 rounded-lg border-2 border-gray-200 px-3 py-3">
                    <input
                      type="radio"
                      id="nonBinary"
                      {...register("gender", { required: true })}
                    />
                    Non-binary
                  </label>
                </div>
                {errors.gender && (
                  <span className="text-xs text-red-500 absolute top-0 right-0">gender is required</span>
                )}
              </div>
            </fieldset>
          </div>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="dateOfBirth" className="text-sm block">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              className="rounded-lg border-2 border-gray-200 px-3 py-3 w-full"
              {...register("dateOfBirth", { required: true })}
            />
            {errors.dateOfBirth && (
              <span className="text-xs text-red-500 absolute top-0 right-0">Date of birth is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="phoneNumber" className="text-sm block">Phone Number</label>
            <input
              type="number"
              id="phoneNumber"
              className="rounded-lg border-2 border-gray-200 px-3 py-3"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <span className="text-xs text-red-500 absolute top-0 right-0">Phone Number is required</span>
            )}
          </div>
        </section>
        <section className="pt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="address" className="text-sm block">Address</label>
            <input
              type="text"
              id="address"
              className="rounded-lg border-2 border-gray-200 px-3 py-3"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-xs text-red-500 absolute top-0 right-0">Address is required</span>
            )}
          </div>
          <div className="flex gap-6 justify-between">
            <div className="flex flex-col gap-1 relative flex-1">
              <label htmlFor="country" className="text-sm block">Country</label>
              <select
                id="country"
                className="basis-1/2 rounded-lg border-2 border-gray-200 px-3 py-3 w-full"
                {...register("country", { required: true })}
              ><option value="">Select country</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
              {errors.country && (
                <span className="text-xs text-red-500 absolute top-0 right-0">Country is required</span>
              )}
            </div>
            <div className="flex flex-col gap-1 relative flex-1">
              <label htmlFor="city" className="text-sm block">City</label>
              <select
                id="city"
                className="basis-1/2 rounded-lg border-2 border-gray-200 px-3 py-3"
                {...register("city", { required: true })}
              ><option value="">Select city</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
              {errors.city && (
                <span className="text-xs text-red-500 absolute top-0 right-0">City is required</span>
              )}
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="zip" className="block text-sm">ZIP/Postal Code</label>
              <input
                id="zip"
                type="number"
                className="rounded-lg border-2 border-gray-200 px-3 py-3"
                {...register("zip", { required: true })}
              />
              {errors.zip && (
                <span className="text-xs text-red-500">ZIP/Postal Code is required</span>
              )}
            </div>
            <div className="flex flex-col gap-1 relative flex-1">
              <label htmlFor="timeZone" className="text-sm block">Timezone</label>
              <select
                id="timeZone"
                className="rounded-lg border-2 border-gray-200 px-3 py-3"
                {...register("timeZone", { required: true })}
              ><option value="">Select timezone</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
              {errors.timeZone && (
                <span className="text-xs text-red-500 absolute top-0 right-0">TimeZone is required</span>
              )}
            </div>
          </div>
        </section>
        <Button className="w-full mt-12">
          Continue
        </Button>
      </form>
    </section>)
}

export { PersonalInfo }
