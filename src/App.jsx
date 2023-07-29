import { useState } from "react"
import Input from "./components/Input"

export default function App() {
	const [comments, setComments] = useState([])
	const [email, setEmail] = useState("")
	const [text, setText] = useState("")

	function sendComment(ev) {
		ev.preventDefault()
		setComments((state) => {
			const id = Math.floor(Math.random() * 1000000)
			const createdAt = new Date()
			const newState = [{ id, email, text, createdAt }, ...state]
			return newState
		})
		setEmail("")
		setText("")
	}

	return (
		<div className="app">
			<h1>Seção de Comentários</h1>
			<form className="form">
				<Input
					label="Email:"
					id="email"
					type="input"
					value={email}
					setValue={setEmail}
				/>
				<Input
					label="Comentário:"
					id="coment"
					type="text-area"
					value={text}
					setValue={setText}
				/>
				<button onClick={sendComment}>Enviar comentário</button>
			</form>
			<hr />
			<div className="comments">
				{comments.length == 0 ? (
					<p>Seja o primeiro a comentar!</p>
				) : (
					comments.map((comment) => (
						<div key={comment.id}>
							<h3>{comment.email}</h3>
							<p>Em {comment.createdAt.toLocaleString()}</p>
							<p>{comment.text}</p>
						</div>
					))
				)}
			</div>
		</div>
	)
}
