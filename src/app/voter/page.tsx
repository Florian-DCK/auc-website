import React from 'react';
import Link from 'next/link';

const voter = () => {
	return (
		<div className="flex flex-col-reverse lg:flex-row justify-around lg:px-32 lg:gap-20">
			<section className="lg:w-1/2 space-y-10 lg:space-y-auto">
				<section className=" lg:border-l-4 rounded px-3 border-[#242B33]">
					<h1 className="bowlby text-xl lg:text-4xl">
						Soutenez-nous en votant !
					</h1>
					<p className="robotoCondensed text-pretty text-base lg:text-lg ">
						En votant, vous nous permettez d'être mieux référencés sur les sites
						de serveurs Minecraft, ce qui nous aide à attirer plus de joueurs !
					</p>
				</section>
				<section className="lg:border-l-4 rounded px-3 border-[#242B33]">
					<h1 className="bowlby text-xl lg:text-xl">
						De plus, vous obtiendrez 1 choco !
					</h1>
					<p className="robotoCondensed text-base lg:text-lg">
						Les chocos sont la monnaie premium de notre serveur Minecraft. Vous
						pouvez en obtenir lors des événements ou en votant sur tous les
						sites au moins une fois par jour ! <br /> <br />
						Les chocos sont utiles en jeu pour : <br />
					</p>
					<ul className="robotoCondensed ms-5 list-disc">
						<li className="robotoCondensed">
							Se procurer des têtes décoratives !
						</li>
						<li className="robotoCondensed">
							Acheter des “lootboxes” contenant le loot d’un coffre de structure
							au choix !
						</li>
					</ul>
				</section>
				<section className="lg:border-l-4 rounded px-3 border-[#242B33]">
					<h1 className="bowlby text-xl lg:text-4xl">Allez plus loin !</h1>
					<p className="robotoCondensed text-base lg:text-lg">
						Vous pouvez également nous soutenir en achetant un grade en jeu !
					</p>
					<Link
						href="https://auc2.buycraft.net/"
						className="px-2 py-1 bg-[#28A745] flex rounded mt-2 hover:opacity-80 hover:scale-105 w-fit">
						<button className="flex items-center gap-2">
							{/* Logo Cart */}
							<svg
								className="size-5"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
									stroke="#fff"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<p className="robotoCondensed">Vers la boutique !</p>
						</button>
					</Link>
				</section>
			</section>
			<section className="lg:w-1/2 lg:flex flex-col space-y-5 ">
				<div>
					<h2 className="bowlby text-xl lg:text-2xl">
						Les sites sur lesquels voter :
					</h2>
					<h2 className="robotoCondensed text-xs text-[#E22B2B]">
						N'oubliez pas de préciser votre pseudo lorsqu'on vous le demande !
					</h2>
				</div>
				<ul className="flex flex-col space-y-5 items-start w-fit self-start">
					<li className="flex space-x-5 items-center">
						<Link
							href="https://minecraft.top-serveurs.net/vote/adopte-un-cube"
							target="_blank"
							className="px-2 py-1 bg-[#007BFF] flex rounded hover:opacity-80 hover:scale-105 w-fit self-center">
							<button className="flex items-center gap-2">
								{/* Logo Cart */}
								<svg
									className="size-5"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.5 5.49999L3.07817 5.23156L3 5.35439V5.49999H3.5ZM6.19761 1.2609L6.61944 1.52934L6.19761 1.2609ZM8.86455 2.7709L8.41734 2.54729V2.54729L8.86455 2.7709ZM7.5 5.49999L7.05279 5.27639C6.97529 5.43138 6.98357 5.61545 7.07467 5.76286C7.16578 5.91027 7.32671 5.99999 7.5 5.99999V5.49999ZM14.5 10.5L14.9 10.8L15 10.6667V10.5H14.5ZM12.1 13.7L12.5 14L12.1 13.7ZM8.28158 0.768941L8.53883 0.340194L8.53883 0.340194L8.28158 0.768941ZM0 4.99999V15H1V4.99999H0ZM3.92183 5.76843L6.61944 1.52934L5.77577 0.992463L3.07817 5.23156L3.92183 5.76843ZM8.41734 2.54729L7.05279 5.27639L7.94721 5.7236L9.31176 2.9945L8.41734 2.54729ZM7.5 5.99999H12.5V4.99999H7.5V5.99999ZM14 7.49999V10.5H15V7.49999H14ZM14.1 10.2L11.7 13.4L12.5 14L14.9 10.8L14.1 10.2ZM10.5 14H5.5V15H10.5V14ZM4 12.5V5.49999H3V12.5H4ZM12.5 5.99999C13.3284 5.99999 14 6.67157 14 7.49999H15C15 6.11928 13.8807 4.99999 12.5 4.99999V5.99999ZM5.5 14C4.67157 14 4 13.3284 4 12.5H3C3 13.8807 4.11929 15 5.5 15V14ZM8.02433 1.19769C8.48782 1.47578 8.65906 2.06384 8.41734 2.54729L9.31176 2.9945C9.78718 2.04368 9.45039 0.887131 8.53883 0.340194L8.02433 1.19769ZM11.7 13.4C11.4167 13.7777 10.9721 14 10.5 14V15C11.2869 15 12.0279 14.6295 12.5 14L11.7 13.4ZM6.61944 1.52934C6.92046 1.05631 7.54354 0.909215 8.02433 1.19769L8.53883 0.340194C7.59324 -0.227155 6.3678 0.0621342 5.77577 0.992463L6.61944 1.52934Z"
										fill="#fff"
									/>
								</svg>
								<p className="robotoCondensed">Voter !</p>
							</button>
						</Link>
						<h2 className="staatliches self-center text-xl">Top serveur</h2>{' '}
					</li>
					<li className="flex space-x-5 items-center">
						<Link
							href="https://www.serveurs-minecraft.org/vote.php?id=34068"
							target="_blank"
							className="px-2 py-1 bg-[#007BFF] flex rounded hover:opacity-80 hover:scale-105 w-fit self-center">
							<button className="flex items-center gap-2">
								{/* Logo Cart */}
								<svg
									className="size-5"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.5 5.49999L3.07817 5.23156L3 5.35439V5.49999H3.5ZM6.19761 1.2609L6.61944 1.52934L6.19761 1.2609ZM8.86455 2.7709L8.41734 2.54729V2.54729L8.86455 2.7709ZM7.5 5.49999L7.05279 5.27639C6.97529 5.43138 6.98357 5.61545 7.07467 5.76286C7.16578 5.91027 7.32671 5.99999 7.5 5.99999V5.49999ZM14.5 10.5L14.9 10.8L15 10.6667V10.5H14.5ZM12.1 13.7L12.5 14L12.1 13.7ZM8.28158 0.768941L8.53883 0.340194L8.53883 0.340194L8.28158 0.768941ZM0 4.99999V15H1V4.99999H0ZM3.92183 5.76843L6.61944 1.52934L5.77577 0.992463L3.07817 5.23156L3.92183 5.76843ZM8.41734 2.54729L7.05279 5.27639L7.94721 5.7236L9.31176 2.9945L8.41734 2.54729ZM7.5 5.99999H12.5V4.99999H7.5V5.99999ZM14 7.49999V10.5H15V7.49999H14ZM14.1 10.2L11.7 13.4L12.5 14L14.9 10.8L14.1 10.2ZM10.5 14H5.5V15H10.5V14ZM4 12.5V5.49999H3V12.5H4ZM12.5 5.99999C13.3284 5.99999 14 6.67157 14 7.49999H15C15 6.11928 13.8807 4.99999 12.5 4.99999V5.99999ZM5.5 14C4.67157 14 4 13.3284 4 12.5H3C3 13.8807 4.11929 15 5.5 15V14ZM8.02433 1.19769C8.48782 1.47578 8.65906 2.06384 8.41734 2.54729L9.31176 2.9945C9.78718 2.04368 9.45039 0.887131 8.53883 0.340194L8.02433 1.19769ZM11.7 13.4C11.4167 13.7777 10.9721 14 10.5 14V15C11.2869 15 12.0279 14.6295 12.5 14L11.7 13.4ZM6.61944 1.52934C6.92046 1.05631 7.54354 0.909215 8.02433 1.19769L8.53883 0.340194C7.59324 -0.227155 6.3678 0.0621342 5.77577 0.992463L6.61944 1.52934Z"
										fill="#fff"
									/>
								</svg>
								<p className="robotoCondensed">Voter !</p>
							</button>
						</Link>
						<h2 className="staatliches self-center text-xl">
							Serveur Minecraft
						</h2>
					</li>
					<li className="flex space-x-5 items-center">
						<Link
							href="https://serveur-prive.net/minecraft/adopte-un-cube-1891/vote"
							target="_blank"
							className="px-2 py-1 bg-[#007BFF] flex rounded hover:opacity-80 hover:scale-105 w-fit self-center">
							<button className="flex items-center gap-2">
								{/* Logo Cart */}
								<svg
									className="size-5"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.5 5.49999L3.07817 5.23156L3 5.35439V5.49999H3.5ZM6.19761 1.2609L6.61944 1.52934L6.19761 1.2609ZM8.86455 2.7709L8.41734 2.54729V2.54729L8.86455 2.7709ZM7.5 5.49999L7.05279 5.27639C6.97529 5.43138 6.98357 5.61545 7.07467 5.76286C7.16578 5.91027 7.32671 5.99999 7.5 5.99999V5.49999ZM14.5 10.5L14.9 10.8L15 10.6667V10.5H14.5ZM12.1 13.7L12.5 14L12.1 13.7ZM8.28158 0.768941L8.53883 0.340194L8.53883 0.340194L8.28158 0.768941ZM0 4.99999V15H1V4.99999H0ZM3.92183 5.76843L6.61944 1.52934L5.77577 0.992463L3.07817 5.23156L3.92183 5.76843ZM8.41734 2.54729L7.05279 5.27639L7.94721 5.7236L9.31176 2.9945L8.41734 2.54729ZM7.5 5.99999H12.5V4.99999H7.5V5.99999ZM14 7.49999V10.5H15V7.49999H14ZM14.1 10.2L11.7 13.4L12.5 14L14.9 10.8L14.1 10.2ZM10.5 14H5.5V15H10.5V14ZM4 12.5V5.49999H3V12.5H4ZM12.5 5.99999C13.3284 5.99999 14 6.67157 14 7.49999H15C15 6.11928 13.8807 4.99999 12.5 4.99999V5.99999ZM5.5 14C4.67157 14 4 13.3284 4 12.5H3C3 13.8807 4.11929 15 5.5 15V14ZM8.02433 1.19769C8.48782 1.47578 8.65906 2.06384 8.41734 2.54729L9.31176 2.9945C9.78718 2.04368 9.45039 0.887131 8.53883 0.340194L8.02433 1.19769ZM11.7 13.4C11.4167 13.7777 10.9721 14 10.5 14V15C11.2869 15 12.0279 14.6295 12.5 14L11.7 13.4ZM6.61944 1.52934C6.92046 1.05631 7.54354 0.909215 8.02433 1.19769L8.53883 0.340194C7.59324 -0.227155 6.3678 0.0621342 5.77577 0.992463L6.61944 1.52934Z"
										fill="#fff"
									/>
								</svg>
								<p className="robotoCondensed">Voter !</p>
							</button>
						</Link>
						<h2 className="staatliches self-center text-xl">Serveur Privé</h2>{' '}
					</li>
					<li className="flex space-x-5 items-center">
						<Link
							href="https://www.liste-serveurs-minecraft.org/?post_type=listing_type&p=197530"
							target="_blank"
							className="px-2 py-1 bg-[#007BFF] flex rounded hover:opacity-80 hover:scale-105 w-fit self-center">
							<button className="flex items-center gap-2">
								{/* Logo Cart */}
								<svg
									className="size-5"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.5 5.49999L3.07817 5.23156L3 5.35439V5.49999H3.5ZM6.19761 1.2609L6.61944 1.52934L6.19761 1.2609ZM8.86455 2.7709L8.41734 2.54729V2.54729L8.86455 2.7709ZM7.5 5.49999L7.05279 5.27639C6.97529 5.43138 6.98357 5.61545 7.07467 5.76286C7.16578 5.91027 7.32671 5.99999 7.5 5.99999V5.49999ZM14.5 10.5L14.9 10.8L15 10.6667V10.5H14.5ZM12.1 13.7L12.5 14L12.1 13.7ZM8.28158 0.768941L8.53883 0.340194L8.53883 0.340194L8.28158 0.768941ZM0 4.99999V15H1V4.99999H0ZM3.92183 5.76843L6.61944 1.52934L5.77577 0.992463L3.07817 5.23156L3.92183 5.76843ZM8.41734 2.54729L7.05279 5.27639L7.94721 5.7236L9.31176 2.9945L8.41734 2.54729ZM7.5 5.99999H12.5V4.99999H7.5V5.99999ZM14 7.49999V10.5H15V7.49999H14ZM14.1 10.2L11.7 13.4L12.5 14L14.9 10.8L14.1 10.2ZM10.5 14H5.5V15H10.5V14ZM4 12.5V5.49999H3V12.5H4ZM12.5 5.99999C13.3284 5.99999 14 6.67157 14 7.49999H15C15 6.11928 13.8807 4.99999 12.5 4.99999V5.99999ZM5.5 14C4.67157 14 4 13.3284 4 12.5H3C3 13.8807 4.11929 15 5.5 15V14ZM8.02433 1.19769C8.48782 1.47578 8.65906 2.06384 8.41734 2.54729L9.31176 2.9945C9.78718 2.04368 9.45039 0.887131 8.53883 0.340194L8.02433 1.19769ZM11.7 13.4C11.4167 13.7777 10.9721 14 10.5 14V15C11.2869 15 12.0279 14.6295 12.5 14L11.7 13.4ZM6.61944 1.52934C6.92046 1.05631 7.54354 0.909215 8.02433 1.19769L8.53883 0.340194C7.59324 -0.227155 6.3678 0.0621342 5.77577 0.992463L6.61944 1.52934Z"
										fill="#fff"
									/>
								</svg>
								<p className="robotoCondensed">Voter !</p>
							</button>
						</Link>
						<h2 className="staatliches self-center text-xl">
							Liste serveurs minecraft
						</h2>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default voter;
