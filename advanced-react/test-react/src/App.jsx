 
import './App.css'

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div>
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
