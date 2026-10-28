---
sidebar_position: 13
---

# Tường biểu cảm

Khi người xem dùng emote trong phòng chat, các emote sẽ bay ngang qua luồng trực tiếp của bạn.

:::note Trước khi bắt đầu
Tường biểu cảm đọc emote từ phòng chat, vì vậy hãy kết nối các nền tảng bạn dùng trước. Xem [Cài đặt Twitch](../platforms/twitch) và [Cài đặt YouTube](../platforms/youtube-settings).
:::

## Bước 1: Thêm nguồn OBS

Sao chép **URL nguồn OBS** ở đầu trang:

```
http://127.0.0.1:7272/emote-wall
```

Thêm URL này vào OBS dưới dạng nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source). Tường biểu cảm không phát âm thanh, vì vậy bạn không cần bật "Điều khiển âm thanh qua OBS".

:::tip
Hãy bật thêm công tắc bên cạnh **Tường biểu cảm** ở thanh bên trái (**Bật hiển thị trên OBS**). Khi công tắc tắt, emote từ phòng chat sẽ không được gửi đến overlay.
:::

## Bước 2: Chọn nguồn

Trong mục **Nguồn** có một thẻ cho **Twitch** và một thẻ cho **YouTube**. Mỗi thẻ hiển thị trạng thái kết nối:

- Twitch hiển thị **(Chưa kết nối)** khi tài khoản Twitch của bạn chưa được kết nối
- YouTube hiển thị **Chưa kết nối URL phòng chat** khi phòng chat YouTube chưa được kết nối

Tích chọn **Bật tường emote** trên một thẻ để hiển thị emote từ phòng chat của nền tảng đó. Bỏ chọn để bỏ qua nền tảng đó.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Bước 3: Cài đặt hoạt ảnh

| Cài đặt | Mô tả |
|---------|-------------|
| **Kích thước emote** | Kích thước mỗi emote, 16–256 px |
| **Số emote tối đa mỗi tin nhắn** | Lấy tối đa bấy nhiêu emote từ một tin nhắn trong phòng chat (1–20) |
| **Thời gian bay** | Thời gian mỗi emote bay, 1–30 giây |
| **Tốc độ bay** | 50–500 px/s |

Nhấp **Khôi phục mặc định** bên cạnh tiêu đề mục để khôi phục cả bốn giá trị.

## Bước 4: Thử nghiệm

Nhấp **Thử (hiển thị trên OBS)** để gửi các emote Twitch mẫu đến overlay với cài đặt hiện tại. Số lượng emote thử nghiệm theo giá trị **Số emote tối đa mỗi tin nhắn**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Giới hạn phiên bản dùng thử
Overlay OBS hiển thị hình mờ (watermark) khi có emote trên màn hình. Xem chi tiết tại [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
