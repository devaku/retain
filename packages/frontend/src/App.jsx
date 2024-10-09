import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Deck from './components/Deck';

function App() {
	let [showSidebar, setShowSidebar] = useState(false);
	return (
		<>
			<div className="flex flex-col">
				<Navbar
					setShowSidebar={setShowSidebar}
					showSidebar={showSidebar}></Navbar>
				<Sidebar showSidebar={showSidebar}></Sidebar>
				<Deck></Deck>
			</div>
		</>
	);
}

export default App;
