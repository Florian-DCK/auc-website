import Image from 'next/image';
import Navbar from '@/components/navbar';

export default function Home() {
	return (
		<div className="h-screen w-screen">
			<Navbar></Navbar>
			<div className="flex flex-row justify-around px-32 gap-20">
				<section className="w-1/2 space-y-10">
					<section className=" border-l-4 rounded ps-3 border-[#242B33]">
						<h1 className="bowlby text-2xl">REJOINS LA COMMUNAUTE !</h1>
						<p className="robotoCondensed text-pretty ">
							Viens découvrir notre communauté multigaming mature et conviviale
							sur Discord !Rejoins-nous dès maintenant pour participer à nos
							aventures et partager ta passion du jeu avec nous !
						</p>
						<button className="bg-[#5865F2] flex items-center gap-2 px-2 rounded mt-2">
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
							Discord
						</button>
					</section>
					<section className="border-l-4 rounded ps-3 border-[#242B33]">
						<h1 className="bowlby text-2xl">QUI SOMMES NOUS ?</h1>
						<p className="robotoCondensed">
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
					</section>
				</section>
				<section className="w-1/2">
					<h1 className="bowlby text-2xl">REJOINS LA COMMUNAUTE !</h1>
					<p className=" text-wrap">
						Viens découvrir notre communauté multigaming mature et conviviale
						sur Discord !Rejoins-nous dès maintenant pour participer à nos
						aventures et partager ta passion du jeu avec nous !
					</p>
				</section>
			</div>
		</div>
	);
}
