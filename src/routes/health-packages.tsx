import type { Route } from './+types/health-packages';
import { seo } from '@/lib/seo';
import { getProducts } from '@/api/ecommerce-api';
import { Catalogue } from '@/components/packages/catalogue';
import { ClinicPanels } from '@/components/packages/clinic-panels';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Health Packages & Online Appointments | Akshar',description:'Explore preventive health panels and occupational screenings. Book available Akshar Healthcare appointment services and pay securely online. At-home vist option is available at an additional Rs.200 cost.'});}
export async function loader(){try{const {products}=await getProducts({exclude_types:'subscription',limit:100,sort_by:'order',order:'ASC'});return {products:products.filter(p=>p.url_handle),error:''};}catch{return {products:[],error:'Please call +91 9099941978 for availability and assistance.'};}}
export default function HealthPackages({loaderData}:Route.ComponentProps){return <main><div className="page-intro wide"><span className="eyebrow">PREVENTION IS A POWERFUL FIRST STEP</span><h1>Health packages & appointments.</h1><p>Personal wellness. Occupational fitness. Care that fits your needs.</p><div className="intro-links"><a className="bluetext" href="#online-booking">Book & pay online ↓</a><a className="bluetext" href="#clinic-packages">Explore clinic panels ↓</a></div></div><Catalogue products={loaderData.products} error={loaderData.error}/><ClinicPanels/></main>;}
