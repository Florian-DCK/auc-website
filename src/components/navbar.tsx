import React from 'react';
import Image from 'next/image';
import AUCico from '../../public/AUCico.png';
import Link from 'next/link';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
	return (
		<div className=" ">
			<nav className="flex bg-transparent drop-shadow-lg relative overflow-x-hidden h-[160px] mb-5">
				{/* fond de la navbar */}

				<svg
					className="absolute top-0 -left-[300px] lg:left-0 overflow-x-hidden w-auto"
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
				<Link href={'/'} className="z-10 hidden md:block">
					<Image
						width={120}
						height={120}
						src={AUCico}
						alt="auc logo"
						className="m-4 z-10 hidden lg:block"></Image>
				</Link>
				<div className="flex flex-row justify-between w-full h-fit z-10 items-center lg:ps-44">
					<Link href={'/'}>
						<h1 className="staatliches text-secondary text-3xl lg:text-6xl ps-3">
							ADOPTE UN CUBE
						</h1>
					</Link>
					<ul className="staatliches text-2xl flex space-x-4 text-secondary mx-5 mt-5 lg:mt-0">
						<li className="lg:hover:text-white transition-colors hidden lg:block">
							<Link href="https://discord.gg/kMKqpaP" target="_blank">
								Discord
							</Link>
						</li>
						<li className="lg:hover:text-white transition-colors hidden lg:block">
							<Link href="https://auc2.buycraft.net/" target="_blank">
								Donations
							</Link>
						</li>
						<li className=" -mt-2 lg:mt-0">
							<DropdownMenu>
								<DropdownMenuTrigger>
									{' '}
									<svg
										width="30px"
										height="30px"
										className="stroke-secondary hover:stroke-white transition-colors"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4 7L7 7M20 7L11 7"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M20 17H17M4 17L13 17"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M4 12H7L20 12"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
									</svg>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuGroup>
										<DropdownMenuItem className="block lg:hidden">
											<Link href={'https://discord.gg/kMKqpaP'}>Discord</Link>
										</DropdownMenuItem>
										<DropdownMenuItem className="block lg:hidden">
											<Link href={'https://auc2.buycraft.net/'}>Donations</Link>
										</DropdownMenuItem>
										<DropdownMenuSeparator></DropdownMenuSeparator>
										<DropdownMenuLabel>Minecraft</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<Link href="http://dynmap.adopteuncube.com/">Dynmap</Link>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Link href="/voter">Voter</Link>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Link
												href={
													'https://mega.nz/folder/ATFw2boA#Twh491rbOdU2pE-_Y4WalQ'
												}
												target="_blank">
												Ancienne map
											</Link>
										</DropdownMenuItem>
									</DropdownMenuGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
