import { createBrowserRouter, RouterProvider } from "react-router"
import Temperature from "./pages/Temperature"
import Statistics from "./pages/Statistics"
import Home from "./pages/Home"
import Layout from "./Layout"
import "./styles/main.sass"

function App() {

	const browserRouter = createBrowserRouter([
		{
			element: <Layout />,
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