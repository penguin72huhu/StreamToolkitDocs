---
sidebar_position: 1
---

# Cài đặt YouTube API

Hướng dẫn này giải thích cách lấy **API Key** và **ID kênh** của YouTube Data API, được sử dụng cho tính năng `Đánh dấu khoảnh khắc nổi bật của stream`.

## YouTube Data API

### Bước 1: Mở Google Cloud Console

1. Truy cập [Google Cloud Console](https://console.cloud.google.com)
2. Đăng nhập bằng tài khoản Google của bạn

### Bước 2: Bật YouTube Data API v3

1. Tìm kiếm `YouTube Data API v3` trên thanh tìm kiếm phía trên

   ![Search YouTube Data API v3](./Youtube_API_Key_img/API_step2-1.png)

2. Nhấp vào kết quả tìm kiếm
3. Nhấp vào **Enable**

   ![Click Enable](./Youtube_API_Key_img/API_step2-3.png)

### Bước 3: Tạo khóa API

1. Nhấp vào **Credentials** ở bên trái

   ![Click Credentials](./Youtube_API_Key_img/API_step3-1.png)

2. Chọn **Create credentials** → **API Key**

   ![Create credentials](./Youtube_API_Key_img/API_step3-2.png)

### Bước 4: Cấu hình khóa API

1. **Name** điền tùy ý (ví dụ: `StreamToolkit`)
2. Tại **Select API restrictions**, tích chọn `YouTube Data API v3` rồi nhấn **OK**

   ![Select API restrictions](./Youtube_API_Key_img/API_step4-2.png)

3. **Authenticate API calls through a service account** không tích chọn
4. Tại **Application restrictions** chọn **None**

   ![Select None for Application restrictions](./Youtube_API_Key_img/API_step4-4.png)

5. Nhấp vào **Create**

### Bước 5: Điền vào App

1. Dán API Key nhận được vào trường **YouTube API** trong App

![Paste into app](./Youtube_API_Key_img/API_step5.png)

## ID kênh

### Bước 1: Mở Cài đặt YouTube

1. Truy cập [YouTube](https://www.youtube.com)
2. Nhấp vào ảnh hồ sơ ở góc trên bên phải
3. Chọn **Cài đặt**

![Open YouTube settings](./Youtube_API_Key_img/ID_step1.png)

### Bước 2: Lấy ID kênh

1. Chọn **Cài đặt nâng cao** ở menu bên trái

   ![Advanced settings](./Youtube_API_Key_img/ID_step2-1.png)

2. Sao chép **ID kênh** rồi dán lại vào App

   ![Copy Channel ID](./Youtube_API_Key_img/ID_step2-2.png)

## Câu hỏi thường gặp

**Q: Khóa API có giới hạn mức sử dụng không?**
Có. YouTube Data API v3 có hạn mức miễn phí hàng ngày là 10.000 đơn vị. Mức sử dụng livestream thông thường sẽ không vượt quá.

**Q: Xuất hiện lỗi "API Key không hợp lệ"?**
Xác nhận YouTube Data API v3 đã được bật và bạn đang sử dụng khóa của đúng dự án.

**Q: Khóa có thể được công khai không?**
Không khuyến khích. Nếu khóa bị rò rỉ và bị lạm dụng, hạn mức hàng ngày của bạn sẽ nhanh chóng bị cạn kiệt.
