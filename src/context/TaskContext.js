import { createContext, useState, useEffect } from 'react';

const TextContext = createContext({});

export const TextContextProvider = ({ children }) => {
    //lookup obj
    const title = {
        0: 'First',
        1: 'Next',
        2: 'Then',
        3: 'Last',
    };
    const [boardOne, setBoardOne] = useState([]);
    const [boardTwo, setBoardTwo] = useState([]);
    const [boardThree, setBoardThree] = useState([]);
    const [boardFour, setBoardFour] = useState([]);

    const handleTaskBoardReset = () => {
        setBoardOne([]);
        setBoardTwo([]);
        setBoardThree([]);
        setBoardFour([]);
    };

    const [page, setPage] = useState(0);
    const steps = ['First', 'Next', 'Then', 'Last'];

    const handleNext = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleBack = () => {
        setPage((prevPage) => prevPage - 1);
    };
    const clearTasks = () => {
        setBoardOne([]);
        setBoardTwo([]);
        setBoardThree([]);
        setBoardFour([]);
    };
    const handleReset = () => {
        setPage(0);
    };
    return (
        <TextContext.Provider
            value={{
                title,
                page,
                setPage,
                boardFour,
                setBoardFour,
                boardThree,
                setBoardThree,
                boardTwo,
                setBoardTwo,
                boardOne,
                setBoardOne,
                handleTaskBoardReset,
                steps,
                handleBack,
                handleNext,
                handleReset,
                clearTasks,
            }}
        >
            {children}
        </TextContext.Provider>
    );
};

export default TextContext;
