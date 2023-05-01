import "./App.scss";
import { Navbar } from "./components";
import AppRouter from "./components/AppRouter";
import { Main } from "./pages";

function App() {
	return (
		<div className='app'>
			<Navbar />
			<AppRouter />
		</div>
	);
}

export default App;
