import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetDir = path.resolve(__dirname, 'apps/web/public/images');

if (!fs.existsSync(targetDir)) {
	fs.mkdirSync(targetDir, { recursive: true });
}

const imagesToDownload = [
	{
		filename: 'akshar-logo.jpg',
		url: 'https://horizons-cdn.hostinger.com/1a2b91ff-0a2d-48f1-b923-004e2adf1475/50c625dbe46142bb9b6db4f7154b2919.jpg',
	},
	{
		filename: 'hero-doctor.png',
		url: 'https://images.hostinger.com/6925b23e-a962-4a5a-8f18-307461e87151.png',
	},
	{
		filename: 'clinic-care.png',
		url: 'https://images.hostinger.com/70fdce18-78ad-4567-87d1-491b9890d876.png',
	},
	{
		filename: 'biomarker-screening.png',
		url: 'https://images.hostinger.com/77de814c-a9be-4907-98d0-32b2f69b974b.png',
	},
	{
		filename: 'urgent-care.png',
		url: 'https://images.hostinger.com/cf23b10e-8539-4e73-a938-7e6a49ad5e22.png',
	},
	{
		filename: 'workplace-screening.png',
		url: 'https://images.hostinger.com/43917376-1ab0-40e4-9638-085278b17528.png',
	},
	{
		filename: 'executive-assessment.png',
		url: 'https://images.hostinger.com/4904ccff-6ac7-43e5-8916-5466ae4c1d3f.png',
	},
	{
		filename: 'pre-employment.png',
		url: 'https://images.hostinger.com/6212228d-6878-49a1-a1a8-d56706d46d7d.png',
	},
	{
		filename: 'urine-analysis.png',
		url: 'https://images.hostinger.com/15ecc8da-8c4c-4195-8dd1-466f64c41fd2.png',
	},
	{
		filename: 'blood-panel.png',
		url: 'https://images.hostinger.com/9a4b6de5-d25e-4e23-a7a4-1b763262f77f.png',
	},
	{
		filename: 'primary-care.png',
		url: 'https://images.hostinger.com/98c5d15d-3620-4156-9bf6-8d789f2c8ec4.png',
	},
	{
		filename: 'package-basic-wellness.png',
		url: 'https://images.hostinger.com/3f5dc107-ae1c-4e2b-bfcf-1db0b6f0ba8b.png',
	},
	{
		filename: 'package-gold.png',
		url: 'https://images.hostinger.com/26309be3-151c-46cf-9507-7caa0e1b2521.png',
	},
	{
		filename: 'package-platinum.png',
		url: 'https://images.hostinger.com/eead4f3e-563a-48f4-86a7-bcc6a0c53fbd.png',
	},
	{
		filename: 'package-men.png',
		url: 'https://images.hostinger.com/655ac33e-6000-465b-baa5-967ea2496b72.png',
	},
	{
		filename: 'package-women.png',
		url: 'https://images.hostinger.com/7523689a-579e-494d-95c5-a2d4e16f8f51.png',
	},
	{
		filename: 'package-senior.png',
		url: 'https://images.hostinger.com/60832f8c-0935-4b97-81db-84d27f6707aa.png',
	},
	{
		filename: 'package-kids.png',
		url: 'https://images.hostinger.com/14a65403-a72a-4aaf-adbb-752e3951236c.png',
	},
	{
		filename: 'package-nri.png',
		url: 'https://images.hostinger.com/f1271fbd-119d-401a-b96f-49a550ff7b75.png',
	},
	{
		filename: 'package-cardiac.png',
		url: 'https://images.hostinger.com/696e9441-c16d-401f-a35c-57c459ede719.png',
	},
	{
		filename: 'package-diabetes.png',
		url: 'https://images.hostinger.com/ab5c882e-53c6-420f-83b1-beebca2416b6.png',
	},
	{
		filename: 'package-vitamins.png',
		url: 'https://images.hostinger.com/ce0b4b3b-aceb-4dbb-bd1f-251b9d7fa183.png',
	},
	{
		filename: 'package-peme.png',
		url: 'https://images.hostinger.com/7251353d-ead6-40c8-be42-8662399f659d.png',
	},
	{
		filename: 'package-factory-pme.png',
		url: 'https://images.hostinger.com/e723bc64-3242-457e-9c05-da350fef00b5.png',
	},
];

const uploadedLocalImage = 'C:/Users/g_yag/.gemini/antigravity/brain/da6d56bb-b8af-46d7-a751-f5df53da2d23/.user_uploaded/media_1791735693745_424a56a0.jpg';

async function run() {
	console.log(`Downloading ${imagesToDownload.length} images to ${targetDir}...`);
	for (const item of imagesToDownload) {
		const destPath = path.join(targetDir, item.filename);
		try {
			const res = await fetch(item.url);
			if (!res.ok) throw new Error(`Status ${res.status}`);
			const buf = Buffer.from(await res.arrayBuffer());
			fs.writeFileSync(destPath, buf);
			console.log(`[OK] ${item.filename}`);
		} catch (err) {
			console.error(`[FAIL] ${item.filename}: ${err.message}`);
		}
	}

	// Copy user-uploaded image for Senior Citizen Care
	const seniorImgDest = path.join(targetDir, 'package-senior.jpg');
	const seniorUploadPath = 'C:/Users/g_yag/.gemini/antigravity/brain/da6d56bb-b8af-46d7-a751-f5df53da2d23/.user_uploaded/media_1791738158715_9b259e94.jpg';
	const fallbackPath = 'C:/Users/g_yag/.gemini/antigravity/brain/da6d56bb-b8af-46d7-a751-f5df53da2d23/.user_uploaded/media_1791735693745_424a56a0.jpg';
	
	const srcToUse = fs.existsSync(seniorUploadPath) ? seniorUploadPath : (fs.existsSync(fallbackPath) ? fallbackPath : null);
	if (srcToUse) {
		fs.copyFileSync(srcToUse, seniorImgDest);
		console.log(`[OK] package-senior.jpg copied from user upload.`);
	} else {
		console.warn(`User uploaded image not found.`);
	}

	console.log('All image operations completed!');
}

run();
