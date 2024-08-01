function calculateWorth() {
    const traffic = parseInt(document.getElementById('traffic').value);
    const country = document.getElementById('country').value;
    const da = parseInt(document.getElementById('da').value);
    const dr = parseInt(document.getElementById('dr').value);
    const spamScore = parseInt(document.getElementById('spam-score').value);
    const niche = document.getElementById('niche').value;
    const keywordRelevance = document.getElementById('keyword-relevance').value;

    let baseValue = 0;
    if (traffic < 10000) {
        baseValue = 5; // Reduced pricing
    } else if (traffic < 50000) {
        baseValue = 10; // Reduced pricing
    } else {
        baseValue = 15; // Reduced pricing
    }

    let countryValue = 0;
    switch (country) {
        case 'usa':
        case 'uk':
        case 'canada':
        case 'australia':
            countryValue = 10; // Reduced pricing
            break;
        case 'europe':
            countryValue = 5; // Reduced pricing
            break;
        default:
            countryValue = 0;
            break;
    }

    let daDrValue = 0;
    if (da > 20 && da <= 40) {
        daDrValue += 5; // Reduced pricing
    } else if (da > 40 && da <= 60) {
        daDrValue += 10; // Reduced pricing
    } else if (da > 60 && da <= 80) {
        daDrValue += 15; // Reduced pricing
    } else if (da > 80) {
        daDrValue += 20; // Reduced pricing
    }

    if (dr > 20 && dr <= 40) {
        daDrValue += 5; // Reduced pricing
    } else if (dr > 40 && dr <= 60) {
        daDrValue += 10; // Reduced pricing
    } else if (dr > 60 && dr <= 80) {
        daDrValue += 15; // Reduced pricing
    } else if (dr > 80) {
        daDrValue += 20; // Reduced pricing
    }

    let spamValue = 0;
    if (spamScore > 10 && spamScore <= 30) {
        spamValue = -5; // Reduced deduction
    } else if (spamScore > 30) {
        spamValue = -10; // Reduced deduction
    }

    let nicheValue = 0;
    if (niche === 'high') {
        nicheValue = 10; // Reduced pricing
    } else if (niche === 'medium') {
        nicheValue = 5; // Reduced pricing
    }

    let keywordValue = 0;
    if (keywordRelevance === 'high') {
        keywordValue = 5; // Reduced pricing
    } else if (keywordRelevance === 'low') {
        keywordValue = -5; // Reduced deduction
    }

    const totalWorth = baseValue + countryValue + daDrValue + spamValue + nicheValue + keywordValue;

    document.getElementById('worth').innerText = totalWorth;
    document.getElementById('result').style.display = 'block';
}

function toggleHelp() {
    const helpContent = document.getElementById('help-content');
    const isVisible = helpContent.style.display === 'block';
    helpContent.style.display = isVisible ? 'none' : 'block';
}