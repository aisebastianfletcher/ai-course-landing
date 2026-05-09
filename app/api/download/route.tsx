import { renderToBuffer, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'

export const dynamic = 'force-dynamic'

Font.register({
  family: 'Helvetica',
})

const green = '#16a34a'
const darkText = '#111827'
const bodyText = '#374151'
const mutedText = '#6b7280'
const lightBg = '#f0fdf4'
const divider = '#d1fae5'

const s = StyleSheet.create({
  page: { fontFamily: 'Helvetica', backgroundColor: '#ffffff', paddingTop: 60, paddingBottom: 70, paddingHorizontal: 55 },
  coverPage: { fontFamily: 'Helvetica', backgroundColor: '#0a0a0a', paddingTop: 0, paddingBottom: 0, paddingHorizontal: 0 },
  coverBg: { flex: 1, backgroundColor: '#0a0a0a', padding: 60, justifyContent: 'center' },
  coverEyebrow: { fontSize: 10, color: green, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 24 },
  coverTitle: { fontSize: 38, fontWeight: 'bold', color: '#ffffff', lineHeight: 1.2, marginBottom: 20 },
  coverTitleGreen: { fontSize: 38, fontWeight: 'bold', color: green, lineHeight: 1.2 },
  coverSub: { fontSize: 13, color: '#9ca3af', lineHeight: 1.7, marginTop: 20, maxWidth: 400 },
  coverDivider: { width: 60, height: 3, backgroundColor: green, marginTop: 40, marginBottom: 40 },
  coverFooter: { position: 'absolute', bottom: 40, left: 60, right: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  coverFooterText: { fontSize: 10, color: '#4b5563' },
  tocPage: { fontFamily: 'Helvetica', backgroundColor: '#ffffff', paddingTop: 60, paddingBottom: 70, paddingHorizontal: 55 },
  tocTitle: { fontSize: 22, fontWeight: 'bold', color: darkText, marginBottom: 6 },
  tocSubtitle: { fontSize: 11, color: mutedText, marginBottom: 32 },
  tocGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  tocItem: { width: '50%', marginBottom: 10, flexDirection: 'row', alignItems: 'flex-start', paddingRight: 16 },
  tocLetter: { fontSize: 11, fontWeight: 'bold', color: green, width: 22, flexShrink: 0 },
  tocLabel: { fontSize: 10, color: bodyText, flex: 1, lineHeight: 1.4 },
  sectionHeader: { backgroundColor: lightBg, borderLeftWidth: 4, borderLeftColor: green, paddingVertical: 14, paddingHorizontal: 18, marginBottom: 18, marginTop: 4 },
  sectionLetter: { fontSize: 28, fontWeight: 'bold', color: green, marginBottom: 2 },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: darkText },
  body: { fontSize: 11, color: bodyText, lineHeight: 1.8, marginBottom: 13 },
  pageNumber: { position: 'absolute', bottom: 30, right: 55, fontSize: 9, color: mutedText },
  pageFooter: { position: 'absolute', bottom: 30, left: 55, fontSize: 9, color: mutedText },
  dividerLine: { borderTopWidth: 1, borderTopColor: divider, marginVertical: 20 },
  checklistTitle: { fontSize: 13, fontWeight: 'bold', color: darkText, marginBottom: 12, marginTop: 8 },
  checklistItem: { flexDirection: 'row', marginBottom: 9, alignItems: 'flex-start' },
  checkBox: { width: 14, height: 14, borderWidth: 1.5, borderColor: green, borderRadius: 3, marginRight: 10, marginTop: 1, flexShrink: 0 },
  checkText: { fontSize: 10.5, color: bodyText, flex: 1, lineHeight: 1.6 },
  tip: { backgroundColor: lightBg, borderRadius: 6, padding: 14, marginTop: 8, marginBottom: 14 },
  tipLabel: { fontSize: 9, fontWeight: 'bold', color: green, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 5 },
  tipText: { fontSize: 10.5, color: bodyText, lineHeight: 1.7 },
})

const SECTIONS = [
  {
    letter: 'A',
    title: 'Acquiring Your First Property',
    content: [
      'Finding the right property is the single most important decision you will make in this business. Location is everything, and within location, the deciding factor is demand. The strongest serviced accommodation markets are city centres with a healthy mix of corporate travellers and leisure visitors, towns adjacent to major hospitals or business parks, coastal destinations, and university cities. A modest two-bedroom apartment in a high-demand neighbourhood will consistently outperform a four-bedroom house in a quiet commuter town.',
      'Before committing to any property, calculate the yield gap: the difference between the monthly income you would earn on a standard long-term let versus what the same property could generate on short-term platforms. A property yielding 1,200 per month as a standard rental but capable of generating 2,800 per month as serviced accommodation represents a compelling opportunity. As a rule of thumb, aim for a yield gap of at least 80 percent above the long-term rental equivalent before you proceed.',
      'You do not need to own property to get started. Rent-to-rent agreements, where you lease a property from a landlord and operate it as serviced accommodation with their full written consent, are a well-established entry point. These arrangements allow you to build a portfolio and develop your operational skills with substantially lower upfront capital. Always secure written permission from the freeholder and confirm the arrangement does not breach any mortgage or lease conditions.',
    ],
    tip: 'Search Rightmove with an AirDNA or AllTheRooms overlay to identify where occupancy rates exceed 75 percent before you commit to any area.',
  },
  {
    letter: 'B',
    title: 'Building a Brand People Remember',
    content: [
      'Most serviced accommodation operators rely entirely on their platform listing and never think about brand at all. This is precisely why even a modest investment in brand identity goes such a long way. Your brand is the reason a guest chooses your property over the identical apartment three streets away, and it is the reason they come back directly the second time rather than paying the platform a commission again.',
      'Start with a property name that communicates both location and feeling. Names like The Merchant Quarter Apartments or Harbour View Stays are specific, evocative and memorable. Avoid anything generic. Then choose two brand colours and a single font, and use them consistently across your listing photos, welcome pack, branded toiletries, and any direct booking materials. Consistency is the mechanism that builds trust, and trust is what converts browsers into bookings.',
      'Direct bookings, where guests contact you and pay you directly, are the goal every SA operator should work towards. When a returning guest books directly, you eliminate platform fees of 15 to 20 percent overnight. A simple website, a branded email address, and a card in every property directing guests to book direct for the best rate is all it takes to start capturing that revenue.',
    ],
    tip: 'Canva has free brand kits that allow you to maintain consistent fonts and colours across all your materials without needing a graphic designer.',
  },
  {
    letter: 'C',
    title: 'Compliance, Licensing and Planning Permission',
    content: [
      'This is the section most new operators skip, and it is the one that causes the most problems down the line. In England, properties let for more than 90 nights per year on a short-term basis may require planning permission for a change of use from C3 residential to C1 hotel and hospitality use, depending on your local authority. London has its own rules, capping short-term lets at 90 nights per calendar year unless you obtain planning permission. Always check with your local planning authority before you begin operating.',
      'Fire safety compliance is non-negotiable. You are required to carry out a fire risk assessment of your property, install interlinked smoke alarms on every level, fit a carbon monoxide detector in any room with a fuel-burning appliance, and ensure all furniture meets current fire resistance standards. Electrical installation condition reports must be carried out every five years, and gas safety certificates must be renewed annually if the property has any gas appliances. Failure to maintain these certificates is a criminal offence.',
      'Some local authorities require a selective or additional licensing scheme registration for properties in their area, and the rules vary considerably by borough and district. Register with HMRC as a self-employed business or limited company before taking your first booking, and keep records from day one. The Furnished Holiday Lettings tax regime, which carries significant tax advantages for qualifying SA businesses, has its own criteria around minimum letting days and availability.',
    ],
    tip: 'Speak to a solicitor or planning consultant before signing any rent-to-rent agreement. A ten-minute call can prevent months of legal headache.',
  },
  {
    letter: 'D',
    title: 'Design and Interior Styling',
    content: [
      'The design of your property is your most powerful marketing tool. Guests make a booking decision within eight seconds of seeing your lead photograph, and that photograph is entirely determined by how your property looks. You do not need to spend a fortune, but you do need to make deliberate choices. A coherent interior theme, even a simple one, photographs dramatically better than a property filled with mismatched furniture and leftover items.',
      'Pick one design direction and commit to it. Scandinavian minimal, industrial chic, warm coastal, and contemporary monochrome all photograph well and appeal to both business and leisure guests. Once you have chosen a direction, buy all your furniture and soft furnishings in that palette. The goal is a hotel-quality look at a fraction of the cost. IKEA, Dunelm, and H&M Home all offer excellent value for SA operators when purchased with a coherent vision in mind.',
      'Pay particular attention to the bed, the sofa, and the kitchen. These are the three rooms and three items that guests photograph, remember, and mention in reviews. A hotel-quality mattress, good linen with a high thread count, and a properly stocked kitchen with decent coffee equipment will generate a disproportionate number of five-star reviews. Spend more here and less on the details guests never notice.',
    ],
    tip: 'White or light grey walls are universally flattering in photographs and make small spaces appear larger. Repaint if necessary before your first photo shoot.',
  },
  {
    letter: 'E',
    title: 'Essential Equipment and What to Stock',
    content: [
      'A fully equipped property is the baseline expectation for any guest paying serviced accommodation rates. Before your first booking goes live, work through every room methodically and ensure nothing is missing. The kitchen should contain at minimum a full set of plates, bowls, mugs, glasses and cutlery for the maximum occupancy, a decent set of pots and pans, a sharp knife, a chopping board, a kettle, a toaster, a coffee maker, and a selection of tea, coffee and sugar. Missing a tin opener or a corkscrew is the kind of thing that ends up in a review.',
      'The bathroom should be stocked with hotel-grade toiletries: shampoo, conditioner, body wash, hand wash, and a spare toilet roll. Do not use budget own-brand products here. Guests notice. Invest in a mid-range branded range and it will be mentioned in reviews. Provide at least two bath towels and two hand towels per guest, along with a bathmat. If you have a shower, ensure the water pressure is adequate and the shower head is clean before every guest.',
      'Every property should also contain a welcome pack, a property manual, a first aid kit, a hairdryer, an iron and ironing board, a clothes drying rack, spare bedding, spare pillows, blackout blinds in the bedroom, and a well-functioning television with streaming access. These are not luxuries; they are the expected standard for anyone paying serviced accommodation rates.',
    ],
    tip: 'Create a laminated one-page property guide that covers the WiFi password, bin collection days, parking instructions, and local food delivery apps. Guests ask about all of these.',
  },
  {
    letter: 'F',
    title: 'Finance, Funding and Profit Margins',
    content: [
      'Understanding your numbers before you launch is not optional. You need to know your break-even occupancy: the percentage of nights per month you need to fill in order to cover all your costs, including rent or mortgage, utilities, cleaning, platform fees, insurance, and consumables. For most properties, this falls between 40 and 55 percent occupancy. Any revenue generated above that threshold is profit. Once you understand this figure, you can assess whether a property is viable before you commit to it.',
      'The most common financial mistake new SA operators make is underestimating their cleaning costs. A professional clean of a two-bedroom apartment takes between two and three hours and costs between 50 and 90 pounds. If your average stay is two nights, you are paying for a clean after almost every booking. This is why nightly rates need to account for a cleaning fee, and why minimum stay policies of two to three nights significantly improve your margin per booking.',
      'From a funding perspective, buy-to-let mortgages are not automatically suitable for serviced accommodation use. You need either a specialist SA or holiday let mortgage, or a commercial mortgage if you are operating at scale. Speak to a broker who specialises in this sector. On the cost side, utilities for a short-term let property will run higher than a long-term let because guests tend to use heating, hot water, and electricity more liberally. Budget for this from the outset.',
    ],
    tip: 'Build a simple spreadsheet that calculates your monthly profit at 50, 65, and 80 percent occupancy. This one exercise will clarify your targets and prevent most financial surprises.',
  },
  {
    letter: 'G',
    title: 'Guest Experience Excellence',
    content: [
      'The guest experience begins the moment someone makes a booking, not when they arrive at the door. Your first message after a booking is confirmed sets the tone for everything that follows. Keep it warm, specific and practical. Confirm the dates, share the check-in instructions, provide the address, and offer to answer any questions. Guests who feel looked after before arrival are already predisposed to leave a positive review.',
      'On arrival, the property should be spotless, smell fresh, feel at the right temperature, and have a small welcome touch waiting. This does not need to be expensive: a short handwritten note, a small bar of chocolate, or a packet of locally roasted coffee all communicate care and effort. These touches cost almost nothing and are mentioned in reviews more often than any piece of furniture or appliance.',
      'During the stay, your role is to be responsive without being intrusive. Reply to messages within an hour during normal hours. If something breaks or goes wrong, respond with speed and kindness rather than defensiveness. How you handle a problem is what guests remember and review, far more than the problem itself. A guest who had a minor issue resolved quickly and generously will often leave a better review than a guest whose stay was completely uneventful.',
    ],
    tip: 'Send a mid-stay message at the halfway point of any booking longer than three nights. A simple check-in asking if everything is comfortable catches small problems before they become reviews.',
  },
  {
    letter: 'H',
    title: 'Housekeeping and Turnovers',
    content: [
      'Your cleaning operation will make or break your SA business. A substandard clean produces a negative review, a negative review reduces your booking rate, and a reduced booking rate directly reduces your income. Cleaning is not a cost to be minimised; it is a core part of your product. Either develop the discipline and systems to do it exceptionally well yourself, or invest in a professional cleaning team who understand SA standards.',
      'The most effective approach is to create a detailed cleaning checklist, broken down room by room, that your cleaner follows on every single turnover. The checklist should specify every task: stripping and remaking beds with fresh linen, wiping all surfaces including light switches and door handles, descaling the kettle, cleaning the inside of the microwave, checking behind the toilet, inspecting every item in the kitchen inventory, and resetting the welcome touches. Nothing should be left to assumption.',
      'Linen management is the operational challenge most SA operators underestimate. You need a minimum of three complete sets of linen per property: one on the beds, one with your cleaner for the next turnover, and one as a spare. A professional laundry service is worth the cost for operators running multiple properties, as it removes the most time-consuming part of the turnover process entirely.',
    ],
    tip: 'Pay your cleaner a premium above the local rate and treat them as a key business partner. A reliable, high-quality cleaner is worth more to your SA business than almost any other resource.',
  },
  {
    letter: 'I',
    title: 'Insurance — What You Actually Need',
    content: [
      'Standard home insurance does not cover short-term lettings. Standard landlord insurance does not cover short-term lettings. If you operate with either of these policies and a guest is injured or causes damage, you will not be covered. You need specialist serviced accommodation or short-term let insurance, and you need to read the policy carefully to understand exactly what it does and does not cover.',
      'A proper SA insurance policy will cover public liability, which protects you if a guest is injured on the property; buildings and contents insurance; accidental damage caused by guests; loss of rental income if the property becomes uninhabitable due to an insured event; and legal expenses. Some policies also include employer liability if you have cleaners or co-hosts on your payroll. Get quotes from at least three specialist providers.',
      'Beyond your own insurance, be aware that Airbnb provides AirCover, which includes up to 1 million pounds of host liability insurance and up to 1 million pounds of property damage protection. This is a useful backstop, but it is not a substitute for a standalone insurance policy. AirCover has exclusions and claim processes that can be slow. Your own policy is always your primary protection.',
    ],
    tip: 'Directline for Business, Pikl, and Superhog all offer specialist SA insurance products worth comparing. Update your policy whenever you add a new property.',
  },
  {
    letter: 'J',
    title: 'Joining the Right Platforms',
    content: [
      'Airbnb remains the dominant platform for short-term lets in most UK markets, and it should be your primary listing when you launch. The platform has the largest audience of ready-to-book travellers, the most developed review system, and the most user-friendly host management tools. Start here, learn the platform thoroughly, and build your review base before you expand to other channels.',
      'Booking.com is the second most important platform for most SA operators, particularly for business travellers and international guests. It operates on a commission model rather than a split fee structure, and it tends to attract a slightly different guest profile to Airbnb. Many operators find that listing on both platforms together increases their overall occupancy rate by 10 to 20 percentage points, with minimal additional management effort once systems are in place.',
      'VRBO is the third major platform, particularly relevant for larger properties and family holiday bookings. Specialist corporate housing platforms such as Situ, Spotahome, and Homelike are worth exploring once you are ready to target the corporate market, as these guests tend to book longer stays at higher nightly rates. The goal over time is to reduce your dependency on any single platform and build a direct booking capability alongside your OTA presence.',
    ],
    tip: 'Use a channel manager such as Lodgify, Guesty, or Smoobu from the moment you list on more than one platform. Double bookings are catastrophic for your review profile.',
  },
  {
    letter: 'K',
    title: 'Key Management and Access Solutions',
    content: [
      'How guests access your property is a significant operational decision, and the right answer depends on your setup and location. The three main options are key safe, smart lock, and in-person handover. In-person handover is the most time-consuming and should only be used if you have a strong operational reason for it, such as wanting to carry out a property inspection at check-in.',
      'Key safes are inexpensive, reliable and widely used. They work well for most SA operators, particularly those managing properties remotely. The weakness is that the code rarely changes between guests, which is a mild security concern. Position the key safe in an inconspicuous location and change the code whenever you have any doubt about its security.',
      'Smart locks are the best long-term solution for any SA operation with more than two properties. They allow you to generate unique access codes for each booking that expire automatically at checkout time. They eliminate the risk of guests not returning keys, they provide an access log that can be useful in disputes, and they give you complete remote control over who can enter the property and when. The upfront cost is higher but the operational benefit is substantial.',
    ],
    tip: 'Always have a physical key backup stored securely off-site. Technology fails, and a locksmith call on a Sunday evening is expensive and unnecessary with the right contingency in place.',
  },
  {
    letter: 'L',
    title: 'Legal Agreements and Contracts',
    content: [
      'Every SA operation needs a suite of legal documents, and most operators do not have them. The most important is a short-term lettings agreement or licence to occupy, which you should require every guest to sign before or at check-in. This document confirms the terms of the stay, the house rules, the check-out requirements, and the damage deposit policy. It is the single most important tool you have if a dispute arises.',
      'If you are operating under a rent-to-rent model, your agreement with the landlord must be watertight. It must explicitly permit subletting on short-term platforms, specify who is responsible for maintenance and repairs, define the notice period and exit conditions, and address what happens if the property needs to come off platforms for any period. Have this agreement reviewed by a solicitor before you sign.',
      'Your house rules, which every guest must agree to on every platform before booking, are also a legal document of sorts. Write them clearly, specifically, and without ambiguity. Specify the maximum number of guests, your policy on parties and gatherings, noise curfew hours, smoking and pet policies, and what happens in the event of a late checkout or early arrival. The more specific your rules, the easier it is to enforce them and the easier it is to make a successful claim against a security deposit if rules are broken.',
    ],
    tip: 'Collect a security deposit for every booking, either through the platform or directly. Even a modest deposit changes guest behaviour and provides a financial remedy in the event of damage.',
  },
  {
    letter: 'M',
    title: 'Marketing Beyond the Platforms',
    content: [
      'Platform listings alone are a ceiling on your business. The platforms control your visibility, take a commission on every booking, and can change their algorithms or policies at any time. Building a marketing presence beyond the platforms is not optional for any SA operator who wants to build a sustainable, scalable business.',
      'A dedicated website for your property or portfolio is the foundation of your direct booking strategy. It does not need to be complicated: a homepage with strong photography, a brief description of what makes your property special, a booking calendar, and a contact form is sufficient. Use a booking engine like Lodgify or Hostfully that allows guests to book and pay directly from your website. Optimise the site for local search terms such as short-term lets in your town, serviced apartments near your city, and similar phrases that guests actually search for.',
      'Social media, particularly Instagram, is highly effective for SA marketing. Lifestyle photography of your property, behind-the-scenes content showing your operations, local area guides and recommendations, and genuine guest testimonials all perform well. Post consistently rather than perfectly. A property Instagram account with 500 genuinely engaged followers will generate more direct bookings over a year than a hundred hours of platform optimisation.',
    ],
    tip: 'Encourage every guest to tag your property on social media. A simple card near the TV with your Instagram handle and a request to share their stay is all it takes.',
  },
  {
    letter: 'N',
    title: 'Nailing Your Pricing Strategy',
    content: [
      'Most new SA operators set their prices once and leave them there. This is one of the most expensive mistakes you can make. Dynamic pricing, where your nightly rate responds to demand, seasonality, local events, and competitor availability, can increase your annual revenue by 20 to 40 percent over a static pricing strategy for an identical property.',
      'Start by understanding the demand calendar for your area. Bank holidays, school holidays, major local events, conferences, and sporting fixtures all represent periods of elevated demand where you should be charging significantly more than your baseline rate. Conversely, mid-week nights in low season typically need to be priced more competitively to maintain occupancy. Your goal is to maximise revenue per available night rather than nightly rate alone.',
      'Dynamic pricing tools such as PriceLabs, Beyond, and Wheelhouse integrate directly with Airbnb and Booking.com and automate this entire process based on real-time market data. They are worth their monthly subscription cost from the first month of use for most operators. Alternatively, review your pricing manually every week, particularly in the 30 to 60 days ahead window, and adjust rates based on your current occupancy and competitor availability.',
    ],
    tip: 'Never compete on price alone. A slightly higher nightly rate with better photography, more reviews, and a stronger listing will consistently outperform a cheaper listing with inferior presentation.',
  },
  {
    letter: 'O',
    title: 'Operations and Systems That Scale',
    content: [
      'The difference between an SA operator who is constantly stressed and reactive and one who runs a calm, profitable portfolio is almost entirely about systems. Systems transform a business that runs on your personal attention into one that can be managed, delegated, and scaled. Build your systems from the very first property and every subsequent property becomes easier rather than harder to add.',
      'Your core operational systems should cover: booking and channel management, guest communication templates for every stage of the guest journey, a cleaning checklist and turnover protocol, a property maintenance log, a key management procedure, a monthly accounts reconciliation, and a review management process. All of these can be created and documented in a simple tool like Notion, Google Docs, or Airtable.',
      'Automation is your most powerful scaling tool. Modern SA management platforms allow you to automate the majority of your guest communication, from the booking confirmation to the day-before check-in message to the post-checkout review request. When guest messages arrive outside business hours, an automated response that sets expectations and promises a reply the following morning prevents negative reviews and keeps guests feeling looked after.',
    ],
    tip: 'Document every process as if you are writing an instruction manual for someone who has never managed a property before. Hiring and delegating becomes dramatically easier when your systems are written down.',
  },
  {
    letter: 'P',
    title: 'Photography That Converts Browsers into Guests',
    content: [
      'Photography is the single highest-return investment you will make in your SA business. A professional photo shoot typically costs between 150 and 400 pounds. A property with professional photography receives on average 40 percent more enquiries than an identical property photographed on a smartphone. The maths are straightforward: at a nightly rate of 100 pounds, a single additional booking per month pays for professional photography inside four months.',
      'Prepare the property meticulously before the photographer arrives. Every surface should be clear and clean. Style the dining table with plates and glasses. Place fresh flowers in the living room. Fold the towels hotel-style in the bathroom. Turn on every lamp and light to create warmth. Open the curtains or blinds to let in natural light. These details cost nothing and make an enormous difference to the photographs.',
      'The lead photograph is the one that determines whether a guest clicks through to your listing at all. Choose a photograph of your most visually impressive space, usually the living area or the master bedroom, taken from the angle that makes it look largest and most welcoming. Airbnb allows you to choose your lead image; choose it carefully and test different options if you are not getting the click-through rate you expect.',
    ],
    tip: 'Book a photographer on a sunny morning for the best natural light. Overcast days produce flat, uninspiring interior photographs regardless of the photographer\'s skill.',
  },
  {
    letter: 'Q',
    title: 'Quality Control and Maintaining Standards',
    content: [
      'Maintaining consistent quality across multiple properties and multiple cleaning teams is the central operational challenge of any SA portfolio. The solution is a quality control system that does not rely on your personal presence. The best SA operators build quality control into their turnover process rather than inspecting properties after the fact.',
      'Require your cleaners to complete a photographic checklist after every turnover: a photograph of the made bed, the clean kitchen, the reset bathroom, and the front door locked. These photographs are timestamped and create an auditable record of the property condition at the point of each check-out. They also gently reinforce the standard you expect without requiring a confrontational conversation.',
      'Review your own listing regularly as if you were a potential guest encountering it for the first time. Is the photography still accurate and flattering? Are the amenities listed complete and up to date? Does the description reflect the actual experience? Guest expectations are set entirely by your listing, and a gap between what is promised and what is delivered is the root cause of most negative reviews.',
    ],
    tip: 'Carry out a full property audit at least once per quarter. Test everything: the shower pressure, the WiFi speed, the television remote, the bedroom blackout, the kitchen appliances. Guests will find anything you miss.',
  },
  {
    letter: 'R',
    title: 'Reviews and Reputation Management',
    content: [
      'In the serviced accommodation business, your reviews are your most valuable commercial asset. A property with 50 five-star reviews and a 4.9 rating will command a premium of 15 to 25 percent above market rate, maintain higher occupancy through slower periods, and achieve Superhost or Guest Favourite status on the major platforms. This status generates further algorithmic advantages that compound over time.',
      'The most effective way to accumulate five-star reviews is to deliver a five-star experience consistently, then ask for the review at exactly the right moment. The best moment to request a review is in a message sent within two hours of checkout, while the guest\'s positive experience is fresh and before they have moved on to their next activity. Keep the request brief, warm and personal. Automated review requests that feel generic are less effective than a short message that references something specific about the stay.',
      'Every negative review you receive should be responded to publicly, promptly and professionally. Your response is not for the guest who left the review; it is for every future potential guest who reads it. A calm, professional response that acknowledges the issue and describes what you have done to address it demonstrates a level of care and accountability that actually builds trust with prospective guests, even when the underlying review is negative.',
    ],
    tip: 'Never argue with a negative review, no matter how unfair it feels. Potential guests reading a defensive or combative host response consistently choose to book elsewhere.',
  },
  {
    letter: 'S',
    title: 'Setting Up Your Listing for Maximum Visibility',
    content: [
      'A well-optimised listing is the foundation of your Airbnb strategy. The platform\'s search algorithm considers over 100 factors when deciding which properties to show to a guest, and while the full algorithm is proprietary, the key variables are well understood: listing completeness, number and quality of reviews, response rate and response speed, acceptance rate, and pricing competitiveness relative to comparable properties in your area.',
      'Start by completing every field in your listing, including those that are optional. Write a title that leads with your property\'s strongest selling point. Titles that include specific location references, key amenities, or guest types consistently outperform generic titles. Write a description that tells a story rather than listing features. What does a stay in your property actually feel like? What will a guest be able to do from your front door? Why should they choose you over the alternatives?',
      'Upload a minimum of 25 high-quality photographs, covering every room from multiple angles, key amenities such as the coffee machine and the bed, and if possible the view from the windows and the entrance approach. Properties with 25 or more photographs receive significantly more bookings than those with fewer, because guests want to feel certain they know exactly what they are getting before they commit.',
    ],
    tip: 'Update your listing at least once a month, even if only a minor change. Listings that are recently edited receive a small algorithmic boost in search results.',
  },
  {
    letter: 'T',
    title: 'Tax, VAT and Keeping Your Records',
    content: [
      'The Furnished Holiday Lettings regime, known as FHL, is the most tax-advantageous framework available to UK serviced accommodation operators, and it carries strict qualification criteria. To qualify, the property must be available for letting for at least 210 days per year, actually let for at least 105 days per year, and not let to the same person for more than 31 consecutive days in a single letting. Properties that qualify benefit from capital allowances on furniture and equipment, mortgage interest deductibility, business asset disposal relief, and the ability to count rental profits as relevant earnings for pension contribution purposes.',
      'Keep records of every income and expense from day one. Income includes all platform payouts, direct booking payments, and any fees charged to guests. Deductible expenses include platform commissions, cleaning costs, linen and consumables, repairs and maintenance, insurance premiums, professional fees, advertising costs, and a proportion of utility bills and mortgage interest depending on your mortgage type and FHL status. A simple spreadsheet will serve you well when you start, but accounting software such as QuickBooks or Xero becomes worthwhile once you are managing multiple properties.',
      'If your SA income exceeds the VAT registration threshold, currently 90,000 pounds in the 2024 to 2025 tax year, you must register for VAT. This is an area where many growing operators are caught off guard. Speak to an accountant who understands the SA sector before your income approaches this threshold, as there are legitimate planning steps available.',
    ],
    tip: 'Set aside 20 to 25 percent of every platform payout in a dedicated tax savings account from the very first month of operation. Tax bills that arrive as a surprise are always larger than expected.',
  },
  {
    letter: 'U',
    title: 'Upselling and Building Additional Revenue',
    content: [
      'Your confirmed booking is the beginning of the revenue opportunity, not the end of it. Once a guest has booked your property, they are already sold on staying with you. They are significantly more open to additional purchases than they would be at the browsing stage, and the cost of acquiring this additional revenue is effectively zero. Upselling is one of the highest-margin activities available to any SA operator.',
      'The most commonly purchased upgrades are early check-in, late checkout, additional cleaning during multi-week stays, welcome hampers, local experience packages, and airport or station transfer services. Price each of these clearly and offer them in your pre-arrival communication. Many guests, particularly those on leisure or celebration trips, are actively looking for these additions and will purchase them if they are presented conveniently.',
      'Partner with local businesses to offer experiences you cannot provide directly. A local restaurant that offers a pre-arrival dinner reservation service, a local spa that provides an in-room treatment, a local florist that delivers a welcome bouquet on request — all of these can be offered as paid additions to the booking at a margin that benefits both you and the partner. These partnerships also position your property as a curated local experience rather than a simple accommodation transaction.',
    ],
    tip: 'Bundle your upsells as a luxury package option at checkout. A single purchase decision at a moderate price point converts better than multiple individual decisions at lower price points.',
  },
  {
    letter: 'V',
    title: 'Vetting Guests and Managing Difficult Situations',
    content: [
      'Most guests are perfectly pleasant people who want somewhere clean and comfortable to stay. A small minority will cause problems, and your job is to minimise the likelihood of that minority booking your property while treating the majority with the warmth and trust they deserve. Airbnb provides substantial guest verification measures, but there are additional steps you can take.',
      'For bookings that raise any concern, ask a gentle question before accepting. Something as simple as asking what brings a guest to the area and how many people will be in the group is a natural part of the booking conversation and will deter anyone who intends to misuse the property. Requiring guests to have a verified ID and at least one prior review before you accept their booking is a legitimate and commonly used filtering strategy.',
      'When problems do arise during a stay, act decisively and document everything. If a guest is hosting an unauthorised gathering, contact them through the platform immediately and in writing, specifying that they are in breach of your house rules and that the booking will be terminated if the situation is not resolved immediately. Use the platform\'s messaging system for all communications during a dispute so that everything is timestamped and recorded.',
    ],
    tip: 'Noise monitoring devices such as NoiseAware or Minut are legal, effective, and explicitly permitted by the major platforms. They detect noise levels without recording audio and can be invaluable for managing party risk.',
  },
  {
    letter: 'W',
    title: 'Working with Co-Hosts, Cleaners and Contractors',
    content: [
      'Scaling beyond one or two properties without building a team is impossible. The three key roles in any SA operation beyond the operator themselves are the co-host, who manages the day-to-day guest communication and oversight; the cleaner, who carries out the turnovers; and the maintenance contractor, who handles repairs and upkeep. Finding and retaining excellent people in each of these roles is one of the most leveraged things you can do for your business.',
      'A co-host is typically paid either a fixed monthly fee per property or a percentage of revenue, usually between 10 and 20 percent depending on the scope of their responsibilities. Platforms like Airbnb allow you to formally add a co-host to your listing, which gives them access to the management tools they need to operate effectively. A good co-host allows you to step back from the daily operational demands and focus on growth.',
      'The cleaner relationship deserves particular attention. Pay above the local market rate, provide all cleaning materials and linen, give clear written instructions, and be generous with your time when training a new cleaner. The turnover of cleaning staff is the most disruptive operational event an SA operator can experience. A cleaner who feels valued, well-compensated, and respected is far less likely to leave, and far more likely to go above the minimum standard on every turnover.',
    ],
    tip: 'Create a simple contractor directory for each property with the contact details of a plumber, electrician, and locksmith who can attend at short notice. Having these relationships in place before an emergency occurs saves hours of stress.',
  },
  {
    letter: 'X',
    title: 'eXpanding Your Portfolio Strategically',
    content: [
      'Growth for its own sake is a trap. Adding properties that are marginally profitable, or that strain your operational capacity, will degrade the quality of your entire portfolio and harm the reputation you have built. Expand methodically, with a clear criteria for what makes a property worth adding, and only when your systems and team can absorb the additional volume without impacting the properties you already manage.',
      'The most successful SA portfolio operators typically follow one of three growth models. The first is the area specialist, who builds a portfolio of properties in a single city or neighbourhood where they develop deep market knowledge and operational density. The second is the property type specialist, who focuses on a specific segment such as corporate lets or luxury holiday rentals and builds a brand within that niche. The third is the systems-first operator, who builds a replicable management system and then rolls it out across multiple locations, either directly or by licensing the system to local operators.',
      'As your portfolio grows, your relationship with your lenders and financial partners becomes increasingly important. Maintain clean books, meet every obligation, and communicate proactively with your mortgage broker. Portfolio lenders and specialist SA finance providers offer products that become available as your track record grows, and these products can significantly accelerate your expansion.',
    ],
    tip: 'Before adding a third property, ensure the first two are running smoothly without your daily involvement. If they are not, adding more will multiply your problems rather than your profits.',
  },
  {
    letter: 'Y',
    title: 'Yield Management and Maximising Annual Revenue',
    content: [
      'Yield management is the practice of optimising every available night to achieve the highest possible combination of occupancy rate and nightly rate. It is a discipline borrowed from the hotel industry and it is the most powerful revenue lever available to an SA operator. A property managed with active yield management will consistently outperform an identical property managed passively by 25 to 45 percent in annual revenue.',
      'The core principle is that the right price for your property is different on every night of the year. A Monday night in February is not worth the same as a Friday night in August. A night before a major local concert is not worth the same as an identical night three weeks later. Your job is to understand the demand calendar for your area and price dynamically in response to it. This is not complicated, but it does require consistent attention or the right automation tool.',
      'Beyond nightly pricing, yield management also encompasses minimum stay policies, last-minute pricing adjustments, length-of-stay discounts, and the management of orphan nights: gaps of one or two nights between bookings that are difficult to fill at full price. Price orphan nights aggressively to fill them, because an empty night generates exactly zero revenue regardless of what you could theoretically have charged for it.',
    ],
    tip: 'Track your revenue per available night, known as RevPAN, rather than just your occupancy rate. A property at 95 percent occupancy at a low nightly rate may actually be generating less revenue than one at 75 percent occupancy at a higher rate.',
  },
  {
    letter: 'Z',
    title: 'Your 30-Day Launch Checklist',
    content: [
      'The following is your step-by-step guide to launching your first serviced accommodation property within 30 days. The steps are designed to be completed in sequence, and each one builds on the last. By the end of day 30, your property will be live, marketed, and ready to receive its first guest.',
      'In the first week, confirm your property is legally permitted for short-term letting, obtain or verify all safety certificates, take out specialist SA insurance, and identify your cleaning partner. In the second week, deep clean and style the property, carry out your professional photo shoot, write your listing copy, and create your welcome pack and property manual. In the third week, create your accounts on Airbnb and Booking.com, upload your listing, set your initial pricing, and configure your automated messaging templates. In the fourth week, promote your listing on social media, reach out to your local network to generate your first few bookings, set up your channel manager if you are on multiple platforms, and confirm all your operational systems are in place for your first guest.',
      'Most importantly, do not wait for perfect. The first guest who stays in your property will teach you more than any guide, any course, or any mentor can. Get the property live as quickly as responsibly possible, be attentive and responsive, and use the feedback from your first five bookings to refine your operation. Everything you have read in this guide is a framework. Your execution is what turns it into a business.',
    ],
  },
]

function Footer({ pageNumber }: { pageNumber: number }) {
  return (
    <>
      <Text style={s.pageFooter}>The SA Blueprint — aimastery.co.uk</Text>
      <Text style={s.pageNumber}>{pageNumber}</Text>
    </>
  )
}

function SADocument() {
  return (
    <Document title="The Serviced Accommodation Blueprint — A to Z Guide" author="AI Mastery" creator="aimastery.co.uk">

      {/* Cover */}
      <Page size="A4" style={s.coverPage}>
        <View style={s.coverBg}>
          <Text style={s.coverEyebrow}>The Complete Field Guide</Text>
          <Text style={s.coverTitle}>The Serviced{'\n'}Accommodation{'\n'}<Text style={s.coverTitleGreen}>Blueprint</Text></Text>
          <View style={s.coverDivider} />
          <Text style={s.coverSub}>
            A full A to Z guide to acquiring, launching, operating and scaling a profitable serviced accommodation business. Written for first-time operators and growing portfolios alike.
          </Text>
        </View>
        <View style={s.coverFooter}>
          <Text style={s.coverFooterText}>aimastery.co.uk</Text>
          <Text style={s.coverFooterText}>26 Chapters. Everything you need.</Text>
          <Text style={s.coverFooterText}>2026 Edition</Text>
        </View>
      </Page>

      {/* Table of Contents */}
      <Page size="A4" style={s.tocPage}>
        <Text style={s.tocTitle}>Contents</Text>
        <Text style={s.tocSubtitle}>26 chapters covering every aspect of building a serviced accommodation business</Text>
        <View style={s.tocGrid}>
          {SECTIONS.map((sec) => (
            <View key={sec.letter} style={s.tocItem}>
              <Text style={s.tocLetter}>{sec.letter}</Text>
              <Text style={s.tocLabel}>{sec.title}</Text>
            </View>
          ))}
        </View>
        <Footer pageNumber={1} />
      </Page>

      {/* Content pages */}
      {SECTIONS.map((sec, i) => (
        <Page key={sec.letter} size="A4" style={s.page}>
          <View style={s.sectionHeader}>
            <Text style={s.sectionLetter}>{sec.letter}</Text>
            <Text style={s.sectionTitle}>{sec.title}</Text>
          </View>
          {sec.content.map((para, j) => (
            <Text key={j} style={s.body}>{para}</Text>
          ))}
          {sec.tip && (
            <View style={s.tip}>
              <Text style={s.tipLabel}>Pro tip</Text>
              <Text style={s.tipText}>{sec.tip}</Text>
            </View>
          )}
          {sec.letter === 'Z' && (
            <>
              <View style={s.dividerLine} />
              <Text style={s.checklistTitle}>Your 30-Day Launch Checklist</Text>
              {[
                'Confirm your property is legally permitted for short-term letting in your local authority area',
                'Obtain a valid gas safety certificate if the property has any gas appliances',
                'Obtain an electrical installation condition report',
                'Install interlinked smoke alarms on every floor and a carbon monoxide detector where required',
                'Take out specialist serviced accommodation insurance',
                'Confirm a cleaning partner and agree rates, schedule and checklist',
                'Deep clean and style the property to photography standard',
                'Book and complete a professional photo shoot',
                'Write your Airbnb and Booking.com listing copy including title, description and house rules',
                'Create your welcome pack and laminated property manual',
                'Set up accounts on Airbnb and Booking.com and upload your listing',
                'Set your initial pricing based on local comparable properties',
                'Configure automated messaging templates for booking confirmation, pre-arrival, mid-stay and post-checkout',
                'Install a key safe or smart lock and test the access system',
                'Set up a channel manager if listing on more than one platform',
                'Create a simple spreadsheet to track income, expenses and occupancy',
                'Set aside a tax savings pot of 20 to 25 percent of each payout',
                'Promote your listing on social media and to your personal network',
                'Receive your first booking and deliver an exceptional guest experience',
                'Request a review within two hours of every checkout',
              ].map((item, idx) => (
                <View key={idx} style={s.checklistItem}>
                  <View style={s.checkBox} />
                  <Text style={s.checkText}>{item}</Text>
                </View>
              ))}
            </>
          )}
          <Footer pageNumber={i + 2} />
        </Page>
      ))}

    </Document>
  )
}

export async function GET() {
  const buffer = await renderToBuffer(<SADocument />)
  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="SA-Blueprint-A-to-Z.pdf"',
      'Cache-Control': 'no-store',
    },
  })
}
