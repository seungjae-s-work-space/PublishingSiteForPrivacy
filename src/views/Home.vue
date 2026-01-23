<script setup>
// 홈 페이지
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <div class="logo-showcase">
            <img alt="Ethan Dev Studio 로고" class="hero-logo" src="../assets/logo.svg" />
            <div class="logo-glow"></div>
          </div>
          <h1 class="hero-title">
            <span class="gradient-text">Ethan Dev Studio</span>
          </h1>
          <p class="hero-subtitle">작지만 강한, 믿을 수 있는 개발 파트너</p>
          <div class="hero-badges">
            <span class="badge">Vue.js</span>
            <span class="badge">Flutter</span>
            <span class="badge">Node.js</span>
            <span class="badge">Go</span>
          </div>
        </div>
      </div>
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
    </section>

    <div class="content-wrapper">
      <!-- Introduction Section -->
      <section class="intro-section">
        <div class="container">
          <div class="section-header">
            <h2>안녕하세요, Ethan Dev Studio입니다</h2>
            <div class="section-line"></div>
          </div>
          <div class="intro-grid">
            <div class="intro-card">
              <div class="card-icon">🚀</div>
              <h3>빠른 개발</h3>
              <p>민첩한 개발 프로세스로 빠르게 결과물을 제공합니다.</p>
            </div>
            <div class="intro-card">
              <div class="card-icon">💡</div>
              <h3>혁신적인 솔루션</h3>
              <p>최신 기술을 활용한 창의적인 해결책을 제시합니다.</p>
            </div>
            <div class="intro-card">
              <div class="card-icon">🤝</div>
              <h3>신뢰할 수 있는 파트너</h3>
              <p>프로젝트 시작부터 완료까지 함께 동행합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Philosophy Section -->
      <section class="philosophy-section">
        <div class="container">
          <div class="content-grid">
            <div class="philosophy-content">
              <div class="section-header">
                <h2>개발 철학</h2>
                <div class="section-line"></div>
              </div>
              <div class="philosophy-list">
                <div class="philosophy-item">
                  <div class="item-number">01</div>
                  <div class="item-content">
                    <h4>빠른 피드백과 유연한 대응</h4>
                    <p>고객의 요구사항에 신속하게 반응합니다</p>
                  </div>
                </div>
                <div class="philosophy-item">
                  <div class="item-number">02</div>
                  <div class="item-content">
                    <h4>신뢰 기반의 협업</h4>
                    <p>투명한 소통으로 신뢰를 쌓아갑니다</p>
                  </div>
                </div>
                <div class="philosophy-item">
                  <div class="item-number">03</div>
                  <div class="item-content">
                    <h4>고객의 목적을 기술로 완성</h4>
                    <p>기술은 수단, 목적 달성이 최우선입니다</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="philosophy-visual">
              <div class="visual-card">
                <div class="code-preview">
                  <div class="code-header">
                    <div class="dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span>philosophy.js</span>
                  </div>
                  <div class="code-content">
                    <div class="code-line">
                      <span class="keyword">const</span>
                      <span class="variable">philosophy</span> = {
                    </div>
                    <div class="code-line indent">
                      <span class="property">speed</span>:
                      <span class="string">'fast'</span>,
                    </div>
                    <div class="code-line indent">
                      <span class="property">trust</span>:
                      <span class="string">'reliable'</span>,
                    </div>
                    <div class="code-line indent">
                      <span class="property">focus</span>:
                      <span class="string">'purpose-driven'</span>
                    </div>
                    <div class="code-line">}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-section">
        <div class="container">
          <div class="section-header">
            <h2>주요 개발 영역</h2>
            <div class="section-line"></div>
            <p class="section-description">다양한 플랫폼과 기술로 완성도 높은 솔루션을 제공합니다</p>
          </div>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🌐</div>
              <h3>웹 프론트엔드</h3>
              <p>Vue.js 기반의 현대적이고 반응형인 웹 애플리케이션</p>
              <div class="service-tech">Vue.js • TypeScript • Vite</div>
            </div>
            <div class="service-card">
              <div class="service-icon">📱</div>
              <h3>모바일 앱</h3>
              <p>Flutter로 iOS와 Android를 동시에 지원하는 네이티브 앱</p>
              <div class="service-tech">Flutter • Dart • Firebase</div>
            </div>
            <div class="service-card">
              <div class="service-icon">⚡</div>
              <h3>백엔드 시스템</h3>
              <p>확장 가능하고 안정적인 서버 사이드 솔루션</p>
              <div class="service-tech">Node.js • Go • PostgreSQL</div>
            </div>
            <div class="service-card">
              <div class="service-icon">☁️</div>
              <h3>클라우드 인프라</h3>
              <p>클라우드 기반의 확장 가능한 인프라 구축</p>
              <div class="service-tech">AWS • Firebase • Supabase</div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>프로젝트를 함께 시작하세요</h2>
            <p>아이디어가 있으시다면 언제든지 연락해주세요</p>
            <div class="cta-buttons">
              <a href="mailto:devethanyoon@gmail.com" class="cta-button primary">
                <span class="button-icon">📧</span>
                <span>프로젝트 문의</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info">
              <div class="section-header">
                <h2>회사 정보</h2>
                <div class="section-line"></div>
              </div>
              <div class="info-list">
                <div class="info-item">
                  <div class="info-icon">🏢</div>
                  <div class="info-content">
                    <strong>회사명</strong>
                    <span>Ethan Dev Studio</span>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">👨‍💻</div>
                  <div class="info-content">
                    <strong>대표</strong>
                    <span>Ethan</span>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">📅</div>
                  <div class="info-content">
                    <strong>설립</strong>
                    <span>2023년</span>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">🏗️</div>
                  <div class="info-content">
                    <strong>형태</strong>
                    <span>1인 개발 스튜디오</span>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">📍</div>
                  <div class="info-content">
                    <strong>위치</strong>
                    <span>서울 (온라인 협업 중심)</span>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">📧</div>
                  <div class="info-content">
                    <strong>연락처</strong>
                    <a href="mailto:devethanyoon@gmail.com">devethanyoon@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-visual">
              <div class="stats-grid">
                <div class="stat-card">
                  <div class="stat-number">2023</div>
                  <div class="stat-label">설립년도</div>
                </div>
                <div class="stat-card">
                  <div class="stat-number">100%</div>
                  <div class="stat-label">고객 만족도</div>
                </div>
                <div class="stat-card">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">빠른 응답</div>
                </div>
                <div class="stat-card">
                  <div class="stat-number">∞</div>
                  <div class="stat-label">혁신 의지</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0c0f14 0%, #1a1f26 100%);
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: radial-gradient(ellipse at center, rgba(77, 226, 199, 0.1) 0%, transparent 70%);
}

