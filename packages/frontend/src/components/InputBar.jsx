import SvgBoxWithCheck from './svgs/SvgBoxWithCheck';
import { useState, useRef, useEffect } from 'react';

function InputBar() {
	const textboxRef = useRef(null);
	let [isDisplay, setIsDisplay] = useState(true);

	useEffect(() => {
		if (isDisplay && textboxRef.current) {
			textboxRef.current.focus();
		}
	}, [isDisplay]);

	function handleOnClick() {
		setIsDisplay(true);
	}

	function handleOnBlur() {
		// setIsDisplay(false);
	}

	function display() {
		if (!isDisplay) {
			return (
				<>
					<div className="flex justify-between">
						<p>Type something...</p>
					</div>
				</>
			);
		} else {
			return (
				<>
					{/* HOLDER */}
					<div className="">
						{/* TITLE */}
						<div className="mb-1">
							<input
								className="outline-none"
								type="text"
								placeholder="Title"
							/>
						</div>
						{/* BODY */}
						<div className="flex justify-between">
							<input
								ref={textboxRef}
								type="text"
								className="outline-none"
								placeholder="Write something that you need to remember..."
								name=""
								id=""
								onBlur={handleOnBlur}
							/>
							<div className="h-7 w-7">
								<SvgBoxWithCheck></SvgBoxWithCheck>
							</div>
						</div>
					</div>
				</>
			);
		}
	}

	return (
		<>
			<div
				className="border-2 rounded-lg border-primary-border-color mt-3 mx-3 p-2"
				onClick={handleOnClick}>
				{display()}
			</div>
		</>
	);
}

export default InputBar;
