---
sidebar_position: 5
---

# Media Board

Hiển thị hình ảnh, phát video và phát hiệu ứng âm thanh trên luồng trực tiếp chỉ bằng một cú nhấp chuột hoặc phím tắt.

Trang có ba thẻ: **Hình ảnh**, **Video** và **Âm thanh**. Mỗi thẻ có URL nguồn OBS riêng.

| Thẻ | URL nguồn OBS | Điều khiển âm thanh qua OBS |
|-----|----------------|-----------------------|
| **Hình ảnh** | `http://127.0.0.1:7272/imageboard` | Không cần |
| **Video** | `http://127.0.0.1:7272/videoboard` | Bắt buộc |
| **Âm thanh** | `http://127.0.0.1:7272/soundboard` | Bắt buộc |

Nhấp **Sao chép** bên cạnh mỗi URL và thêm vào OBS dưới dạng nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source). Video và âm thanh được phát trong nguồn OBS, không phải bên trong Stream Toolkit, vì vậy bạn phải bật **Điều khiển âm thanh qua OBS** cho hai nguồn này, nếu không người xem sẽ không nghe thấy.

:::tip
Bật công tắc bên cạnh **Media Board** ở thanh bên trái (**Bật hiển thị trên OBS**). Khi công tắc tắt, không thể hiển thị hình ảnh, video và âm thanh cũng không phát, dù bạn dùng nút bấm hay phím tắt.
:::

## Điều khiển chung

Hình ảnh, video và âm thanh đều được liệt kê dưới dạng thẻ:

- Nhấp vào một thẻ để mở rộng hoặc thu gọn phần cài đặt của nó
- Ô đánh dấu ở bên phải thẻ: khi được tích chọn, mục đó sẽ xuất hiện trong công cụ khởi động của [Công cụ nhanh](./quick-tools). Mục mới được tích chọn theo mặc định
- **✕** để xóa mục
- Nếu tệp cục bộ đã bị di chuyển hoặc xóa, thẻ sẽ hiển thị **Không tìm thấy tệp**

### Phím tắt

Mỗi mục có thể có phím tắt riêng:

1. Mở rộng thẻ và nhấp vào nút phím tắt
2. Nhấn tổ hợp phím bạn muốn, rồi thả ra. Nhấn **Esc** để hủy
3. Để gỡ phím tắt, nhấp **Xóa**

Nếu tổ hợp phím đã được tính năng khác sử dụng, phím tắt sẽ không được lưu và nút hiển thị thông báo xung đột. Phím tắt vẫn hoạt động ngay cả khi Stream Toolkit không phải là cửa sổ đang hoạt động. Tất cả phím tắt cũng được liệt kê trên trang [Phím tắt](./hotkeys).

## Hình ảnh

{/* TODO: 截圖 — 圖片分頁 */}

### Thêm hình ảnh

1. Nhấp **Thêm hình ảnh**
2. Chọn một tệp (jpg, jpeg, png hoặc gif). Tên tệp sẽ trở thành tên hình ảnh

Mở rộng thẻ sẽ hiển thị ảnh thu nhỏ và các cài đặt sau:

- **Tên**: tên hình ảnh
- **Đường dẫn tệp**: nhấp **Chọn lại** để chọn tệp khác
- **Phím tắt**: nhấn một lần để hiển thị hình ảnh, nhấn lần nữa để ẩn
- **Cài vị trí và kích thước**: xem bên dưới
- **Xóa hình ảnh**: xóa hình ảnh

### Hiện và ẩn

Nhấp nút **○** trên thẻ để hiển thị hình ảnh trong OBS. Nút sẽ chuyển thành **◉**. Nhấp lần nữa để ẩn hình ảnh.

### Cài đặt hiển thị

**Cho phép hiển thị nhiều hình cùng lúc** mặc định tắt. Khi tắt, việc hiển thị một hình ảnh sẽ ẩn hình ảnh đang hiển thị. Bật tùy chọn này để hiển thị nhiều hình ảnh cùng lúc.

### Cài vị trí và kích thước

