<template>
  <div class="about-container">
    <h1>About</h1>
    <div class="about-content">
      <p>このアプリケーションは、ToDoリストを管理するためのシンプルなツールです。</p>
      <p>主な機能：</p>
      <ul>
        <li>タスクの作成、編集、削除</li>
        <li>タスクの完了状態の管理</li>
        <li>ユーザー認証</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// コンポーネントのロジックは必要に応じて追加
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.about-content {
  margin-top: 2rem;
  line-height: 1.6;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-top: 1rem;
}

li {
  margin-bottom: 0.5rem;
}
</style>
