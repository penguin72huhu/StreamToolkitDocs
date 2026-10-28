---
sidebar_position: 6
---

# Đánh dấu khoảnh khắc nổi bật của stream

Nhấn phím tắt trong lúc phát trực tiếp để ghi lại khoảnh khắc nổi bật xảy ra "ở phút thứ bao nhiêu của buổi phát". Sau đó, bạn có thể dùng danh sách thời điểm này để tìm các khoảnh khắc nổi bật trong VOD khi biên tập.

Các đánh dấu được lưu trong Stream Toolkit. Tính năng này không có overlay OBS, vì vậy bạn không cần thêm nguồn OBS.

Trang có hai thẻ: **Cài đặt** và **Bản ghi highlight**.

:::tip
Bật công tắc bên cạnh **Đánh dấu khoảnh khắc nổi bật của stream** ở thanh bên trái. Khi công tắc tắt, cả phím tắt lẫn nút **MARK** đều không thêm đánh dấu.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Bước 1: Chọn nguồn

**Nguồn** quyết định cách tính thời gian của buổi phát:

| Nguồn | Cách tính thời gian | Yêu cầu |
|--------|----------------------------|-------------|
| **Twitch** | Thời gian kể từ khi buổi phát Twitch hiện tại bắt đầu | Đã kết nối Twitch. Xem [Cài đặt Twitch](../platforms/twitch) |
| **YouTube** | Thời gian kể từ khi buổi phát trực tiếp YouTube hiện tại bắt đầu | Đăng nhập Google. Xem [Cài đặt YouTube](../platforms/youtube-settings) |
| **Căn chỉnh thủ công** (mặc định) | Giá trị của bộ đếm giờ thủ công trên trang này | Không có |

Dấu chấm bên cạnh **Twitch** và **YouTube** cho biết nền tảng đó đã được kết nối hay chưa. Nếu chưa, tùy chọn sẽ hiển thị **(Chưa kết nối)** hoặc **(Chưa đăng nhập Google)**.

Nếu bạn đánh dấu khi không phát trực tiếp (hoặc, với **Căn chỉnh thủ công**, khi bộ đếm giờ đang dừng), thời gian sẽ được ghi là **Chưa phát trực tiếp**. Với nguồn **Twitch**, kết quả này có thể mất khoảng 20 giây mới xuất hiện, vì Stream Toolkit sẽ thử lại vài lần phòng trường hợp Twitch chưa ghi nhận buổi phát vừa bắt đầu.

### Bộ đếm giờ thủ công

Khi chọn **Căn chỉnh thủ công**, **Bộ đếm giờ thủ công** sẽ xuất hiện:

1. Nhập thời gian hiện tại của buổi phát theo dạng `HH:MM:SS` (ví dụ `00:00:00` ngay khi bạn bắt đầu phát)
2. Nhấp **Bắt đầu đếm giờ đồng bộ**. Bộ đếm giờ bắt đầu đếm lên từ giá trị đó
3. Mọi đánh dấu đều dùng giá trị hiện tại của bộ đếm giờ
4. Nhấp **Dừng** để dừng bộ đếm giờ

### Tạo clip Twitch khi đánh dấu

Tùy chọn này chỉ xuất hiện khi nguồn là **Twitch**. Khi bật, mỗi lần đánh dấu cũng sẽ tạo một clip Twitch.

- Bạn phải đang phát trực tiếp. Clip dài khoảng 30 giây
- Clip được lưu trong Bảng điều khiển Nhà sáng tạo → Nội dung → Clip
- Sau khi đánh dấu, trang hiển thị **Đã tạo clip Twitch**, hoặc lý do thất bại: **Chưa phát trực tiếp**, **Thiếu quyền; kết nối lại Twitch**, **Chưa kết nối Twitch** hoặc **Thất bại; thử lại**

## Bước 2: Đặt phím tắt

Phím tắt mặc định là `Ctrl+Shift+M`. Để thay đổi:

1. Nhấp vào nút phím tắt
2. Nhấn tổ hợp phím bạn muốn, rồi thả ra. Nhấn **Esc** để hủy
3. Để gỡ bỏ, nhấp **Xóa**

Nếu tổ hợp phím đã được tính năng khác sử dụng, nút sẽ hiển thị **Phím tắt này đã được dùng** và phím tắt không được lưu. Phím tắt vẫn hoạt động ngay cả khi Stream Toolkit không phải là cửa sổ đang hoạt động.

Bạn cũng có thể nhấp nút **MARK** bên dưới phím tắt. Nút này có tác dụng giống phím tắt. Cửa sổ [Công cụ nhanh](./quick-tools) cũng có nút **MARK**.

## Bước 3: Đánh dấu trong lúc phát trực tiếp

1. (Không bắt buộc) Nhập tên vào **Tên đánh dấu** trước khi đánh dấu. Nếu để trống, các đánh dấu sẽ được tự động đánh số (`精華標記_1`, `精華標記_2`, …)
2. Nhấn phím tắt hoặc nhấp **MARK**

Tên bạn nhập chỉ được dùng cho lần đánh dấu tiếp theo, sau đó ô nhập sẽ được xóa trống.

## Bản ghi highlight

Thẻ **Bản ghi highlight** liệt kê tất cả các đánh dấu, mới nhất ở trên cùng. Mỗi hàng hiển thị thời gian của buổi phát, tên, nguồn và ngày giờ bạn đánh dấu.

- **Sao chép**: sao chép đánh dấu dưới dạng văn bản, theo định dạng `[date] name 🎬 stream time (source)`
- **🗑️**: nhấp vào, sau đó nhấp **Xác nhận xóa** để xóa đánh dấu
- **Mở clip Twitch**: xuất hiện khi đã có clip Twitch được tạo cho đánh dấu này. Mở clip trên Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Giới hạn phiên bản dùng thử
Không dùng được **Tạo clip Twitch khi đánh dấu**. Tùy chọn này hiển thị "Bản chính thức mới bật được".

Xem chi tiết tại [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
