import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Phone, Menu, X, ArrowUpRight, CalendarDays } from 'lucide-react';

const NAV_ITEMS = [
	{ to: '/', label: 'Home' },
	{ to: '/about', label: 'About Us' },
	{ to: '/whyakshar', label: 'Why Akshar' },
	{ to: '/clinic', label: 'Clinic & Day Care' },
	{ to: '/compliance', label: 'Turnkey OHC & Factory Compliance' },
	{ to: '/health-packages', label: 'Health Packages' },
	{ to: '/branches', label: 'Branches' },
	{ to: '/contact', label: 'Contact Us' },
];

export function SiteHeader() {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	const isItemActive = (to: string) => {
		if (to === '/') {
			return location.pathname === '/' || location.pathname === '';
		}
		if (to === '/health-packages') {
			return location.pathname.startsWith('/health-packages') || location.pathname.startsWith('/product');
		}
		if (to === '/contact') {
			return location.pathname.startsWith('/contact') || location.pathname === '/enquiry';
		}
		return location.pathname === to || location.pathname.startsWith(to + '/');
	};

	return (
		<header className="site-header">
			<div className="utility">
				<div className="wide">
					<span>Occupational health. Clinical excellence. One trusted partner.</span>
					<a href="tel:+919099941978">
						<span className="live-dot" />
						24x7 Emergency: +91 9099941978 <Phone size={13} />
					</a>
				</div>
			</div>
			<div className="brand-row wide">
				<Link className="brand" to="/" aria-label="Akshar Healthcare and OHC Private Limited">
					<span className="logo-frame">
						<img
							className="logo-mark"
							src="/images/akshar-logo.jpg"
							alt="Akshar Healthcare Logo"
						/>
					</span>
					<span className="brand-name">
						<strong>AKSHAR HEALTHCARE</strong>
						<b>AND OHC PRIVATE LIMITED</b>
					</span>
				</Link>
				<div className="header-note">
					Healthcare for your people.<br />
					<strong>Confidence for your enterprise.</strong>
				</div>
				<Link to="/health-packages" className="button small">
					<CalendarDays size={17} /> Book Appointment <ArrowUpRight size={16} />
				</Link>
				<button
					className="mobile-toggle"
					aria-label={open ? 'Close navigation' : 'Open navigation'}
					aria-expanded={open}
					onClick={() => setOpen(!open)}
				>
					{open ? <X /> : <Menu />}
				</button>
			</div>
			<nav className={`navigation ${open ? 'is-open' : ''}`} aria-label="Main navigation">
				<div className="wide">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							className={isItemActive(item.to) ? 'active' : ''}
							onClick={() => setOpen(false)}
						>
							{item.label}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
}
