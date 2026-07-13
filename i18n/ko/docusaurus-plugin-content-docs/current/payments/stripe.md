---
sidebar_position: 3
---

# Stripe 설정

Stream Toolkit은 Webhook을 통해 Stripe 결제 알림을 수신합니다. 설정은 두 부분으로 나뉩니다. app에서 Webhook 주소를 가져오는 것과 Stripe 대시보드에서 연동을 완료하는 것입니다.

## 1단계: Stream Toolkit에서 Webhook URL 가져오기

1. Stream Toolkit을 엽니다
2. 왼쪽 아래 메뉴에서 **설정** → **후원 플랫폼 연동** → **Stripe**(클릭하여 펼치기)를 선택합니다
3. 다음과 같은 형식의 **Webhook URL**이 표시됩니다:
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. **복사** 버튼을 클릭하고, 이 주소를 임시로 저장해 둡니다

![Get webhook URL](./stripe-img/step1.png)

## 2단계: Stripe 대시보드에서 Webhook 추가하기

1. [Stripe Dashboard](https://dashboard.stripe.com)로 이동하여 계정에 로그인합니다
2. 왼쪽 아래의 **개발자** → **Webhook**을 클릭합니다

![Stripe webhook list page](./stripe-img/step2-1.png)

3. **엔드포인트 추가**를 클릭합니다

![Add destination](./stripe-img/step2-2.png)

4. 다음 정보를 입력합니다:
   - **이벤트**: `checkout.session.completed`를 검색하고 체크합니다 (이것 하나만 필요합니다)

   ![Select events](./stripe-img/step2-3.png)

   - **엔드포인트 유형**: **Webhook 엔드포인트**를 선택합니다

   ![Select destination type](./stripe-img/step2-4.png)

   - **엔드포인트 이름**: 자유롭게 입력합니다 (예: `Stream Toolkit`)
   - **엔드포인트 URL**: 1단계에서 복사한 Webhook 주소를 붙여넣습니다

   ![Enter name and URL](./stripe-img/step2-5.png)

5. **엔드포인트 추가**를 클릭합니다

## 3단계: 서명 비밀 키 입력하기

1. Webhook 생성이 완료되면 페이지에 `whsec_...` 형식의 **서명 비밀 키**가 표시됩니다
2. 이 비밀 키를 복사합니다
3. Stream Toolkit의 Stripe 설정 섹션으로 돌아갑니다
4. **Webhook 서명 비밀 키** 필드에 비밀 키를 붙여넣습니다
5. **저장**을 클릭합니다

연결 상태가 녹색으로 변하면 설정이 성공한 것입니다.

![Paste signing secret](./stripe-img/step3.png)

## 완료

설정이 완료되면 시청자가 귀하의 Stripe **Payment Link**를 통해 결제할 때 Stream Toolkit이 실시간으로 알림을 수신하고 후원을 표시합니다.

## 자주 묻는 질문

**Q: Payment Link은 어디서 만드나요?**
Stripe Dashboard → **Payment Links** → **Payment Link 만들기**로 이동하여 금액을 설정한 후 링크를 시청자에게 공유하세요.

**Q: 연결 상태가 녹색으로 변하지 않나요?**
Webhook 서명 비밀 키가 올바르게 입력 및 저장되었는지 확인하고, Stripe 대시보드의 엔드포인트 URL이 앱에 표시된 것과 정확히 일치하는지 확인하세요.
