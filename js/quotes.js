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

// Function to create a quote card
function createQuoteCard(quote) {
    const card = document.createElement('div');
    card.className = 'quote-card rounded-2xl shadow-xl p-8 hover:shadow-2xl';
    
    const sanskrit = document.createElement('p');
    sanskrit.className = 'text-xl font-playfair text-purple-900 mb-4 font-bold';
    sanskrit.textContent = quote.sanskrit;
    
    const hindi = document.createElement('p');
    hindi.className = 'text-lg text-purple-800 mb-4';
    hindi.textContent = quote.hindi;
    
    const reference = document.createElement('div');
    reference.className = 'text-md text-purple-900 font-semibold mb-4';
    reference.textContent = quote.reference;

    const source = document.createElement('div');
    source.className = 'text-sm text-purple-700 italic';
    source.textContent = quote.source;

    const copyButton = document.createElement('button');
    copyButton.className = 'copy-btn mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300';
    copyButton.textContent = 'Copy for Instagram ';
    
    copyButton.addEventListener('click', () => {
        const textToCopy = `${quote.sanskrit}\n\n${quote.hindi}\n\n${quote.reference}\n${quote.source}\n\n#BhagavadGita #GitaQuotes #SpiritualWisdom #GitaPress #Sanskrit #Spirituality #Krishna #Dharma`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyButton.textContent = 'Copied! ';
            setTimeout(() => {
                copyButton.textContent = 'Copy for Instagram ';
            }, 2000);
        });
    });

    card.appendChild(sanskrit);
    card.appendChild(hindi);
    card.appendChild(reference);
    card.appendChild(source);
    card.appendChild(copyButton);
    
    return card;
}

// Function to display random quotes
function displayRandomQuotes() {
    const container = document.getElementById('quotes-container');
    container.innerHTML = ''; // Clear existing quotes
    
    // Create a copy of the quotes array
    let availableQuotes = [...gitaQuotes];
    
    // Number of quotes to display (responsive)
    const displayCount = window.innerWidth >= 1024 ? 6 : (window.innerWidth >= 768 ? 4 : 2);
    
    // Select random quotes
    for (let i = 0; i < Math.min(displayCount, availableQuotes.length); i++) {
        const randomIndex = Math.floor(Math.random() * availableQuotes.length);
        const quote = availableQuotes.splice(randomIndex, 1)[0];
        const card = createQuoteCard(quote);
        container.appendChild(card);
    }
}

// Initial display
displayRandomQuotes();

// Update on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(displayRandomQuotes, 250);
});
