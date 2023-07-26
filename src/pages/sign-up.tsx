import Head from "next/head";
import { useState } from "react";
import Layout from "~/components/layout";
import { FormParent } from "~/components/signup-form/formParent";
import { CVForm } from "~/components/signup-form/forms/cv";
import { PersonalInfo } from "~/components/signup-form/forms/personal-info";
import { Skills } from "~/components/signup-form/forms/skills";
import { SocialLinks } from "~/components/signup-form/forms/social-links";

const SignUpPage = () => {
  const [formStep, setFormStep] = useState(0)

  const nextFormStep = () => setFormStep(formStep + 1)
  const prevFormStep = () => setFormStep(formStep - 1)

  return (
    <>
      <Head>
        <title>Sign Up to Kusp</title>
      </Head>
      <Layout>
        <div></div>
        <section className="flex flex-col px-10 pt-32">
          <FormParent currentStep={formStep} prevFormStep={prevFormStep}>
            {formStep === 0 && <PersonalInfo formStep={0} nextFormStep={nextFormStep} />}
            {formStep === 1 && <Skills formStep={1} nextFormStep={nextFormStep} />}
            {formStep === 2 && <CVForm formStep={2} nextFormStep={nextFormStep} />}
            {formStep === 3 && <SocialLinks formStep={3} nextFormStep={nextFormStep} />}
          </FormParent>
        </section>
      </Layout>
    </>
  );
};

export default SignUpPage;
