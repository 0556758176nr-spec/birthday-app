export default function BirthDate({ date }) {
    const age = new Date().getFullYear() - date.getFullYear();

    return (
        <div>
            <p>
                מזל טוב! אתה בן {age}. תאריך הלידה שלך הוא: {date.toLocaleDateString("en-GB")}
            </p>
        </div>
    );
}