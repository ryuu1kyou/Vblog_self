import apiClient from './apiClient';

export interface Todo {
    id?: number;
    title: string;
    description: string;
    completed: boolean;
    userId: number;
}

export const todoService = {
    async getTodos(userId: number): Promise<Todo[]> {
        const response = await apiClient.get<Todo[]>(`/api/todos?userId=${userId}`); // エンドポイントが正しいか確認
        return response.data;
    },

    async createTodo(todo: Todo): Promise<Todo> {
        const response = await apiClient.post<Todo>('/api/todos', todo);
        return response.data;
    },

    async updateTodo(todo: Todo): Promise<Todo> {
        const response = await apiClient.put<Todo>(`/api/todos/${todo.id}`, todo);
        return response.data;
    },

    async deleteTodo(id: number): Promise<void> {
        await apiClient.delete(`/todos/${id}`);
    }
};