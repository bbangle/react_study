import BuggyClock from "./BuggyClock";
import ErrorBoundary from "./example02_errorBoundary";

const Example02 = () => {
    return (
        <ErrorBoundary fallback={<div style={{color: "red"}}>Error</div>}>
            <BuggyClock/>
        </ErrorBoundary>
    );
}

export default Example02;