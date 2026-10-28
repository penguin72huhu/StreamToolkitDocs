---
sidebar_position: 18
---

# Bot trò chuyện

Tự động đăng tin nhắn vào phòng chat của bạn: tin nhắn định kỳ theo khoảng thời gian đã đặt, và trả lời theo từ khóa khi người xem nhập lệnh. Bot đăng tin nhắn bằng chính tài khoản của bạn.

Bot trò chuyện không có overlay OBS, vì vậy không có URL cần thêm.

:::tip
Bật công tắc bên cạnh **Bot trò chuyện** ở menu bên trái. Khi công tắc tắt, bot sẽ không gửi gì cả.
:::

Trang có ba thẻ: **Cài đặt**, **Tin nhắn định kỳ** và **Trả lời theo từ khóa**.

## Thẻ Cài đặt

Trong mục **Nền tảng**, nhấp **Twitch** để bật (nhấp lần nữa để tắt). Dấu chấm bên cạnh sẽ sáng lên khi Twitch đã được kết nối; nếu chưa, sẽ hiển thị **(Chưa kết nối)**. Hãy kết nối Twitch trước: [Cài đặt Twitch](../platforms/twitch).

**YouTube** hiển thị **Sắp ra mắt** và hiện chưa thể bật.

Nếu chưa kết nối nền tảng nào, hai thẻ còn lại sẽ hiển thị "Chưa kết nối nền tảng nào nên bot sẽ không gửi tin nhắn." cùng nút **Đi tới cài đặt**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Tin nhắn định kỳ

Đăng một tin nhắn sau mỗi khoảng thời gian trong lúc bạn đang phát trực tiếp.

1. Nhấp **+ Thêm**
2. Điền:
   - **Nội dung**: văn bản cần đăng (tối đa 500 ký tự trên Twitch). Tin nhắn luôn chỉ có một dòng: nhấn Enter sẽ không có tác dụng và các dấu xuống dòng khi dán vào sẽ trở thành dấu cách
   - **Khoảng cách**: số phút giữa các lần đăng (5–240, mặc định 15)
   - **Tin nhắn tối thiểu**: số tin nhắn mới cần có trong phòng chat kể từ lần đăng trước thì mới đăng lại (0–100, mặc định 2), để không đăng liên tục khi không ai trò chuyện
   - **Nền tảng**: nơi đăng tin nhắn
3. Nhấp **Lưu**

Cách đăng tin nhắn:

- Chỉ khi bạn đang phát trực tiếp. Lần đăng đầu tiên diễn ra sau một khoảng thời gian đầy đủ kể từ lúc bạn bắt đầu phát, không phải ngay khi buổi phát bắt đầu
- Nếu nhiều tin nhắn định kỳ đến hạn cùng lúc, chúng sẽ được giãn cách ra thay vì đăng cùng một lúc

## Trả lời theo từ khóa

Trả lời khi tin nhắn của người xem bắt đầu bằng một lệnh.

1. Nhấp **+ Thêm**
2. Điền:
   - **Lệnh**: chọn tiền tố (`! @ # $ % & ~`), sau đó nhập một từ không có dấu cách, ví dụ `!dc`. Lệnh được so khớp với từ đầu tiên của tin nhắn, không phân biệt chữ hoa/chữ thường
   - **Trả lời**: văn bản cần đăng. `{user}` sẽ được thay bằng tên người xem đã dùng lệnh
   - **Hồi chiêu**: số giây trước khi cùng một lệnh có thể trả lời lại (0–3600, mặc định 5)
   - **Nền tảng**: nơi trả lời
3. Nhấp **Lưu**

Trả lời theo từ khóa hoạt động mọi lúc, dù đang phát trực tiếp hay không.

Một lệnh không được trùng với lệnh trả lời theo từ khóa khác, hoặc với lệnh đã được dùng bởi [Yêu cầu bài hát](./song-request) hay từ khóa của [Quay thưởng](./lottery).

## Quản lý danh sách

Ở cả hai thẻ, mỗi mục có:

- Một ô đánh dấu bên trái để bật hoặc tắt mục đó mà không cần xóa
- Thẻ nền tảng; thẻ bị mờ nghĩa là nền tảng đó đang tắt trong thẻ Cài đặt
- **Chỉnh sửa** và **Xóa**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Giới hạn phiên bản dùng thử
- 1 tin nhắn định kỳ và 1 trả lời theo từ khóa
- Mỗi tin nhắn đều kết thúc bằng ` (by StreamToolkit)`, vì vậy độ dài tối đa của tin nhắn sẽ ngắn hơn

Xem [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
