import useTextContext from '@/hooks/useTaskContext';
import TaskOneDisplay from './steps/StepOne';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import TaskChoices from './TaskChoices';

const InputArea = () => {
    const { page } = useTextContext();

    const display = {
        0: <StepOne />,
        1: <StepTwo />,
        2: <StepThree />,
        3: <StepFour />,
    };

    return (
        <>
            <div className='flex flex-col justify-center items-center m-5'>
                {display[page]}
            </div>
            <TaskChoices />
        </>
    );
};

export default InputArea;
