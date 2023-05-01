import "./App.scss";
import { Navbar } from "./components";
import AppRouter from "./components/AppRouter";
function App() {
	//main component from where all components are rendering
	// Render the Navbar component at the top of the page
	// Render the AppRouter component to handle routing
	return (
		<div className='app'>
			<Navbar />
			<AppRouter />
		</div>
	);
}

export default App;
