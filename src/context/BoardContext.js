import React, { createContext, useContext, useState } from 'react';
// import { toast } from 'react-hot-toast';

const Context = createContext();

export const BoardContext = ({ children }) => {
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

	return (
		<Context.Provider
			value={{
				boardFour,
				setBoardFour,
				boardThree,
				setBoardThree,
				boardTwo,
				setBoardTwo,
				boardOne,
				setBoardOne,
				handleTaskBoardReset,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useBoardContext = () => useContext(Context);
