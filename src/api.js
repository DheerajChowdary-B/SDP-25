const API_BASE = import.meta.env.DEV ? '/api' : '/api';

function getToken() {
  return localStorage.getItem('token');
}

function setToken(token) {
  if (token) localStorage.setItem('token', token);
  else localStorage.removeItem('token');
}

async function request(path, options = {}) {
  const headers = options.headers || {};
  headers['Content-Type'] = 'application/json';
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(API_BASE + path, { ...options, headers });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch(e) { data = text; }
  if (!res.ok) {
    const err = (data && data.error) || (data && data.message) || res.statusText;
    throw new Error(err);
  }
  return data;
}

export async function signup(payload) {
  return request('/auth/signup', { method: 'POST', body: JSON.stringify(payload) });
}

export async function login(payload) {
  return request('/auth/login', { method: 'POST', body: JSON.stringify(payload) });
}

export async function getMe() {
  return request('/users/me');
}

export async function listAssignments() {
  return request('/assignments');
}

export async function getAssignment(id) {
  return request(`/assignments/${id}`);
}

export async function createAssignment(payload) {
  return request('/assignments', { method: 'POST', body: JSON.stringify(payload) });
}

export async function createSubmission(payload) {
  return request('/submissions', { method: 'POST', body: JSON.stringify(payload) });
}

export async function listSubmissions(query = '') {
  const q = query ? `?${query}` : '';
  return request(`/submissions${q}`);
}

export async function gradeSubmission(id, payload) {
  return request(`/submissions/${id}/grade`, { method: 'POST', body: JSON.stringify(payload) });
}

export { getToken, setToken, API_BASE };
