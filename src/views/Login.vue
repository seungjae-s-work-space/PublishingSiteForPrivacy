<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const username = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  if (!username.value || !password.value) {
    error.value = '사용자명과 비밀번호를 입력해주세요.'
    return
  }

  isLoading.value = true
  error.value = ''

  // 간단한 로딩 시뮬레이션
  setTimeout(() => {
    const success = authStore.login(username.value, password.value)

    if (success) {
      router.push('/admin')
    } else {
      error.value = '잘못된 사용자명 또는 비밀번호입니다.'
    }

    isLoading.value = false
  }, 500)
}

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleLogin()
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <header class="login-header">
        <h1>🔐 관리자 로그인</h1>
        <p>Ethan Dev Studio 관리 시스템</p>
      </header>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">사용자명</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="사용자명을 입력하세요"
            class="form-input"
            @keypress="handleKeyPress"
            :disabled="isLoading"
          />
        </div>

        <div class="form-group">
          <label for="password">비밀번호</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            class="form-input"
            @keypress="handleKeyPress"
            :disabled="isLoading"
          />
        </div>

        <div v-if="error" class="error-message">
          {{ error }}
        </div>

        <button type="submit" class="login-btn" :disabled="isLoading">
          <span v-if="isLoading">로그인 중...</span>
          <span v-else>로그인</span>
        </button>
      </form>

      <div class="back-home">
        <router-link to="/" class="back-link">← 홈으로 돌아가기</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #101215, #181c20);
  padding: 2rem 1rem;
}

.login-card {
  background: #181c20;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid #2a3441;
  max-width: 400px;
  width: 100%;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header h1 {
  font-size: 2rem;
  color: #4de2c7;
  margin-bottom: 0.5rem;
}

.login-header p {
  color: #b8c5d6;
  font-size: 1.1rem;
}

.login-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #b8c5d6;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #3a424f;
  border-radius: 8px;
  background: #2a3441;
  color: #f5f6fa;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #4de2c7;
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  background: #dc3545;
  color: white;
  padding: 0.8rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

.login-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  color: #181c20;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(77, 226, 199, 0.3);
}

.login-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.back-home {
  text-align: center;
}

.back-link {
  color: #4de2c7;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #41b89e;
  text-decoration: underline;
}

@media (max-width: 480px) {
  .login-card {
    padding: 2rem;
  }
}
</style>
```
