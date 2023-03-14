import React, { useEffect, useState } from 'react';
import { Button, Grid, Step, StepLabel, Stepper, TextField, Typography,Box } from '@mui/material';
import PersonalDetails from './form/PersonalDetails';
import BankDetails from './form/BankDetails';
import UserContext from './UserContext';
import * as yup from 'yup';
import {Formik, useFormik} from "formik"


const StepperUser = () => {

 const  [user, setUser] = useState([])

 
  function getSteps(){
    return [
      "Personal Details",
      "Bank Details",
      "Educational Details",
      "Experiance Details",
    ]
  }



  const getStepContent = (step) =>{
 switch(step){
  case 0:
  return (
    <>

    <PersonalDetails onError={onError} onSuccess={onSuccess}/>
    {/* isValid={isValid} setIsValid={setIsValid} getUser={getUser} */}
    </>
  )
  case 1: 
  return(
    <>
   <BankDetails onError={onError} onSuccess={onSuccess}/>
    </>
  )
  case 2:
    return(
      <>
   
      </>
    )
 }
  }

  

  const [activeStep, setActiveStep] = useState(0)
const [isValid, setIsValid] = useState(true)
 

const steps = getSteps()

  const handleNext = () =>{
    setActiveStep(activeStep + 1)
  }
  const handleBack = () =>{
    setActiveStep(activeStep - 1)
  }

const onSuccess = (values) => {
  setUser(values)
  console.log("data", user);
 setIsValid(true)
}

const onError = () => {
 setIsValid(false)
}

  
  return ( 
    <>

<Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step,index) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
       
       <hr/>


       {getStepContent(activeStep)}
       <div style={{justifyContent:"space-between", display:"flex"}}>
        <div>
            <Button variant='contained' color='primary'onClick={handleBack} >Back</Button>
            </div>
          <div>
          <Button variant='contained' color='primary'  onClick={handleNext} onSubmit={onSuccess} disabled={!isValid}>
          
           Next
          </Button>
          </div>
          </div>
          
        
        
  
    </>
   );
}
 
export default StepperUser;