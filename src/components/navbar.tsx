import React from 'react';
import Image from 'next/image';
import AUCico from '../../public/AUCico.png';
export default function Navbar() {
	return (
		<div>
			<nav className="flex bg-transparent">
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
					<ul className="staatliches text-xl flex space-x-4 text-secondary ">
						<li>
							<a href="https://discord.gg/kMKqpaP">Discord</a>
						</li>
						<li>
							<a href="https://auc2.buycraft.net/">Donations</a>
						</li>
						<li>
							<a href="HAMBURGER"></a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
