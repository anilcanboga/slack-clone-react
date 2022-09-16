export default function Input({ label, ...props }) {
	return (
		<label>
			<div className="text-xs text-title block mb-2">
				{label}
			</div>
			<input autoComplete="off" className="w-full h-10 rounded bg-form px-4 text-sm outline-none border border-form-border focus:border-white" {...props} />
		</label>
	)
}
