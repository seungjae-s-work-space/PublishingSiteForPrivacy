# companywebsite-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Netlify로 배포하기

1. `vite.config.js` 파일의 base 옵션을 `/`로 설정합니다.
   ```js
   export default defineConfig({
     base: '/',
     // ...기타 설정
   })
   ```
2. 변경사항을 커밋하고 GitHub에 push합니다.
3. [Netlify](https://www.netlify.com/)에 로그인 후, 'New site from Git'을 클릭합니다.
4. GitHub 저장소를 연결합니다.
5. 빌드 명령어는 `npm run build`, publish 디렉토리는 `dist`로 설정합니다.
6. 배포가 완료되면 Netlify에서 제공하는 URL로 접속해 결과를 확인할 수 있습니다.

## Privacy Policy Pages

| App | URL |
|-----|-----|
| Insta Unfollower Checker | https://gleeful-cat-4bf6b5.netlify.app/privacy/insta-unfollower-checker/ |
