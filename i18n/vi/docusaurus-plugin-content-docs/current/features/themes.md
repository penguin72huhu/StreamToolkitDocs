---
sidebar_position: 20
---

# Chủ đề giao diện

Chia sẻ và tải xuống giao diện overlay thông qua Steam Workshop. Một chủ đề có thể bao gồm giao diện của các tính năng sau:

- [Phòng chat](./chat)
- [Thanh mục tiêu quyên góp](./donate)
- [Thông báo quyên góp](./donate-alert)
- [Thông báo người theo dõi mới](./fan-alert)
- [Thông báo sinh nhật người xem](./birthday-alert)
- [Bảng quyên góp](./sponsors)
- [Bình chọn trực tiếp](./vote)
- [Đồng hồ](./clock)
- [Thanh mục tiêu Twitch](./goal): **Mục tiêu theo dõi**, **Mục tiêu đăng ký**, **Mục tiêu Bits**

Mở từ **🎨 Chủ đề giao diện** ở cuối menu bên trái. Trang có hai thẻ: **Chủ đề của tôi** và **Chủ đề đã tải**. Steam phải đang chạy.

## Tìm và áp dụng chủ đề trên trang tính năng

Trên mỗi tính năng được liệt kê ở trên, mở mục **CSS tùy chỉnh** và nhấp **Duyệt chủ đề Steam Workshop**:

1. **Khám phá chủ đề** liệt kê các chủ đề Workshop dành cho tính năng này. Nhập vào **Tìm tên chủ đề** và nhấp **Tìm kiếm**, hoặc dùng **Trang trước** / **Trang sau** để chuyển trang
2. Nhấp vào ảnh thu nhỏ để xem ảnh xem trước
3. Nhấp **Áp dụng**. Chủ đề sẽ được đăng ký, tải xuống và áp dụng cho tính năng này
4. **Đã đăng ký** liệt kê các chủ đề bạn đã đăng ký cho tính năng này

Khi đang áp dụng một chủ đề, trang hiển thị **Chủ đề đang dùng: (tên)** cùng nút **Khôi phục**, và CSS tùy chỉnh ở chế độ chỉ đọc. Nhấp **Khôi phục** để quay về cài đặt của riêng bạn.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Chủ đề đã tải

Liệt kê mọi chủ đề bạn đã đăng ký trên Steam. Chủ đề đã đăng ký không tự động được áp dụng — hãy dùng các nút trên thẻ. OBS sẽ cập nhật ngay.

Mỗi thẻ hiển thị ảnh xem trước, tên, **Đang dùng** nếu có tính năng nào đang dùng chủ đề, và **Bao gồm:** các tính năng mà chủ đề hỗ trợ (dấu ✓ đánh dấu các tính năng đang dùng chủ đề này).

| Nút | Chức năng |
|------|------|
| **Áp dụng tất cả** | Áp dụng chủ đề cho mọi tính năng mà chủ đề bao gồm. Nếu một tính năng đang dùng chủ đề khác, bạn sẽ được yêu cầu xác nhận việc thay thế |
| **Chọn…** | Chọn những tính năng sẽ áp dụng chủ đề |
| **Khôi phục tất cả** | Đưa mọi tính năng đang dùng chủ đề này về cài đặt của riêng bạn trước khi áp dụng |
| **Khôi phục…** | Chọn những tính năng cần khôi phục |
| **Hủy đăng ký** | Hủy đăng ký. Nếu chủ đề đang được dùng, các tính năng đó sẽ được khôi phục trước |

Sau khi áp dụng, một thông báo ở phía dưới sẽ hiển thị những gì đã thay đổi trong 30 giây, kèm nút **Khôi phục** để hoàn tác.

:::note
- Khôi phục sẽ trở về cài đặt của riêng bạn, không phải chủ đề đã bị thay thế
- Các thay đổi giao diện thực hiện trong khi đang áp dụng chủ đề sẽ không được giữ lại sau khi khôi phục
:::

- **Đang tải…**: hãy giữ Steam mở; tải xong là có thể áp dụng
- **Chủ đề đã bị gỡ (#id)**: chủ đề không còn trong danh sách đăng ký Steam của bạn nhưng một số tính năng vẫn đang dùng. Hình ảnh có thể không hiển thị, vì vậy nên khôi phục
- Nếu Steam chưa chạy, hãy mở Steam và nhấp **Làm mới**

{/* TODO: 截圖 — 下載的主題 */}

## Chủ đề của tôi: Tải lên chủ đề

1. Thiết lập giao diện của các tính năng bạn muốn chia sẻ trên trang riêng của từng tính năng
2. Trong **Chủ đề của tôi**, nhấp **Tải lên chủ đề mới**
3. Điền:
   - **Tên chủ đề** (bắt buộc)
   - **Mô tả chủ đề**
   - **Chức năng bao gồm** (ít nhất một)
   - **Ảnh xem trước** (bắt buộc, tối đa 1MB): nhấp **Chọn ảnh xem trước**
4. Tích chọn ô xác nhận bạn có quyền phân phối mọi hình ảnh, phông chữ và âm thanh trong chủ đề. Không được tải lên tài nguyên chỉ được cấp phép cho mục đích cá nhân hoặc phi thương mại
5. Nhấp **Tải chủ đề lên**

Nếu bạn thấy "Vui lòng đồng ý điều khoản Steam Workshop trong trình duyệt trước", hãy đồng ý điều khoản để chủ đề có thể được công khai.

### Quản lý chủ đề đã tải lên

Mỗi chủ đề đã tải lên có:

- **Tải và áp dụng**: áp dụng chủ đề đã xuất bản cho các tính năng của bạn. Thao tác này sẽ ghi đè cài đặt giao diện hiện tại của bạn
- **Chỉnh sửa**: tải lên lại cài đặt giao diện hiện tại của bạn vào cùng chủ đề đó. Nếu bạn chưa tải chủ đề xuống, ảnh xem trước hiện có sẽ không được giữ lại và bạn cần chọn ảnh mới
- **Quản lý trên Steam**: mở chủ đề trong Steam

:::info Giới hạn phiên bản dùng thử
Chủ đề giao diện (Steam Workshop) chỉ có ở phiên bản chính thức. Trong bản dùng thử, không thể mở **🎨 Chủ đề giao diện** và không thể áp dụng chủ đề.

Xem [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
