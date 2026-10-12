import type { Route } from './+types/checkout.success';
import { seo } from '@/lib/seo';
import { CheckoutResult } from '@/components/checkout-result';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Booking Confirmation | Akshar Healthcare',description:'Thank you for booking your healthcare appointment with Akshar Healthcare.',noindex:true});}
export default function Success(){return <CheckoutResult success/>;}
