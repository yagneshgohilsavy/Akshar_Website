import { Network, Stethoscope, Cloud } from 'lucide-react';

const pillars = [
	{
		icon: Network,
		title: 'Established Regional Network',
		text: 'A network of over 15 partner diagnostic and Occupational Health Centre (OHC) facilities across Gujarat\u2019s manufacturing belts, conducting regular statutory health examinations.',
		image: 'https://images.hostinger.com/08e29aa1-a539-4de9-a733-8f00ce069182.png',
		alt: 'Network of diagnostic laboratories and occupational health centres across Gujarat industrial belts',
	},
	{
		icon: Stethoscope,
		title: 'Clinical Setup & Emergency Readiness',
		text: 'Central clinic equipped with a 3-bed observation unit, round-the-clock emergency handling, qualified doctors holding MBBS and Associate Fellow of Industrial Health (AFIH), and industrial nursing staff.',
		image: 'https://images.hostinger.com/4468a35e-4cd0-4e99-9e8b-f40af02bf828.png',
		alt: 'Indian occupational health clinic with three-bed observation unit and emergency equipment',
	},
	{
		icon: Cloud,
		title: 'Digital Healthcare Infrastructure',
		text: 'Connecting industrial medical care with automated software architecture to provide real-time documentation and audit readiness.',
		image: 'https://images.hostinger.com/d5f5351d-24ff-423a-8f04-d5ac531c6707.png',
		alt: 'Factory medical officer using cloud-based OHC compliance software workstation',
	},
];

export function About() {
	return (
		<section className="section wide" id="about">
			<div className="about-intro">
				<div>
					<span className="eyebrow">ABOUT AKSHAR HEALTHCARE</span>
					<h2>
						Practical Industrial Health &amp; Occupational<br />
						Healthcare Solutions Across <em>Gujarat</em>
					</h2>
				</div>
				<div className="about-lead">
					<p>
						Akshar Healthcare and Occupational Health Centre (OHC) Private Limited is founded by
						healthcare and industrial infrastructure professionals with extensive ground experience in
						Gujarat&rsquo;s industrial belts. Supported by an established partner network running over 15
						diagnostic laboratories and Occupational Health Centres (OHCs) in and around Bharuch,
						Ankleshwar, and surrounding industrial hubs, we deliver dependable workforce healthcare and
						statutory compliance management.
					</p>
					<p className="about-narrative">
						From our flagship branch in Vitthalapur (Ahmedabad) across our broader network, we connect
						industrial plant management with compliant medical operations. We operate as an organized,
						technology-enabled partner dedicated to eliminating regulatory liabilities and protecting
						workforce health.
					</p>
				</div>
			</div>
			<div className="about-grid">
				{pillars.map(({ icon: Icon, title, text, image, alt }) => (
					<article className="about-card" key={title}>
						<div className="about-card-media">
							<img src={image} loading="lazy" alt={alt} />
						</div>
						<div className="about-card-body">
							<Icon size={26} />
							<h3>{title}</h3>
							<p>{text}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
