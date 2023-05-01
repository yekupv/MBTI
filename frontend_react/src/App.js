import "./App.scss";
import { Navbar } from "./components";
import AppRouter from "./components/AppRouter";

function App() {
	return (
		<div className='app'>
			<Navbar />
			<AppRouter />
		</div>
	);
}

export default App;
