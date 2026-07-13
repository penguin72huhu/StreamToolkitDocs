---
sidebar_position: 3
---

# Cài đặt Stripe

Stream Toolkit nhận thông báo thanh toán từ Stripe thông qua Webhook. Cài đặt được chia làm hai phần: lấy URL Webhook từ app và hoàn tất kết nối trong trang quản trị Stripe.

## Bước 1: Lấy URL Webhook trong Stream Toolkit

1. Mở Stream Toolkit
2. Nhấp vào **Cài đặt** ở menu phía dưới bên trái → **Kết nối nền tảng ủng hộ** → **Stripe** (Nhấp để mở rộng)
3. Bạn sẽ thấy **Webhook URL**, có định dạng như sau:
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. Nhấp vào nút **Sao chép** và lưu URL này để sử dụng sau

![Get webhook URL](./stripe-img/step1.png)

## Bước 2: Thêm Webhook trong trang quản trị Stripe

1. Truy cập [Stripe Dashboard](https://dashboard.stripe.com) và đăng nhập tài khoản
2. Nhấp vào **Nhà phát triển** → **Webhook** ở góc dưới bên trái

![Stripe webhook list page](./stripe-img/step2-1.png)

3. Nhấp vào **Thêm điểm cuối**

![Add destination](./stripe-img/step2-2.png)

4. Điền các thông tin sau:
   - **Sự kiện**: Tìm kiếm và tích chọn `checkout.session.completed` (chỉ cần duy nhất mục này)

   ![Select events](./stripe-img/step2-3.png)

   - **Loại điểm cuối**: Chọn **Điểm cuối Webhook**

   ![Select destination type](./stripe-img/step2-4.png)

   - **Tên điểm cuối**: Điền tùy ý (ví dụ `Stream Toolkit`)
   - **URL điểm cuối**: Dán URL Webhook đã sao chép ở Bước 1

   ![Enter name and URL](./stripe-img/step2-5.png)

5. Nhấp vào **Thêm điểm cuối**

## Bước 3: Điền khóa bí mật chữ ký

1. Sau khi Webhook được tạo thành công, trang web sẽ hiển thị **khóa bí mật chữ ký** có định dạng `whsec_...`
2. Sao chép chuỗi khóa bí mật này
3. Quay lại phần cài đặt Stripe của Stream Toolkit
4. Dán khóa bí mật vào trường **Khóa bí mật chữ ký Webhook**
5. Nhấp vào **Lưu**

Trạng thái kết nối chuyển sang màu xanh lá cây nghĩa là thiết lập đã thành công.

![Paste signing secret](./stripe-img/step3.png)

## Hoàn thành

Sau khi thiết lập hoàn tất, khi người xem thanh toán qua Stripe **Payment Link** của bạn, Stream Toolkit sẽ nhận được thông báo theo thời gian thực và hiển thị tiền ủng hộ (donation).

## Câu hỏi thường gặp

**Q: Tôi có thể tạo Payment Link ở đâu?**
Truy cập Stripe Dashboard → **Payment Links** → **Tạo Payment Link**, thiết lập số tiền và chia sẻ liên kết với người xem.

**Q: Trạng thái kết nối không chuyển sang màu xanh?**
Đảm bảo rằng Khóa bí mật chữ ký Webhook đã được dán và lưu chính xác, đồng thời URL điểm cuối trong trang quản trị Stripe khớp hoàn toàn với URL hiển thị trong app.
