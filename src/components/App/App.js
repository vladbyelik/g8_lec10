
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorExamples from '../ErrorExamples/ErrorExamples';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Error Boundary</h1>

      {/* <ErrorExamples /> */}

      <ErrorBoundary>
        <ErrorExamples />
      </ErrorBoundary>

    </div>
  );
}

export default App;
