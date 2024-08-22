import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Card from './components/Card';

function App() {
	let [showSidebar, setShowSidebar] = useState(false);
	return (
		<>
			<div className="flex flex-col">
				<Navbar
					setShowSidebar={setShowSidebar}
					showSidebar={showSidebar}></Navbar>
				<Sidebar showSidebar={showSidebar}></Sidebar>
				<Card></Card>
			</div>
		</>
	);
}

export default App;
