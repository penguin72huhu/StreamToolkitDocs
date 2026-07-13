---
sidebar_position: 1
---

# YouTube API 설정

이 튜토리얼은 `스트림 하이라이트 마커` 기능에 사용되는 YouTube Data API의 **API Key** 및 **채널 ID**를 가져오는 방법을 설명합니다偏。

## YouTube Data API

### 1단계: Google Cloud Console 열기

1. [Google Cloud Console](https://console.cloud.google.com)로 이동합니다
2. Google 계정으로 로그인합니다

### 2단계: YouTube Data API v3 활성화하기

1. 상단 검색창에 `YouTube Data API v3`를 검색합니다

   ![Search YouTube Data API v3](./Youtube_API_Key_img/API_step2-1.png)

2. 검색 결과를 클릭합니다
3. **Enable**을 클릭합니다

   ![Click Enable](./Youtube_API_Key_img/API_step2-3.png)

### 3단계: API 키 생성하기

1. 왼쪽의 **Credentials**를 클릭합니다

   ![Click Credentials](./Youtube_API_Key_img/API_step3-1.png)

2. **Create credentials** → **API Key**를 선택합니다

   ![Create credentials](./Youtube_API_Key_img/API_step3-2.png)

### 4단계: API 키 설정하기

1. **Name**은 자유롭게 입력 (예: `StreamToolkit`)
2. **Select API restrictions**에서 `YouTube Data API v3`를 체크한 후 **OK**를 누릅니다

   ![Select API restrictions](./Youtube_API_Key_img/API_step4-2.png)

3. **Authenticate API calls through a service account**은 체크하지 않습니다
4. **Application restrictions**에서 **None** 선택

   ![Select None for Application restrictions](./Youtube_API_Key_img/API_step4-4.png)

5. **Create**를 클릭합니다

### 5단계: App에 입력하기

1. 가져온 API Key를 App의 **YouTube API** 필드에 붙여넣습니다

![Paste into app](./Youtube_API_Key_img/API_step5.png)

## 채널 ID

### 1단계: YouTube 설정 열기

1. [YouTube](https://www.youtube.com)로 이동합니다
2. 오른쪽 상단의 프로필 사진을 클릭합니다
3. **설정**을 선택합니다

![Open YouTube settings](./Youtube_API_Key_img/ID_step1.png)

### 2단계: 채널 ID 가져오기

1. 왼쪽 메뉴에서 **고급 설정**을 선택합니다

   ![Advanced settings](./Youtube_API_Key_img/ID_step2-1.png)

2. **채널 ID**를 복사하여 App에 붙여넣습니다

   ![Copy Channel ID](./Youtube_API_Key_img/ID_step2-2.png)

## 자주 묻는 질문

**Q: API 키에 사용량 제한이 있나요?**
네, 있습니다. YouTube Data API v3의 일일 무료 할당량은 10,000 유닛입니다. 일반적인 라이브 방송 용량으로는 초과하지 않습니다.

**Q: "API Key가 유효하지 않습니다"라는 오류가 발생하나요?**
YouTube Data API v3가 활성화되었는지, 그리고 올바른 프로젝트의 키를 사용하고 있는지 확인하세요.

**Q: 키를 공개해도 되나요?**
권장하지 않습니다. 키가 유출되어 남용될 경우, 일일 할당량이 빠르게 소진될 수 있습니다.
