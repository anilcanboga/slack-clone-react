import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import socket from "../../socket";
import { useSelector } from "react-redux";
import Textarea from "../../components/Textarea";
import { useState } from "react";

export default function Channel() {
	const { url } = useParams()
	const { channels, users, user } = useSelector(state => state.auth)
	const [message, setMessage] = useState('')

	const joinHandle = () => {
		socket.emit('join_channel', url)
	}
	const leaveHandle = () => {
		socket.emit('leave_channel', url)
	}

	const sendToChannel = () => {
		socket.emit('message', {
			channel: url,
			sender: user,
			message,
			date: +new Date()
		})
	}

	const subscribedUsers = users.filter(user => user?.channels?.includes(url))
	const joined = channels.includes(url)

	return (
		<div className="h-full flex flex-col">
			<header className="p-5 border-b flex items-center justify-between border-button">
				<h6 className="text-base font-bold">#{url}</h6>
				<div className="text-sm flex items-center gap-x-4">
					{joined && <Button onClick={leaveHandle}>LEAVE</Button>}
					{!joined && <Button onClick={joinHandle}>JOIN</Button>}
					{subscribedUsers.length} Kullanıcı
				</div>
			</header>
			<main className="flex-1 overflow-auto">

			</main>
			<footer className="p-5 relative">
				{joined && (
					<>
						<Textarea label="Mesajın" onChange={e => setMessage(e.target.value)} />
						<button disabled={!message} onClick={sendToChannel} className="bg-active text-xs px-2 py-1 rounded-xl disabled:opacity-30 absolute bottom-9 right-7">Gönder</button>
					</>
				) || (
						<div className="bg-active p-4 rounded text-sm text-white">Bu kanala mesaj göndermek için katılmanız gerekiyor.</div>
					)}
			</footer>
		</div>
	)
}
