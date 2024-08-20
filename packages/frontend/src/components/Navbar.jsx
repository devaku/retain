import SvgBurger from './svgs/SvgBurger';
import SvgCross from './svgs/SvgCross';

function Navbar({ setShowSidebar, showSidebar }) {
	function HeaderIcon({ showSidebar }) {
		if (showSidebar) {
			return <SvgCross></SvgCross>;
		} else {
			return <SvgBurger></SvgBurger>;
		}
	}
	function handleSidebarClick() {
		setShowSidebar(!showSidebar);
	}

	return (
		<>
			<nav className="z-10 bg-primary-yellow h-14 flex items-center text-2xl">
				<div onClick={handleSidebarClick} className="mx-4 h-10 w-10">
					<HeaderIcon showSidebar={showSidebar}></HeaderIcon>
				</div>
				<div>
					<h1>Retain</h1>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
