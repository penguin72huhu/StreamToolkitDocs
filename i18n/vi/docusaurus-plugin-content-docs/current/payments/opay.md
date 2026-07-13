---
sidebar_position: 1
---

# Cài đặt O'Pay

Hướng dẫn này giải thích cách lấy **HashKey** và **HashIV** từ O'Pay và nhập vào Stream Toolkit.

## Bước 1: Đăng nhập vào trang quản trị đối tác O'Pay

1. Truy cập [trang web chính thức của O'Pay](https://www.opay.tw/) và đăng nhập
2. Sau khi đăng nhập, nhấp vào góc trên bên phải để vào trang quản trị đối tác

   ![O'Pay merchant portal button at top right](./opay-img/step1.png)

:::note
Nếu bạn chưa có tài khoản O'Pay, bạn cần hoàn tất đăng ký cửa hàng và xác minh danh tính trước.
:::

## Krok 2: Správa vývoje systému

1. Tìm **Quản lý phát triển hệ thống** trong menu bên trái
2. Nhấp vào **Cài đặt tích hợp hệ thống**

![System interface setup in system development menu](./opay-img/step2.png)

## Bước 3: Nhập vào Stream Toolkit

1. Mở Stream Toolkit
2. Nhấp vào **Cài đặt** ở menu phía dưới bên trái
3. Tìm **O'Pay** trong **Kết nối nền tảng ủng hộ**
4. Dán **ALL IN ONE HashKey tích hợp** và **ALL IN ONE HashIV tích hợp** từ **Cài đặt tích hợp hệ thống** vào các trường **Hash Key** và **Hash IV** tương ứng

   ![O'Pay interface info](./opay-img/step3-4.png)

5. Nhấp vào **Lưu**

   ![O'Pay settings in Stream Toolkit](./opay-img/step3-5.png)

## Bước 4: Thiết lập URL thông báo

1. Sao chép **URL thông báo nền** của O'Pay

   ![Copy the notification URL](./opay-img/step4-1.png)

2. Quay lại [trang web chính thức của O'Pay](https://www.opay.tw/) và nhấp vào **Nhận thanh toán** → **Cài đặt thanh toán streamer**

   ![Streamer payment settings in payment menu](./opay-img/step4-2.png)

3. Dán **URL thông báo nền** vào trường **URL thông báo thanh toán ủng hộ thành công**

   ![Donation payment notification URL field](./opay-img/step4-3.png)

4. Nhấp vào **Lưu thiết lập**

## Câu hỏi thường gặp

**Q: Không tìm thấy menu "Quản lý phát triển hệ thống"?**
Điều này có nghĩa là tài khoản của bạn chưa được phê duyệt hoặc các tính năng thanh toán liên quan chưa được kích hoạt. Vui lòng liên hệ với dịch vụ khách hàng của O'Pay.

**Q: HashKey có thể công khai không?**
Không. HashKey và HashIV là các khóa bảo mật; vui lòng không chia sẻ ảnh chụp màn hình hoặc đăng tải ở nơi công cộng.
