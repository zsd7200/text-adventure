export const addSpace = (text: string) => {
    // if there's punctuation, do not add a space (unless it's part of a smiley face :) )
    const punctuationPattern = /^[\p{P}](?![()])/u;

    if (punctuationPattern.test(text)) return text;
    return ' ' + text;
};