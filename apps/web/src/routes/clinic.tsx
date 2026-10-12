import type { Route } from './+types/clinic';
import { seo } from '@/lib/seo';
import { Clinic } from '@/components/home/clinic';
import { Departments } from '@/components/home/departments';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Clinic & Day Care Infrastructure | Akshar Healthcare',
			description:
				'Explore our 3-bed observation day-care clinic, 24x7 emergency arrangements, and mobile diagnostic fleet in Vitthalapur, Gujarat.',
		}
	);
}

export default function ClinicPage() {
	return (
		<main>
			<div className="page-intro wide">
				<span className="eyebrow">CLINICAL EXCELLENCE & EMERGENCY READINESS</span>
				<h1>Clinic & Day Care Infrastructure.</h1>
				<p>Immediate medical stabilization, certified nursing care, and coordinated emergency transfer response.</p>
			</div>
			<Clinic />
			<Departments />
		</main>
	);
}
