import type { Route } from './+types/enquiry';
import { seo } from '@/lib/seo';
import { EnquiryForm } from '@/components/enquiry-form';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Diagnostic Package Enquiry | Akshar Healthcare',description:'Request a preventive diagnostic panel or home blood sample collection with Akshar Healthcare in Vitthalapur, Gujarat.',noindex:true});}
export function loader({url}:Route.LoaderArgs){return {packageName:url.searchParams.get('package')||''};}
export default function Enquiry({loaderData}:Route.ComponentProps){return <main className="section narrow"><span className="eyebrow">PERSONALIZED PREVENTIVE CARE</span><h1>Let’s plan your health check.</h1><p>Send an enquiry for your selected clinic panel. Our team will confirm availability, preparation and collection arrangements.</p><EnquiryForm initialType="Diagnostic enquiry" packageName={loaderData.packageName}/></main>;}
