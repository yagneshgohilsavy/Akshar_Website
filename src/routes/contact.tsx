import type { Route } from './+types/contact';
import { seo } from '@/lib/seo';
import { Contact } from '@/components/home/contact';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Contact Us | Akshar Healthcare and OHC Private Limited',
			description:
				'Get in touch with Akshar Healthcare for clinical appointments, health package enquiries, or turnkey industrial OHC consultation in Vitthalapur, Gujarat.',
		}
	);
}

export default function ContactPage() {
	return (
		<main>
			<div className="page-intro wide">
				<span className="eyebrow">CONNECT WITH OUR TEAM</span>
				<h1>Contact Us.</h1>
				<p>Reach out for patient care, emergency medical support, or enterprise occupational health partnerships.</p>
			</div>
			<Contact />
		</main>
	);
}
