---
sidebar_position: 3
---

# Phòng chat

**Phòng chat** hiển thị phòng chat Twitch và YouTube của bạn cùng nhau trong một overlay, có thể bật dịch tự động. Tính năng này cũng có thể hiển thị phòng chat trong một cửa sổ trong suốt trên màn hình mà chỉ bạn mới thấy.

## URL nguồn OBS

```
http://127.0.0.1:7272/chat
```

Thêm URL này làm nguồn trình duyệt: [Cách thêm nguồn trong OBS](../getting-started/obs-source). Overlay này không có âm thanh.

:::info
Tin nhắn chỉ được gửi đến overlay khi công tắc **Phòng chat** ở thanh bên đang bật. Khi công tắc tắt, tin nhắn vẫn được nhận, nên các tính năng đọc phòng chat (bình chọn, quay thưởng, yêu cầu bài hát, v.v.) vẫn tiếp tục hoạt động.
:::

## Trước khi bắt đầu

Kết nối các nền tảng bạn muốn hiển thị:

- [Cài đặt Twitch](../platforms/twitch)
- [Cài đặt YouTube](../platforms/youtube-settings)

Trang cài đặt có hai thẻ: **Cài đặt** và **Giao diện**.

## Thẻ Cài đặt

### Nền tảng

- **Hiển thị icon nền tảng (Twitch / YouTube)** — hiển thị biểu tượng <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> phía trước mỗi tin nhắn

Mỗi nền tảng có thẻ riêng. Dấu chấm bên cạnh tên nền tảng sẽ sáng màu xanh lá khi nền tảng đã được kết nối và bật; nếu Twitch chưa kết nối sẽ hiển thị **(Chưa kết nối)**, còn nếu phòng chat YouTube chưa được liên kết sẽ hiển thị **Chưa kết nối URL phòng chat**.

| Tùy chọn | Mô tả |
|--------|-------------|
| **Bật phòng chat** | Hiển thị tin nhắn của nền tảng này |
| **Hiển thị ảnh đại diện** | Hiển thị ảnh đại diện của người xem |
| **Hiển thị huy hiệu** (Twitch) / **Hiển thị huy hiệu (biểu tượng thành viên)** (YouTube) | Hiển thị huy hiệu |
| **Hiển thị tên người xem thay vì @handle** | Chỉ dành cho YouTube. Bị vô hiệu hóa cho đến khi bạn đăng nhập bằng Google |

Khi phòng chat YouTube đã bật nhưng chưa được liên kết, hai nút sẽ xuất hiện trên thẻ của nó:

- **Kết nối tự động** — tự động tìm buổi phát hiện tại của bạn (cần đăng nhập Google)
- **Tự nhập** — đưa bạn đến trang cài đặt để dán URL phòng chat

**Số tin nhắn tối đa**: số tin nhắn được giữ trên màn hình (5–200, mặc định 50).

### Dịch tự động

1. Tích chọn **Bật dịch**
2. **Ngôn ngữ đích**: ngôn ngữ mà tin nhắn sẽ được dịch sang. Mặc định là **Theo ngôn ngữ giao diện**, dùng ngôn ngữ giao diện của ứng dụng
3. **Ngôn ngữ không dịch** (không bắt buộc): tin nhắn bằng các ngôn ngữ được tích chọn sẽ giữ nguyên. Không thể phân biệt tiếng Bồ Đào Nha PT-BR và PT-PT, nên tích chọn một trong hai sẽ bỏ qua cả hai

**Dịch vụ dịch** là **MyMemory**, không cần API key.

- **Email (không bắt buộc)**: nếu không có email, hạn mức mỗi ngày là 5.000 ký tự; nhập email và nhấp **Lưu** để nâng lên 50.000 ký tự (miễn phí, không cần đăng ký MyMemory)
- Thanh bên dưới hiển thị lượng sử dụng ước tính trong ngày. Thanh được đặt lại hằng ngày lúc 08:00 UTC

### Thử nghiệm

- **Gửi tin nhắn thử** — gửi một tin nhắn mẫu ngẫu nhiên đến overlay
- **Xóa** — xóa tất cả tin nhắn khỏi overlay

Nếu xuất hiện **Kết nối thất bại — máy chủ có thể chưa chạy**, máy chủ cục bộ của Stream Toolkit đang không phản hồi.

### Cửa sổ phòng chat trên màn hình

Hiển thị phòng chat trong một cửa sổ nhỏ trong suốt, luôn nằm trên cùng, phủ lên trò chơi của bạn. Chỉ bạn mới thấy cửa sổ này — rất tiện khi phát trực tiếp bằng một màn hình.

