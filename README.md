# Vue3 Vite Boilerplate

- Vue3
  - vue-router@4
  - pinia@2+
- TypeScript@4.5.4
- Vite
- Sass
  - tailwindcss
  - flowbite
- ESLint
- Prettier
- Vitest

## Recommended IDE Setup

- VS Code
  - Setting
    - [x] Format on Save
- VS Code Plugins
  - Volar
  - ESLint
  - Prettier - Code formatter
  - Code Spell Checker
  - Tailwind Css IntelliSense

## Project Plugins

- axios
- lodash
- uuid
- dayjs
- vueuse

## Convention

### 파일명, 클래스, 타입, 인터페이스 등

영어의 복수형을 쓰면, `s, es, f -> v` 등 변수가 많고 다양함.
또 `news` 와 같이 이미 복수형 단어일 경우 또한 표현하기 어려움.
따라서 아래와 같은 어미를 붙여 사용해 네이밍 컨벤션 통일.

- `List`: 목록, get method
- `ListItem`: 목록의 하위 아이템
- `Create`: 생성, post method
- `Detail`: 상세, get method
- `Update`: 수정, put/patch method
- `Delete`: 삭제, delete method
