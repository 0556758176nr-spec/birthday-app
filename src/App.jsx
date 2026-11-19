import ChooseLanguage from "./components/ChooseLanguage";
import BirthDate from "./components/BirthDate";
import GreetingsList from "./components/GreetingsList";

function App() {
    const greetings = ["מזל טוב!", "שתהיה שנה מבורכת", "עד מאה ועשרים"];

    return (
        <div>
            <ChooseLanguage />
            <BirthDate date={new Date(2015, 10, 20)} />
            <GreetingsList greetings={greetings} />
        </div>
    );
}

export default App;