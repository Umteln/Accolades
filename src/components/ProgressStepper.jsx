import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputArea from './InputArea';
import useTextContext from '../hooks/useTaskContext';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';

const ProgressStepper = () => {
    const router = useRouter();
    const [complete, setComplete] = useState(0);
    const {
        page,
        steps,
        setPage,
        handleNext,
        handleBack,
        handleSkip,
        handleReset,
    } = useTextContext();

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={page}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step
                            key={label}
                            {...stepProps}
                        >
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {page === steps.length ? (
                <div className='bg-white min-h-[60vh]'>
                    <div className='w-[500px] m-auto mt-[160px] bg-[#dcdcdc] p-[50px] rounded-2xl flex flex-col justify-center items-center'>
                        <p className='text-purple-300 text-4xl'>
                            <BsStarFill />
                        </p>
                        <h2 className='uppercase font-bold text-4xl text-purple-600 mt-[15px]'>
                            Wow! You Did It!
                        </h2>

                        <p className='text-[16px] font-bold text-center m-[10px] mt-[30px] text-gray-600 '>
                            You finished all your task.
                        </p>

                        <button
                            type='button'
                            width='300px'
                            className='btn'
                            onClick={handleReset}
                        >
                            Return to Task Board
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        <InputArea page={page} />
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color='inherit'
                            disabled={page === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button onClick={handleNext}>
                            {page === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};
export default ProgressStepper;
