import { useContext } from 'react';
import TextContext from '../context/TaskContext';

const useTextContext = () => {
    return useContext(TextContext);
};
export default useTextContext;
