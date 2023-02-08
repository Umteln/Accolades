import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<DndProvider backend={HTML5Backend}>
				<Sidebar>
					<Component {...pageProps} />
				</Sidebar>
			</DndProvider>
		</RecoilRoot>
	);
}
