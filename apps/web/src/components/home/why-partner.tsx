import { Clock, MonitorCheck, FileCheck2, Award } from 'lucide-react';

const pillars = [
	{
		icon: Clock,
		title: 'One Integrated Report in 24 Hours',
		focus: 'Speed & Zero Coordination Hassle',
		text: 'No running after multiple vendors for pathology, ECG, audiometry, or lung function tests. We deliver a single consolidated medical dossier per worker\u2014covering Audiometry, Spirometry (PFT), 12-Lead ECG, Vision Testing, and Lab Blood Work\u2014within 24 hours of health camp completion.',
	},
	{
		icon: MonitorCheck,
		title: 'Live-Access Compliance Software',
		focus: 'Instant Ground Transparency',
		text: 'We grant your HR and EHS teams direct login access to our OHC software. View active workforce fitness status, upcoming re-testing dates, and complete health records anytime without waiting for paper reports.',
	},
	{
		icon: FileCheck2,
		title: 'Audit-Ready Without Backlog',
		focus: 'Real Compliance Peace of Mind',
		text: 'When DISH (Factory Inspectorate) arrives for surprise checks, pull up statutory Forms 15, 16, 31/31-A, 32, 33, and Form O immediately. No scrambled paperwork, missing files, or last-minute panic.',
	},
	{
		icon: Award,
		title: 'Grounded Local Network of 15+ Labs',
		focus: 'Reliability & Stability',
		text: 'Unlike fly-by-night contractors, our partner network runs over 15 established diagnostic and OHC setups across Bharuch, Ankleshwar, and surrounding industrial belts. We bring tested operating procedures, calibrated equipment, and certified staff directly to your site.',
	},
];

export function WhyPartner() {
	return (
		<section className="advantage-section" id="advantage">
			<div className="wide">
				<div className="advantage-intro">
					<span className="eyebrow">THE AKSHAR ADVANTAGE</span>
					<h2>
						Practical Industrial Health &amp; Statutory Compliance.<br />
						Built for the <em>Ground Realities of Gujarat&rsquo;s Factories</em>.
					</h2>
					<p className="advantage-sub">
						Built by teams with on-ground experience running 15+ diagnostic and OHC centers in the Bharuch
						industrial belt. We solve the everyday headaches of plant managers, HR teams, and EHS heads.
					</p>
				</div>
				<div className="advantage-grid">
					{pillars.map(({ icon: Icon, title, focus, text }) => (
						<article className="advantage-card" key={title}>
							<div className="advantage-card-top">
								<Icon size={26} />
								<span>{focus}</span>
							</div>
							<h3>{title}</h3>
							<p>{text}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
