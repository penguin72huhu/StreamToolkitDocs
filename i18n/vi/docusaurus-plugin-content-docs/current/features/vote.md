---
sidebar_position: 15
---

# Bình chọn trực tiếp

Tổ chức bình chọn trên luồng trực tiếp. Người xem bình chọn bằng cách nhập số thứ tự lựa chọn trong phòng chat Twitch hoặc YouTube, và kết quả được cập nhật trực tiếp trên overlay OBS.

## URL nguồn OBS

```
http://127.0.0.1:7272/vote
```

Nhấp **Sao chép** bên cạnh **URL nguồn OBS** ở đầu trang, sau đó thêm vào OBS dưới dạng nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source). Bình chọn trực tiếp không phát âm thanh, vì vậy bạn không cần bật "Điều khiển âm thanh qua OBS".

:::tip
Hãy bật thêm công tắc bên cạnh **Bình chọn trực tiếp** ở thanh bên trái (**Bật hiển thị trên OBS**). Khi công tắc tắt, overlay sẽ bị ẩn.
:::

Trang có ba thẻ: **Cài đặt**, **Giao diện** và **Lịch sử**.

## Bắt đầu bình chọn (thẻ Cài đặt)

### Nền tảng bình chọn

Nhấp **Twitch** hoặc **YouTube** để chọn phòng chat của nền tảng nào được bình chọn. Bạn có thể chọn cả hai. Nền tảng chưa kết nối sẽ hiển thị **(Chưa kết nối)** với Twitch hoặc **Chưa kết nối URL phòng chat** với YouTube. Hãy kết nối trước:

- [Cài đặt Twitch](../platforms/twitch)
- [Cài đặt YouTube](../platforms/youtube-settings)

### Tiêu đề bình chọn

Không bắt buộc. Ví dụ: "Tối nay chơi game nào?"

### Lựa chọn bình chọn (2–10 mục)

- Nhập ít nhất 2 lựa chọn. Bạn có thể có tối đa 10 lựa chọn
- **+ Thêm lựa chọn** để thêm một hàng và **×** để xóa một hàng
- **Áp dụng lịch sử** cho phép bạn chọn một trong 15 cuộc bình chọn gần nhất và điền sẵn tiêu đề cùng các lựa chọn của nó

Trong lúc bạn chỉnh sửa, overlay OBS sẽ xem trước tiêu đề và các lựa chọn.

### Thời gian bình chọn

Thời lượng bình chọn tính bằng giây. Mặc định là 60 và tối thiểu là 10.

### Bắt đầu / Dừng

- **Bắt đầu bình chọn**: cần ít nhất 2 lựa chọn đã được điền và ít nhất một nền tảng đã chọn đang được kết nối
- **Dừng bình chọn**: kết thúc bình chọn sớm. Nếu không, bình chọn sẽ kết thúc khi hết giờ

Trong lúc bình chọn đang diễn ra, bạn không thể thay đổi nền tảng, tiêu đề, lựa chọn hoặc thời gian.

{/* TODO: 截圖 — 投票設定分頁 */}

## Cách người xem bình chọn

Trong lúc bình chọn đang diễn ra, overlay hiển thị "Nhập số thứ tự lựa chọn trong phòng chat để bình chọn (VD: 1)".

- Toàn bộ tin nhắn phải là số thứ tự lựa chọn, ví dụ `1` hoặc `1.`. Dấu cách được bỏ qua. Tin nhắn có bất kỳ nội dung nào khác sẽ không được tính
- Mỗi người xem có một phiếu. Nếu họ gửi một số khác, phiếu của họ sẽ chuyển sang lựa chọn mới, và phiếu cuối cùng trước khi hết giờ sẽ được tính

## Kết quả trực tiếp

Trong lúc bình chọn, **Kết quả trực tiếp** xuất hiện bên dưới phần cài đặt với thời gian còn lại, số phiếu và phần trăm của từng lựa chọn, cùng tổng số phiếu. Sau khi bình chọn kết thúc, mục này chuyển thành **Kết quả cuối cùng**. Nhấp **Chi tiết** để xem ai đã bình chọn cho từng lựa chọn, được nhóm theo Twitch và YouTube.

## Giao diện

Thẻ **Giao diện** có phần **Xem trước** ở phía trên. Bộ chọn màu bên cạnh chỉ thay đổi màu nền của bản xem trước, không thay đổi overlay OBS.

- **Phông chữ**: đặt phông chữ, màu và **Kích thước** (px) cho **Tiêu đề**, **Gợi ý**, **Lựa chọn**, **Số giây đếm ngược** và **Số phiếu**
- **Màu thanh tiến độ**: tối đa 5 màu, được dùng lần lượt cho các thanh lựa chọn. Mỗi màu có thể là **Màu đơn** hoặc **Chuyển sắc**. Chuyển sắc có thêm **Góc**
- **Màu nền**: nền của thẻ bình chọn
- **Khôi phục mặc định**: khôi phục giao diện mặc định. Nếu đang áp dụng một chủ đề, sẽ khôi phục giao diện của chủ đề đó

Trong **CSS tùy chỉnh**, bạn có thể tự viết kiểu dáng của riêng mình. Để chia sẻ hoặc tải xuống giao diện, xem [Chủ đề giao diện](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Lịch sử

Thẻ **Lịch sử** liệt kê tiêu đề, thời gian, số lựa chọn và tổng số phiếu của mỗi cuộc bình chọn. Mở rộng một cuộc bình chọn để xem kết quả, số phiếu theo từng nền tảng và **Chi tiết**. Chỉ lưu bản ghi bình chọn trong 30 ngày gần nhất. Để xóa một bản ghi, nhấp 🗑 rồi nhấp **Xác nhận xóa**.

:::info Giới hạn phiên bản dùng thử
- **CSS tùy chỉnh** chỉ có ở phiên bản chính thức
- Overlay OBS hiển thị hình mờ (watermark)

Xem chi tiết tại [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
