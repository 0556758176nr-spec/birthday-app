import { useEffect, useState } from "react";
import { useI18nContext } from "../context/I18nContext";
import { translate } from "../services/translate";

export default function GreetingCard({ blessing }) {
    const { language } = useI18nContext();
    const [text, setText] = useState(blessing);

    useEffect(() => {
        async function loadTranslation() {
            setText(await translate(blessing, "he", language));
        }
        loadTranslation();
    }, [language, blessing]);

    return <div className="greeting-card">{text}</div>;
}