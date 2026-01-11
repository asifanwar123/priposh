
import { Product } from './types';

export const CURRENCY = 'PKR';

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

// Real image URLs from Khayat.pk
export const HERO_IMAGES = [
  'https://khayat.pk/cdn/shop/files/khayat_banner_web_3befce6c-ba69-4178-8e99-1e15d7c325b6.jpg?v=1737118714&width=1880',
  'https://khayat.pk/cdn/shop/files/khayat_banner_web.jpg?v=1731401572&width=1880'
];

export const CATEGORY_IMAGES = {
  casual: 'https://khayat.pk/cdn/shop/files/1_bb6f9060-bc37-4970-a5b6-5ed9ef10752b_775x.jpg?v=1730810556',
  festive: 'https://khayat.pk/cdn/shop/files/2_c6e94f34-2cf5-4d61-bceb-249702c61403_775x.jpg?v=1730810562',
  kids: 'https://khayat.pk/cdn/shop/files/3_30caf8b8-6268-4bf0-93d5-ad0fa036702b_775x.jpg?v=1730810567'
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Carmine - Women',
    category: 'Festive',
    price: 21000,
    originalPrice: 25000,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/THT05080.jpg',
    description: 'Exquisite black festive wear with intricate detailing.',
    tags: ['women', 'festive', 'black'],
    sizes: SIZES,
    discountPercentage: 16,
    isNew: true
  },
  {
    id: '2',
    name: 'Shelina - Women',
    category: 'Festive',
    price: 19000,
    originalPrice: 22000,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/THT05003.jpg',
    description: 'Elegant black ensemble for special occasions.',
    tags: ['women', 'festive', 'black'],
    sizes: SIZES,
    discountPercentage: 14,
    isNew: true
  },
  {
    id: '3',
    name: 'Zelia - Women',
    category: 'Festive',
    price: 17000,
    originalPrice: 20000,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/DSC06237_6749f6bb-9799-4a59-8007-336d4345d705.jpg',
    description: 'Stunning red outfit crafted for the festive season.',
    tags: ['women', 'festive', 'red'],
    sizes: SIZES,
    discountPercentage: 15
  },
  {
    id: '4',
    name: 'Risma - Women',
    category: 'Festive',
    price: 17500,
    originalPrice: 21000,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/DSC06229_d993c335-3608-40d3-b99b-ba301f4dee77.jpg',
    description: 'Vibrant and traditional, perfect for celebrations.',
    tags: ['women', 'festive', 'pink'],
    sizes: SIZES,
    discountPercentage: 17,
    isNew: true
  },
  {
    id: '5',
    name: 'Pari Posh - Tea Pink',
    category: 'Casual',
    price: 3950,
    originalPrice: 5600,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/DSC04988.jpg',
    description: 'Soft tea pink casual wear for everyday elegance.',
    tags: ['women', 'casual', 'pink'],
    sizes: SIZES,
    discountPercentage: 29,
    isNew: true
  },
  {
    id: '6',
    name: 'Pari Posh - Melbury',
    category: 'Casual',
    price: 3950,
    originalPrice: 5600,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/22.png',
    description: 'Deep purple hue with comfortable fabric.',
    tags: ['women', 'casual', 'purple'],
    sizes: SIZES,
    discountPercentage: 29
  },
  {
    id: '7',
    name: 'Pari Posh - Greyish',
    category: 'Casual',
    price: 3200,
    originalPrice: 5600,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/1_bb6f9060-bc37-4970-a5b6-5ed9ef10752b_775x.jpg?v=1730810556',
    description: 'Subtle grey tones for a sophisticated casual look.',
    tags: ['women', 'casual', 'grey'],
    sizes: SIZES,
    discountPercentage: 43
  },
  {
    id: '8',
    name: 'Mint - 2 Piece',
    category: 'Casual',
    price: 2999,
    originalPrice: 4850,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/DSC04988.jpg',
    description: 'Fresh mint 2-piece suit, ideal for summer.',
    tags: ['women', 'casual', 'green'],
    sizes: SIZES,
    discountPercentage: 38,
    isNew: true
  },
  {
    id: '9',
    name: 'Lavender - 2 Piece',
    category: 'Casual',
    price: 2999,
    originalPrice: 4660,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/22.png',
    description: 'Lovely lavender shade in a comfortable cut.',
    tags: ['women', 'casual', 'lavender'],
    sizes: SIZES,
    discountPercentage: 36,
    isNew: true
  },
  {
    id: '10',
    name: 'Misty - 2 Piece',
    category: 'Casual',
    price: 2999,
    originalPrice: 4700,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/1_bb6f9060-bc37-4970-a5b6-5ed9ef10752b_775x.jpg?v=1730810556',
    description: 'Cool misty blue 2-piece set.',
    tags: ['women', 'casual', 'blue'],
    sizes: SIZES,
    discountPercentage: 36
  },
  {
    id: '11',
    name: 'Pari Posh Junior - Crimson',
    category: 'Kids',
    price: 4500,
    originalPrice: 6000,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/3_30caf8b8-6268-4bf0-93d5-ad0fa036702b_775x.jpg?v=1730810567',
    description: 'Bright crimson kurta for the little ones.',
    tags: ['kids', 'festive', 'red'],
    sizes: ['20', '22', '24', '26', '28'],
    discountPercentage: 25,
    isNew: true
  },
  {
    id: '12',
    name: 'Pari Posh Junior - Emerald',
    category: 'Kids',
    price: 4500,
    originalPrice: 6000,
    currency: CURRENCY,
    image: 'https://khayat.pk/cdn/shop/files/3_30caf8b8-6268-4bf0-93d5-ad0fa036702b_775x.jpg?v=1730810567',
    description: 'Comfortable emerald green blended fabric for kids.',
    tags: ['kids', 'casual', 'green'],
    sizes: ['20', '22', '24', '26', '28'],
    discountPercentage: 25
  }
];

