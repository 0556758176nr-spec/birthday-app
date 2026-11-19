export async function translate(word, source, target) {
    if (source === target)
         return word;

    try {
        const res = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=${source}|${target}`
        );
        const data = await res.json();
        return data.responseData.translatedText;
    } catch (error) {
        console.error(error);
        return word;
    }
}