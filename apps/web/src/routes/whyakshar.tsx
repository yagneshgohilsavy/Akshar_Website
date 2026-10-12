import type { Route } from './+types/whyakshar';
import { seo } from '@/lib/seo';
import { WhyPartner } from '@/components/home/why-partner';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Why Akshar | Akshar Healthcare and OHC Private Limited',
			description:
				'The Akshar Healthcare Advantage, our medical leadership, clinical heritage, and commitment to industrial workforce health in Gujarat.',
		}
	);
}

export default function WhyAksharPage() {
	return (
		<main>
			<WhyPartner />
		</main>
	);
}