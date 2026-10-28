---
sidebar_position: 14
---

# Vòng quay

Tạo vòng quay giải thưởng của riêng bạn và quay chúng trên luồng trực tiếp. Bạn có thể đặt trọng số cho từng lựa chọn, màu sắc của vòng quay, và có xóa lựa chọn đã trúng sau đó hay không.

Trang có ba thẻ: **Cài đặt**, **Tạo vòng quay** và **Lịch sử**. Hãy tạo vòng quay trước, sau đó quay từ **Cài đặt**.

## Bước 1: Tạo vòng quay

1. Mở **Vòng quay** ở thanh bên trái và chuyển sang thẻ **Tạo vòng quay**
2. Trong mục **Vòng quay của tôi**, nhấp **Thêm**. Một vòng quay mới có tên "Vòng quay 1" (sau đó là "Vòng quay 2", v.v.) sẽ xuất hiện
3. Nhấp vào thẻ vòng quay để chỉnh sửa. Nhấp **✕** trên thẻ để xóa vòng quay đó

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Tiêu đề vòng quay

Nhập tên cho vòng quay. Tên này được dùng trong danh sách vòng quay, các danh sách thả xuống và lịch sử.

### Nội dung vòng quay

1. Nhấp **Chỉnh sửa nội dung**
2. Nhập các lựa chọn, **mỗi dòng một lựa chọn**
3. Nhấp **Xác nhận**

### Trọng số

Khi vòng quay đã có lựa chọn, mỗi lựa chọn sẽ có ô **Trọng số** (tối thiểu 1, mặc định 1). Kích thước ô trên vòng quay và khả năng trúng của một lựa chọn đều tỷ lệ với trọng số của nó. Ví dụ, lựa chọn có trọng số 2 có khả năng trúng gấp đôi lựa chọn có trọng số 1.

### Màu chủ đề vòng quay

- **Tối giản**: bảng màu trắng và xám có sẵn
- **Tùy chỉnh**: tạo bảng màu của riêng bạn. Nhập **Tên**, chọn **Màu sắc (3–5 màu)** với **＋** để thêm màu và **✕** để gỡ màu, sau đó nhấp **Thêm**

Để thay đổi chủ đề tùy chỉnh, nhấp nút **✎** của nó. Để xóa, nhấp **✕**. Các chủ đề tùy chỉnh cũng được dùng làm bảng màu cho hoạt ảnh vòng quay trong [Quay thưởng](./lottery).

### Xóa lựa chọn sau khi rút

Khi bật, lựa chọn đã trúng sẽ bị gỡ khỏi vòng quay trước lượt quay tiếp theo. Nhấp **Đặt lại** để đưa tất cả lựa chọn trở lại.

## Bước 2: Chọn chế độ hiển thị và thêm nguồn OBS

Chuyển sang thẻ **Cài đặt** và chọn **Chế độ hiển thị**:

| Chế độ | Mô tả | URL nguồn OBS |
|------|-------------|----------------|
| **Một vòng quay** | OBS chỉ hiển thị vòng quay đang chọn. Chuyển vòng quay bằng danh sách thả xuống **Vòng quay đang dùng** | `http://127.0.0.1:7272/turntable` |
| **Nhiều vòng quay** | OBS có thể hiển thị nhiều vòng quay cùng lúc. Mỗi vòng quay có URL riêng | `http://127.0.0.1:7272/turntable/<wheel ID>` |

Ở chế độ **Nhiều vòng quay**, chọn vòng quay từ **Thêm vào hiển thị vòng quay**. Mỗi vòng quay được thêm sẽ có thẻ riêng kèm **URL nguồn OBS** của nó. Nhấp **Sao chép** để sao chép. Nhấp **✕** trên thẻ để gỡ vòng quay đó khỏi hiển thị.

Thêm URL đã sao chép vào OBS dưới dạng nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source). Vòng quay không phát âm thanh, vì vậy bạn không cần bật "Điều khiển âm thanh qua OBS".

:::tip
Hãy bật thêm công tắc bên cạnh **Vòng quay** ở thanh bên trái (**Bật hiển thị trên OBS**). Khi công tắc tắt, overlay sẽ bị ẩn.
:::

## Bước 3: Quay

Trên mỗi thẻ vòng quay trong thẻ **Cài đặt**:

- **Khởi động**: bắt đầu quay. Khi hoạt ảnh kết thúc, overlay sẽ hiển thị kết quả. Không thể nhấp nút khi vòng quay chưa có lựa chọn hoặc đang quay
- **Đặt lại**: đưa các lựa chọn đã bị gỡ trở lại, đặt lại vòng quay và xóa **Danh sách trúng thưởng** hiện tại

**Danh sách trúng thưởng** của thẻ thu thập mọi kết quả kể từ lần **Đặt lại** gần nhất.

Bạn cũng có thể dùng **Khởi động** và **Đặt lại** từ cửa sổ [Công cụ nhanh](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Lịch sử

Thẻ **Lịch sử** lưu một bản ghi cho mỗi lượt, từ lần quay đầu tiên đến lần **Đặt lại** tiếp theo. Bản ghi liệt kê thời gian, tiêu đề vòng quay và người trúng thưởng. Chỉ lưu bản ghi vòng quay trong 30 ngày gần nhất. Để xóa một bản ghi, nhấp 🗑 rồi nhấp **Xác nhận xóa**.

:::info Giới hạn phiên bản dùng thử
- Bạn chỉ có thể tạo **1** vòng quay
- Overlay OBS hiển thị hình mờ (watermark)

Xem chi tiết tại [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
