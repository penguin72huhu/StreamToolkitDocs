---
sidebar_position: 2
---

# Điều khiển cảnh OBS

**Điều khiển cảnh OBS** cho phép bạn chuyển cảnh và hiện/ẩn nguồn trong phần mềm phát trực tiếp bằng phím tắt toàn cục hoặc từ [Công cụ nhanh](./quick-tools). Tính năng này hoạt động với **OBS Studio**, **Streamlabs** và **Meld Studio**.

Tính năng này không có overlay, vì vậy không cần thêm gì vào OBS dưới dạng nguồn trình duyệt.

:::info
Phím tắt chỉ hoạt động khi công tắc **Điều khiển cảnh OBS** ở thanh bên đang bật. Phím tắt vẫn hoạt động ngay cả khi cửa sổ Stream Toolkit đã được thu nhỏ xuống khay hệ thống.
:::

Trang cài đặt có hai thẻ: **Kết nối** và **Phím tắt**.

## Thẻ Kết nối

### Bước 1: Chọn phần mềm

Trong mục **Phần mềm**, chọn **OBS Studio**, **Streamlabs** hoặc **Meld Studio**. Chỉ có thể thay đổi khi đang ngắt kết nối.

Mỗi phần mềm giữ phím tắt và danh sách cảnh riêng, vì vậy khi chuyển phần mềm sẽ hiển thị cài đặt riêng của phần mềm đó.

### Bước 2: Chuẩn bị phần mềm

#### OBS Studio

1. Trong OBS, mở **Công cụ → Cài đặt máy chủ WebSocket** (Tools → WebSocket Server Settings)
2. Tích chọn **Bật máy chủ WebSocket** (Enable WebSocket server)
3. Nhấp **Hiển thị thông tin kết nối** (Show Connect Info) để xem mật khẩu
4. Trong Stream Toolkit, điền **Máy chủ** (mặc định `localhost`), **Cổng** (mặc định `4455`) và **Mật khẩu**

#### Streamlabs / Meld Studio

Không cần thiết lập — chỉ cần mở sẵn chương trình.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Bước 3: Kết nối

Nhấp **Kết nối**. **Trạng thái** sẽ chuyển thành **Đã kết nối** (với OBS và Meld, số phiên bản cũng được hiển thị). Nhấp **Ngắt kết nối** để ngắt kết nối.

**Kết nối khi khởi động** (mặc định bật): tự động kết nối khi Stream Toolkit khởi động và khi bạn bật công tắc tính năng. Tắt công tắc tính năng sẽ ngắt kết nối.

### Cảnh

Mục **Cảnh** liệt kê các cảnh của bạn và số nguồn trong mỗi cảnh; cảnh hiện tại được làm nổi bật. Nhấp **Làm mới** để lấy danh sách mới nhất sau khi thay đổi cảnh trong phần mềm.

Khi ngắt kết nối, danh sách lấy được gần nhất vẫn được hiển thị.

## Thẻ Phím tắt

Để đặt phím tắt, nhấp **Nhấn để thiết lập phím tắt**, sau đó nhấn tổ hợp phím. Nhấn `Esc` để hủy. Nếu tổ hợp phím đã được tính năng khác sử dụng, **Xung đột phím tắt** sẽ hiển thị và phím tắt không được lưu. Nhấp **✕** bên cạnh phím tắt để xóa.

### Chuyển cảnh

1. Nhấp **Thêm**
2. Đặt phím tắt
3. Chọn cảnh muốn chuyển đến

Nhấp **✕** ở cuối hàng để xóa hàng đó.

### Bật/tắt nguồn

Một phím tắt có thể điều khiển nhiều nguồn trong cùng một cảnh cùng lúc.

1. Nhấp **Thêm**
2. Đặt phím tắt
3. Nhập **Tên** (không bắt buộc — dùng làm nhãn nút trong Công cụ nhanh; nếu để trống sẽ dùng tên cảnh)
4. Chọn cảnh chứa các nguồn
5. Nhấp **Thêm nguồn**, chọn một nguồn và chọn **Hiện**, **Ẩn** hoặc **Bật/tắt** (mặc định **Bật/tắt**)
6. Lặp lại bước 5 cho các nguồn khác

Thay đổi cảnh của một mục sẽ xóa danh sách nguồn của mục đó.

:::tip
Cảnh hoặc nguồn không còn tồn tại trong phần mềm sẽ được đánh dấu màu đỏ. Hãy chọn lại từ danh sách thả xuống.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Sử dụng từ Công cụ nhanh

Khi tính năng đang bật và có ít nhất một mục phím tắt, [Công cụ nhanh](./quick-tools) sẽ hiển thị thẻ **Điều khiển cảnh OBS** với một nút cho mỗi mục. Nhấp vào nút có tác dụng giống như nhấn phím tắt tương ứng.

## Thông báo lỗi

Khi dùng phím tắt hoặc nút, các thông báo sau có thể xuất hiện:

| Thông báo | Ý nghĩa |
|---------|---------|
| **Chưa kết nối tới OBS** | Chưa kết nối — vào thẻ **Kết nối** và nhấp **Kết nối** |
| **Không tìm thấy cảnh “…”** | Cảnh đã bị đổi tên hoặc xóa trong phần mềm |
| **Không tìm thấy nguồn: …** | Các nguồn đó không còn tồn tại trong cảnh |

## Giới hạn phiên bản dùng thử

:::info
Phiên bản dùng thử cho phép tổng cộng **1** mục phím tắt (gộp cả Chuyển cảnh và Bật/tắt nguồn). Xem [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::

## Câu hỏi thường gặp

**Q: Ứng dụng báo không kết nối được OBS, và không thử lại sau khi tôi mở OBS.**
Nếu lần kết nối đầu tiên thất bại (ví dụ OBS chưa chạy), Stream Toolkit sẽ không tiếp tục thử lại. Hãy mở phần mềm phát trực tiếp, sau đó nhấp **Kết nối**. Khi đã kết nối thành công một lần, ứng dụng sẽ tự động kết nối lại nếu kết nối bị gián đoạn.
