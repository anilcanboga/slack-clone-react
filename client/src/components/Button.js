export default function Button({ children, ...props }) {
	return (
		<button className="h-10 rounded bg-button text-sm text-white px-8 flex items-center justify-center" {...props}>
			{children}
		</button>
	)
}
