const gitaQuotes = [
    {
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        hindi: "कर्म करने में ही तेरा अधिकार है, फलों में कभी नहीं। इसलिए तू कर्मों के फल का हेतु मत हो तथा तेरी कर्म न करने में भी आसक्ति न हो।",
        reference: "अध्याय 2, श्लोक 47",
        source: "गीता प्रेस, गोरखपुर"
    },
    {
        sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
        hindi: "अच्छी प्रकार आचरण किए हुए दूसरे के धर्म से गुणरहित भी अपना धर्म श्रेष्ठ है। अपने धर्म में मरना कल्याणकारक है, दूसरे का धर्म भय को देने वाला है।",
        reference: "अध्याय 3, श्लोक 35",
        source: "गीता प्रेस, गोरखपुर"
    },
    {
        sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
        hindi: "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब ही मैं अपने रूप को रचता हूँ अर्थात् साकार रूप से लोगों के सम्मुख प्रकट होता हूँ।",
        reference: "अध्याय 4, श्लोक 7",
        source: "गीता प्रेस, गोरखपुर"
    },
    {
        sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
        hindi: "जो अनन्य प्रेमी भक्तजन मुझमें एकीभाव से स्थित हुए निरन्तर मेरा चिन्तन करते हुए मुझको भजते हैं, उन नित्य-निरन्तर मुझमें युक्त हुए भक्तों का योगक्षेम मैं स्वयं वहन करता हूँ।",
        reference: "अध्याय 9, श्लोक 22",
        source: "गीता प्रेस, गोरखपुर"
    },
    {
        sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥",
        hindi: "मुझमें मन वाला हो, मेरा भक्त बन, मेरा पूजन करने वाला हो, मुझको नमस्कार कर। इस प्रकार अपने को मुझमें अर्पण करके मुझको ही प्राप्त होगा, यह मैं तुझसे सत्य प्रतिज्ञा करता हूँ क्योंकि तू मेरा प्रिय है।",
        reference: "अध्याय 18, श्लोक 65",
        source: "गीता प्रेस, गोरखपुर"
    },
    {
        sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
        hindi: "सम्पूर्ण धर्मों को अर्थात् समस्त कर्तव्य कर्मों को मुझमें त्यागकर तू केवल एक मुझ सर्वशक्तिमान् सर्वाधार परमेश्वर की ही शरण में आ जा। मैं तुझे सम्पूर्ण पापों से मुक्त कर दूँगा, तू शोक मत कर।",
        reference: "अध्याय 18, श्लोक 66",
        source: "गीता प्रेस, गोरखपुर"
    },
    {
        sanskrit: "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्।\nमम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः॥",
        hindi: "हे पार्थ! जो भक्त मुझको जिस प्रकार भजते हैं, मैं भी उनको उसी प्रकार भजता हूँ क्योंकि सब मनुष्य सब प्रकार से मेरे ही मार्ग का अनुसरण करते हैं।",
        reference: "अध्याय 4, श्लोक 11",
        source: "गीता प्रेस, गोरखपुर"
    },
    {
        sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
        hindi: "मनुष्य को चाहिए कि अपने द्वारा अपना उद्धार करे और अपना पतन न करे क्योंकि यह मनुष्य स्वयं ही अपना बन्धु है और स्वयं ही अपना शत्रु है।",
        reference: "अध्याय 6, श्लोक 5",
        source: "गीता प्रेस, गोरखपुर"
    },
    {
        sanskrit: "बहूनि मे व्यतीतानि जन्मानि तव चार्जुन।\nतान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप॥",
        hindi: "हे अर्जुन! मेरे और तेरे बहुत से जन्म हो चुके हैं। उन सबको मैं जानता हूँ, परन्तु हे परंतप! तू नहीं जानता।",
        reference: "अध्याय 4, श्लोक 5",
        source: "गीता प्रेस, गोरखपुर"
    },
    {
        sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति।\nतस्याहं न प्रणश्यामि स च मे न प्रणश्यति॥",
        hindi: "जो मुझको सब जगह देखता है और सबको मुझमें देखता है, उसके लिए मैं अदृश्य नहीं होता और वह मेरे लिए अदृश्य नहीं होता।",
        reference: "अध्याय 6, श्लोक 30",
        source: "गीता प्रेस, गोरखपुर"
    }
];

function createQuoteCard(quote) {
    const card = document.createElement('div');
    card.className = 'quote-card p-6 relative overflow-hidden';

    const content = `
        <div class="relative z-10">
            <div class="text-xl font-bold mb-4 font-playfair text-purple-900">${quote.sanskrit.replace(/\n/g, '<br>')}</div>
            <div class="text-lg mb-4 text-purple-800">${quote.hindi}</div>
            <div class="text-md text-purple-900 font-semibold mb-2">${quote.reference}</div>
            <div class="text-sm text-purple-700 italic mb-4">${quote.source}</div>
            <div class="flex justify-center space-x-4">
                <button class="share-btn whatsapp-btn bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full transition duration-300 flex items-center justify-center">
                    <i class="fab fa-whatsapp text-xl"></i>
                </button>
                <button class="share-btn facebook-btn bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full transition duration-300 flex items-center justify-center">
                    <i class="fab fa-facebook-f text-lg"></i>
                </button>
                <button class="share-btn instagram-btn bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white w-10 h-10 rounded-full transition duration-300 flex items-center justify-center">
                    <i class="fab fa-instagram text-xl"></i>
                </button>
            </div>
        </div>
    `;

    card.innerHTML = content;

    const websiteUrl = 'https://bhagwadgita.softlabs.in';
    // Add click events for share buttons
    const shareText = `${quote.sanskrit}\n\n${quote.hindi}\n\n${quote.reference}\n${quote.source}\n\nऔर भी श्लोक पढ़ने के लिए विजिट करें:\n${websiteUrl}\n\n#BhagavadGita #GitaQuotes #SpiritualWisdom #GitaPress #Sanskrit #Spirituality #Krishna #Dharma`;
    
    const whatsappBtn = card.querySelector('.whatsapp-btn');
    whatsappBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    });

    const facebookBtn = card.querySelector('.facebook-btn');
    facebookBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
    });

    const instagramBtn = card.querySelector('.instagram-btn');
    instagramBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(shareText).then(() => {
            alert('श्लोक कॉपी किया गया है। इसे Instagram पर शेयर करें!');
        });
    });

    return card;
}

function displayRandomQuotes() {
    const container = document.getElementById('quotes-container');
    container.innerHTML = ''; // Clear existing quotes

    // Get 6 random quotes
    const selectedQuotes = [...gitaQuotes]
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);

    selectedQuotes.forEach(quote => {
        container.appendChild(createQuoteCard(quote));
    });
}

// Initial display
document.addEventListener('DOMContentLoaded', () => {
    displayRandomQuotes();
});
