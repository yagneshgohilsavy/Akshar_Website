import { Building2, Ambulance, Stethoscope, Monitor, Users, CalendarClock, Activity, ShieldCheck } from 'lucide-react';

const models = [
	{
		tag: 'MODEL 01',
		title: 'Full Turnkey OHC Setup (Mandatory Ambulance Rooms)',
		target:
			'Factories employing 500+ workers or notified hazardous units under the Factories Act, 1948.',
		deliverables: [
			{ icon: Building2, label: 'Infrastructure', text: 'Complete setup of beds, examination tables, dressing units, statutory medicines, and oxygen cylinders.' },
			{ icon: Ambulance, label: 'Dedicated Ambulance', text: '24x7 on-site BLS/ALS industrial ambulance equipped with emergency stabilization kits and hospital transfer tie-ups.' },
			{ icon: Stethoscope, label: 'Medical Team', text: 'Qualified Factory Medical Officers (MBBS / AFIH certified), registered industrial nurses, and dressers.' },
			{ icon: Monitor, label: 'Software Station', text: 'Digital check-in and government compliance dashboard installed on-site.' },
		],
	},
	{
		tag: 'MODEL 02',
		title: 'Staff & Equipment Deputation (For Existing Dispensaries)',
		target:
			'Operational plants that already have an OHC room but struggle with doctor absenteeism, nurse attrition, or outdated testing machines.',
		deliverables: [
			{ icon: Users, label: 'Deputed Personnel', text: 'Regular or visiting Factory Medical Officers, trained industrial nurses, and lab technicians.' },
			{ icon: CalendarClock, label: 'Replacement Guarantee', text: 'Zero operational disruption\u2014we handle roster management, relief staff during leaves, and legal documentation.' },
			{ icon: Activity, label: 'Calibrated Testing Equipment', text: 'Audiometers, Spirometers, and ECG units placed at your plant for periodic or scheduled screening camps.' },
		],
	},
];

export function Deployment() {
	return (
		<section className="section wide" id="deployment">
			<div className="section-heading">
				<div>
					<span className="eyebrow">ON-SITE HEALTHCARE ARRANGEMENTS</span>
					<h2>
						Flexible Healthcare Setup Aligned<br />
						With <em>Your Plant&rsquo;s Requirements</em>
					</h2>
				</div>
				<p>
					From setting up a full statutory dispensary with ambulance coverage to providing qualified doctors
					on deputation, we provide what your factory genuinely needs.
				</p>
			</div>
			<div className="deployment-grid">
				{models.map((model) => (
					<article className="deployment-card" key={model.tag}>
						<header className="deployment-head">
							<span className="deployment-tag">{model.tag}</span>
							<h3>{model.title}</h3>
							<p className="deployment-target">
								<strong>Best for:</strong> {model.target}
							</p>
						</header>
						<ul className="deployment-list">
							{model.deliverables.map(({ icon: Icon, label, text }) => (
								<li key={label}>
									<Icon size={20} />
									<div>
										<strong>{label}</strong>
										<span>{text}</span>
									</div>
								</li>
							))}
						</ul>
					</article>
				))}
			</div>
			<div className="regulatory-note">
				<ShieldCheck size={22} />
				<p>
					Every deployment strictly adheres to the staffing norms, first-aid equipment schedules, and
					record-keeping mandates laid down under the Gujarat Factory Rules and the Factories Act, 1948.
				</p>
			</div>
		</section>
	);
}
