export default function Textarea({ label, ...props }) {
	return (
		<label>
			<div className="text-xs text-title block mb-2">
				{label}
			</div>
			<textarea className="w-full rounded bg-form p-4 resize-none text-sm outline-none border border-form-border focus:border-white" {...props} />
		</label>
	)
}
