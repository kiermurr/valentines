function shrinkNoButton() {
    event.preventDefault();
    let noButton = document.getElementById('noButton');
    let yesButton = document.getElementById('yesButton');

    let noStyles = window.getComputedStyle(noButton);
    let yesStyles = window.getComputedStyle(yesButton);

    let noFontSize = parseFloat(noStyles.fontSize);
    let yesFontSize = parseFloat(yesStyles.fontSize);

    let noPadding = parseFloat(noStyles.padding);
    let yesPadding = parseFloat(yesStyles.padding);

    let noWidth = parseFloat(noStyles.width);
    let noHeight = parseFloat(noStyles.height);

    let yesWidth = parseFloat(yesStyles.width);
    let yesHeight = parseFloat(yesStyles.height);

    // Scale everything down proportionally for "No"
    let scaleFactor = 0.9;
    let newNoFontSize = noFontSize * scaleFactor;
    let newNoPadding = noPadding * scaleFactor;
    let newNoWidth = noWidth * scaleFactor;
    let newNoHeight = noHeight * scaleFactor;

    // Scale everything up proportionally for "Yes"
    let growFactor = 1.1;
    let newYesFontSize = yesFontSize * growFactor;
    let newYesPadding = yesPadding * growFactor;
    let newYesWidth = yesWidth * growFactor;
    let newYesHeight = yesHeight * growFactor;

    // Apply the new styles
    noButton.style.fontSize = newNoFontSize + 'px';
    noButton.style.padding = newNoPadding + 'px';
    noButton.style.width = newNoWidth + 'px';
    noButton.style.height = newNoHeight + 'px';

    yesButton.style.fontSize = newYesFontSize + 'px';
    yesButton.style.padding = newYesPadding + 'px';
    yesButton.style.width = newYesWidth + 'px';
    yesButton.style.height = newYesHeight + 'px';
}