---
sidebar_position: 12
---

# Đồng hồ

Hiển thị giờ hiện tại trên luồng trực tiếp, có thể kèm theo ngày và thứ.

## Bước 1: Thêm nguồn OBS

Sao chép **URL nguồn OBS** ở đầu trang:

```
http://127.0.0.1:7272/clock
```

Thêm URL này vào OBS dưới dạng nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source). Đồng hồ không phát âm thanh, vì vậy bạn không cần bật "Điều khiển âm thanh qua OBS".

:::tip
Hãy bật thêm công tắc bên cạnh **Đồng hồ** ở thanh bên trái (**Bật hiển thị trên OBS**). Khi công tắc tắt, đồng hồ sẽ bị ẩn trong OBS.
:::

## Xem trước

Phần **Xem trước** ở phía trên hiển thị đúng overlay OBS thực tế và cập nhật khi bạn thay đổi cài đặt. Dùng ô màu bên cạnh để đổi màu nền của bản xem trước.

Bên dưới bản xem trước có ba thẻ: **Giao diện**, **Định dạng đồng hồ** và **Cài đặt hiển thị**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Giao diện

| Cài đặt | Mô tả |
|---------|-------------|
| **Phông chữ** | Phông chữ cho toàn bộ văn bản của đồng hồ |
| **Kiểu** | Cách sắp xếp giờ, ngày và thứ: **Stack**, **Horizontal**, **One-Top-Two-Bottom** hoặc **Two-Top-One-Bottom**. **Giãn dòng** có ở mọi kiểu trừ **Horizontal**, còn **Khoảng cách** có ở mọi kiểu trừ **Stack** (cả hai từ −200 đến 200 px) |
| **Thứ tự** | Kéo các khối **Giờ**, **Ngày** và **Thứ** để thay đổi thứ tự |
| **Văn bản** | Đặt riêng cho **Giờ**, **Ngày** và **Thứ**: **Cỡ chữ**, màu (**Màu đơn**, hoặc **Chuyển sắc** với hai màu và **Góc**), cùng màu **Viền**, **Độ trong suốt** và **Độ dày** (0–7 px) |
| **Đổ bóng** | Màu bóng, **Độ trong suốt**, **Làm mờ** và độ lệch **X** / **Y**, dùng chung cho toàn bộ văn bản |

Nút **Khôi phục mặc định** nằm ở đầu thẻ.

### CSS tùy chỉnh

Nhấp **CSS tùy chỉnh** để mở rộng trình chỉnh sửa. CSS mặc định liệt kê các selector cho từng phần của đồng hồ (giờ, ngày, thứ và các khung chứa của chúng) kèm chú thích. Hãy dùng CSS cho bố cục và cấu trúc. Màu sắc, phông chữ và kích thước được đặt trong phần cài đặt giao diện ở trên.

- **Khôi phục mặc định**: khôi phục CSS mặc định
- **Quản lý tài nguyên**: mở trình quản lý tài nguyên cho các hình ảnh dùng trong CSS của bạn

Nếu CSS của bạn ghi đè một thuộc tính bằng `!important`, mục điều khiển giao diện tương ứng sẽ bị khóa, vì dù sao CSS cũng sẽ được ưu tiên.

## Định dạng đồng hồ

- **Hệ giờ**: **24 giờ**, hoặc một trong hai tùy chọn 12 giờ: **12 giờ (Sáng/Chiều)** hiển thị ký hiệu tiếng Trung 上午 / 下午, còn **12 giờ (AM/PM)** hiển thị AM/PM
- **Múi giờ**: từ UTC−12 đến UTC+14. Theo mặc định, múi giờ trùng với múi giờ của máy tính

## Cài đặt hiển thị

- **Hiển thị giây**
- **Hiển thị ngày**: khi bật, chọn một định dạng ngày từ danh sách thả xuống. Các định dạng được đánh dấu **Không hiển thị năm** sẽ bỏ phần năm
  - **Thêm số 0 vào ngày**: hiển thị tháng và ngày có một chữ số với số 0 ở đầu (ví dụ 2026/05/20)
  - **Định dạng năm**: hiển thị với các định dạng bắt đầu bằng năm. **Đầy đủ (2026)** hoặc **Viết tắt (26)**

  Hai tùy chọn này áp dụng cho các định dạng dạng số (có `/` hoặc `-`). Các định dạng viết bằng chữ (ví dụ "20 tháng 5, 2026") sẽ theo ngôn ngữ giao diện của ứng dụng
- **Hiển thị thứ**: khi bật, chọn cách viết thứ (ví dụ **Thứ Tư**, **Wednesday**, **WED** hoặc **Wed**)

:::info Giới hạn phiên bản dùng thử
**CSS tùy chỉnh** chỉ có ở phiên bản chính thức. Xem chi tiết tại [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
