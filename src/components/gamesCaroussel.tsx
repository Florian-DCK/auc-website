import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

import minecraft from '../../public/minecraft.jpg';
import amongUs from '../../public/amongUs.jpg';
import lethal from '../../public/lethal.jpg';
import paradox from '../../public/paradox.jpg';
import Image from 'next/image';

export default function GamesCaroussel() {
	return (
		<div className=" self-center w-1/2">
			<Carousel className="" opts={{ loop: true, align: 'center' }}>
				<CarouselContent>
					<CarouselItem className="basis-1/2 drop-shadow-lg">
						<div className="bg-primary flex flex-col rounded-lg">
							<h3 className="staatliches text-secondary self-center">
								Minecraft
							</h3>
							<Image
								src={minecraft}
								alt="Minecraft"
								className="h-24 rounded-lg"
							/>
						</div>
					</CarouselItem>
					<CarouselItem className="basis-1/2 drop-shadow-lg">
						<div className="bg-primary flex flex-col rounded-lg">
							<h3 className="staatliches text-secondary self-center">
								Among Us
							</h3>
							<Image src={amongUs} alt="Among Us" className="h-24 rounded-lg" />
						</div>
					</CarouselItem>
					<CarouselItem className="basis-1/2 drop-shadow-lg">
						<div className="bg-primary flex flex-col rounded-lg">
							<h3 className="staatliches text-secondary self-center">
								Lethal Company
							</h3>
							<Image
								src={lethal}
								alt="Lethal Company"
								className="h-24 rounded-lg"
							/>
						</div>
					</CarouselItem>
					<CarouselItem className="basis-1/2 drop-shadow-lg">
						<div className="bg-primary flex flex-col rounded-lg">
							<h3 className="staatliches text-secondary self-center">
								Jeux Paradox
							</h3>
							<Image
								src={paradox}
								alt="Paradox Games"
								className="h-24 rounded-lg"
							/>
						</div>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
