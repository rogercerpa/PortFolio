import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
	Container
} from 'reactstrap';
import './Assets/style/style.css';
import RogerExplorer from './Assets/images/rogerExplorer.jpg';
import RogerMTB from './Assets/images/rogerMTB.jpg';
import RogerPhotographer from './Assets/images/rogerPhotographer.JPG';
import RogerProgrammer from './Assets/images/rogerProgrammer.jpg';

const items = [
	{
		src      : RogerExplorer,
		altText  : 'Roger1',
		caption  : 'Roger',
		caption2 : 'The Explorer'
	},
	{
		src      : RogerMTB,
		altText  : 'Roger2',
		caption  : 'Roger',
		caption2 : 'The Mountain Biker'
	},
	{
		src      : RogerProgrammer,
		altText  : 'Roger3',
		caption  : 'Roger',
		caption2 : 'The Programmer'
	},
	{
		src      : RogerPhotographer,
		altText  : 'Roger4',
		caption  : 'Roger',
		caption2 : 'The Photographer'
	}
];

const HomePage = (props) => {
	const [ activeIndex, setActiveIndex ] = useState(0);
	const [ animating, setAnimating ] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}
			>
				<img src={item.src} alt={item.altText} width="1100" height="600" />
				<CarouselCaption
					captionText={item.caption2}
					captionHeader={item.caption}
				/>
			</CarouselItem>
		);
	});

	return (
		<Container>
			<div>
				<h1 className="welcomeMessage">
					Welcome to <b>Roger Cerpa</b> Coding World!
				</h1>
				<p className="philosophyMessage">
					Do the right thing, be honest, be humble, be patient, disciplined, and
					persistent but more importantly, always have faith that in the end, it
					will all work out perfectly for you. Enjoy the process.{' '}
				</p>
			</div>
			<Carousel activeIndex={activeIndex} next={next} previous={previous}>
				<CarouselIndicators
					items={items}
					activeIndex={activeIndex}
					onClickHandler={goToIndex}
				/>
				{slides}
				<CarouselControl
					direction="prev"
					directionText="Previous"
					onClickHandler={previous}
				/>
				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={next}
				/>
			</Carousel>
		</Container>
	);
};

export default HomePage;
