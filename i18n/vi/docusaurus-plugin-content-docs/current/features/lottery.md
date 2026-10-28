---
sidebar_position: 16
---

# Quay thưởng

Người xem tham gia bằng cách nhập từ khóa trong phòng chat Twitch hoặc YouTube. Khi kết thúc thu thập, rút người trúng thưởng ngẫu nhiên, và hoạt ảnh rút thăm sẽ phát trên overlay OBS.

## URL nguồn OBS

```
http://127.0.0.1:7272/lottery
```

Nhấp **Sao chép** bên cạnh **URL nguồn OBS** ở đầu trang, sau đó thêm vào OBS dưới dạng nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source). Quay thưởng không phát âm thanh, vì vậy bạn không cần bật "Điều khiển âm thanh qua OBS".

:::tip
Hãy bật thêm công tắc bên cạnh **Quay thưởng** ở thanh bên trái (**Bật hiển thị trên OBS**). Khi công tắc tắt, overlay sẽ bị ẩn.
:::

Trang có hai thẻ: **Cài đặt** và **Lịch sử**.

## Cài đặt

### Nền tảng bình chọn

Nhấp **Twitch** hoặc **YouTube** để chọn phòng chat của nền tảng nào được tham gia. Bạn có thể chọn cả hai. Nền tảng chưa kết nối sẽ hiển thị **(Chưa kết nối)** với Twitch hoặc **Chưa kết nối URL phòng chat** với YouTube. Để kết nối, xem [Cài đặt Twitch](../platforms/twitch) và [Cài đặt YouTube](../platforms/youtube-settings).

### Từ khóa rút thăm

Tin nhắn trong phòng chat có chứa từ khóa này sẽ đưa người xem vào danh sách tham gia. Mỗi người xem chỉ được tham gia một lần trong mỗi lượt quay thưởng. Không thể nhấp **Bắt đầu thu thập** khi từ khóa đang trống.

### Thời gian rút thăm

Thời gian mở đăng ký tham gia, tính bằng giây. Mặc định là 300, phạm vi 10–3600.

### Số người tối đa

Việc thu thập sẽ kết thúc sớm khi đủ số người này tham gia. Nhập `0` để không giới hạn.

### Xóa lựa chọn sau khi rút

Khi bật, người trúng thưởng sẽ bị loại khỏi danh sách tham gia trước lần rút tiếp theo, nên họ không thể trúng lại trong lượt quay thưởng đó.

### Chữ gợi ý

Gợi ý hiển thị trên overlay trong lúc thu thập, cho người xem biết từ khóa và số người tham gia. Đặt phông chữ, màu và cỡ chữ (px) cho gợi ý.

### Hoạt ảnh rút thăm

- **Đảo nhanh ID** (mặc định): tên người tham gia bay trên màn hình trong lúc thu thập, rồi chạy nhanh liên tục khi rút thăm
  - **Phông chữ màn hình thu thập**: phông chữ, cỡ chữ và màu của các thẻ tên (tối đa 5 màu)
  - **Phông chữ hoạt ảnh quay thưởng**: phông chữ và cỡ chữ của tên chạy liên tục khi rút thăm
  - **Khôi phục mặc định**: khôi phục các cài đặt này
- **Hoạt ảnh vòng quay**: người tham gia được đặt lên một vòng quay, vòng quay sẽ quay để chọn người trúng thưởng. Chọn bảng màu: **Tối giản** hoặc chủ đề tùy chỉnh bạn đã tạo trong [Vòng quay](./turntable)

Trong lúc thu thập, bạn không thể thay đổi nền tảng, từ khóa, thời gian, số người tối đa, Xóa lựa chọn sau khi rút hoặc kiểu hoạt ảnh.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Tiến hành quay thưởng

1. Nhấp **Bắt đầu thu thập**. Bảng điều khiển hiển thị **Đang thu thập…**, thời gian còn lại và số người tham gia
2. Trong lúc thu thập, bạn có thể nhập tên vào **Nhập tên người tham gia thủ công** và nhấp **Thêm** (hoặc nhấn Enter). Tên đã có trong danh sách sẽ hiển thị "ID này đã có trong danh sách"
3. Để kết thúc thu thập trước khi hết giờ, nhấp **Kết thúc thu thập**. Việc thu thập cũng kết thúc khi hết giờ hoặc khi đạt **Số người tối đa**. Bảng điều khiển khi đó hiển thị **Hết giờ!**
4. Nhấp **Bắt đầu rút thăm**. Overlay sẽ phát hoạt ảnh, và khi kết thúc, người trúng thưởng sẽ xuất hiện bên dưới **Người trúng thưởng**
5. Để rút thêm một người trúng thưởng, nhấp **Rút lại**

Nhấp **Hủy rút thăm** ở bất kỳ giai đoạn nào để xóa toàn bộ người tham gia và người trúng thưởng, và overlay sẽ trở về trạng thái chờ.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Lịch sử

Thẻ **Lịch sử** lưu một bản ghi cho mỗi lượt quay thưởng với thời gian, từ khóa và số người tham gia. Mở rộng một bản ghi để xem người trúng thưởng và toàn bộ danh sách người tham gia. Chỉ lưu bản ghi rút thăm trong 30 ngày gần nhất. Để xóa một bản ghi, nhấp 🗑 rồi nhấp **Xác nhận xóa**.

:::info Giới hạn phiên bản dùng thử
Overlay OBS hiển thị hình mờ (watermark). Xem chi tiết tại [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
