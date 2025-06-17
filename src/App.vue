<script setup>
// 별도의 스크립트 필요 없음
</script>

<template>
  <div class="container">
    <header class="header">
      <img alt="Ethan Dev Studio 로고" class="logo" src="./assets/logo.svg" width="100" height="100" />
      <h1>Ethan Dev Studio</h1>
      <p class="subtitle">작지만 강한, 믿을 수 있는 개발 파트너</p>
    </header>

    <section class="intro">
      <h2>안녕하세요, Ethan Dev Studio의 대표 Ethan입니다.</h2>
      <p>
        저희는 스타트업, 개인 창업자, 중소기업 고객을 위한 맞춤형 웹 및 모바일 솔루션을 제공합니다.<br />
        사용자 경험과 비즈니스 목적을 동시에 고려하며, 기획부터 디자인, 개발, 배포, 운영까지 전 과정을 함께합니다.
      </p>
    </section>

    <section class="philosophy">
      <h3>개발 철학</h3>
      <ul>
        <li>빠른 피드백과 유연한 대응</li>
        <li>신뢰 기반의 협업</li>
        <li>고객의 목적을 기술로 완성</li>
      </ul>
      <p>
        단순히 기능을 만드는 것이 아닌, 고객의 목적을 기술로 완성하는 것이 저희의 개발 철학입니다.
      </p>
    </section>

    <section class="services">
      <h3>주요 개발 영역</h3>
      <ul>
        <li>Vue 기반의 웹 프론트엔드</li>
        <li>Flutter 모바일 앱</li>
        <li>Node.js, Go 기반의 백엔드 시스템</li>
        <li>Firebase, Supabase, PostgreSQL 등 클라우드/DB 기술</li>
      </ul>
    </section>

    <section class="info">
      <h3>회사 정보</h3>
      <ul>
        <li><strong>회사명:</strong> Ethan Dev Studio</li>
        <li><strong>대표:</strong> Ethan</li>
        <li><strong>설립:</strong> 2023년</li>
        <li><strong>형태:</strong> 1인 개발 스튜디오</li>
        <li><strong>기술 스택:</strong> Vue, Flutter, Node.js, Go, Firebase, PostgreSQL</li>
        <li><strong>위치:</strong> 서울 (온라인 협업 중심)</li>
        <li><strong>연락처:</strong> <a href="mailto:devethanyoon@gmail.com">devethanyoon@gmail.com</a></li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Noto Sans KR', Arial, sans-serif;
  color: #f5f6fa;
  background: #181c20;
  border-radius: 12px;
  box-shadow: 0 2px 16px #0006;
}
.header {
  text-align: center;
  margin-bottom: 2rem;
}
.logo {
  margin-bottom: 1rem;
}
.subtitle {
  color: #4de2c7;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
.intro, .philosophy, .services, .info {
  margin-bottom: 2rem;
}
h1 {
  font-size: 2.2rem;
  margin: 0.5rem 0 0.2rem 0;
  color: #fff;
}
h2 {
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  color: #e0e6ed;
}
h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #4de2c7;
}
ul {
  padding-left: 1.2rem;
}
li {
  margin-bottom: 0.3rem;
}
a {
  color: #4de2c7;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
body {
  background: #101215;
}
</style>
