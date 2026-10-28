---
sidebar_position: 17
---

# Yêu cầu bài hát

Người xem yêu cầu bài hát trên YouTube bằng lệnh trong phòng chat, và các bài hát sẽ lần lượt được phát trong OBS. Bạn cũng có thể tự thêm bài hát và đặt danh sách phát mặc định để phát khi không có yêu cầu nào.

## URL nguồn OBS

```
http://127.0.0.1:7272/song-request
```

Nhấp **Sao chép** bên cạnh **URL nguồn OBS** ở đầu trang, sau đó thêm vào OBS dưới dạng nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source).

:::warning
Yêu cầu bài hát có phát âm thanh. Trong thuộc tính nguồn trình duyệt, hãy tích chọn **Điều khiển âm thanh qua OBS**, nếu không nhạc sẽ không phát trên luồng trực tiếp.
:::

:::tip
Hãy bật thêm công tắc bên cạnh **Yêu cầu bài hát** ở menu bên trái. Lệnh trong phòng chat chỉ được xử lý khi công tắc đang bật.
:::

Trang có hai thẻ: **Cài đặt** và **Danh sách phát**.

## Thẻ Cài đặt

### Nền tảng

Mỗi nền tảng có thẻ riêng:

- **Mở chọn bài cho nền tảng này**: cho phép người xem trong phòng chat đó yêu cầu bài hát
- **Bật bot phòng chat trả lời** (chỉ Twitch, mặc định bật): trả lời kết quả của mỗi lệnh trong phòng chat Twitch, bằng tài khoản Twitch đã kết nối của bạn. Chỉ hiển thị khi Twitch đã được bật và kết nối

Nền tảng chưa kết nối sẽ hiển thị **(Chưa kết nối)** (Twitch) hoặc **Chưa kết nối URL phòng chat** (YouTube). Hãy kết nối trước:

- [Cài đặt Twitch](../platforms/twitch)
- [Cài đặt YouTube](../platforms/youtube-settings)

### Lệnh phòng chat

| Trường | Mặc định |
|------|--------|
| **Tiền tố lệnh** | `!` (chọn từ `! @ # $ % & ~`) |
| **Lệnh chọn bài** | `sr` |
| **Xóa bài đã chọn** | `remove` |
| **Xem danh sách chọn bài** | `queue` |
| **Xem bài đang phát** | `song` |
| **Thời gian chờ giữa các lần chọn bài** | 3000 ms |

Thời gian chờ được tính riêng cho từng người xem: sau một lần yêu cầu thành công, cùng người xem đó phải chờ hết khoảng thời gian này mới được yêu cầu tiếp.

### Cài đặt

- **Hiển thị video trên màn hình** (mặc định bật): khi tắt, video bị ẩn trong OBS nhưng âm thanh vẫn phát
- **Giới hạn danh sách** (1–100, mặc định 20): số bài hát được yêu cầu tối đa trong danh sách. Bài hát từ danh sách phát mặc định không được tính
- **Hiển thị thông báo chọn bài** (mặc định bật): hiển thị thẻ thông báo trong OBS khi người xem yêu cầu, xóa hoặc yêu cầu bài hát thất bại. Khi bật, bạn có thể đặt:
  - **X** / **Y**: vị trí của thông báo tính từ góc trên bên trái (px, mặc định 16 / 16)
  - **Tỷ lệ thông báo**: hệ số kích thước (mặc định 1.0)
  - **Thử giao diện thông báo**: gửi một thông báo thử đến OBS

Mỗi thông báo hiển thị trong 5 giây; tối đa 3 thông báo cùng lúc.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Cách người xem sử dụng

Với cài đặt mặc định:

| Lệnh | Chức năng |
|------|------|
| `!sr <YouTube link>` | Yêu cầu video đó |
| `!sr <search words>` | Tìm kiếm trên YouTube và yêu cầu kết quả đầu tiên |
| `!remove` | Xóa yêu cầu gần nhất của người xem (không phải bài đang phát) |
| `!queue` | Trả lời với 3 bài hát được yêu cầu tiếp theo |
| `!song` | Trả lời với bài hát đang phát |

