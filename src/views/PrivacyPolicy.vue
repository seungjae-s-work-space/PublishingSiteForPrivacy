<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 앱 정보 매핑 (a007 ~ a028 + insta-unfollower-checker + gukitso)
const appInfoMap = {
  'gukitso': { name: 'Infertility Info & Consultation', nameKo: '골통주부의 난임&상담톡', category: '정보/상담', isMedical: true },
  'insta-unfollower-checker': { name: 'Insta Unfollower Checker', nameKo: '인스타 언팔 체커', category: 'SNS/유틸리티', isInstagram: true },
  'a007': { name: 'Battery Saver Pro', nameKo: '배터리 세이버 프로', category: '배터리/유틸리티' },
  'a008': { name: 'Battery Health Check', nameKo: '배터리 건강 체크', category: '배터리/유틸리티' },
  'a009': { name: 'Charging Alarm', nameKo: '충전 알람', category: '배터리/유틸리티' },
  'a010': { name: 'Battery Widget', nameKo: '배터리 위젯', category: '배터리/유틸리티' },
  'a011': { name: 'Battery Usage Tracker', nameKo: '배터리 사용량 트래커', category: '배터리/유틸리티' },
  'a012': { name: 'Fast Charge Monitor', nameKo: '고속 충전 모니터', category: '배터리/유틸리티' },
  'a013': { name: 'Battery Temperature', nameKo: '배터리 온도', category: '배터리/유틸리티' },
  'a014': { name: 'Low Battery Alert', nameKo: '저전력 알림', category: '배터리/유틸리티' },
  'a015': { name: 'Battery History', nameKo: '배터리 히스토리', category: '배터리/유틸리티' },
  'a016': { name: 'Battery Optimizer', nameKo: '배터리 최적화', category: '배터리/유틸리티' },
  'a017': { name: 'Charging Animation', nameKo: '충전 애니메이션', category: '배터리/유틸리티' },
  'a018': { name: 'Battery Percentage', nameKo: '배터리 퍼센트', category: '배터리/유틸리티' },
  'a019': { name: 'Battery Comparison', nameKo: '배터리 비교', category: '배터리/유틸리티' },
  'a020': { name: 'Eco Battery Mode', nameKo: '에코 배터리 모드', category: '배터리/유틸리티' },
  'a021': { name: 'PDF Merger', nameKo: 'PDF 병합', category: '문서/유틸리티' },
  'a022': { name: 'PDF Splitter', nameKo: 'PDF 분할', category: '문서/유틸리티' },
  'a023': { name: 'PDF Compressor', nameKo: 'PDF 압축', category: '문서/유틸리티' },
  'a024': { name: 'Image to PDF', nameKo: '이미지 to PDF', category: '문서/유틸리티' },
  'a025': { name: 'Image Converter', nameKo: '이미지 변환기', category: '문서/유틸리티' },
  'a026': { name: 'Scan to PDF', nameKo: '스캔 to PDF', category: '문서/유틸리티' },
  'a027': { name: 'Document Viewer', nameKo: '문서 뷰어', category: '문서/유틸리티' },
  'a028': { name: 'ZIP Opener', nameKo: 'ZIP 오프너', category: '파일/유틸리티' }
}

const appId = computed(() => route.params.appId)
const appInfo = computed(() => appInfoMap[appId.value] || { name: 'Unknown App', nameKo: '알 수 없는 앱', category: '기타' })
const isInstagramApp = computed(() => appInfo.value.isInstagram === true)
const isMedicalApp = computed(() => appInfo.value.isMedical === true)
const currentDate = new Date().toISOString().split('T')[0]
const effectiveDate = '2025-01-01'
</script>

