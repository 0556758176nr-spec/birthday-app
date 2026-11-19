import { useI18nContext } from "../context/I18nContext";

export default function ChooseLanguage() {
    const { setLanguage } = useI18nContext();

    return (
        <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="he">עברית</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
        </select>
    );
}