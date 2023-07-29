import PropTypes from "prop-types"

Input.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	setValue: PropTypes.func
}

export default function Input({ type, id, label, value, setValue }) {
	return (
		<div className="inputGroup">
			<label htmlFor={id}>{label}</label>
			{type == "input" ? (
				<input
					type="email"
					id={id}
					value={value}
					onChange={(ev) => setValue(ev.target.value)}
				/>
			) : (
				<textarea
					name={id}
					id={id}
					rows="6"
					value={value}
					onChange={(ev) => setValue(ev.target.value)}
				></textarea>
			)}
		</div>
	)
}
