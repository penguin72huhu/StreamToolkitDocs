---
sidebar_position: 3
---

# PayPal 설정

Stream Toolkit은 Webhook을 통해 PayPal 결제 알림을 수신하므로 API 키를 입력할 필요가 없습니다.

## 1단계: Stream Toolkit에서 Webhook URL 가져오기

1. Stream Toolkit을 엽니다
2. 왼쪽 아래 메뉴에서 **설정**을 클릭합니다
3. **후원 플랫폼 연동** → **PayPal**을 찾습니다
4. **주소 받기** 버튼을 클릭합니다
5. 주소가 생성되면 **복사** 버튼을 클릭합니다

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning 주의
Webhook 주소에는 전용 token이 포함되어 있으므로 공개적으로 공유하지 마십시오. 유출이 의심되는 경우, **주소 다시 받기**를 클릭하여 새 주소를 발급받을 수 있습니다 (기존 주소는 즉시 무효화됩니다).
:::

## 2단계: PayPal 개발자 대시보드 로그인

1. [PayPal Developer](https://developer.paypal.com)로 이동합니다
2. 오른쪽 상단의 **Log in to Dashboard**를 클릭하고 PayPal 계정으로 로그인합니다
3. 로그인 후 오른쪽 상단의 **`</>`** 버튼을 클릭하여 개발자 백엔드로 진입합니다

![PayPal developer button at top right](./paypal-img/step2.png)

## 3단계: Live 모드로 전환하기

왼쪽 메뉴 상단의 모드 스위치가 **Live**로 설정되어 있는지 확인합니다. **Sandbox**(테스트 모드)로 표시된 경우에만 전환하면 됩니다.

1. 왼쪽 메뉴 상단의 토글 스위치를 찾습니다
2. 클릭하여 **Live**로 전환합니다

![Sandbox/Live toggle](./paypal-img/step3.png)

## 4단계: Webhooks 설정으로 이동하기

1. 왼쪽 메뉴에서 **Apps & Credentials**를 클릭합니다

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. 페이지에서 **Manage Webhooks** 버튼을 찾아 클릭하여 진입합니다

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. 페이지 가장 아래로 스크롤하여 **Add Webhook**을 클릭합니다

   ![Add Webhook button](./paypal-img/step4-3.png)

## 5단계: Webhook 추가하기

1. 방금 Stream Toolkit에서 복사한 주소를 **Webhook URL** 필드에 붙여넣습니다
2. **Event types**에서 **Payments & payouts** 카테고리를 찾아 다음을 체크합니다:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. **Save**를 클릭합니다

{/* TODO: 截圖 — Add Webhook 設定頁 */}

설정이 완료되면 시청자가 PayPal을 통해 결제할 때 Stream Toolkit이 실시간으로 알림을 수신합니다.

## 자주 묻는 질문

**Q: Sandbox 모드에서 테스트할 수 있나요?**
네, 가능합니다. Sandbox 모드에서도 동일하게 Webhook을 추가하여 결제 프로세스를 테스트할 수 있으며, 실제 금액은 결제되지 않습니다.

**Q: Webhook 주소를 다시 받은 후에는 어떻게 해야 하나요?**
PayPal 개발자 대시보드로 돌아가서 기존 Webhook 주소를 새 주소로 변경해야 합니다.
