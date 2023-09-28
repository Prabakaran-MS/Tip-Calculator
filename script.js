const result = document.getElementById('result');
let isCustomTip = false;

function tipPercent(tip) {
    const amt = parseFloat(document.getElementById('billAmount').value);
    if (!isCustomTip) {
        document.getElementById('customTip').style.display = 'none';
    }
    if (!isNaN(amt) && !isNaN(tip)) {
        const tipAmt = ((amt * tip) / 100).toFixed(2);
        const totalAmt = amt + parseFloat(tipAmt);
        result.innerHTML = `Tip: ₹${tipAmt} | Total: ₹${totalAmt.toFixed(2)}`;
    } else {
        result.innerHTML = 'Please enter valid bill amount and tip percentage';
    }
}

function customPercent() {
    isCustomTip = true;
    if (isCustomTip) {
        document.getElementById('customTip').style.display = 'block';
    }
    tipPercent(parseFloat(document.getElementById('tipPercentage').value) | 0);
    isCustomTip = false;
}