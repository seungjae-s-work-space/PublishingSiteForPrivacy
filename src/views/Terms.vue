<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const appId = computed(() => route.params.appId)

const termsData = {
  gukitso: {
    title: '난임톡톡 서비스 이용약관',
    lastUpdated: '2025년 2월 4일',
    effectiveDate: '2025년 3월 2일',
    company: '아기성공',
    service: '난임톡톡',
    email: 'devethanyoon@gmail.com'
  }
}

const terms = computed(() => termsData[appId.value] || null)
</script>

<template>
  <div class="terms-container" v-if="terms">
    <header class="terms-header">
      <h1>{{ terms.title }}</h1>
      <p class="last-updated">최종 수정일: {{ terms.lastUpdated }}</p>
      <router-link to="/" class="back-home">홈으로</router-link>
    </header>

    <div class="terms-content">
      <section class="terms-section">
        <h2>제1조 (목적)</h2>
        <p>본 약관은 {{ terms.company }}(이하 "회사")이 제공하는 {{ terms.service }} 애플리케이션(이하 "서비스")의 이용 조건 및 절차, 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
      </section>

      <section class="terms-section">
        <h2>제2조 (서비스의 내용)</h2>
        <p>1. 본 서비스는 난임 관련 정보 제공 및 전문 상담 서비스를 제공합니다.</p>
        <p>2. 서비스의 주요 기능은 다음과 같습니다:</p>
        <ul>
          <li>난임 관련 정보 콘텐츠 열람</li>
          <li>전문 상담사와의 1:1 채팅 상담</li>
          <li>난임 관련 뉴스 및 영상 콘텐츠 제공</li>
        </ul>
      </section>

      <section class="terms-section">
        <h2>제3조 (의료 서비스 면책)</h2>
        <p>1. 본 서비스에서 제공하는 모든 정보와 상담 내용은 일반적인 정보 제공 목적으로만 제공됩니다.</p>
        <p>2. 본 서비스는 의료 서비스가 아니며, 의사의 진료, 진단 또는 치료를 대체하지 않습니다.</p>
        <p>3. 건강 관련 결정을 내리기 전에 반드시 자격을 갖춘 의료 전문가와 상담하시기 바랍니다.</p>
        <p>4. 회사는 서비스를 통해 제공된 정보에 기반한 이용자의 결정에 대해 책임을 지지 않습니다.</p>
      </section>

      <section class="terms-section">
        <h2>제4조 (구독 서비스)</h2>
        <p>1. 본 서비스는 유료 구독 서비스를 제공합니다.</p>
        <p>2. 구독 상품의 종류 및 가격:</p>
        <ul>
          <li>월간 이용권: 1개월, ₩2,900</li>
          <li>6개월 이용권: 6개월, ₩14,900</li>
          <li>12개월 이용권: 12개월, ₩19,900</li>
        </ul>
        <p>3. 구독 기간 동안 전문 상담 서비스를 무제한으로 이용할 수 있습니다.</p>
      </section>

      <section class="terms-section">
        <h2>제5조 (결제)</h2>
        <p>1. 구독 서비스의 결제는 Apple App Store를 통해 처리됩니다.</p>
        <p>2. 결제 금액은 구독 상품 선택 시 확인할 수 있으며, 결제 시점에 등록된 결제 수단으로 청구됩니다.</p>
        <p>3. 모든 가격은 대한민국 원화(KRW) 기준이며, 세금이 포함된 금액입니다.</p>
      </section>

      <section class="terms-section">
        <h2>제6조 (구독 갱신 및 해지)</h2>
        <p>1. 구독은 자동으로 갱신되지 않습니다. 구독 기간 만료 후 서비스를 계속 이용하시려면 다시 구독해 주세요.</p>
        <p>2. 구독 기간 중 해지를 원하시는 경우, 남은 기간 동안 서비스를 계속 이용하실 수 있습니다.</p>
        <p>3. 구독 관리 및 해지는 App Store 계정 설정에서 하실 수 있습니다.</p>
      </section>

      <section class="terms-section">
        <h2>제7조 (환불 정책)</h2>
        <p>1. 디지털 콘텐츠의 특성상, 구독 시작 후에는 환불이 제한됩니다.</p>
        <p>2. 환불은 Apple의 환불 정책에 따라 처리됩니다.</p>
        <p>3. 환불을 요청하시려면 Apple App Store를 통해 직접 요청해 주세요.</p>
        <p>4. 기술적 문제로 인해 서비스를 전혀 이용하지 못한 경우, 고객센터로 문의해 주시면 검토 후 처리해 드립니다.</p>
      </section>

      <section class="terms-section">
        <h2>제8조 (이용자의 의무)</h2>
        <p>1. 이용자는 서비스 이용 시 다음 행위를 하여서는 안 됩니다:</p>
        <ul>
          <li>타인의 정보를 도용하는 행위</li>
          <li>서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 복제, 배포하는 행위</li>
          <li>회사 및 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
          <li>기타 관련 법령에 위배되는 행위</li>
        </ul>
      </section>

      <section class="terms-section">
        <h2>제9조 (서비스의 변경 및 중단)</h2>
        <p>1. 회사는 서비스의 내용을 변경하거나 중단할 수 있으며, 이 경우 사전에 공지합니다.</p>
        <p>2. 천재지변, 시스템 장애 등 불가항력적인 사유로 서비스가 중단될 수 있습니다.</p>
      </section>

      <section class="terms-section">
        <h2>제10조 (개인정보 보호)</h2>
        <p>이용자의 개인정보는 회사의 개인정보 처리방침에 따라 보호됩니다. 자세한 내용은 <router-link :to="`/privacy/${appId}`">개인정보 처리방침</router-link>을 참조해 주세요.</p>
      </section>

      <section class="terms-section">
        <h2>제11조 (약관의 변경)</h2>
        <p>1. 회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공지합니다.</p>
        <p>2. 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.</p>
      </section>

      <section class="terms-section">
        <h2>제12조 (준거법 및 관할법원)</h2>
        <p>1. 본 약관의 해석 및 분쟁 해결에는 대한민국 법률을 적용합니다.</p>
        <p>2. 서비스 이용과 관련하여 분쟁이 발생한 경우, 회사 소재지 관할 법원을 전속 관할 법원으로 합니다.</p>
      </section>

      <section class="terms-section">
        <h2>제13조 (문의)</h2>
        <p>서비스 이용에 관한 문의사항은 아래 연락처로 문의해 주세요.</p>
        <p>이메일: <a :href="`mailto:${terms.email}`">{{ terms.email }}</a></p>
      </section>

      <section class="terms-section">
        <h2>부칙</h2>
        <p>본 약관은 {{ terms.effectiveDate }}부터 시행됩니다.</p>
      </section>
    </div>
  </div>

  <div class="not-found" v-else>
    <h1>이용약관을 찾을 수 없습니다</h1>
    <p>요청하신 앱({{ appId }})의 이용약관이 존재하지 않습니다.</p>
    <router-link to="/" class="back-home">홈으로</router-link>
  </div>
