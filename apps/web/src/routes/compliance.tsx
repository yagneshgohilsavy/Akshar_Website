import type { Route } from './+types/compliance';
import { seo } from '@/lib/seo';
import { Compliance } from '@/components/home/compliance';
import { Deployment } from '@/components/home/deployment';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Turnkey OHC & Factory Compliance | Akshar Healthcare',
			description:
				'Turnkey occupational health center setup, automated digital health records, and statutory compliance under the Factories Act and Gujarat Factory Rules.',
		}
	);
}

export default function CompliancePage() {
	return (
		<main>
			<div className="page-intro wide">
				<span className="eyebrow">STATUTORY AUDIT READINESS & INDUSTRIAL HEALTH</span>
				<h1>Turnkey OHC & Factory Compliance.</h1>
				<p>Seamless regulatory risk management, on-site medical staff, and digital statutory record keeping.</p>
			</div>
			<Compliance />
			<Deployment />
		</main>
	);
}
