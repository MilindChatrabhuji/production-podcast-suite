/**
 * Dual-Currency USD/INR Invoicing Engine
 * Production Podcast Repurposing Suite (Way #53 / Product 55)
 */

export interface PodcastRetainerTier {
  name: 'Starter' | 'Growth' | 'Enterprise';
  usdPrice: number;
  inrPrice: number;
  episodesPerMonth: number;
  videoClipsPerEpisode: number;
  seoBlogIncluded: boolean;
  slaHours: number;
}

export interface InvoicingRequest {
  clientName: string;
  clientEmail: string;
  clientCountry: 'IN' | 'US' | 'EU' | 'GLOBAL';
  tier: 'Starter' | 'Growth' | 'Enterprise';
  billingCycleStart: string;
  billingCycleEnd: string;
  customDiscountPercent?: number;
}

export interface InvoicingResponse {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  currency: 'USD' | 'INR';
  subtotal: number;
  taxAmount: number;
  taxDescription: string;
  totalAmount: number;
  paymentInstructions: string;
  checkoutUrl: string;
}

export class PodcastInvoicingEngine {
  private tiers: Record<string, PodcastRetainerTier> = {
    Starter: {
      name: 'Starter',
      usdPrice: 500,
      inrPrice: 41500,
      episodesPerMonth: 2,
      videoClipsPerEpisode: 0,
      seoBlogIncluded: false,
      slaHours: 48
    },
    Growth: {
      name: 'Growth',
      usdPrice: 1500,
      inrPrice: 125000,
      episodesPerMonth: 4,
      videoClipsPerEpisode: 3,
      seoBlogIncluded: true,
      slaHours: 48
    },
    Enterprise: {
      name: 'Enterprise',
      usdPrice: 3000,
      inrPrice: 250000,
      episodesPerMonth: 8,
      videoClipsPerEpisode: 5,
      seoBlogIncluded: true,
      slaHours: 24
    }
  };

  public generateInvoice(req: InvoicingRequest): InvoicingResponse {
    const tierConfig = this.tiers[req.tier];
    if (!tierConfig) throw new Error(`Invalid tier: ${req.tier}`);

    const isDomestic = req.clientCountry === 'IN';
    const currency = isDomestic ? 'INR' : 'USD';
    const basePrice = isDomestic ? tierConfig.inrPrice : tierConfig.usdPrice;

    const discount = (req.customDiscountPercent || 0) / 100;
    const subtotal = Math.round(basePrice * (1 - discount));

    let taxAmount = 0;
    let taxDescription = 'Zero-rated Export of Services under GST LUT';
    let paymentInstructions = 'International PayPal to milind.chatrabhuji@gmail.com';
    let checkoutUrl = `https://paypal.me/milindchatrabhuji/${subtotal}usd`;

    if (isDomestic) {
      taxAmount = Math.round(subtotal * 0.18);
      taxDescription = '18% GST (Domestic Service)';
      paymentInstructions = 'Bank Transfer / UPI to milind.chatrabhuji@okhdfcbank';
      checkoutUrl = `upi://pay?pa=milind.chatrabhuji@okhdfcbank&pn=Dr%20Milind%20Chatrabhuji&am=${subtotal + taxAmount}&cu=INR`;
    }

    const invoiceNumber = `INV-POD-${Date.now().toString().slice(-6)}`;
    const invoiceDate = new Date().toISOString().split('T')[0];
    const dueDate = new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0];

    return {
      invoiceNumber,
      invoiceDate,
      dueDate,
      currency,
      subtotal,
      taxAmount,
      taxDescription,
      totalAmount: subtotal + taxAmount,
      paymentInstructions,
      checkoutUrl
    };
  }
}
