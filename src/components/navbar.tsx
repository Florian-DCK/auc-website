import React from 'react';
import Image from 'next/image';
import AUCico from '../../public/AUCico.png';
export default function Navbar() {
	return (
		<div>
			<nav className="flex bg-transparent drop-shadow-lg">
				<div className="header bg-primary h-52 w-[300px] m-0 shrink-0">
					<Image
						width={120}
						height={120}
						src={AUCico}
						alt="auc logo"
						className="m-4"></Image>
				</div>
				<div className=" bg-primary h-[66px] w-full justify-between items-center flex relative">
					<h1 className="staatliches text-secondary text-6xl">
						ADOPTE UN CUBE
					</h1>
					<ul className="staatliches text-xl flex space-x-4 text-secondary mx-5 ">
						<li>
							<a href="https://discord.gg/kMKqpaP">Discord</a>
						</li>
						<li>
							<a href="https://auc2.buycraft.net/">Donations</a>
						</li>
						<li>
							<svg
								width="30px"
								height="30px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M4 7L7 7M20 7L11 7"
									stroke="#9b8d7a"
									stroke-width="1.5"
									stroke-linecap="round"
								/>
								<path
									d="M20 17H17M4 17L13 17"
									stroke="#9b8d7a"
									stroke-width="1.5"
									stroke-linecap="round"
								/>
								<path
									d="M4 12H7L20 12"
									stroke="#9b8d7a"
									stroke-width="1.5"
									stroke-linecap="round"
								/>
							</svg>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