<template>
  <div class="privacy-policy-container">
    <header class="policy-header">
      <h1>개인정보처리방침</h1>
      <h2>Privacy Policy</h2>
      <div class="app-info-badge">
        <span class="app-name">{{ appInfo.name }}</span>
        <span class="app-name-ko">({{ appInfo.nameKo }})</span>
      </div>
    </header>

    <div class="policy-content">
      <section class="policy-section">
        <h3>1. 개인정보의 처리 목적</h3>
        <p>
          <strong>{{ appInfo.name }}</strong> (이하 "앱")은 다음의 목적을 위하여 개인정보를 처리합니다.
          처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는
          별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
        </p>
        <ul>
          <li>앱 서비스 제공 및 운영</li>
          <li>서비스 이용 통계 및 분석</li>
          <li>광고 서비스 제공 (Google AdMob)</li>
          <li>서비스 개선 및 신규 서비스 개발</li>
        </ul>
      </section>

      <section class="policy-section">
        <h3>2. 개인정보의 처리 및 보유기간</h3>
        <p>
          앱은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은
          개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
        </p>
        <ul>
          <li>서비스 이용 기록: 앱 삭제 시까지</li>
          <li>광고 식별자: 사용자 재설정 또는 앱 삭제 시까지</li>
        </ul>
      </section>

      <section class="policy-section">
        <h3>3. 처리하는 개인정보 항목</h3>
        <p>앱은 다음의 개인정보 항목을 처리하고 있습니다:</p>
        <ul>
          <li><strong>자동 수집 항목:</strong> 기기 정보 (기기 모델, OS 버전), 앱 사용 통계, 광고 식별자 (ADID/IDFA)</li>
          <li><strong>선택 수집 항목:</strong> 없음</li>
        </ul>
        <p class="note">
          * 본 앱은 회원가입을 요구하지 않으며, 이름, 이메일, 전화번호 등의 개인 식별 정보를 수집하지 않습니다.
        </p>
      </section>

      <!-- 정보/상담 앱 전용 섹션 -->
      <section v-if="isMedicalApp" class="policy-section medical-section">
        <h3>💬 난임 정보 제공 및 상담 서비스 관련 개인정보 처리 (중요)</h3>
        <p>
          본 앱은 난임 관련 정보 제공 및 상담 서비스를 제공하며, 다음과 같은 방식으로 개인정보를 처리합니다:
        </p>

        <h4>3-1. 회원 정보</h4>
        <ul>
          <li>이메일 주소 (로그인 및 계정 식별용)</li>
          <li>닉네임 (서비스 내 표시용)</li>
          <li>프로필 이미지 (선택)</li>
        </ul>

        <h4>3-2. 상담 내용</h4>
        <ul>
          <li>사용자가 작성한 상담 질문 내용</li>
          <li>전문가의 답변 내용</li>
          <li>상담 이력 및 기록</li>
        </ul>

        <h4>3-3. 상담 내용 관련 정보 처리</h4>
        <p class="note important">
          ⚠️ <strong>중요:</strong> 사용자가 직접 입력한 상담 관련 내용은 정보 제공 및 상담 목적으로만 사용되며,
          사용자 동의 없이 제3자에게 제공되지 않습니다. 본 앱은 의료 행위를 제공하지 않으며, 정보 제공 목적의 서비스입니다.
        </p>

        <h4>3-4. 데이터 저장 및 보안</h4>
        <ul>
          <li>모든 데이터는 Firebase (Google Cloud) 서버에 암호화되어 저장됩니다.</li>
          <li>상담 내용은 담당 전문가와 사용자만 열람할 수 있습니다.</li>
          <li>관리자는 서비스 운영 목적으로 데이터에 접근할 수 있습니다.</li>
        </ul>

        <h4>3-5. 구독 및 결제 정보</h4>
        <ul>
          <li>인앱 결제는 Google Play / App Store를 통해 처리됩니다.</li>
          <li>결제 정보(카드번호 등)는 본 앱에서 직접 수집하지 않습니다.</li>
          <li>구독 상태 및 만료일 정보만 저장됩니다.</li>
        </ul>

        <h4>3-6. 데이터 보유 기간</h4>
        <ul>
          <li>회원 정보: 회원 탈퇴 시까지</li>
          <li>상담 내역: 회원 탈퇴 후 30일 이내 삭제</li>
          <li>결제 기록: 관련 법령에 따라 5년간 보관</li>
        </ul>
      </section>

      <!-- Instagram 전용 섹션 -->
      <section v-if="isInstagramApp" class="policy-section instagram-section">
        <h3>📱 Instagram 데이터 수집 및 처리 (중요)</h3>
        <p>
          본 앱은 Instagram 팔로워/팔로잉 분석 기능을 제공하기 위해 다음과 같은 방식으로 데이터를 처리합니다:
        </p>

        <h4>3-1. Instagram 로그인 방식</h4>
        <ul>
          <li>본 앱은 Instagram 공식 웹 로그인 페이지를 WebView로 표시합니다.</li>
          <li>사용자는 Instagram 공식 페이지에서 직접 로그인합니다.</li>
          <li><strong>본 앱은 사용자의 Instagram 아이디와 비밀번호를 직접 수집하거나 저장하지 않습니다.</strong></li>
        </ul>

        <h4>3-2. 수집하는 Instagram 데이터</h4>
        <ul>
          <li>Instagram 세션 쿠키 (로그인 상태 유지 목적)</li>
          <li>팔로워 목록 (사용자명, 프로필 정보)</li>
          <li>팔로잉 목록 (사용자명, 프로필 정보)</li>
        </ul>

        <h4>3-3. 데이터 저장 위치</h4>
        <p class="note important">
          ⚠️ <strong>중요:</strong> 모든 Instagram 관련 데이터는 사용자의 기기 내부에만 저장됩니다.
          외부 서버로 전송되거나 제3자와 공유되지 않습니다.
        </p>

        <h4>3-4. 데이터 보유 기간</h4>
        <ul>
          <li>세션 쿠키: 앱 내 "새로고침" 또는 앱 삭제 시 즉시 삭제</li>
          <li>팔로워/팔로잉 데이터: 앱 삭제 시 자동 삭제</li>
          <li>사용자가 앱 내에서 언제든지 데이터를 삭제할 수 있습니다.</li>
        </ul>

        <h4>3-5. Instagram 계정 보안</h4>
        <ul>
          <li>본 앱은 Instagram의 보안 로그인 페이지를 사용합니다.</li>
          <li>로그인 정보는 Instagram 서버에서만 처리됩니다.</li>
          <li>앱 개발자는 사용자의 Instagram 로그인 자격 증명에 접근할 수 없습니다.</li>
        </ul>
      </section>

      <section class="policy-section">
        <h3>4. 개인정보의 제3자 제공</h3>
        <p>
          앱은 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
          다만, 아래의 경우에는 예외로 합니다:
        </p>
        <ul>
          <li>이용자가 사전에 동의한 경우</li>
          <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
        </ul>
      </section>

      <section class="policy-section">
        <h3>5. 개인정보 처리의 위탁</h3>
        <p>앱은 서비스 향상을 위해 아래와 같이 개인정보 처리업무를 위탁하고 있습니다:</p>
        <table class="info-table">
          <thead>
            <tr>
              <th>위탁받는 자</th>
              <th>위탁업무 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google LLC (AdMob)</td>
              <td>모바일 광고 서비스 제공</td>
            </tr>
            <tr>
              <td>Google LLC (Firebase)</td>
              <td>앱 분석 및 오류 보고</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="policy-section">
        <h3>6. 정보주체의 권리·의무 및 행사방법</h3>
        <p>이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:</p>
        <ul>
          <li>개인정보 열람 요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제 요구</li>
          <li>처리정지 요구</li>
        </ul>
        <p>
          위 권리 행사는 아래 연락처를 통해 서면, 이메일로 하실 수 있으며,
          지체 없이 조치하겠습니다.
        </p>
      </section>

      <section class="policy-section">
        <h3>7. 개인정보의 파기</h3>
        <p>
          앱은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는
          지체없이 해당 개인정보를 파기합니다.
        </p>
        <ul>
          <li><strong>파기절차:</strong> 불필요한 개인정보는 별도의 DB로 옮겨져 일정 기간 저장된 후 파기됩니다.</li>
          <li><strong>파기방법:</strong> 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
        </ul>
      </section>

      <section class="policy-section">
        <h3>8. 개인정보의 안전성 확보 조치</h3>
        <p>앱은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
        <ul>
          <li>개인정보의 암호화</li>
          <li>해킹 등에 대비한 기술적 대책</li>
          <li>개인정보에 대한 접근 제한</li>
        </ul>
      </section>

      <section class="policy-section">
        <h3>9. 광고성 정보 및 맞춤형 광고</h3>
        <p>
          본 앱은 Google AdMob을 통해 광고를 게재합니다.
          AdMob은 사용자의 광고 식별자를 사용하여 관심 기반 광고를 제공할 수 있습니다.
        </p>
        <p>맞춤형 광고 수신을 원하지 않는 경우:</p>
        <ul>
          <li><strong>Android:</strong> 설정 → Google → 광고 → 광고 맞춤설정 선택 해제</li>
          <li><strong>iOS:</strong> 설정 → 개인 정보 보호 → Apple 광고 → 맞춤형 광고 끄기</li>
        </ul>
      </section>

      <section class="policy-section">
        <h3>10. 개인정보 보호책임자</h3>
        <table class="info-table">
          <tbody>
            <tr>
              <th>담당자</th>
              <td>DevStudio 개인정보보호 담당</td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>privacy@devstudio.com</td>
            </tr>
          </tbody>
        </table>
        <p class="note">
          기타 개인정보 침해에 대한 신고나 상담이 필요한 경우에는 아래 기관에 문의하시기 바랍니다:
        </p>
        <ul>
          <li>개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)</li>
          <li>개인정보분쟁조정위원회 (www.kopico.go.kr / 1833-6972)</li>
          <li>대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)</li>
          <li>경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)</li>
        </ul>
      </section>

      <section class="policy-section">
        <h3>11. 개인정보처리방침의 변경</h3>
        <p>
          이 개인정보처리방침은 {{ effectiveDate }}부터 적용되며,
          법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는
          변경사항의 시행 7일 전부터 앱 공지사항을 통하여 고지할 것입니다.
        </p>
      </section>

      <!-- English Version -->
      <div class="language-divider">
        <span>English Version</span>
      </div>

      <section class="policy-section english">
        <h3>1. Purpose of Processing Personal Information</h3>
        <p>
          <strong>{{ appInfo.name }}</strong> (hereinafter "the App") processes personal information for the following purposes:
        </p>
        <ul>
          <li>Providing and operating app services</li>
          <li>Service usage statistics and analysis</li>
          <li>Providing advertising services (Google AdMob)</li>
          <li>Service improvement and new service development</li>
        </ul>
      </section>

      <section class="policy-section english">
        <h3>2. Personal Information Collected</h3>
        <p>The App collects the following information:</p>
        <ul>
          <li><strong>Automatically collected:</strong> Device information (model, OS version), app usage statistics, advertising identifier (ADID/IDFA)</li>
          <li><strong>Optionally collected:</strong> None</li>
        </ul>
        <p class="note">
          * This app does not require registration and does not collect personally identifiable information such as name, email, or phone number.
        </p>
      </section>

      <!-- Info/Consultation app-specific section (English) -->
      <section v-if="isMedicalApp" class="policy-section english medical-section">
        <h3>💬 Infertility Information & Consultation Service - Personal Information Processing (Important)</h3>
        <p>
          This app provides infertility-related information and consultation services, and processes personal information as follows:
        </p>

        <h4>2-1. Member Information</h4>
        <ul>
          <li>Email address (for login and account identification)</li>
          <li>Nickname (for display within the service)</li>
          <li>Profile image (optional)</li>
        </ul>

        <h4>2-2. Consultation Content</h4>
        <ul>
          <li>Consultation questions written by users</li>
          <li>Expert responses</li>
          <li>Consultation history and records</li>
        </ul>

        <h4>2-3. Consultation Content Processing</h4>
        <p class="note important">
          ⚠️ <strong>Important:</strong> Consultation content entered by users is used only for information provision and consultation purposes,
          and will not be provided to third parties without user consent. This app does not provide medical services; it is an information service.
        </p>

        <h4>2-4. Data Storage and Security</h4>
        <ul>
          <li>All data is encrypted and stored on Firebase (Google Cloud) servers.</li>
          <li>Consultation content can only be viewed by the assigned expert and the user.</li>
          <li>Administrators may access data for service operation purposes.</li>
        </ul>

        <h4>2-5. Subscription and Payment Information</h4>
        <ul>
          <li>In-app payments are processed through Google Play / App Store.</li>
          <li>Payment information (card numbers, etc.) is not directly collected by this app.</li>
          <li>Only subscription status and expiration date information is stored.</li>
        </ul>

        <h4>2-6. Data Retention Period</h4>
        <ul>
          <li>Member information: Until account deletion</li>
          <li>Consultation history: Deleted within 30 days after account deletion</li>
          <li>Payment records: Retained for 5 years in accordance with relevant laws</li>
        </ul>
      </section>

      <!-- Instagram-specific section (English) -->
      <section v-if="isInstagramApp" class="policy-section english instagram-section">
        <h3>📱 Instagram Data Collection and Processing (Important)</h3>
        <p>
          This app processes data in the following manner to provide Instagram follower/following analysis features:
        </p>

        <h4>2-1. Instagram Login Method</h4>
        <ul>
          <li>This app displays the official Instagram web login page via WebView.</li>
          <li>Users log in directly on the official Instagram page.</li>
          <li><strong>This app does NOT collect or store your Instagram username or password directly.</strong></li>
        </ul>

        <h4>2-2. Instagram Data Collected</h4>
        <ul>
          <li>Instagram session cookies (for maintaining login state)</li>
          <li>Follower list (usernames, profile information)</li>
          <li>Following list (usernames, profile information)</li>
        </ul>

        <h4>2-3. Data Storage Location</h4>
        <p class="note important">
          ⚠️ <strong>Important:</strong> All Instagram-related data is stored ONLY on the user's device.
          No data is transmitted to external servers or shared with third parties.
        </p>

        <h4>2-4. Data Retention Period</h4>
        <ul>
          <li>Session cookies: Deleted immediately upon "Refresh" in-app or app uninstallation</li>
          <li>Follower/Following data: Automatically deleted when app is uninstalled</li>
          <li>Users can delete their data at any time within the app.</li>
        </ul>

        <h4>2-5. Instagram Account Security</h4>
        <ul>
          <li>This app uses Instagram's secure login page.</li>
          <li>Login credentials are processed only by Instagram servers.</li>
          <li>The app developer cannot access users' Instagram login credentials.</li>
        </ul>

        <h4>2-6. Disclaimer</h4>
        <p class="note">
          This app is not affiliated with, authorized, maintained, sponsored, or endorsed by Instagram or Meta Platforms, Inc.
          Use of this app is at your own discretion and risk.
        </p>
      </section>

      <section class="policy-section english">
        <h3>3. Third-Party Services</h3>
        <p>The App uses the following third-party services:</p>
        <ul>
          <li><strong>Google AdMob:</strong> Mobile advertising</li>
          <li><strong>Google Firebase:</strong> App analytics and crash reporting</li>
        </ul>
      </section>

      <section class="policy-section english">
        <h3>4. User Rights</h3>
        <p>Users have the right to:</p>
        <ul>
          <li>Request access to their personal information</li>
          <li>Request correction of errors</li>
          <li>Request deletion of their data</li>
          <li>Opt-out of personalized advertising</li>
        </ul>
      </section>

      <section class="policy-section english">
        <h3>5. Contact Information</h3>
        <p>
          For privacy-related inquiries, please contact us at: <strong>privacy@devstudio.com</strong>
        </p>
      </section>

      <section class="policy-section english">
        <h3>6. Changes to This Policy</h3>
        <p>
          This Privacy Policy is effective as of {{ effectiveDate }}.
          We will notify users of any changes through the app at least 7 days before they take effect.
        </p>
      </section>
    </div>

    <footer class="policy-footer">
      <p>Last Updated: {{ effectiveDate }}</p>
      <p>App ID: {{ appId }}</p>
      <router-link to="/" class="back-home">Back to Home</router-link>
    </footer>
  </div>
