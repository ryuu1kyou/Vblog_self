<template>
  <div class="dashboard">
    <aside class="sidebar">
      <nav>
        <router-link to="/dashboard" class="nav-item">
          <span class="icon">🏠</span>
          <span class="text">ホーム</span>
        </router-link>
        <router-link to="/dashboard/todos" class="nav-item">
          <span class="icon">📝</span>
          <span class="text">タスク一覧</span>
        </router-link>
        <router-link to="/about" class="nav-item">
          <span class="icon">ℹ️</span>
          <span class="text">About</span>
        </router-link>
      </nav>
      <div class="user-info">
        <span class="username">{{ username }}</span>
        <button @click="handleLogout" class="logout-button">ログアウト</button>
      </div>
    </aside>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../api/authService'

const router = useRouter()
const username = ref('testuser1') // 実際のアプリケーションでは認証情報から取得

const handleLogout = async () => {
  await authService.logout()
  router.push('/login')
}
</script>

<style scoped>
.dashboard {
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.sidebar {
  width: 200px;
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #34495e;
}

.nav-item.router-link-active {
  background-color: #34495e;
  font-weight: bold;
}

.icon {
  margin-right: 0.75rem;
  font-size: 1.2rem;
}

.text {
  font-size: 0.9rem;
}

.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  max-width: 1200px;
  margin: 0 auto;
}

.user-info {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #34495e;
}

.username {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.logout-button {
  width: 100%;
  padding: 0.5rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.logout-button:hover {
  background-color: #c0392b;
}
</style>
