import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { useMediaQuery } from '@/hooks/use-media-query';

import minecraft from '../../public/minecraft.jpg';
import amongUs from '../../public/amongUs.jpg';
import lethal from '../../public/lethal.jpg';
import paradox from '../../public/paradox.jpg';
import Image from 'next/image';

export default function GamesCaroussel() {
	const isMedium = useMediaQuery('(min-width: 768px)');
	const isLarge = useMediaQuery('(min-width: 1024px)');
	const orientation = isMedium && !isLarge ? 'vertical' : 'horizontal';

	return (
		<div className=" self-center w-min md:w-1/5 lg:w-1/2">
			<Carousel
				className=""
				orientation={orientation}
				opts={{ loop: true, align: 'center' }}>
				<CarouselContent className="md:h-[300px]">
					<CarouselItem className="lg:basis-1/2 md:basis-1/2 drop-shadow-lg">
						<div className="bg-primary flex flex-col rounded-lg">
							<h3 className="staatliches text-secondary self-center">
								Minecraft
							</h3>
							<Image
								src={minecraft}
								alt="Minecraft"
								className="h-24 rounded-b-lg"
							/>
						</div>
					</CarouselItem>
					<CarouselItem className="lg:basis-1/2 md:basis-1/2 drop-shadow-lg">
						<div className="bg-primary flex flex-col rounded-lg">
							<h3 className="staatliches text-secondary self-center">
								Among Us
							</h3>
							<Image
								src={amongUs}
								alt="Among Us"
								className="h-24 rounded-b-lg"
							/>
						</div>
					</CarouselItem>
					<CarouselItem className="lg:basis-1/2 md:basis-1/2 drop-shadow-lg">
						<div className="bg-primary flex flex-col rounded-lg">
							<h3 className="staatliches text-secondary self-center">
								Lethal Company
							</h3>
							<Image
								src={lethal}
								alt="Lethal Company"
								className="h-24 rounded-b-lg"
							/>
						</div>
					</CarouselItem>
					<CarouselItem className="lg:basis-1/2 md:basis-1/2 drop-shadow-lg">
						<div className="bg-primary flex flex-col rounded-lg">
							<h3 className="staatliches text-secondary self-center">
								Jeux Paradox
							</h3>
							<Image
								src={paradox}
								alt="Paradox Games"
								className="h-24 rounded-b-lg"
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
