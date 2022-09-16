import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./pages/dashboard/Layout";
import Channel from "./pages/dashboard/Channel";

const routes = [
	{
		path: '/',
		auth: true,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Dashboard />
			},
			{
				path: 'channel/:url',
				element: <Channel />
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	}
]

const authMap = routes => routes.map(route => {
	if (route?.auth) {
		route.element = <PrivateRoute>{route.element}</PrivateRoute>
	}
	return route
})

export default authMap(routes)
