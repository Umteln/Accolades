import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { TextContextProvider } from '@/context/TaskContext';

export default function App({ Component, pageProps }) {
    return (
        <TextContextProvider>
            <DndProvider backend={HTML5Backend}>
                <Sidebar>
                    <Component {...pageProps} />
                </Sidebar>
            </DndProvider>
        </TextContextProvider>
    );
}
