import ky from "ky";

const apiClient = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL,
  headers: {
    'Authentication': "Basic dXNlcjpwYXNzd29yZA==",
    'Contet-Type': 'application/json',
  },
  credentials: 'include',
});

export default apiClient;