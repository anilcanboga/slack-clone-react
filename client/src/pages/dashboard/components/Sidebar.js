import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import socket from "../../../socket";
import { useSelector } from "react-redux";

export default function Sidebar() {

	const channels = ['php', 'css', 'javascript', 'duyuru', 'genel']
	const { channels: userChannels, users } = useSelector(state => state.auth)

	return (
		<aside className="w-[340px] sidebar flex-shrink-0 py-4 flex flex-col gap-y-10">
			<section>
				<h6 className="text-base font-medium text-title px-6 mb-2">Kanallar</h6>
				<ul>
					{channels.map(channel => (
						<li>
							<NavLink className="px-6 text-sm flex justify-between text-[#9D9DA0] items-center py-2 hover:bg-hover" to={`/channel/${channel}`}>
								#{channel}
								{userChannels.includes(channel) && <div className="w-1 h-1 rounded-full bg-blue-400" />}
							</NavLink>
						</li>
					))}
				</ul>
			</section>
			<section>
				<h6 className="text-base font-medium text-title px-6 mb-2">Online Kişiler</h6>
				<ul>
					{users.map(user => (
						<li>
							<NavLink className="px-6 text-sm flex py-2 hover:bg-hover" to={`/channel/${user.socket_id}`}>
								{user.username} - {user.socket_id}
							</NavLink>
						</li>
					))}
				</ul>
			</section>
		</aside>
	)
}
