import { useEffect, useState } from "react";
import { useI18nContext } from "../context/I18nContext";
import { translate } from "../services/translate";

const locales = { he: "he-IL", en: "en-US", fr: "fr-FR" };

export default function BirthDate({ date }) {
    const { language } = useI18nContext();
    const [congrats, setCongrats] = useState("מזל טוב! אתה בן");
    const [label, setLabel] = useState("תאריך הלידה שלך הוא:");

    useEffect(() => {
        async function loadTranslations() {
            setCongrats(await translate("מזל טוב! אתה בן", "he", language));
            setLabel(await translate("תאריך הלידה שלך הוא:", "he", language));
        }
        loadTranslations();
    }, [language]);

    const age = new Date().getFullYear() - date.getFullYear();

    return (
        <p>
            {congrats} {age}. {label} {date.toLocaleDateString(locales[language])}
        </p>
    );
}