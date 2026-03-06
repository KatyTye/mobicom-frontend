import { createBrowserRouter, RouterProvider } from "react-router"
import Temperature from "./pages/Temperature"
import dataLoader from "./helpers/dataLoader"
import Statistics from "./pages/Statistics"
import Home from "./pages/Home"
import Layout from "./Layout"
import "./styles/main.sass"

function App() {

	const browserRouter = createBrowserRouter([
		{
			id: "weather",
			element: <Layout />,
			loader: dataLoader,
			hydrateFallbackElement: <p>Loading...</p>,
			children: [
				{
					path: "/",
					element: <Home />
				},
				{
					path: "/temp",
					element: <Temperature />
				},
				{
					path: "/stat",
					element: <Statistics />
				}
			]
		}
	])

	return (
		<RouterProvider router={browserRouter} />
	)
}

export default App