1. Nhấp **Mở cửa sổ** (hoặc nhấp chuột phải vào biểu tượng ở khay hệ thống và chọn **Mở phòng chat trên màn hình**)
2. Khi chưa khóa, kéo thanh phía trên để di chuyển cửa sổ và kéo các cạnh để thay đổi kích thước
3. Nhấp **🔒 Khóa** khi cửa sổ đã ở đúng vị trí. Khi đó các cú nhấp chuột sẽ xuyên qua cửa sổ xuống trò chơi. Để mở khóa, di chuột lên cửa sổ và nhấp vào biểu tượng 🔓 xuất hiện ở góc trên bên phải, hoặc nhấp **🔓 Mở khóa** trên trang cài đặt

**Đặt lại vị trí** đưa cửa sổ về vị trí mặc định.

| Cài đặt | Mô tả |
|---------|-------------|
| **Kiểu hiển thị** | **Chỉ tên và nội dung** (mặc định) hoặc **Giống phòng chat OBS** |
| **Cỡ chữ** | 12–32 px, mặc định 16. Chỉ áp dụng cho **Chỉ tên và nội dung** |
| **Độ mờ chữ** | 10–100%, mặc định 100% |
| **Độ mờ nền** | 0–100%, mặc định 40% |
| **Làm mờ tin nhắn** | 0–120 giây, mặc định 0. Mỗi tin nhắn sẽ mờ dần sau số giây này, và không thể cuộn lại để xem các tin nhắn đã mờ. Ở mức 0, không có tin nhắn nào mờ đi, và bạn có thể cuộn lên xem tin nhắn cũ khi chưa khóa (tối đa bằng Số tin nhắn tối đa) |
| **Ẩn khỏi hình ảnh stream** | Mặc định bật. Display Capture của OBS sẽ không ghi lại cửa sổ này, nên người xem không thấy phòng chat hai lần. Cửa sổ cũng không xuất hiện trong ảnh chụp màn hình hoặc khi chia sẻ màn hình trên Discord |

:::tip
Nếu bạn không thấy cửa sổ khi trò chơi đang ở chế độ toàn màn hình, hãy chuyển trò chơi sang chế độ Cửa sổ không viền (Borderless Window) hoặc Cửa sổ (Windowed). Dùng **Gửi tin nhắn thử** để kiểm tra vị trí và kích thước của cửa sổ.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Thẻ Giao diện

### Xem trước

Phía trên cùng của thẻ là bản xem trước trực tiếp. Bộ chọn màu bên cạnh **Xem trước** chỉ thay đổi màu nền của bản xem trước. Các ô đánh dấu **Ảnh đại diện**, **Huy hiệu** và **Icon nền tảng** chỉ thay đổi những gì hiển thị trong bản xem trước.

### Cài đặt giao diện

**Khôi phục mặc định** khôi phục giao diện mặc định (hoặc giao diện của chủ đề đang áp dụng, nếu có).

- **Hướng xuất hiện**: **Từ trên xuống**, **Từ dưới lên** (mặc định), **Từ trái sang phải**, **Từ phải sang trái**
- **Văn bản** — đặt riêng cho **Biệt danh** và **Tin nhắn**:
  - Phông chữ, cỡ chữ (px) và màu. Với tên người dùng, bạn có thể chọn **Màu gốc** (màu của người xem trên nền tảng) hoặc **Màu tùy chỉnh**
  - **Viền ngoài**: màu, **Độ trong suốt**, **Độ dày**
  - **Đổ bóng**: màu, **Độ trong suốt**, **Làm mờ**, độ lệch X / Y
- **Kích thước biểu tượng**: tỉ lệ cho **Icon nền tảng**, **Ảnh đại diện** và **Huy hiệu** (0.1–5x)
- **Màu sắc**: **Màu nền** của mỗi tin nhắn

### CSS tùy chỉnh

Mở rộng **CSS tùy chỉnh** để chỉnh trực tiếp CSS của overlay. Dùng **Quản lý tài nguyên** để tải lên hình ảnh dùng trong CSS. **Khôi phục mặc định** khôi phục CSS mặc định. Xem thêm [Chủ đề giao diện](./themes).

:::tip
Nếu CSS tùy chỉnh của bạn đặt một trong các trường giao diện bằng `!important`, trường đó sẽ bị làm xám trong phần Cài đặt giao diện ("Cài đặt này được điều khiển bởi CSS tùy chỉnh"). Khi đang áp dụng một chủ đề, CSS sẽ ở chế độ chỉ đọc — hãy khôi phục trước khi chỉnh sửa.
:::

## Giới hạn phiên bản dùng thử

:::info
- Bật dịch tự động sẽ thêm hình mờ (watermark) vào overlay phòng chat
- **CSS tùy chỉnh** chỉ có ở phiên bản chính thức
- **Cửa sổ phòng chat trên màn hình** chỉ có ở phiên bản chính thức

Xem [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
