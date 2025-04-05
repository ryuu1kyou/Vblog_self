<template>
  <div class="todo-list">
    <h2>タスク一覧</h2>
    <div v-if="loading" class="loading">読み込み中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="todos.length === 0" class="empty">タスクがありません</div>
    <div v-else class="todo-grid">
      <div v-for="todo in todos" :key="todo.id" class="todo-card">
        <div class="todo-content">
          <h3>{{ todo.title }}</h3>
          <p>{{ todo.description }}</p>
        </div>
        <div class="todo-actions">
          <button @click="toggleComplete(todo)" :class="{ completed: todo.completed }">
            {{ todo.completed ? '完了' : '未完了' }}
          </button>
          <button @click="deleteTodo(todo.id)" class="delete">削除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { todoService, type Todo } from '../api/todoService'

const todos = ref<Todo[]>([])
const loading = ref(false)
const error = ref('')

const fetchTodos = async () => {
  try {
    loading.value = true
    error.value = ''
    // 仮のユーザーIDを使用（実際のアプリケーションでは認証情報から取得）
    todos.value = await todoService.getTodos(1)
  } catch (err) {
    error.value = 'タスクの取得に失敗しました'
    console.error('タスク取得エラー:', err)
  } finally {
    loading.value = false
  }
}

const toggleComplete = async (todo: Todo) => {
  try {
    const updatedTodo = { ...todo, completed: !todo.completed }
    await todoService.updateTodo(updatedTodo)
    await fetchTodos()
  } catch (err) {
    error.value = 'タスクの更新に失敗しました'
    console.error('タスク更新エラー:', err)
  }
}

const deleteTodo = async (id: number) => {
  try {
    await todoService.deleteTodo(id)
    await fetchTodos()
  } catch (err) {
    error.value = 'タスクの削除に失敗しました'
    console.error('タスク削除エラー:', err)
  }
}

onMounted(() => {
  fetchTodos()
})
</script>

<style scoped>
.todo-list {
  width: 100%;
  padding: 1rem;
}

.loading, .error, .empty {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.error {
  color: red;
}

.todo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
  width: 100%;
}

.todo-card {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
}

.todo-content {
  flex: 1;
}

.todo-content h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.todo-content p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.todo-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  flex: 1;
}

button.completed {
  background-color: #4CAF50;
  color: white;
}

button.delete {
  background-color: #f44336;
  color: white;
}

button:hover {
  opacity: 0.8;
}
</style>
