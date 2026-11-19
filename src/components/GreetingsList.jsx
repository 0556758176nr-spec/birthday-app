import GreetingCard from "./GreetingCard";

export default function GreetingsList({ greetings }) {
    return (
        <div>
            {greetings.map((item, index) => (
                <GreetingCard key={index} blessing={item} />
            ))}
        </div>
    );
}