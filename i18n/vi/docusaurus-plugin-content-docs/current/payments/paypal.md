---
sidebar_position: 3
---

# Cài đặt PayPal

Stream Toolkit sử dụng Webhook để nhận thông báo thanh toán từ PayPal, vì vậy không cần phải điền khóa API.

## Bước 1: Lấy URL Webhook trong Stream Toolkit

1. Mở Stream Toolkit
2. Nhấp vào **Cài đặt** ở menu phía dưới bên trái
3. Tìm **Kết nối nền tảng ủng hộ** → **PayPal**
4. Nhấp vào nút **Lấy URL**
5. Sau khi URL được tạo, nhấp vào nút **Sao chép**

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Chú ý
URL Webhook chứa token độc quyền, vui lòng không chia sẻ công khai. Nếu nghi ngờ bị rò rỉ, bạn có thể nhấp vào **Lấy lại URL** để cấp lại URL mới (URL cũ sẽ lập tức mất hiệu lực).
:::

## Bước 2: Đăng nhập vào Trang quản trị nhà phát triển PayPal

1. Truy cập [PayPal Developer](https://developer.paypal.com)
2. Nhấp vào **Log in to Dashboard** ở góc trên bên phải, đăng nhập bằng tài khoản PayPal
3. Sau khi đăng nhập, nhấp vào nút **`</>`** ở góc trên bên phải để vào trang quản trị nhà phát triển

![PayPal developer button at top right](./paypal-img/step2.png)

## Bước 3: Chuyển sang chế độ Live

Xác nhận công tắc chế độ phía trên menu bên trái đang là **Live**. Nếu hiển thị là **Sandbox** (chế độ thử nghiệm) thì mới cần chuyển đổi:

1. Tìm công tắc chuyển đổi phía trên menu bên trái
2. Nhấp vào để chuyển sang **Live**

![Sandbox/Live toggle](./paypal-img/step3.png)

## Bước 4: Đi tới Cài đặt Webhooks

1. Nhấp vào **Apps & Credentials** ở menu bên trái

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Tìm nút **Manage Webhooks** trên trang và nhấp vào để vào

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Cuộn xuống cuối trang và nhấp vào **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## Bước 5: Thêm Webhook

1. Dán URL vừa sao chép từ Stream Toolkit vào trường **Webhook URL**
2. Trong mục **Event types**, tìm nhóm **Payments & payouts** và tích chọn:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. Nhấp vào **Save**

{/* TODO: 截圖 — Add Webhook 設定頁 */}

Sau khi hoàn tất cài đặt, người xem thanh toán qua PayPal thì Stream Toolkit sẽ nhận được thông báo theo thời gian thực.

## Câu hỏi thường gặp

**Q: Có thể thử nghiệm ở chế độ Sandbox không?**
Có. Trong chế độ Sandbox, bạn cũng có thể thêm Webhook để kiểm tra quy trình thanh toán, nhưng sẽ không nhận được tiền thật.

**Q: Phải làm sao sau khi URL Webhook được cấp lại?**
Bạn cần quay lại trang quản trị PayPal và thay đổi URL Webhook cũ thành URL mới.