</template>

<style scoped>
.terms-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #0c0f14 0%, #1a1f26 100%);
  color: #f5f6fa;
}

.terms-header {
  text-align: center;
  padding: 2rem 0;
  border-bottom: 2px solid rgba(77, 226, 199, 0.2);
  margin-bottom: 2rem;
}

.terms-header h1 {
  font-size: 2rem;
  color: #4de2c7;
  margin-bottom: 0.5rem;
}

.last-updated {
  color: #b8c5d6;
  font-size: 0.95rem;
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

.terms-content {
  line-height: 1.8;
}

.terms-section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(77, 226, 199, 0.1);
}

.terms-section:last-child {
  border-bottom: none;
}

.terms-section h2 {
  font-size: 1.3rem;
  color: #4de2c7;
  margin-bottom: 1rem;
}

.terms-section p {
  margin-bottom: 0.8rem;
  color: #e0e0e0;
}

.terms-section ul {
  margin: 0.8rem 0 0.8rem 1.5rem;
  color: #e0e0e0;
}

.terms-section li {
  margin-bottom: 0.5rem;
}

.terms-section a {
  color: #4de2c7;
  text-decoration: none;
}

.terms-section a:hover {
  text-decoration: underline;
}

.not-found {
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0c0f14 0%, #1a1f26 100%);
  color: #f5f6fa;
}

.not-found h1 {
  color: #4de2c7;
  margin-bottom: 1rem;
}

.not-found p {
  color: #b8c5d6;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .terms-header h1 {
    font-size: 1.6rem;
  }

  .terms-section h2 {
    font-size: 1.1rem;
  }
}
</style>