</template>

<style scoped>
.privacy-policy-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #333;
  background: #fff;
  line-height: 1.8;
}

.policy-header {
  text-align: center;
  padding: 2rem 0 3rem;
  border-bottom: 3px solid #4de2c7;
  margin-bottom: 2rem;
}

.policy-header h1 {
  font-size: 2.2rem;
  color: #1a1a2e;
  margin-bottom: 0.3rem;
}

.policy-header h2 {
  font-size: 1.3rem;
  color: #666;
  font-weight: 400;
  margin-bottom: 1.5rem;
}

.app-info-badge {
  display: inline-block;
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  color: #fff;
}

.app-name {
  font-weight: bold;
  font-size: 1.1rem;
}

.app-name-ko {
  font-size: 0.95rem;
  opacity: 0.9;
}

.policy-content {
  padding: 1rem 0;
}

.policy-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #4de2c7;
}

.policy-section h3 {
  font-size: 1.2rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.policy-section p {
  margin-bottom: 1rem;
  color: #444;
}

.policy-section ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.policy-section li {
  margin-bottom: 0.5rem;
  color: #555;
}

.policy-section.english {
  background: #f0f7ff;
  border-left-color: #4a90d9;
}

.policy-section.english h3 {
  color: #2c5282;
}

/* 의료/건강 앱 전용 스타일 */
.policy-section.medical-section {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  border-left-color: #16a34a;
  border: 2px solid #16a34a;
}

.policy-section.medical-section h3 {
  color: #16a34a;
  font-size: 1.3rem;
}

.policy-section.medical-section h4 {
  color: #15803d;
  font-size: 1.05rem;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  padding-left: 0.5rem;
  border-left: 3px solid #15803d;
}

.policy-section.medical-section.english {
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  border-left-color: #0284c7;
  border: 2px solid #0284c7;
}

.policy-section.medical-section.english h3 {
  color: #0284c7;
}

.policy-section.medical-section.english h4 {
  color: #0369a1;
  border-left-color: #0369a1;
}

/* Instagram 전용 스타일 */
.policy-section.instagram-section {
  background: linear-gradient(135deg, #fdf2f8, #fce7f3);
  border-left-color: #e1306c;
  border: 2px solid #e1306c;
}

.policy-section.instagram-section h3 {
  color: #e1306c;
  font-size: 1.3rem;
}

.policy-section.instagram-section h4 {
  color: #833ab4;
  font-size: 1.05rem;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  padding-left: 0.5rem;
  border-left: 3px solid #833ab4;
}

.policy-section.instagram-section.english {
  background: linear-gradient(135deg, #f0f4ff, #e8ecff);
  border-left-color: #4a90d9;
  border: 2px solid #4a90d9;
}

.policy-section.instagram-section.english h3 {
  color: #4a90d9;
}

.policy-section.instagram-section.english h4 {
  color: #2c5282;
  border-left-color: #2c5282;
}

.note.important {
  background: #fee2e2;
  border-left-color: #ef4444;
  font-weight: 500;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.info-table th,
.info-table td {
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  text-align: left;
}

.info-table th {
  background: #e8f5e9;
  color: #2e7d32;
  font-weight: 600;
  width: 30%;
}

.info-table td {
  background: #fff;
}

.note {
  font-size: 0.9rem;
  color: #666;
  background: #fff3cd;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border-left: 3px solid #ffc107;
}

.language-divider {
  text-align: center;
  margin: 3rem 0 2rem;
  position: relative;
}

.language-divider::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #4a90d9, transparent);
}

.language-divider span {
  background: #fff;
  padding: 0.5rem 1.5rem;
  position: relative;
  color: #4a90d9;
  font-weight: bold;
  font-size: 1.1rem;
}

.policy-footer {
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
  background: #1a1a2e;
  border-radius: 12px;
  color: #fff;
}

.policy-footer p {
  margin: 0.5rem 0;
  color: #b8c5d6;
}

.back-home {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #4de2c7, #41b89e);
  color: #1a1a2e;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: transform 0.2s, box-shadow 0.2s;
}

.back-home:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(77, 226, 199, 0.4);
}

@media (max-width: 768px) {
  .privacy-policy-container {
    padding: 1rem;
  }

  .policy-header h1 {
    font-size: 1.8rem;
  }

  .policy-section {
    padding: 1rem;
  }

  .info-table th {
    width: 40%;
  }
}
</style>
