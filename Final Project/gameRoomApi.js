import axios from 'axios';

const API_BASE = 'https://game-room-api.fly.dev';

export async function createRoom(username) {
  const response = await axios.post(`${API_BASE}/room`, { username });
  return response.data;
}

export async function joinRoom(roomId, username) {
  const response = await axios.post(`${API_BASE}/room/${roomId}/join`, { username });
  return response.data;
}

export async function sendMove(roomId, move) {
  const response = await axios.post(`${API_BASE}/room/${roomId}/move`, move);
  return response.data;
}

export async function getRoomState(roomId) {
  const response = await axios.get(`${API_BASE}/room/${roomId}`);
  return response.data;
}