export const STRIPE_PUBLIC_KEY_MOCK = "pk_test_123456789";

export const STATIC_PAGES_CONTENT: Record<string, { title: string, content: string }> = {
  'Our Story': {
    title: 'Our Story',
    content: `
      <p class="mb-4">Pari Posh was born from a desire to bridge the gap between traditional Eastern heritage and contemporary fashion sensibilities. Established in 2020, we started as a small boutique with a big vision: to create premium ethnic wear that resonates with the modern individual.</p>
      <p class="mb-4">Our journey began in the heart of the textile district, where we rediscovered the beauty of artisanal craftsmanship. We believe that clothing is not just about covering the body, but about expressing identity and culture. Each piece in our collection is a testament to this belief, crafted with the finest fabrics and intricate detailing.</p>
      <p class="mb-4">Today, Pari Posh is more than just a brand; it's a celebration of elegance, comfort, and timeless style. We are committed to sustainable practices and ethical sourcing, ensuring that our growth contributes positively to the community and the environment.</p>
      <p class="mb-8">Thank you for being part of our story.</p>

      <div class="mt-12 border-t border-gray-200 pt-8">
        <h3 class="font-heading font-bold text-2xl text-primary text-center mb-8 uppercase tracking-widest">CEO Message</h3>
        <div class="flex flex-col md:flex-row items-center gap-8 justify-center">
          <div class="w-48 h-48 flex-shrink-0 overflow-hidden rounded-full border-4 border-gray-100 shadow-lg">
            <img src="https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/480096217_122098691768772817_5002006631407603851_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0wKAytSaz3gQ7kNvwE1JmvU&_nc_oc=AdnQ5c3JqW2hAc0u3fIBOZwH0JhPMHrzQlFQOP3MeAYgFmZCXd6YZooHyVn84op_AqU&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=7zR6OvYUirWJxE7n7iwkoQ&oh=00_Afpt8ZrstJJ_jCFR8hYw3RfxLj_uVllwsqFRq61m5osL-Q&oe=69692035" alt="Muhammad Behzad Faisal" class="w-full h-full object-cover">
          </div>
          <div class="text-center md:text-left max-w-lg">
             <blockquote class="italic text-gray-600 text-lg mb-4">"We don't just sell clothes; we craft experiences that honor our traditions while embracing the future. Every stitch tells a story of passion and dedication."</blockquote>
             <p class="font-bold text-primary text-xl">Muhammad Behzad Faisal</p>
             <p class="text-secondary text-sm uppercase tracking-wider">Founder & CEO</p>
          </div>
        </div>
      </div>
    `
  },
  'Exchange & Return Policy': {
    title: 'Exchange & Return Policy',
    content: `
      <h3 class="font-bold text-lg mb-2">Exchange Policy</h3>
      <p class="mb-4">We want you to love your purchase. If you are not completely satisfied, you may exchange any unused, unwashed, and undamaged item with original tags attached within 14 days of delivery. Exchanges are subject to stock availability.</p>
      
      <h3 class="font-bold text-lg mb-2">Return Policy</h3>
      <p class="mb-4">We offer a 7-day return policy for a full refund (excluding shipping costs) on items that are defective or incorrect. For change of mind, we offer store credit valid for 6 months.</p>
      
      <h3 class="font-bold text-lg mb-2">Process</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>Contact our customer care team via email or WhatsApp with your order number.</li>
        <li>Ship the item back to our warehouse address provided by the support team.</li>
        <li>Once received and inspected, we will process your exchange or refund within 5-7 business days.</li>
      </ul>
      <p class="text-sm italic">Note: Sale items are final and cannot be returned or exchanged unless defective.</p>
    `
  },
  'Size Chart': {
    title: 'Size Guide',
    content: `
      <p class="mb-6">Please use the following guide to determine your size. All measurements are in inches.</p>
      
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Size</th>
              <th class="border border-gray-300 px-4 py-2">Chest</th>
              <th class="border border-gray-300 px-4 py-2">Waist</th>
              <th class="border border-gray-300 px-4 py-2">Hips</th>
              <th class="border border-gray-300 px-4 py-2">Length</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-bold">XS</td>
              <td class="border border-gray-300 px-4 py-2">34</td>
              <td class="border border-gray-300 px-4 py-2">26</td>
              <td class="border border-gray-300 px-4 py-2">36</td>
              <td class="border border-gray-300 px-4 py-2">38</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-bold">S</td>
              <td class="border border-gray-300 px-4 py-2">36</td>
              <td class="border border-gray-300 px-4 py-2">28</td>
              <td class="border border-gray-300 px-4 py-2">38</td>
              <td class="border border-gray-300 px-4 py-2">39</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-bold">M</td>
              <td class="border border-gray-300 px-4 py-2">38</td>
              <td class="border border-gray-300 px-4 py-2">30</td>
              <td class="border border-gray-300 px-4 py-2">40</td>
              <td class="border border-gray-300 px-4 py-2">40</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-bold">L</td>
              <td class="border border-gray-300 px-4 py-2">40</td>
              <td class="border border-gray-300 px-4 py-2">32</td>
              <td class="border border-gray-300 px-4 py-2">42</td>
              <td class="border border-gray-300 px-4 py-2">41</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-bold">XL</td>
              <td class="border border-gray-300 px-4 py-2">42</td>
              <td class="border border-gray-300 px-4 py-2">34</td>
              <td class="border border-gray-300 px-4 py-2">44</td>
              <td class="border border-gray-300 px-4 py-2">42</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mt-4 text-sm text-gray-500">Note: These are garment measurements. Please allow a tolerance of +/- 1 inch.</p>
    `
  },
  'Wholesale': {
    title: 'Wholesale Inquiries',
    content: `
      <p class="mb-4">Pari Posh offers wholesale opportunities for retailers interested in stocking our premium eastern wear collections. We value partnerships that align with our commitment to quality and style.</p>
      
      <h3 class="font-bold text-lg mb-2">Requirements</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>Registered business license or tax ID.</li>
        <li>Physical retail location or established online presence.</li>
        <li>Minimum opening order of PKR 200,000.</li>
      </ul>
      
      <p class="mb-4">To apply for a wholesale account, please email us at <strong>mbfaisal247@gmail.com</strong> with your business details, location, and a brief description of your store. Our sales team will review your application and get back to you within 3-5 business days.</p>
    `
  },
  'Contact Us': {
    title: 'Contact Us',
    content: `
      <p class="mb-6">We are here to help! Whether you have a question about your order, product details, or just want to say hello, feel free to reach out to us.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-2">Customer Care</h3>
          <p class="mb-1"><strong>Email:</strong> mbfaisal247@gmail.com</p>
          <p class="mb-1"><strong>WhatsApp:</strong> <a href="https://wa.me/923275247247" target="_blank" class="text-amber-600 hover:underline">032 75 247247</a></p>
          <p><strong>Hours:</strong> Mon-Sat, 10:00 AM - 6:00 PM (PKT)</p>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-2">Head Office</h3>
          <p>Shop No. 123, V Chowk,<br>Vehari Road Multan</p>
        </div>
      </div>
    `
  },
  'Our Policies': {
    title: 'Our Policies',
    content: `
      <p class="mb-4">At Pari Posh, we are committed to transparency and fairness. Our policies are designed to protect both our customers and our business operations.</p>
      <p class="mb-4">Please review the specific sections regarding Returns, Shipping, and Privacy found in the footer links to understand how we operate.</p>
      <p>We reserve the right to update these policies at any time without prior notice. Continued use of our website constitutes acceptance of these policies.</p>
    `
  },
  'Terms and Conditions': {
    title: 'Terms & Conditions',
    content: `
      <p class="mb-4">Welcome to Pari Posh. By accessing this website, you agree to comply with and be bound by the following terms and conditions of use.</p>
      
      <h3 class="font-bold text-lg mb-2">Intellectual Property</h3>
      <p class="mb-4">The content of the pages of this website is for your general information and use only. All trademarks, logos, and images reproduced in this website are the property of Pari Posh.</p>
      
      <h3 class="font-bold text-lg mb-2">Pricing</h3>
      <p class="mb-4">Prices are subject to change without notice. We make every effort to ensure accuracy, but errors may occur. We reserve the right to cancel orders arising from pricing errors.</p>
      
      <h3 class="font-bold text-lg mb-2">Order Acceptance</h3>
      <p>We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available for purchase, inaccuracies, or errors in product or pricing information.</p>
    `
  },
  'Privacy Policy': {
    title: 'Privacy Policy',
    content: `
      <p class="mb-4">Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>
      
      <h3 class="font-bold text-lg mb-2">Information Collection</h3>
      <p class="mb-4">We collect information you provide directly to us when you make a purchase, create an account, or subscribe to our newsletter. This includes your name, email address, shipping address, and payment information.</p>
      
      <h3 class="font-bold text-lg mb-2">Use of Information</h3>
      <p class="mb-4">We use this information to process your orders, communicate with you, and improve our services. We do not sell or rent your personal information to third parties.</p>
      
      <h3 class="font-bold text-lg mb-2">Cookies</h3>
      <p>Our website uses cookies to enhance your browsing experience and analyze site traffic.</p>
    `
  },
  'Shipping Policy': {
    title: 'Shipping Policy',
    content: `
      <h3 class="font-bold text-lg mb-2">Domestic Shipping (Pakistan)</h3>
      <p class="mb-4">We offer free shipping on all orders above PKR 10,000. For orders below this amount, a flat rate of PKR 250 applies. Delivery time is typically 3-5 business days.</p>
      
      <h3 class="font-bold text-lg mb-2">International Shipping</h3>
      <p class="mb-4">We ship worldwide! Shipping costs are calculated at checkout based on destination and weight. International delivery takes 7-14 business days. Note that customs duties and taxes are the responsibility of the customer.</p>
      
      <h3 class="font-bold text-lg mb-2">Tracking</h3>
      <p>Once your order is dispatched, you will receive a tracking number via email/SMS to monitor your shipment.</p>
    `
  },
  'Refund Policy': {
    title: 'Refund Policy',
    content: `
      <p class="mb-4">Refunds are processed solely for defective items or order cancellations made before shipment.</p>
      <p class="mb-4">If your return is approved, we will initiate a refund to your original method of payment (or bank transfer for COD orders). You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
      <p>Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
    `
  },
  'FAQ': {
    title: 'Frequently Asked Questions',
    content: `
      <div class="space-y-4">
        <div>
          <h4 class="font-bold text-gray-900">How do I track my order?</h4>
          <p class="text-gray-600">You will receive a tracking ID via email and SMS once your order is dispatched.</p>
        </div>
        <div>
          <h4 class="font-bold text-gray-900">Can I cancel my order?</h4>
          <p class="text-gray-600">Yes, you can cancel your order within 24 hours of placing it by contacting our customer support.</p>
        </div>
        <div>
          <h4 class="font-bold text-gray-900">Do you offer Cash on Delivery?</h4>
          <p class="text-gray-600">Yes, COD is available for orders within Pakistan up to PKR 50,000.</p>
        </div>
        <div>
          <h4 class="font-bold text-gray-900">Do you have a physical store?</h4>
          <p class="text-gray-600">Currently, we operate exclusively online to bring you the best prices and variety.</p>
        </div>
      </div>
    `
  }
};
