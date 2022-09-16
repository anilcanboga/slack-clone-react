import store from "./store";
import {login, setChannels, setUsers} from "./store/auth";

export const loginHandle = data => {
	store.dispatch(login(data))
}

export const updateChannels = channels => {
	store.dispatch(setChannels(channels))
}

export const updateUsers = users => {
	store.dispatch(setUsers(users))
}