.hero-content {
  text-align: center;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.logo-showcase {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.hero-logo {
  width: 120px;
  height: 120px;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 20px rgba(77, 226, 199, 0.5));
  animation: float 6s ease-in-out infinite;
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(77, 226, 199, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  margin: 0 0 1rem 0;
  line-height: 1.1;
}

.gradient-text {
  background: linear-gradient(135deg, #4de2c7, #ffffff, #4de2c7);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease-in-out infinite;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #b8c5d6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  background: rgba(77, 226, 199, 0.1);
  border: 1px solid rgba(77, 226, 199, 0.3);
  color: #4de2c7;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.floating-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(77, 226, 199, 0.1), rgba(77, 226, 199, 0.05));
  animation: float 8s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

/* Content Wrapper */
.content-wrapper {
  position: relative;
  z-index: 2;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.section-line {
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  margin: 0 auto 1rem;
  border-radius: 2px;
}

.section-description {
  color: #b8c5d6;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Introduction Section */
.intro-section {
  padding: 8rem 0;
  background: rgba(18, 22, 28, 0.5);
}

.intro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.intro-card {
  background: rgba(42, 52, 65, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(77, 226, 199, 0.1);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.intro-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(77, 226, 199, 0.05), transparent);
  transition: left 0.6s ease;
}

.intro-card:hover::before {
  left: 100%;
}

.intro-card:hover {
  transform: translateY(-10px);
  border-color: rgba(77, 226, 199, 0.3);
  box-shadow: 0 20px 40px rgba(77, 226, 199, 0.1);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.intro-card h3 {
  font-size: 1.3rem;
  color: #4de2c7;
  margin-bottom: 1rem;
  font-weight: 600;
}

.intro-card p {
  color: #b8c5d6;
  line-height: 1.6;
}

/* Philosophy Section */
.philosophy-section {
  padding: 8rem 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.philosophy-content .section-header {
  text-align: left;
  margin-bottom: 3rem;
}

.philosophy-list {
  space-y: 2rem;
}

.philosophy-item {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.item-number {
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  color: #0c0f14;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.item-content h4 {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.item-content p {
  color: #b8c5d6;
  line-height: 1.6;
}

.philosophy-visual {
  display: flex;
  justify-content: center;
}

.visual-card {
  background: rgba(42, 52, 65, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(77, 226, 199, 0.1);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
}

.code-preview {
  background: #0c0f14;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(77, 226, 199, 0.2);
}

.code-header {
  background: rgba(77, 226, 199, 0.1);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(77, 226, 199, 0.2);
}

.dots {
  display: flex;
  gap: 0.5rem;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #4de2c7;
  opacity: 0.6;
}

.code-content {
  padding: 1.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.code-line {
  margin-bottom: 0.5rem;
  color: #b8c5d6;
}

.indent {
  padding-left: 2rem;
}

.keyword {
  color: #ff6b9d;
}

.variable {
  color: #4de2c7;
}

.property {
  color: #ffd93d;
}

.string {
  color: #6bcf7f;
}

/* Services Section */
.services-section {
  padding: 8rem 0;
  background: rgba(18, 22, 28, 0.5);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: rgba(42, 52, 65, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(77, 226, 199, 0.1);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(77, 226, 199, 0.05) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: rgba(77, 226, 199, 0.3);
  box-shadow: 0 20px 40px rgba(77, 226, 199, 0.1);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
}

.service-card p {
  color: #b8c5d6;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-tech {
  color: #4de2c7;
  font-size: 0.9rem;
  font-weight: 500;
}

/* CTA Section */
.cta-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, rgba(77, 226, 199, 0.1) 0%, rgba(77, 226, 199, 0.05) 100%);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-content p {
  color: #b8c5d6;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-button.primary {
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  color: #0c0f14;
  box-shadow: 0 8px 25px rgba(77, 226, 199, 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(77, 226, 199, 0.4);
}

.cta-button.secondary {
  background: rgba(77, 226, 199, 0.1);
  border: 2px solid #4de2c7;
  color: #4de2c7;
}

.cta-button.secondary:hover {
  background: rgba(77, 226, 199, 0.2);
  transform: translateY(-3px);
}

.button-icon {
  font-size: 1.2rem;
}

/* Contact Section */
.contact-section {
  padding: 8rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.contact-info .section-header {
  text-align: left;
  margin-bottom: 2rem;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(42, 52, 65, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(77, 226, 199, 0.1);
}

.info-icon {
  font-size: 1.5rem;
}

.info-content {
  display: flex;
  flex-direction: column;
}

.info-content strong {
  color: #4de2c7;
  font-size: 0.85rem;
  margin-bottom: 0.2rem;
}

.info-content span,
.info-content a {
  color: #ffffff;
  text-decoration: none;
}

.info-content a:hover {
  color: #4de2c7;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-card {
  background: rgba(42, 52, 65, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(77, 226, 199, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4de2c7;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #b8c5d6;
  font-size: 0.95rem;
}

/* Admin Section */
.admin-section {
  padding: 4rem 0;
}

.admin-card {
  background: rgba(42, 52, 65, 0.4);
  border: 1px solid rgba(77, 226, 199, 0.1);
  border-radius: 20px;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.admin-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.admin-icon {
  font-size: 2rem;
}

.admin-content h3 {
  color: #ffffff;
  margin: 0 0 0.3rem 0;
  font-size: 1.2rem;
}

.admin-content p {
  color: #b8c5d6;
  margin: 0;
  font-size: 0.95rem;
}

.admin-login-button {
  background: rgba(77, 226, 199, 0.1);
  border: 1px solid #4de2c7;
  color: #4de2c7;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.admin-login-button:hover {
  background: rgba(77, 226, 199, 0.2);
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Responsive */
@media (max-width: 968px) {
  .content-grid,
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .philosophy-content .section-header {
    text-align: center;
  }

  .admin-card {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .admin-content {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