- Các liên kết được chấp nhận: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…`, hoặc ID video gồm 11 ký tự
- Không chấp nhận liên kết danh sách phát
- Yêu cầu sẽ thất bại khi danh sách đã đạt **Giới hạn danh sách**
- Yêu cầu mới được xếp sau yêu cầu của những người xem khác, nhưng trước các bài hát từ danh sách phát mặc định
- `!queue` và `!song` chỉ hoạt động trong phòng chat Twitch khi bật **Bật bot phòng chat trả lời**

## Thẻ Danh sách phát

### Điều khiển phát

Dòng trên cùng hiển thị người đã yêu cầu bài hát hiện tại và tên bài hát. Các nút:

- **Phát** / **Tạm dừng**: nếu chưa có bài nào đang phát, bắt đầu từ bài đầu tiên trong danh sách
- **Dừng**: dừng phát
- **Bài tiếp**: chuyển sang bài tiếp theo

Khi một bài hát đang phát, thanh tiến độ sẽ xuất hiện; kéo thanh để chuyển đến vị trí mong muốn. Khi một bài kết thúc, bài tiếp theo sẽ tự động bắt đầu.

:::note
Không có gì tự động phát khi ứng dụng khởi động. Nhấn **Phát** để bắt đầu.
:::

### Danh sách phát mặc định

Dán URL danh sách phát YouTube và chọn **Phát tuần hoàn** hoặc **Phát ngẫu nhiên**. Khi danh sách hết bài, một bài từ danh sách phát này sẽ được tự động thêm vào và phát. Các bài hát này hiển thị là **Danh sách mặc định** trong danh sách.

Danh sách phát mặc định được đọc thông qua tài khoản YouTube của bạn, vì vậy trước tiên bạn phải đăng nhập bằng Google trong [Cài đặt YouTube](../platforms/youtube-settings).

### Chọn bài thủ công

Dán URL video YouTube và nhấp **Thêm vào danh sách** (hoặc nhấn Enter). Chọn bài thủ công không hỗ trợ từ khóa tìm kiếm.

### Danh sách

**Danh sách (n)** hiển thị mọi bài hát: nền tảng, người yêu cầu, tên bài và ID video (nhấp để mở trên YouTube). Nhấp **Xóa** để xóa một bài hát; xóa bài đang phát sẽ chuyển sang bài tiếp theo. **Xóa hết** để làm trống toàn bộ danh sách.

{/* TODO: 截圖 — 播放清單分頁 */}

## Câu hỏi thường gặp

**Q: Người xem nhập lệnh nhưng không có gì xảy ra?**
Kiểm tra rằng:
- Công tắc **Yêu cầu bài hát** ở menu bên trái đang bật
- **Mở chọn bài cho nền tảng này** đã được tích chọn cho nền tảng đó
- Với Twitch: phòng chat Twitch được đọc bởi tính năng [Phòng chat](./chat). Nếu bạn đã tắt Twitch trong trang Phòng chat (và [Bot trò chuyện](./chat-bot) không dùng Twitch), lệnh từ Twitch sẽ không được nhận

**Q: Danh sách phát mặc định không phát?**
Hãy đảm bảo bạn đã đăng nhập bằng Google trong Cài đặt và URL là liên kết danh sách phát (có chứa `list=`).

:::info Giới hạn phiên bản dùng thử
- Yêu cầu bài hát từ phòng chat của người xem chỉ có ở phiên bản chính thức. Trong bản dùng thử, yêu cầu từ phòng chat sẽ thất bại với thông báo "Bản dùng thử không hỗ trợ yêu cầu bài hát". **Chọn bài thủ công** và danh sách phát mặc định vẫn hoạt động
- Overlay OBS hiển thị hình mờ (watermark)

Xem [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
