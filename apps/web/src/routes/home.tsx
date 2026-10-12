import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { Hero } from '@/components/home/hero';
import { TrustPillars } from '@/components/home/trust-pillars';
import { Departments } from '@/components/home/departments';
import { PackagesPreview } from '@/components/home/packages-preview';
import { heroImage, address } from '@/data/healthcare';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Akshar Healthcare | Clinical Care & Turnkey OHC',
			description:
				'Clinical care, turnkey occupational health centers, industrial medical screenings and digital audit readiness in Vitthalapur, Gujarat.',
			image: heroImage,
			jsonLd: {
				'@context': 'https://schema.org',
				'@type': 'MedicalClinic',
				name: 'Akshar Healthcare and OHC Private Limited',
				telephone: '+91 9099941978',
				email: 'info@aksharhealthcare.in',
				address: {
					'@type': 'PostalAddress',
					streetAddress: address,
					addressLocality: 'Vitthalapur',
					addressRegion: 'Gujarat',
					postalCode: '382130',
					addressCountry: 'IN',
				},
			},
		}
	);
}

export default function HomePage() {
	return (
		<main>
			<Hero />
			<TrustPillars />
			<Departments />
			<PackagesPreview />
		</main>
	);
}

