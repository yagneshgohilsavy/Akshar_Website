import type { Route } from './+types/checkout.cancelled';
import { seo } from '@/lib/seo';
import { CheckoutResult } from '@/components/checkout-result';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Checkout Cancelled | Akshar Healthcare',description:'Your checkout was cancelled and no payment was taken. Return to the appointment catalogue.',noindex:true});}
export default function Cancelled(){return <CheckoutResult success={false}/>;}
