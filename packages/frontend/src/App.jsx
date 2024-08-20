import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
	let [showSidebar, setShowSidebar] = useState(false);
	return (
		<>
			<div className="flex flex-col">
				<Navbar
					setShowSidebar={setShowSidebar}
					showSidebar={showSidebar}></Navbar>
				<Sidebar showSidebar={showSidebar}></Sidebar>
				<div>MAIN CONTENT</div>
			</div>
		</>
	);
}

export default App;
