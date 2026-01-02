<script setup>
const apps = [
  { id: 'a007', name: 'Battery Saver Pro', nameKo: '배터리 세이버 프로', category: '배터리' },
  { id: 'a008', name: 'Battery Health Check', nameKo: '배터리 건강 체크', category: '배터리' },
  { id: 'a009', name: 'Charging Alarm', nameKo: '충전 알람', category: '배터리' },
  { id: 'a010', name: 'Battery Widget', nameKo: '배터리 위젯', category: '배터리' },
  { id: 'a011', name: 'Battery Usage Tracker', nameKo: '배터리 사용량 트래커', category: '배터리' },
  { id: 'a012', name: 'Fast Charge Monitor', nameKo: '고속 충전 모니터', category: '배터리' },
  { id: 'a013', name: 'Battery Temperature', nameKo: '배터리 온도', category: '배터리' },
  { id: 'a014', name: 'Low Battery Alert', nameKo: '저전력 알림', category: '배터리' },
  { id: 'a015', name: 'Battery History', nameKo: '배터리 히스토리', category: '배터리' },
  { id: 'a016', name: 'Battery Optimizer', nameKo: '배터리 최적화', category: '배터리' },
  { id: 'a017', name: 'Charging Animation', nameKo: '충전 애니메이션', category: '배터리' },
  { id: 'a018', name: 'Battery Percentage', nameKo: '배터리 퍼센트', category: '배터리' },
  { id: 'a019', name: 'Battery Comparison', nameKo: '배터리 비교', category: '배터리' },
  { id: 'a020', name: 'Eco Battery Mode', nameKo: '에코 배터리 모드', category: '배터리' },
  { id: 'a021', name: 'PDF Merger', nameKo: 'PDF 병합', category: '문서' },
  { id: 'a022', name: 'PDF Splitter', nameKo: 'PDF 분할', category: '문서' },
  { id: 'a023', name: 'PDF Compressor', nameKo: 'PDF 압축', category: '문서' },
  { id: 'a024', name: 'Image to PDF', nameKo: '이미지 to PDF', category: '문서' },
  { id: 'a025', name: 'Image Converter', nameKo: '이미지 변환기', category: '문서' },
  { id: 'a026', name: 'Scan to PDF', nameKo: '스캔 to PDF', category: '문서' },
  { id: 'a027', name: 'Document Viewer', nameKo: '문서 뷰어', category: '문서' },
  { id: 'a028', name: 'ZIP Opener', nameKo: 'ZIP 오프너', category: '파일' }
]

const categories = [...new Set(apps.map(app => app.category))]

const getAppsByCategory = (category) => {
  return apps.filter(app => app.category === category)
}
</script>

<template>
  <div class="privacy-list-container">
    <header class="list-header">
      <h1>개인정보처리방침</h1>
      <p>Privacy Policy for Apps</p>
      <router-link to="/" class="back-home">홈으로</router-link>
    </header>

    <div class="categories">
      <div v-for="category in categories" :key="category" class="category-section">
        <h2 class="category-title">
          <span v-if="category === '배터리'">🔋</span>
          <span v-else-if="category === '문서'">📄</span>
          <span v-else>📁</span>
          {{ category }}
        </h2>

        <div class="apps-grid">
          <router-link
            v-for="app in getAppsByCategory(category)"
            :key="app.id"
            :to="`/privacy/${app.id}`"
            class="app-card"
          >
            <div class="app-id">{{ app.id }}</div>
            <div class="app-info">
              <h3>{{ app.name }}</h3>
              <p>{{ app.nameKo }}</p>
            </div>
            <div class="arrow">→</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy-list-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #0c0f14 0%, #1a1f26 100%);
}

.list-header {
  text-align: center;
  padding: 3rem 0;
  border-bottom: 2px solid rgba(77, 226, 199, 0.2);
  margin-bottom: 3rem;
}

.list-header h1 {
  font-size: 2.5rem;
  color: #4de2c7;
  margin-bottom: 0.5rem;
}

.list-header p {
  color: #b8c5d6;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.back-home {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  background: rgba(77, 226, 199, 0.1);
  border: 1px solid #4de2c7;
  color: #4de2c7;
  text-decoration: none;
  border-radius: 25px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.back-home:hover {
  background: rgba(77, 226, 199, 0.2);
}

.category-section {
  margin-bottom: 3rem;
}

.category-title {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(77, 226, 199, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.apps-grid {
  display: grid;
  gap: 1rem;
}

.app-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.5rem;
  background: rgba(42, 52, 65, 0.6);
  border: 1px solid rgba(77, 226, 199, 0.1);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.app-card:hover {
  background: rgba(42, 52, 65, 0.8);
  border-color: rgba(77, 226, 199, 0.3);
  transform: translateX(5px);
}

.app-id {
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  color: #0c0f14;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  font-family: monospace;
  min-width: 50px;
  text-align: center;
}

.app-info {
  flex: 1;
}

.app-info h3 {
  color: #ffffff;
  font-size: 1.1rem;
  margin: 0 0 0.2rem 0;
}

.app-info p {
  color: #b8c5d6;
  font-size: 0.9rem;
  margin: 0;
}

.arrow {
  color: #4de2c7;
  font-size: 1.2rem;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.app-card:hover .arrow {
  opacity: 1;
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .list-header h1 {
    font-size: 2rem;
  }

  .app-card {
    padding: 1rem;
  }

  .app-info h3 {
    font-size: 1rem;
  }
}
</style>