- **Vị trí X** / **Vị trí Y**: tính bằng px. 0/0 là chính giữa nguồn. Giá trị dương di chuyển sang phải/xuống, giá trị âm di chuyển sang trái/lên
- **Rộng** / **Cao**: tính bằng % kích thước gốc. 100 = kích thước gốc. Nút 🔗 khóa tỷ lệ khung hình (mặc định bật). Nhấp vào để thu phóng tự do
- Khi hình ảnh đang hiển thị, các thay đổi được xem trước trực tiếp trong OBS
- **Lưu** để giữ thay đổi, **Đặt lại** để quay về giá trị lúc bạn mở cửa sổ, **Hủy** để đóng mà không lưu

## Video

{/* TODO: 截圖 — 影片分頁 */}

Nhấp **Thêm video** để thêm một thẻ, sau đó mở rộng thẻ:

- **Tên video**: tên hiển thị trên thẻ
- **Nguồn**: **YouTube** hoặc **Cục bộ**
  - **YouTube**: dán liên kết video vào **URL YouTube**. Nhấp **Thử phân tích** để kiểm tra. Nếu thành công sẽ hiển thị "Đã phân tích, tự động áp dụng khi phát"
  - **Cục bộ**: nhấp **Chọn tệp** để chọn tệp mp4, webm hoặc ogg. Giới hạn dung lượng là 200MB, tệp càng lớn độ trễ càng cao. Để có nền trong suốt, hãy dùng video WebM (VP9 Alpha)
- **Phát tuần hoàn**: phát lặp lại video
- **Thời gian phát**: đặt **Từ** và **Đến** (giờ, phút, giây, mili giây). Để **Đến** ở 00:00 để phát tới hết
- **Âm lượng**: 0–100%
- **Phím tắt**: nhấn để phát video. Nhấn lần nữa khi video đang phát để dừng
- **Cài vị trí và kích thước**: các trường vị trí và kích thước giống như với hình ảnh. Nhấp **Xem trước lặp lại** để phát lặp video trong OBS khi bạn điều chỉnh, và **Dừng xem trước** để dừng. Nhấp **Lưu** hoặc **Hủy** khi xong

Nhấp **▶** trên thẻ để phát video trong OBS. Nhấp **■** để dừng.

## Âm thanh

{/* TODO: 截圖 — 音效分頁 */}

Nhấp **Thêm âm thanh** để thêm một thẻ, sau đó mở rộng thẻ:

- **Tên âm thanh**: tên hiển thị trên thẻ
- **Nguồn**: **URL YouTube** hoặc **Tệp cục bộ**
  - **URL YouTube**: dán liên kết và nhấp **Thử phân tích** để kiểm tra
  - **Tệp cục bộ**: nhấp **Chọn tệp** để chọn tệp mp3, wav, ogg, flac, m4a, aac hoặc opus
- **Thời gian phát**: đặt **Từ** và **Đến**. Để **Đến** ở 00:00 để phát tới hết
- **Âm lượng**: 0–100%
- **Phím tắt**: nhấn để phát âm thanh

Nhấp **▶** trên thẻ để phát âm thanh trong OBS. Nhấp **■** để dừng. Mỗi lần chỉ phát một âm thanh. Phát âm thanh khác sẽ dừng âm thanh hiện tại.

:::info Giới hạn phiên bản dùng thử
- Bạn chỉ có thể thêm **1** hình ảnh, **1** video và **1** âm thanh
- Overlay hình ảnh và video hiển thị hình mờ (watermark)

Xem chi tiết tại [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::

## Câu hỏi thường gặp

**Q: Video hoặc âm thanh có phát, nhưng không có âm thanh trên luồng trực tiếp.**
Hãy đảm bảo **Điều khiển âm thanh qua OBS** đã được tích chọn cho các nguồn `/videoboard` và `/soundboard`, và các nguồn đó không bị tắt tiếng trong bộ trộn âm thanh của OBS.

**Q: Tôi không chọn được tệp video của mình.**
Chỉ có thể chọn tệp mp4, webm và ogg, tối đa 200MB. Nếu tệp lớn hơn, một thông báo sẽ hiển thị giới hạn và tệp không được thêm vào.
