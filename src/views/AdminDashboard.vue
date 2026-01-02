<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useAppsStore } from '../stores/apps'

const router = useRouter()
const authStore = useAuthStore()
const appsStore = useAppsStore()

const showAddForm = ref(false)
const editingApp = ref(null)
const isGeneratingFiles = ref(false)

const newApp = ref({
  name: '',
  description: '',
  longDescription: '',
  category: '',
  downloads: '0',
  rating: 0,
  features: '',
  techStack: '',
  releaseDate: '',
  lastUpdate: '',
  appAdsContent: ''
})

const resetForm = () => {
  newApp.value = {
    name: '',
    description: '',
    longDescription: '',
    category: '',
    downloads: '0',
    rating: 0,
    features: '',
    techStack: '',
    releaseDate: new Date().toISOString().split('T')[0],
    lastUpdate: new Date().toISOString().split('T')[0],
    appAdsContent: ''
  }
  editingApp.value = null
}

// 실제 파일 생성 함수 (프론트엔드에서 다운로드 시뮬레이션)
const generateAppAdsFile = (app) => {
  if (!app.appAdsContent) return

  const content = app.appAdsContent
  const blob = new Blob([content], { type: 'text/plain' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${app.id}-app-ads.txt`
  document.body.appendChild(a)
  a.click()
  window.URL.revokeObjectURL(url)
  document.body.removeChild(a)
}

// 모든 앱의 app-ads.txt 파일 일괄 생성
const generateAllFiles = async () => {
  isGeneratingFiles.value = true

  try {
    for (const app of appsStore.apps) {
      if (app.appAdsContent) {
        // 각 앱마다 약간의 딜레이
        await new Promise(resolve => setTimeout(resolve, 500))
        generateAppAdsFile(app)
      }
    }
    alert('모든 app-ads.txt 파일이 생성되었습니다!')
  } catch (error) {
    alert('파일 생성 중 오류가 발생했습니다.')
  } finally {
    isGeneratingFiles.value = false
  }
}

// Vite 개발 서버용 가상 파일 생성 (개발 시에만 사용)
const createVirtualEndpoint = (app) => {
  // 이 함수는 실제로는 브라우저에서 파일을 생성할 수 없으므로
  // localStorage에 저장하고 Vue Router로 서빙합니다
  console.log(`Virtual endpoint created: /${app.id}/app-ads.txt`)
  return `${window.location.origin}/${app.id}/app-ads.txt`
}

const handleAddApp = () => {
  if (!newApp.value.name || !newApp.value.description) {
    alert('앱 이름과 설명은 필수입니다.')
    return
  }

  const appData = {
    ...newApp.value,
    features: newApp.value.features.split(',').map(f => f.trim()).filter(f => f),
    techStack: newApp.value.techStack.split(',').map(t => t.trim()).filter(t => t),
    rating: parseFloat(newApp.value.rating)
  }

  if (editingApp.value) {
    appsStore.updateApp(editingApp.value.id, appData)
    alert('앱이 수정되었습니다!')
  } else {
    const createdApp = appsStore.addApp(appData)

    // 가상 엔드포인트 생성
    const endpoint = createVirtualEndpoint(createdApp)

    alert(`✅ 앱이 추가되었습니다!\n\n📱 앱 ID: ${createdApp.id}\n🌐 엔드포인트: ${endpoint}\n\n💡 팁: "파일 다운로드" 버튼으로 실제 txt 파일을 받을 수 있습니다.`)
  }

  showAddForm.value = false
  resetForm()
}

const editApp = (app) => {
  editingApp.value = app
  newApp.value = {
    ...app,
    features: app.features.join(', '),
    techStack: app.techStack.join(', ')
  }
  showAddForm.value = true
}

const deleteApp = (app) => {
  if (confirm(`정말로 "${app.name}" 앱을 삭제하시겠습니까?`)) {
    appsStore.deleteApp(app.id)
    alert('앱이 삭제되었습니다.')
  }
}

const viewAppAds = (app) => {
  const url = `${window.location.origin}/${app.id}/app-ads.txt`
  window.open(url, '_blank')
}

const copyEndpoint = (app) => {
  const url = `${window.location.origin}/${app.id}/app-ads.txt`
  navigator.clipboard.writeText(url).then(() => {
    alert('엔드포인트 URL이 클립보드에 복사되었습니다!')
  })
}

const handleLogout = () => {
  if (confirm('로그아웃 하시겠습니까?')) {
    authStore.logout()
    router.push('/')
  }
}

onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push('/login')
    return
  }
  appsStore.loadFromStorage()
})
</script>

<template>
  <div class="admin-container">
    <header class="admin-header">
      <div class="header-content">
        <div class="header-left">
          <h1>🎛️ 관리자 대시보드</h1>
          <p class="header-subtitle">앱 및 엔드포인트 관리</p>
        </div>
        <div class="header-actions">
          <span class="welcome">환영합니다, {{ authStore.username }}님!</span>
          <button @click="handleLogout" class="logout-btn">로그아웃</button>
        </div>
      </div>
    </header>

    <div class="admin-content">
      <!-- 대시보드 통계 -->
      <section class="stats-section">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">📱</div>
            <div class="stat-content">
              <div class="stat-number">{{ appsStore.apps.length }}</div>
              <div class="stat-label">등록된 앱</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🌐</div>
            <div class="stat-content">
              <div class="stat-number">{{ appsStore.apps.filter(app => app.appAdsContent).length }}</div>
              <div class="stat-label">활성 엔드포인트</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📄</div>
            <div class="stat-content">
              <div class="stat-number">{{ appsStore.apps.reduce((sum, app) => sum + (app.appAdsContent ? app.appAdsContent.split('\n').length : 0), 0) }}</div>
              <div class="stat-label">총 광고 항목</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⚡</div>
            <div class="stat-content">
              <div class="stat-number">실시간</div>
              <div class="stat-label">업데이트</div>
            </div>
          </div>
        </div>
      </section>

      <section class="apps-section">
        <div class="section-header">
          <div class="header-left">
            <h2>📱 앱 관리</h2>
            <p>동적 엔드포인트가 자동으로 생성됩니다</p>
          </div>
          <div class="header-actions">
            <button
              @click="generateAllFiles"
              :disabled="isGeneratingFiles || appsStore.apps.length === 0"
              class="bulk-download-btn"
            >
              <span v-if="isGeneratingFiles">⏳ 생성 중...</span>
              <span v-else>📥 모든 파일 다운로드</span>
            </button>
            <button @click="showAddForm = !showAddForm; resetForm()" class="add-btn">
              {{ showAddForm ? '❌ 취소' : '➕ 새 앱 추가' }}
            </button>
          </div>
        </div>

        <!-- 앱 추가/수정 폼 -->
        <div v-if="showAddForm" class="add-form">
          <div class="form-header">
            <h3>{{ editingApp ? '✏️ 앱 수정' : '➕ 새 앱 추가' }}</h3>
            <p>앱을 추가하면 자동으로 <code>/앱ID/app-ads.txt</code> 엔드포인트가 생성됩니다</p>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label>앱 이름 *</label>
              <input v-model="newApp.name" type="text" class="form-input" placeholder="예: TaskFlow Pro" />
            </div>

            <div class="form-group">
              <label>카테고리</label>
              <input v-model="newApp.category" type="text" class="form-input" placeholder="예: 업무 효율성" />
            </div>

            <div class="form-group">
              <label>다운로드 수</label>
              <input v-model="newApp.downloads" type="text" class="form-input" placeholder="예: 10K+" />
            </div>

            <div class="form-group">
              <label>평점 (0-5)</label>
              <input v-model="newApp.rating" type="number" min="0" max="5" step="0.1" class="form-input" />
            </div>

            <div class="form-group full-width">
              <label>짧은 설명 *</label>
              <input v-model="newApp.description" type="text" class="form-input" placeholder="예: 효율적인 팀 프로젝트 관리 솔루션" />
            </div>

            <div class="form-group full-width">
              <label>상세 설명</label>
              <textarea v-model="newApp.longDescription" class="form-textarea" placeholder="앱의 상세한 설명을 입력하세요..."></textarea>
            </div>

            <div class="form-group full-width">
              <label>주요 기능 (쉼표로 구분)</label>
              <input v-model="newApp.features" type="text" class="form-input" placeholder="실시간 협업, 칸반 보드, 시간 추적" />
            </div>

            <div class="form-group full-width">
              <label>기술 스택 (쉼표로 구분)</label>
              <input v-model="newApp.techStack" type="text" class="form-input" placeholder="Vue.js, Node.js, PostgreSQL" />
            </div>

            <div class="form-group">
              <label>출시일</label>
              <input v-model="newApp.releaseDate" type="date" class="form-input" />
            </div>

            <div class="form-group">
              <label>최근 업데이트</label>
              <input v-model="newApp.lastUpdate" type="date" class="form-input" />
            </div>

            <div class="form-group full-width">
              <label>app-ads.txt 내용</label>
              <div class="textarea-container">
                <textarea
                  v-model="newApp.appAdsContent"
                  class="form-textarea app-ads-textarea"
                  placeholder="google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0&#10;facebook.com, 123456789, DIRECT&#10;&#10;각 줄마다 하나의 광고 네트워크 정보를 입력하세요"
                ></textarea>
                <div class="textarea-footer">
                  <small>💡 각 줄은 "도메인, 퍼블리셔ID, 관계, 인증ID" 형식으로 입력하세요</small>
                </div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button @click="handleAddApp" class="save-btn">
              {{ editingApp ? '💾 수정 완료' : '✅ 앱 추가' }}
            </button>
            <button @click="showAddForm = false; resetForm()" class="cancel-btn">취소</button>
          </div>
        </div>

        <!-- 앱 목록 -->
        <div v-if="appsStore.apps.length > 0" class="apps-list">
          <div v-for="app in appsStore.apps" :key="app.id" class="app-item">
            <div class="app-header">
              <div class="app-icon">📱</div>
              <div class="app-basic-info">
                <h4>{{ app.name }}</h4>
                <p>{{ app.description }}</p>
                <div class="app-meta">
                  <span class="app-id">{{ app.id }}</span>
                  <span class="category">{{ app.category }}</span>
                  <span class="rating">⭐ {{ app.rating }}</span>
                </div>
              </div>
            </div>

            <div class="app-endpoints">
              <div class="endpoint-section">
                <h5>🌐 엔드포인트 정보</h5>
                <div class="endpoint-item">
                  <div class="endpoint-details">
                    <div class="endpoint-url">
                      <strong>URL:</strong>
                      <code class="url-code">{{ window.location.origin }}/{{ app.id }}/app-ads.txt</code>
                    </div>
                    <div class="endpoint-status">
                      <span class="status-indicator" :class="app.appAdsContent ? 'active' : 'inactive'"></span>
                      <span>{{ app.appAdsContent ? '활성화됨' : '비활성화됨' }}</span>
                    </div>
                  </div>
                </div>

                <div v-if="app.appAdsContent" class="content-preview">
                  <h6>📄 내용 미리보기</h6>
                  <pre class="content-code">{{ app.appAdsContent.split('\n').slice(0, 3).join('\n') }}{{ app.appAdsContent.split('\n').length > 3 ? '\n...' : '' }}</pre>
                  <div class="content-stats">
                    <span>{{ app.appAdsContent.split('\n').filter(line => line.trim()).length }}개 항목</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="app-actions">
              <div class="action-group">
                <button @click="editApp(app)" class="action-btn edit">
                  <span class="btn-icon">✏️</span>
                  <span>수정</span>
                </button>
                <button @click="viewAppAds(app)" class="action-btn view">
                  <span class="btn-icon">👁️</span>
                  <span>미리보기</span>
                </button>
                <button @click="copyEndpoint(app)" class="action-btn copy">
                  <span class="btn-icon">📋</span>
                  <span>URL 복사</span>
                </button>
              </div>
              <div class="action-group">
                <button @click="generateAppAdsFile(app)" :disabled="!app.appAdsContent" class="action-btn download">
                  <span class="btn-icon">📥</span>
                  <span>파일 다운로드</span>
                </button>
                <button @click="deleteApp(app)" class="action-btn delete">
                  <span class="btn-icon">🗑️</span>
                  <span>삭제</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="empty-apps">
          <div class="empty-content">
            <div class="empty-icon">📱</div>
            <h3>아직 등록된 앱이 없습니다</h3>
            <p>첫 번째 앱을 추가하여 동적 엔드포인트를 생성해보세요!</p>
          </div>
        </div>
      </section>
    </div>

    <div class="back-home">
      <router-link to="/" class="back-link">🏠 홈으로 돌아가기</router-link>
    </div>
  </div>
</template>

<style scoped>
.admin-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Noto Sans KR', Arial, sans-serif;
  color: #f5f6fa;
  background: linear-gradient(135deg, #0c0f14 0%, #1a1f26 100%);
  border-radius: 12px;
  min-height: 100vh;
}

.admin-header {
  margin-bottom: 3rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(42, 52, 65, 0.8), rgba(30, 35, 41, 0.8));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(77, 226, 199, 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left h1 {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #4de2c7, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem 0;
}

.header-subtitle {
  color: #b8c5d6;
  font-size: 1.1rem;
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.welcome {
  color: #b8c5d6;
  font-size: 1.1rem;
  font-weight: 500;
}

.logout-btn {
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
}

.logout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(220, 53, 69, 0.4);
}

/* Stats Section */
.stats-section {
  margin-bottom: 3rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: rgba(42, 52, 65, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(77, 226, 199, 0.1);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: rgba(77, 226, 199, 0.3);
}

.stat-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(77, 226, 199, 0.3);
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: #4de2c7;
  margin-bottom: 0.3rem;
}

.stat-label {
  color: #b8c5d6;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Section Header */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-header .header-left h2 {
  font-size: 2rem;
  color: #4de2c7;
  margin: 0 0 0.5rem 0;
}

.section-header .header-left p {
  color: #b8c5d6;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.bulk-download-btn,
.add-btn {
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.bulk-download-btn {
  background: linear-gradient(135deg, #17a2b8, #138496);
  color: white;
  box-shadow: 0 4px 15px rgba(23, 162, 184, 0.3);
}

.bulk-download-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.bulk-download-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(23, 162, 184, 0.4);
}

.add-btn {
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  color: #0c0f14;
  box-shadow: 0 4px 15px rgba(77, 226, 199, 0.3);
}

.add-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(77, 226, 199, 0.4);
}

/* Form Styles */
.add-form {
  background: rgba(42, 52, 65, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(77, 226, 199, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 2rem;
}

.form-header {
  margin-bottom: 2rem;
  text-align: center;
}

.form-header h3 {
  color: #4de2c7;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.form-header p {
  color: #b8c5d6;
  margin: 0;
}

.form-header code {
  background: rgba(77, 226, 199, 0.1);
  color: #4de2c7;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #b8c5d6;
  font-weight: 600;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(77, 226, 199, 0.2);
  border-radius: 12px;
  background: rgba(30, 35, 41, 0.8);
  color: #f5f6fa;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #4de2c7;
  box-shadow: 0 0 0 3px rgba(77, 226, 199, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.app-ads-textarea {
  min-height: 150px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.textarea-container {
  position: relative;
}

.textarea-footer {
  margin-top: 0.5rem;
}

.textarea-footer small {
  color: #7d8590;
  font-size: 0.8rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.save-btn,
.cancel-btn {
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.save-btn {
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  color: #0c0f14;
  box-shadow: 0 4px 15px rgba(77, 226, 199, 0.3);
}

.cancel-btn {
  background: rgba(108, 117, 125, 0.8);
  color: white;
  border: 1px solid rgba(108, 117, 125, 0.5);
}

.save-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(77, 226, 199, 0.4);
}

.cancel-btn:hover {
  background: rgba(90, 98, 104, 0.9);
}

/* Apps List */
.apps-list {
  display: grid;
  gap: 2rem;
}

.app-item {
  background: rgba(42, 52, 65, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(77, 226, 199, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.app-item:hover {
  transform: translateY(-5px);
  border-color: rgba(77, 226, 199, 0.3);
  box-shadow: 0 10px 30px rgba(77, 226, 199, 0.1);
}

.app-header {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.app-icon {
  font-size: 3rem;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(77, 226, 199, 0.3);
}

.app-basic-info {
  flex: 1;
}

.app-basic-info h4 {
  color: #ffffff;
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.app-basic-info p {
  color: #b8c5d6;
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

.app-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.app-id {
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  color: #0c0f14;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: 'Courier New', monospace;
}

.category,
.rating {
  color: #b8c5d6;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Endpoints Section */
.app-endpoints {
  margin-bottom: 2rem;
}

.endpoint-section {
  background: rgba(30, 35, 41, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
}

.endpoint-section h5 {
  color: #4de2c7;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
}

.endpoint-item {
  margin-bottom: 1.5rem;
}

.endpoint-details {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.endpoint-url {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.endpoint-url strong {
  color: #b8c5d6;
  min-width: 40px;
}

.url-code {
  background: rgba(77, 226, 199, 0.1);
  color: #4de2c7;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  border: 1px solid rgba(77, 226, 199, 0.2);
  flex: 1;
  min-width: 300px;
}

.endpoint-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #b8c5d6;
  font-size: 0.9rem;
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.status-indicator.active {
  background: #28a745;
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
}

.status-indicator.inactive {
  background: #6c757d;
}

.content-preview {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(77, 226, 199, 0.1);
}

.content-preview h6 {
  color: #4de2c7;
  margin: 0 0 0.8rem 0;
  font-size: 1rem;
}

.content-code {
  background: rgba(12, 15, 20, 0.8);
  color: #4de2c7;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  border: 1px solid rgba(77, 226, 199, 0.2);
  max-height: 120px;
  overflow-y: auto;
}

.content-stats {
  color: #7d8590;
  font-size: 0.8rem;
}

/* Actions */
.app-actions {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.action-btn {
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 110px;
  justify-content: center;
}

.action-btn.edit {
  background: linear-gradient(135deg, #ffc107, #e0a800);
  color: #0c0f14;
}

.action-btn.view {
  background: linear-gradient(135deg, #17a2b8, #138496);
  color: white;
}

.action-btn.copy {
  background: linear-gradient(135deg, #6f42c1, #59359a);
  color: white;
}

.action-btn.download {
  background: linear-gradient(135deg, #28a745, #1e7e34);
  color: white;
}

.action-btn.delete {
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
}

.action-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.action-btn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1rem;
}

/* Empty State */
.empty-apps {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-content {
  max-width: 400px;
  margin: 0 auto;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.7;
}

.empty-content h3 {
  color: #4de2c7;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.empty-content p {
  color: #b8c5d6;
  line-height: 1.5;
}

/* Back Home */
.back-home {
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(77, 226, 199, 0.1);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  color: #0c0f14;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(77, 226, 199, 0.3);
}

.back-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(77, 226, 199, 0.4);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .header-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .section-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .app-header {
    flex-direction: column;
    text-align: center;
  }

  .app-actions {
    flex-direction: column;
  }

  .action-group {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .admin-container {
    padding: 1rem;
  }

  .admin-header {
    padding: 1.5rem;
  }

  .header-left h1 {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .add-form {
    padding: 1.5rem;
  }

  .app-item {
    padding: 1.5rem;
  }

  .endpoint-url {
    flex-direction: column;
    align-items: flex-start;
  }

  .url-code {
    min-width: 100%;
    word-break: break-all;
  }
}

@media (max-width: 480px) {
  .header-actions {
    flex-direction: column;
    width: 100%;
  }

  .bulk-download-btn,
  .add-btn {
    width: 100%;
    justify-content: center;
  }

  .form-actions {
    flex-direction: column;
  }

  .save-btn,
  .cancel-btn {
    width: 100%;
  }

  .action-group {
    flex-direction: column;
  }

  .action-btn {
    width: 100%;
  }
}
</style>
