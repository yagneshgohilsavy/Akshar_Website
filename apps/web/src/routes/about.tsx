import type { Route } from './+types/about';
import { seo } from '@/lib/seo';
import { About } from '@/components/home/about';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'About Us | Akshar Healthcare and OHC Private Limited',
			description:
				'Learn about Akshar Healthcare, our medical leadership, clinical heritage, and commitment to industrial workforce health in Gujarat.',
		}
	);
}

export default function AboutPage() {
	return (
		<main>
			<div className="page-intro wide">
				<span className="eyebrow">OUR CLINICAL HERITAGE & MISSION</span>
				<h1>About Akshar Healthcare.</h1>
				<p>Dedicated to workforce vitality, occupational health excellence, and community clinical care.</p>
			</div>
			<About />
		</main>
	);
}
