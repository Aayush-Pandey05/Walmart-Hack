import { Language, Translations } from '@/types';

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'as', name: 'অসমীয়া', flag: '🇮🇳' },
];

export const translations: Translations = {
  en: {
    // Common
    search: 'Search for Products and more',
    home: 'Home',
    categories: 'Categories',
    offers: 'Offers',
    cart: 'Cart',
    profile: 'Profile',
    
    // Home Screen
    preferredStore: 'Preferred Store',
    shopByBrands: 'Shop by Brands',
    trendingBrands: 'Trending Brands',
    bestPrices: 'Best Prices across entire range',
    
    // Categories
    packagedfoods: 'Packaged Foods & Dry Fruits',
    oilsugar: 'Oil, Sugar & Masalas',
    dailyfresh: 'Daily Fresh & Frozen',
    luggageapparel: 'Luggage & Apparel',
    restaurantsupplies: 'Restaurant Supplies & Houseware',
    healthotc: 'Health & OTC',
    itstationary: 'IT Stationary & Office Furniture',
    kitchenappliances: 'Kitchen & Home Appliances',
    
    // Product Details
    off: 'off',
    margin: 'Margin',
    slabPrices: 'Slab prices available',
    loginToBuy: 'Login to Buy',
    addToCart: 'Add to Cart',
    showingResults: 'Showing Results',
    filter: 'Filter',
    
    // Notifications
    itemAddedToCart: 'Item added to cart successfully!',
    itemRemovedFromCart: 'Item removed from cart',
    quantityUpdated: 'Quantity updated',
  },
  hi: {
    // Common
    search: 'उत्पाद और अधिक खोजें',
    home: 'घर',
    categories: 'श्रेणियां',
    offers: 'ऑफर',
    cart: 'कार्ट',
    profile: 'प्रोफाइल',
    
    // Home Screen
    preferredStore: 'पसंदीदा स्टोर',
    shopByBrands: 'ब्रांड्स द्वारा खरीदारी',
    trendingBrands: 'ट्रेंडिंग ब्रांड्स',
    bestPrices: 'पूरी रेंज में सबसे अच्छी कीमतें',
    
    // Categories
    packagedfoods: 'पैकेज्ड फूड्स और ड्राई फ्रूट्स',
    oilsugar: 'तेल, चीनी और मसाले',
    dailyfresh: 'डेली फ्रेश और फ्रोजन',
    luggageapparel: 'सामान और कपड़े',
    restaurantsupplies: 'रेस्तরां आपूर्ति और घरेलू सामान',
    healthotc: 'स्वास्थ्य और ओटीसी',
    itstationary: 'आईटी स्टेशनरी और ऑफिस फर्नीचर',
    kitchenappliances: 'किचन और होम एप्लायंसेज',
    
    // Product Details
    off: 'छूट',
    margin: 'मार्जिन',
    slabPrices: 'स्लैब कीमतें उपलब्ध',
    loginToBuy: 'खरीदने के लिए लॉगिन करें',
    addToCart: 'कार्ट में जोड़ें',
    showingResults: 'परिणाम दिखाए जा रहे हैं',
    filter: 'फिल्टर',
    
    // Notifications
    itemAddedToCart: 'आइटम कार्ट में सफलतापूर्वक जोड़ा गया!',
    itemRemovedFromCart: 'आइटम कार्ट से हटा दिया गया',
    quantityUpdated: 'मात्रा अपडेट की गई',
  },
  kn: {
    // Common
    search: 'ಉತ್ಪಾದನೆಗಳು ಮತ್ತು ಹೆಚ್ಚಿನವುಗಳಿಗಾಗಿ ಹುಡುಕಿ',
    home: 'ಮುಖ್ಯ',
    categories: 'ವರ್ಗಗಳು',
    offers: 'ಆಫರ್‌ಗಳು',
    cart: 'ಕಾರ್ಟ್',
    profile: 'ಪ್ರೊಫೈಲ್',
    
    // Home Screen
    preferredStore: 'ಆದ್ಯತೆಯ ಅಂಗಡಿ',
    shopByBrands: 'ಬ್ರಾಂಡ್‌ಗಳಿಂದ ಖರೀದಿಸಿ',
    trendingBrands: 'ಟ್ರೆಂಡಿಂಗ್ ಬ್ರಾಂಡ್‌ಗಳು',
    bestPrices: 'ಸಂಪೂರ್ಣ ಶ್ರೇಣಿಯಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಬೆಲೆಗಳು',
    
    // Categories
    homecare: 'ಮನೆಯ ಆರೈಕೆ',
    beverages: 'ಪಾನೀಯಗಳು',
    personalcare: 'ವೈಯಕ್ತಿಕ ಆರೈಕೆ',
    riceDals: 'ಅಕ್ಕಿ, ಹಿಟ್ಟು ಮತ್ತು ದಾಲ್',
    packagedFoods: 'ಪ್ಯಾಕೇಜ್ ಮಾಡಿದ ಆಹಾರ ಮತ್ತು ಒಣ ಹಣ್ಣುಗಳು',
    oilSugar: 'ಎಣ್ಣೆ, ಸಕ್ಕರೆ ಮತ್ತು ಮಸಾಲೆಗಳು',
    dairy: 'ಡೈರಿ, ತಾಜಾ ಮತ್ತು ಫ್ರೋಜನ್',
    luggage: 'ಲಗೇಜ್ ಮತ್ತು ಬಟ್ಟೆಗಳು',
    electronics: 'Electronics & Gadgets',
    kitchen: 'Kitchen & Appliances',
    beauty: 'Beauty & Cosmetics',
    babycare: 'Baby Care & Toys',
    petcare: 'Pet Care',
    automotive: 'Automotive',
    sports: 'Sports & Fitness',
    books: 'Books & Stationery',
    garden: 'Garden & Outdoor',
    health: 'Health & Wellness',
    furniture: 'Furniture & Home',
    
    // Product Details
    off: 'ಆಫ್',
    margin: 'ಮಾರ್ಜಿನ್',
    slabPrices: 'ಸ್ಲಾಬ್ ಬೆಲೆಗಳು ಲಭ್ಯವಿದೆ',
    loginToBuy: 'ಖರೀದಿಸಲು ಲಾಗಿನ್ ಮಾಡಿ',
    addToCart: 'ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ',
    showingResults: 'ಫಲಿತಾಂಶಗಳನ್ನು ತೋರಿಸುತ್ತಿದೆ',
    filter: 'ಫಿಲ್ಟರ್',
    
    // Notifications
    itemAddedToCart: 'ಐಟಂ ಕಾರ್ಟ್‌ಗೆ ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ!',
    itemRemovedFromCart: 'ಐಟಂ ಕಾರ್ಟ್‌ನಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ',
    quantityUpdated: 'ಪರಿಮಾಣ ನವೀಕರಿಸಲಾಗಿದೆ',
  },
  ta: {
    // Common
    search: 'பொருட்கள் மற்றும் பலவற்றைத் தேடுங்கள்',
    home: 'முகப்பு',
    categories: 'பகுதிகள்',
    offers: 'சலுகைகள்',
    cart: 'கார்ட்',
    profile: 'சுயவிவரம்',
    
    // Home Screen
    preferredStore: 'விருப்பமான கடை',
    shopByBrands: 'பிராண்டுகளால் வாங்கவும்',
    trendingBrands: 'டிரெண்டிங் பிராண்டுகள்',
    bestPrices: 'முழு வரம்பிலும் சிறந்த விலைகள்',
    
    // Categories
    homecare: 'வீட்டு பராமரிப்பு',
    beverages: 'பானங்கள்',
    personalcare: 'தனிப்பட்ட பராமரிப்பு',
    riceDals: 'அரிசி, மாவு மற்றும் பருப்பு',
    packagedFoods: 'பொட்டலமான உணவு மற்றும் உலர் பழங்கள்',
    oilSugar: 'எண்ணெய், சர்க்கரை மற்றும் மசாலா',
    dairy: 'பால், புதிய மற்றும் உறைந்த',
    luggage: 'சாமான் மற்றும் ஆடை',
    electronics: 'Electronics & Gadgets',
    kitchen: 'Kitchen & Appliances',
    beauty: 'Beauty & Cosmetics',
    babycare: 'Baby Care & Toys',
    petcare: 'Pet Care',
    automotive: 'Automotive',
    sports: 'Sports & Fitness',
    books: 'Books & Stationery',
    garden: 'Garden & Outdoor',
    health: 'Health & Wellness',
    furniture: 'Furniture & Home',
    
    // Product Details
    off: 'தள்ளுபடி',
    margin: 'மார்ஜின்',
    slabPrices: 'ஸ்லாப் விலைகள் கிடைக்கும்',
    loginToBuy: 'வாங்க உள்நுழையவும்',
    addToCart: 'கார்ட்டில் சேர்க்கவும்',
    showingResults: 'முடிவுகள் காண்பிக்கப்படுகின்றன',
    filter: 'வடிகட்டி',
    
    // Notifications
    itemAddedToCart: 'பொருள் கார்ட்டில் வெற்றிகரமாக சேர்க்கப்பட்டது!',
    itemRemovedFromCart: 'பொருள் கார்ட்டிலிருந்து நீக்கப்பட்டது',
    quantityUpdated: 'அளவு புதுப்பிக்கப்பட்டது',
  },
  mr: {
    // Common
    search: 'उत्पादने आणि अधिक शोधा',
    home: 'मुख्यपृष्ठ',
    categories: 'श्रेणी',
    offers: 'ऑफर',
    cart: 'कार्ट',
    profile: 'प्रोफाइल',
    
    // Home Screen
    preferredStore: 'प्राधान्य दुकान',
    shopByBrands: 'ब्रँड्सनी खरेदी करा',
    trendingBrands: 'ट्रेंडिंग ब्रँड्स',
    bestPrices: 'संपूर्ण श्रेणीमध्ये सर्वोत्तम किंमती',
    
    // Categories
    homecare: 'घरगुती काळजी',
    beverages: 'पेये',
    personalcare: 'वैयक्तिक काळजी',
    riceDals: 'तांदूळ, पीठ आणि डाळी',
    packagedFoods: 'पॅकेज्ड फूड्स आणि कोरडे फळे',
    oilSugar: 'तेल, साखर आणि मसाले',
    dairy: 'दुग्धजन्य, ताजे आणि गोठवलेले',
    luggage: 'सामान आणि कपडे',
    electronics: 'Electronics & Gadgets',
    kitchen: 'Kitchen & Appliances',
    beauty: 'Beauty & Cosmetics',
    babycare: 'Baby Care & Toys',
    petcare: 'Pet Care',
    automotive: 'Automotive',
    sports: 'Sports & Fitness',
    books: 'Books & Stationery',
    garden: 'Garden & Outdoor',
    health: 'Health & Wellness',
    furniture: 'Furniture & Home',
    
    // Product Details
    off: 'सूट',
    margin: 'मार्जिन',
    slabPrices: 'स्लॅब किंमती उपलब्ध',
    loginToBuy: 'खरेदी करण्यासाठी लॉगिन करा',
    addToCart: 'कार्टमध्ये जोडा',
    showingResults: 'परिणाम दाखवत आहे',
    filter: 'फिल्टर',
    
    // Notifications
    itemAddedToCart: 'आयटम कार्टमध्ये यशस्वीरित्या जोडले गेले!',
    itemRemovedFromCart: 'आयटम कार्टमधून काढले गेले',
    quantityUpdated: 'प्रमाण अपडेट केले',
  },
  gu: {
    // Common
    search: 'પ્રોડક્ટ્સ અને વધુ માટે શોધો',
    home: 'ઘર',
    categories: 'શ્રેણીઓ',
    offers: 'ઓફર્સ',
    cart: 'કાર્ટ',
    profile: 'પ્રોફાઇલ',
    
    // Home Screen
    preferredStore: 'પસંદગીનો સ્ટોર',
    shopByBrands: 'બ્રાન્ડ્સ દ્વારા ખરીદી',
    trendingBrands: 'ટ્રેન્ડિંગ બ્રાન્ડ્સ',
    bestPrices: 'સંપૂર્ણ રેન્જમાં શ્રેષ્ઠ કિંમતો',
    
    // Categories
    homecare: 'ઘરેલુ સંભાળ',
    beverages: 'પીણાં',
    personalcare: 'વ્યક્તિગત સંભાળ',
    riceDals: 'ચોખા, લોટ અને દાળ',
    packagedFoods: 'પેકેજ્ડ ફૂડ્સ અને સૂકા મેવા',
    oilSugar: 'તેલ, ખાંડ અને મસાલા',
    dairy: 'ડેરી, તાજી અને ફ્રોઝન',
    luggage: 'સામાન અને કપડાં',
    electronics: 'Electronics & Gadgets',
    kitchen: 'Kitchen & Appliances',
    beauty: 'Beauty & Cosmetics',
    babycare: 'Baby Care & Toys',
    petcare: 'Pet Care',
    automotive: 'Automotive',
    sports: 'Sports & Fitness',
    books: 'Books & Stationery',
    garden: 'Garden & Outdoor',
    health: 'Health & Wellness',
    furniture: 'Furniture & Home',
    
    // Product Details
    off: 'છૂટ',
    margin: 'માર્જિન',
    slabPrices: 'સ્લેબ કિંમતો ઉપલબ્ધ',
    loginToBuy: 'ખરીદવા માટે લોગિન કરો',
    addToCart: 'કાર્ટમાં ઉમેરો',
    showingResults: 'પરિણામો દર્શાવી રહ્યા છીએ',
    filter: 'ફિલ્ટર',
    
    // Notifications
    itemAddedToCart: 'આઇટમ કાર્ટમાં સફળતાપૂર્વક ઉમેરાયું!',
    itemRemovedFromCart: 'આઇટમ કાર્ટમાંથી દૂર કરાયું',
    quantityUpdated: 'જથ્થો અપડેટ કર્યું',
  },
  te: {
    // Common
    search: 'ఉత్పత్తులు మరియు మరిన్ని కోసం శోధించండి',
    home: 'హోమ్',
    categories: 'వర్గాలు',
    offers: 'ఆఫర్లు',
    cart: 'కార్ట్',
    profile: 'ప్రొఫైల్',
    
    // Home Screen
    preferredStore: 'ప్రాధాన్య స్టోర్',
    shopByBrands: 'బ్రాండ్స్ ద్వారా షాపింగ్',
    trendingBrands: 'ట్రెండింగ్ బ్రాండ్స్',
    bestPrices: 'మొత్తం రేంజ్‌లో అత్యుత్తమ ధరలు',
    
    // Categories
    homecare: 'ఇంటి సంరక్షణ',
    beverages: 'పానీయాలు',
    personalcare: 'వ్యక్తిగత సంరక్షణ',
    riceDals: 'బియ్యం, పిండి మరియు దాల్',
    packagedFoods: 'ప్యాకేజ్డ్ ఫుడ్స్ మరియు డ్రై ఫ్రూట్స్',
    oilSugar: 'నూనె, చక్కెర మరియు మసాలాలు',
    dairy: 'డైరీ, ఫ్రెష్ మరియు ఫ్రోజన్',
    luggage: 'లగేజ్ మరియు వస్త్రాలు',
    electronics: 'Electronics & Gadgets',
    kitchen: 'Kitchen & Appliances',
    beauty: 'Beauty & Cosmetics',
    babycare: 'Baby Care & Toys',
    petcare: 'Pet Care',
    automotive: 'Automotive',
    sports: 'Sports & Fitness',
    books: 'Books & Stationery',
    garden: 'Garden & Outdoor',
    health: 'Health & Wellness',
    furniture: 'Furniture & Home',
    
    // Product Details
    off: 'ఆఫ్',
    margin: 'మార్జిన్',
    slabPrices: 'స్లాబ్ ధరలు అందుబాటులో',
    loginToBuy: 'కొనుగోలు చేయడానికి లాగిన్ చేయండి',
    addToCart: 'కార్ట్‌కు జోడించు',
    showingResults: 'ఫలితాలు చూపిస్తోంది',
    filter: 'ఫిల్టర్',
    
    // Notifications
    itemAddedToCart: 'ఐటమ్ కార్ట్‌లో విజయవంతంగా జోడించబడింది!',
    itemRemovedFromCart: 'ఐటమ్ కార్ట్‌నుండి తీసివేయబడింది',
    quantityUpdated: 'పరిమాణం నవీకరించబడింది',
  },
  bn: {
    // Common
    search: 'পণ্য এবং আরো অনুসন্ধান করুন',
    home: 'হোম',
    categories: 'বিভাগসমূহ',
    offers: 'অফার',
    cart: 'কার্ট',
    profile: 'প্রোফাইল',
    
    // Home Screen
    preferredStore: 'পছন্দের দোকান',
    shopByBrands: 'ব্র্যান্ড দ্বারা কেনাকাটা',
    trendingBrands: 'ট্রেন্ডিং ব্র্যান্ড',
    bestPrices: 'সম্পূর্ণ পরিসরে সেরা দাম',
    
    // Categories
    homecare: 'বাড়ির যত্ন',
    beverages: 'পানীয়',
    personalcare: 'ব্যক্তিগত যত্ন',
    riceDals: 'চাল, আটা এবং ডাল',
    packagedFoods: 'প্যাকেজড খাবার এবং শুকনো ফল',
    oilSugar: 'তেল, চিনি এবং মশলা',
    dairy: 'দুগ্ধজাত, তাজা এবং হিমায়িত',
    luggage: 'লাগেজ এবং পোশাক',
    electronics: 'Electronics & Gadgets',
    kitchen: 'Kitchen & Appliances',
    beauty: 'Beauty & Cosmetics',
    babycare: 'Baby Care & Toys',
    petcare: 'Pet Care',
    automotive: 'Automotive',
    sports: 'Sports & Fitness',
    books: 'Books & Stationery',
    garden: 'Garden & Outdoor',
    health: 'Health & Wellness',
    furniture: 'Furniture & Home',
    
    // Product Details
    off: 'ছাড়',
    margin: 'মার্জিন',
    slabPrices: 'স্ল্যাব দাম উপলব্ধ',
    loginToBuy: 'কিনতে লগইন করুন',
    addToCart: 'কার্টে যোগ করুন',
    showingResults: 'ফলাফল দেখানো হচ্ছে',
    filter: 'ফিল্টার',
    
    // Notifications
    itemAddedToCart: 'আইটেম কার্টে সফলভাবে যোগ করা হয়েছে!',
    itemRemovedFromCart: 'আইটেম কার্ট থেকে সরানো হয়েছে',
    quantityUpdated: 'পরিমাণ আপডেট করা হয়েছে',
  },
};