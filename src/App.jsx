import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout"
import Home from "./pages/Home"

function App() {

	const browserRouter = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />
				}
			]
		}
	])

	return (
		<RouterProvider router={browserRouter} />
	)
}

export default App