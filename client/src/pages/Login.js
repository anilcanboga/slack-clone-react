import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import { useState } from "react";
import users from "../data/users.json"
import toast from "react-hot-toast";
import { loginHandle } from "../utils";
import { useNavigate } from "react-router-dom"
import socket from "../socket";

export default function Login() {

	const navigate = useNavigate()
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const submitHandle = e => {
		e.preventDefault()
		let user = users.find(user => user.username === name && user.password === password)
		if (user) {
			socket.emit('login', user, id => {
				user.socket_id = id
				loginHandle(user)
				navigate('/', {
					replace: true
				})
			})
		} else {
			toast.error('Kullanıcı bilgileriniz hatalı!')
		}
	}

	return (
		<div className="container max-w-lg mx-auto py-4">
			<Title>Giriş Yap</Title>
			<form className="grid gap-y-4 py-4" onSubmit={submitHandle}>
				<Input label="Kullanıcı Adı" type="text" onChange={e => setName(e.target.value)} />
				<Input label="Parola" type="password" onChange={e => setPassword(e.target.value)} />
				<Button type="submit">Giriş Yap</Button>
			</form>
		</div>
	)
}
