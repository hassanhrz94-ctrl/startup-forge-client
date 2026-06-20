import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
     'seeker_pro': 'price_1TgqvNKVeKW5xj6DpPLSqTz2',
    'seeker_premium': 'price_1TgrIvKVeKW5xj6Dr0jheaJz',
    'recruiter_growth': 'price_1TgrIAKVeKW5xj6DwKwm5yAu',
    'recruiter_enterprise': 'price_1TgrH8KVeKW5xj6Dre4Ldl2I'}