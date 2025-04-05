import apiClient from './apiClient';

interface LoginRequest {
    username: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

export const authService = {
    async login(credentials: LoginRequest): Promise<LoginResponse> {
        const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
        localStorage.setItem('token', response.data.token);
        return response.data;
    },

    async logout(): Promise<void> {
        localStorage.removeItem('token');
    },

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }
}; 