'use client';

import Image from 'next/image';
import GamesCaroussel from '@/components/gamesCaroussel';
import Link from 'next/link';

export default function Home() {
	const clipIp = () => {
		navigator.clipboard.writeText('mc.adopteuncube.com').then(() => {
			const ipText = document.querySelector('.Ip');
			if (ipText) {
				ipText.textContent = 'IP copiée !';
			}
		});
	};

	return (
		<div className=" w-screen -mt-16 lg:mt-0">
			<div className="flex flex-col-reverse lg:flex-row justify-around lg:px-32 lg:gap-20">
				<section className="lg:w-1/2 space-y-10 lg:space-y-auto">
					<section className=" lg:border-l-4 rounded px-3 border-[#242B33]">
						<h1 className="bowlby text-xl lg:text-2xl">
							REJOINS LA COMMUNAUTE !
						</h1>
						<p className="robotoCondensed text-pretty text-base lg:text-lg ">
							Viens découvrir notre communauté multigaming mature et conviviale
							sur Discord ! Rejoins-nous dès maintenant pour participer à nos
							aventures et partager ta passion du jeu avec nous !
						</p>
						<div className="flex space-x-3">
							<Link
								href="https://discord.gg/kMKqpaP"
								className="px-2 bg-[#5865F2] flex rounded mt-2 hover:opacity-80 hover:scale-105">
								<button className="flex items-center gap-2">
									{/* Logo Discord */}
									<svg
										width="20px"
										height="20px"
										viewBox="0 -28.5 256 256"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										preserveAspectRatio="xMidYMid">
										<g>
											<path
												d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
												fill="#fff"
												fillRule="nonzero"></path>
										</g>
									</svg>
									<p className="robotoCondensed">Discord</p>
								</button>
							</Link>
							<button
								onClick={clipIp}
								className="bg-[#D93444] flex items-center gap-2 px-2 py-1 rounded mt-2 hover:opacity-80 hover:scale-105">
								{/* Logo Minecraft */}
								<svg
									width="20px"
									height="20px"
									viewBox="0 0 12 12"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg">
									<defs></defs>
									<g
										id="Page-1"
										stroke="none"
										strokeWidth="1"
										fill="none"
										fillRule="evenodd">
										<g
											id="Dribbble-Light-Preview"
											transform="translate(-224.000000, -6127.000000)"
											fill="#fff">
											<g
												id="icons"
												transform="translate(56.000000, 160.000000)">
												<path
													d="M172,5973 L170,5973 L170,5979 L172,5979 L172,5977 L176,5977 L176,5979 L178,5979 L178,5973 L176,5973 L176,5971 L172,5971 L172,5973 Z M176,5971 L180,5971 L180,5967 L176,5967 L176,5971 Z M168,5971 L172,5971 L172,5967 L168,5967 L168,5971 Z"
													id="emoji_minecraft_simple-[#464]"></path>
											</g>
										</g>
									</g>
								</svg>
								<p className="Ip robotoCondensed">mc.adopteuncube.com</p>
							</button>
						</div>
					</section>
					<section className="lg:w-1/2 lg:hidden flex-col space-y-5 justify-center items-center flex">
						<iframe
							className="w-[265px] h-[150px] lg:w-[531px] lg:h-[300px] rounded-lg lg:rounded-3xl"
							src="https://www.youtube.com/embed/bk6_hS23DrU?si=Y5j3gw0Xj5DkbGlP&amp;controls=0&amp;rel=0&amp;showinfo=0"
							title="AUC Trailer S10"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
							loading="lazy"></iframe>
						<h2 className="bowlby text-xl">CERTAINS DE NOS JEUX :</h2>
						<GamesCaroussel />
					</section>
					<section className="lg:border-l-4 rounded px-3 border-[#242B33]">
						<h1 className="bowlby text-xl lg:text-2xl">QUI SOMMES NOUS ?</h1>
						<p className="robotoCondensed text-base lg:text-lg">
							Nous sommes une petite communauté existant depuis 2014 sous le nom
							d’Adopte Un Cube. Initialement centrée sur Minecraft, notre
							communauté évolue désormais vers une expérience multigaming sur
							Discord. Le serveur est toujours accessible et réservé aux
							personnes de plus de 16 ans. Notre serveur Minecraft, qui reste
							une partie intégrante de notre communauté, fonctionne sous forme
							de saisons. Chaque année, en juillet, il est mis à jour avec la
							nouvelle grosse version de Minecraft. La régénération naturelle
							des PV est désactivée, et nous conservons un gameplay quasi
							vanilla, enrichi par quelques datapacks qui ajoutent un cachet
							unique à notre survie ! Rejoignez-nous pour partager votre passion
							des jeux vidéo dans un cadre convivial et diversifié
						</p>
						<ul className="flex space-x-5 mb-10 lg:mb-0">
							<li>
								<Link href={'https://discord.gg/kMKqpaP'} target="_blank">
									<svg
										className="size-10 hover:scale-105"
										viewBox="0 -28.5 256 256"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										preserveAspectRatio="xMidYMid">
										<g>
											<path
												d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
												fill="#5865F2"
												fillRule="nonzero"></path>
										</g>
									</svg>
								</Link>
							</li>
							<li>
								<Link
									href={'https://www.youtube.com/@adopteuncube9090'}
									target="_blank">
									<svg
										className="size-10 hover:scale-105"
										viewBox="0 -7 48 48"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg">
										<title>Youtube-color</title>
										<desc>Created with Sketch.</desc>
										<defs></defs>
										<g
											id="Icons"
											stroke="none"
											strokeWidth="1"
											fill="none"
											fillRule="evenodd">
											<g
												id="Color-"
												transform="translate(-200.000000, -368.000000)"
												fill="#CE1312">
												<path
													d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z"
													id="Youtube"></path>
											</g>
										</g>
									</svg>
								</Link>
							</li>
							<li>
								<Link href={'https://x.com/AdopteUnCube'} target="_blank">
									<svg
										className="size-10 hover:scale-105"
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										width="100"
										height="100"
										viewBox="0 0 50 50">
										<path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
									</svg>
								</Link>
							</li>
						</ul>
					</section>
				</section>
				<section className="lg:w-1/2 lg:flex flex-col space-y-5 justify-center items-center hidden">
					<iframe
						className="w-[265px] h-[150px] lg:w-[531px] lg:h-[300px] rounded-3xl"
						src="https://www.youtube.com/embed/bk6_hS23DrU?si=Y5j3gw0Xj5DkbGlP&amp;controls=0&amp;rel=0&amp;showinfo=0"
						title="AUC Trailer S10"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						loading="lazy"></iframe>
					<h2 className="bowlby text-xl">CERTAINS DE NOS JEUX :</h2>
					<GamesCaroussel />
				</section>
			</div>
		</div>
	);
}
