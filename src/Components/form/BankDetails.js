import React,{useEffect, useState} from 'react';
import { Button, Grid, Step, StepLabel, Stepper, TextField, Typography,Box } from '@mui/material';
import { useFormik } from 'formik';

const BankDetails = ({onSuccess, onError}) => {

  const formik = useFormik({
    initialValues: {
      bankName:"", 
      ifscCode:"", 
      accNo:"", 
      aadhar:"", 
      pan:"", 
    },
    
    onSubmit : (values) => {
     console.log("data", values); 
    }
  });
  
  useEffect(()=>{
    if(formik.isValid){
     onSuccess(formik.values)
    }else{
     onError()
    }
   },[formik])


    return ( 
        <>
         <Box component="form" >
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="bankName"
                  required
                  fullWidth
                  id="bankName"
                  label="Bank Name"
                  onChange={formik.handleChange}
                  value={formik.values.banksName}
                  onBlur={formik.handleBlur}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="accNo"
                  label="Account No."
                  name="accNo"
                  onChange={formik.handleChange}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="ifscCode"
                  label="IFSC Code No."
                  name="ifscCode"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="aadhar"
                  label="Aadhar No."
                  name="aadhar"
                  onChange={formik.handleChange}
                  autoComplete="mobile"
                 
                />
              </Grid>
              <Grid item xs={6} style={{paddingBottom: 80}}>
                <TextField
                  required
                  fullWidth
                  id="pan"
                  label="PAN No."
                  name="pan"
                  onChange={formik.handleChange}
                />
              </Grid>
             
    </Grid>

    
    </Box>
        
        </>
     );
}
 
export default BankDetails;