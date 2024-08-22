import SvgGithub from './svgs/SvgGithub';
import SvgLinkedin from './svgs/SvgLinkedin';

function Sidebar({ showSidebar }) {
	return (
		<>
			<div
				className={
					'bg-blue-300 fixed h-full w-full sidebar ' +
					(showSidebar ? 'sidebar-active' : '')
				}>
				<div className="flex flex-col justify-center gap-10 mt-20 h-60">
					<div className="text-center">
						<p>Developed by Alejo Kim Uy</p>
					</div>
					<div className="flex justify-center gap-4 h-6">
						<a
							className="inline w-6"
							href="https://github.com/devaku">
							<SvgGithub></SvgGithub>
						</a>

						<a
							className="inline w-6"
							href="https://www.linkedin.com/in/devaku/">
							<SvgLinkedin></SvgLinkedin>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
