
interface FormParent {
  children: React.ReactNode,
  currentStep: number,
  prevFormStep: () => void
}

export function FormParent({ children, currentStep, prevFormStep }: FormParent) {
  return (
    <div>
      {currentStep < 4 && (
        <>
          {currentStep > 0 && (
            <button
              onClick={prevFormStep}
              type="button"
            >
              back
            </button>
          )}

          <span>Step {currentStep + 1} of 4</span>
        </>
      )}
      {children}
    </div>
  );
}
