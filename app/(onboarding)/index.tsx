import { useState } from 'react'
import StepOne from '@/components/onboarding/StepOne'
import StepTwo from '@/components/onboarding/StepTwo'
import StepThree from '@/components/onboarding/StepThree'
import { useRouter } from 'expo-router'
import { ScrollView } from 'react-native'

export default function Main () {
  const [currentStep, setCurrentStep] = useState<number|null>(0)
  const router = useRouter() 


  // NEXT TAKE US TO NEXT STEP!
  const handleNextStep = () => {
    // IF STEP IS TWO THEN MOVE TO CREATE ACCOUNT!
    if(currentStep === 2) {
        router.push('(auth)/create-account')
    }else{
        setCurrentStep(currentStep + 1)
    }
  }

  const handleSkip = () => {
    router.push('(auth)/create-account')
  }

  return (
    <ScrollView>
      {/* IF STEP ONE! */}
      {currentStep === 0 && (
        <StepOne handleNextStep={handleNextStep} currentStep={currentStep} handleSkip={handleSkip}/>
      )}

      {/* IF STEP TWO! */}
      {currentStep === 1 && (
        <StepTwo handleNextStep={handleNextStep} currentStep={currentStep} handleSkip={handleSkip}/>
      )}

      {/* IF STEP THREE! */}
      {currentStep === 2 && (
        <StepThree handleNextStep={handleNextStep} currentStep={currentStep} handleSkip={handleSkip}/>
      )}
    </ScrollView>
  )
}
