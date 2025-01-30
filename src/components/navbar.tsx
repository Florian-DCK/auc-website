import React from 'react';
import Image from 'next/image';
import AUCico from '../../public/AUCico.png';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
	return (
		<div className=" ">
			<nav className="flex bg-transparent drop-shadow-lg relative overflow-x-hidden h-fit mb-5">
				{/* fond de la navbar */}
				<svg
					className="absolute top-0 left-0 overflow-x-hidden w-auto"
					width="4041"
					height="160"
					viewBox="1140 0 4041 250"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_d_66_4)">
						<path
							d="M186.766 234H4V0.279875L4037 0.279785V57.7306V115.181L587.078 115.181C484.203 115.181 383.542 145.059 297.326 201.184C264.429 222.6 226.02 234 186.766 234Z"
							fill="#4A361E"
						/>
					</g>
					<path
						d="M4 222.249H186.261C225.806 222.249 264.461 210.509 297.326 188.516V188.516C383.459 130.879 484.764 100.111 588.402 100.111H4034"
						stroke="#9B8D7A"
						strokeWidth="6"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeDasharray="15 20"
					/>
					<defs>
						<filter
							id="filter0_d_66_4"
							x="0"
							y="0.279785"
							width="4041"
							height="241.72"
							filterUnits="userSpaceOnUse"
							colorinterpolation-filters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_66_4"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_66_4"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
				{/* Logo AUC */}
				<Image
					width={120}
					height={120}
					src={AUCico}
					alt="auc logo"
					className="m-4 z-10"></Image>
				<div className="flex flex-row justify-between w-full h-fit z-10 items-center ps-44">
					<h1 className="staatliches text-secondary text-6xl">
						ADOPTE UN CUBE
					</h1>
					<ul className="staatliches text-2xl flex space-x-4 text-secondary mx-5 ">
						<li>
							<a href="https://discord.gg/kMKqpaP">Discord</a>
						</li>
						<li>
							<a href="https://auc2.buycraft.net/">Donations</a>
						</li>
						<li>
							<DropdownMenu>
								<DropdownMenuTrigger>
									{' '}
									<svg
										width="30px"
										height="30px"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4 7L7 7M20 7L11 7"
											stroke="#9b8d7a"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M20 17H17M4 17L13 17"
											stroke="#9b8d7a"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M4 12H7L20 12"
											stroke="#9b8d7a"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
									</svg>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuLabel>My Account</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Profile</DropdownMenuItem>
									<DropdownMenuItem>Billing</DropdownMenuItem>
									<DropdownMenuItem>Team</DropdownMenuItem>
									<DropdownMenuItem>Subscription</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
