import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";
import styles from "./styles.module.css";
import arrow from "../../assets/icons/arrow.svg";
import { Input } from "../global/Input";

const startStep = 1;
const endStep = 4;

export const NewProjectForm: React.FC = () => {
  const [step, setStep] = useState(startStep);

  function nextStep() {
    if (step < endStep) {
      setStep(step + 1);
    }
  }

  function backStep() {
    if (step > startStep) {
      setStep(step - 1);
    }
  }

  return (
    <div className={styles.section}>
      <div className={styles.formWrapper}>
        <div className={styles.progressWrapper}>
          <div className={styles.progressBg}>
            <div
              className={styles.progress}
              style={{ width: `${25 * step}%` }}
            ></div>
          </div>
          <p className={styles.currentStep}>
            Step {step} of {endStep}
          </p>
        </div>

        <form className={styles.form}>
          {step === 1 && (
            <>
              <h3 className={styles.stepTitle}>
                Let’s start at the very beginning
              </h3>
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="text" placeholder="Company" />
            </>
          )}
          {step === 2 && (
            <>
              <h3 className={styles.stepTitle}>
                Let’s talk budget & timelines
              </h3>
              <div className={styles.launch}>
                <p>I want to launch my project on:</p>
                <Input type="text" placeholder="DD/MM/YYYY" />
              </div>
              <div className={styles.budget}>
                <p>My budget is between</p>
                <Input type="number" placeholder="" />
                <p>and</p>
                <Input type="text" placeholder="" />
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <h3 className={styles.stepTitle}>
                What services do you require?
                <div className={styles.services}>
                  <Checkbox />
                </div>
              </h3>
            </>
          )}
          {step === 4 && (
            <>
              <h3 className={styles.stepTitle}>Give us the deets!</h3>
              <textarea
                className={styles.textarea}
                placeholder="Please provide a summary of your project"
              ></textarea>
            </>
          )}

          <div className={styles.buttons}>
            {step !== 1 && (
              <button type="button" onClick={backStep} className={styles.back}>
                <img className={styles.arrow} src={arrow.src} alt="back" />
                Back
              </button>
            )}
            {step !== 4 && (
              <Button type="button" onClick={nextStep}>
                Next step
              </Button>
            )}
            {step === 4 && <Button>Send Enquiry</Button>}
          </div>
        </form>
      </div>
    </div>
  );
};
