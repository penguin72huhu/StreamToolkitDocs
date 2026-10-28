---
sidebar_position: 10
---

# Thanh mục tiêu Twitch

Hiển thị thanh tiến độ trên luồng trực tiếp cho các mục tiêu người theo dõi, đăng ký và Bits trên Twitch. Mỗi loại mục tiêu có thanh riêng, cài đặt riêng và URL OBS riêng.

:::note Trước khi bắt đầu
Thanh mục tiêu đếm các sự kiện Twitch, vì vậy hãy kết nối tài khoản Twitch của bạn trước. Xem [Cài đặt Twitch](../platforms/twitch).
:::

## Bước 1: Chọn loại mục tiêu và thêm nguồn OBS

Ở đầu trang, chọn một loại mục tiêu: **Theo dõi**, **Đăng ký** hoặc **Bits**. **URL OBS** bên dưới các nút sẽ thay đổi tương ứng. Nhấp **Sao chép** để sao chép.

| Loại mục tiêu | URL nguồn OBS |
|-----------|----------------|
| **Theo dõi** | `http://127.0.0.1:7272/goal/follow` |
| **Đăng ký** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Thêm mỗi thanh bạn muốn hiển thị vào OBS dưới dạng một nguồn trình duyệt riêng. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source). Thanh mục tiêu không phát âm thanh, vì vậy bạn không cần bật "Điều khiển âm thanh qua OBS".

:::tip
Hãy bật thêm công tắc bên cạnh **Thanh mục tiêu Twitch** ở thanh bên trái (**Bật hiển thị trên OBS**). Khi công tắc tắt, các thanh sẽ bị ẩn trong OBS.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Bước 2: Đặt mục tiêu

Tất cả các cài đặt bên dưới áp dụng cho loại mục tiêu bạn đã chọn ở đầu trang.

- **Tiêu đề**: văn bản tiêu đề hiển thị trên thanh
- **Mục tiêu**: con số mục tiêu (số nguyên, từ 0 trở lên)
- **Tiến độ**: hiển thị số hiện tại, mục tiêu và phần trăm

### Cách tính tiến độ

| Loại mục tiêu | Điều gì được cộng vào tiến độ |
|-----------|----------------------|
| **Theo dõi** | Mỗi lượt theo dõi mới cộng 1. Khi Twitch đã kết nối, con số cũng được đồng bộ với tổng số người theo dõi kênh của bạn từ Twitch mỗi 30 giây. Nhấp **Đồng bộ** để đồng bộ ngay |
| **Đăng ký** | Đăng ký mới và đăng ký được tặng (một lần tặng nhiều gói đăng ký sẽ cộng bằng số gói được tặng). Đăng ký lại chỉ được tính khi bật **Tính cả đăng ký lại** |
| **Bits** | Mỗi lượt cheer cộng số Bits đã cheer |

### Tùy chọn đăng ký

Chỉ hiển thị với **Đăng ký**:

- **Tính trọng số theo Tier (T1=+1, T2=+2, T3=+6)**: khi bật, gói đăng ký ở tier cao hơn sẽ cộng nhiều hơn vào tiến độ. Khi tắt, mỗi gói đăng ký cộng 1
- **Tính cả đăng ký lại**: khi bật, tin nhắn đăng ký lại cũng được cộng vào tiến độ

### Đặt lại tiến độ

**Đăng ký** và **Bits** có nút **Đặt lại tiến độ**. Nhấp vào đó, sau đó nhấp **Xác nhận đặt lại** để đưa số hiện tại về 0. Con số mục tiêu vẫn được giữ nguyên.

**Theo dõi** không có nút đặt lại, vì con số này theo tổng số người theo dõi Twitch của bạn.

## Bước 3: Điều chỉnh giao diện

### Xem trước

Phần **Xem trước** ở phía trên hiển thị thanh của loại mục tiêu đang chọn. Dùng ô màu bên cạnh để đổi màu nền của bản xem trước. Tích chọn **Xem trước khi đạt** để xem thanh trông như thế nào khi đã đạt mục tiêu.

### Cài đặt giao diện

| Cài đặt | Mô tả |
|---------|-------------|
| **Màu nền** | Nền của thanh |
| **Màu thanh tiến độ** | Màu của phần đã tô |
| **Màu khi đạt** | Màu tô khi đã đạt mục tiêu |
| **Chữ tiêu đề** | Phông chữ, màu và cỡ chữ (8–72 px) của tiêu đề |
| **Chữ mục tiêu** | Phông chữ, màu và cỡ chữ (8–72 px) của các con số |
| **Phần trăm** | Phông chữ, màu và cỡ chữ (8–72 px) của phần trăm |

Nhấp **Khôi phục mặc định** để khôi phục giao diện của loại mục tiêu đang chọn.

### CSS tùy chỉnh

Nhấp **CSS tùy chỉnh** để mở rộng trình chỉnh sửa. Mỗi loại mục tiêu có CSS riêng. Hãy dùng CSS cho bố cục và cấu trúc. Màu sắc, phông chữ và kích thước được đặt trong phần cài đặt giao diện ở trên.

- **Khôi phục mặc định**: khôi phục CSS mặc định
- **Quản lý tài nguyên**: mở trình quản lý tài nguyên cho các hình ảnh dùng trong CSS của bạn

Nếu CSS của bạn ghi đè một thuộc tính bằng `!important`, mục điều khiển giao diện tương ứng sẽ bị khóa, vì dù sao CSS cũng sẽ được ưu tiên.

:::info Giới hạn phiên bản dùng thử
- **CSS tùy chỉnh** chỉ có ở phiên bản chính thức
- Overlay OBS hiển thị hình mờ (watermark)

Xem chi tiết tại [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
