import type { Route } from './+types/branches';
import { seo } from '@/lib/seo';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck, Ambulance, HeartPulse } from 'lucide-react';
import { address } from '@/data/healthcare';
import { Link } from 'react-router';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Our Branches & Locations | Akshar Healthcare',
			description:
				'Visit our central clinic and OHC hub in Vitthalapur, Ahmedabad, or learn about our on-site factory health center deployments across Gujarat.',
		}
	);
}

export default function BranchesPage() {
	return (
		<main>
			<div className="page-intro wide">
				<span className="eyebrow">OUR MEDICAL NETWORK & HUBS</span>
				<h1>Branches & Facilities.</h1>
				<p>Centrally located healthcare infrastructure serving industrial corridors and local communities across Gujarat.</p>
			</div>
			<section className="section wide">
				<div className="deployment-grid">
					<div className="deployment-card">
						<div className="deployment-head">
							<span className="deployment-tag">CENTRAL HUB & CLINIC</span>
							<h3>Vitthalapur Central Clinic & OHC Hub</h3>
							<p className="deployment-target">
								<strong>Primary Day-Care & Diagnostic Center</strong>
							</p>
						</div>
						<ul className="deployment-list">
							<li>
								<MapPin size={20} />
								<div>
									<strong>Address</strong>
									<span>{address}</span>
								</div>
							</li>
							<li>
								<Phone size={20} />
								<div>
									<strong>24x7 Helpline / Emergency</strong>
									<span>+91 9099941978</span>
								</div>
							</li>
							<li>
								<Mail size={20} />
								<div>
									<strong>Email Enquiries</strong>
									<span>info@aksharhealthcare.in</span>
								</div>
							</li>
							<li>
								<Clock size={20} />
								<div>
									<strong>Operating Hours</strong>
									<span>Clinic: 8:00 AM – 9:00 PM | Emergency & Trauma: 24 Hours</span>
								</div>
							</li>
						</ul>
						<div style={{ marginTop: '24px' }}>
							<a
								className="button small"
								href="https://www.google.com/maps/search/?api=1&query=New+Shakti+Arcade+Vitthalapur+Gujarat"
								target="_blank"
								rel="noreferrer"
							>
								Get Directions <ArrowUpRight size={16} />
							</a>
						</div>
					</div>

					<div className="deployment-card">
						<div className="deployment-head">
							<span className="deployment-tag">INDUSTRIAL COVERAGE</span>
							<h3>On-Site Plant OHCs & Mobile Fleet</h3>
							<p className="deployment-target">
								<strong>Turnkey Deployments Across Industrial Corridors</strong>
							</p>
						</div>
						<ul className="deployment-list">
							<li>
								<Ambulance size={20} />
								<div>
									<strong>Mobile Diagnostic Fleet</strong>
									<span>On-site health camps and annual medical screenings deployed directly to factory premises in Vitthalapur, Sanand, Mandal, and Becharaji.</span>
								</div>
							</li>
							<li>
								<HeartPulse size={20} />
								<div>
									<strong>Dedicated Factory OHCs</strong>
									<span>We staff, equip, and manage customized on-site Occupational Health Centers directly inside manufacturing units.</span>
								</div>
							</li>
							<li>
								<ShieldCheck size={20} />
								<div>
									<strong>Regional Audit Support</strong>
									<span>Liaison and digital record support for DISH and Factory Inspectorate compliance across Gujarat.</span>
								</div>
							</li>
						</ul>
						<div style={{ marginTop: '24px' }}>
							<Link className="button small ghost" style={{ color: 'var(--navy)', borderColor: 'var(--silver)' }} to="/contact">
								Request Plant Branch Setup <ArrowUpRight size={16} />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
