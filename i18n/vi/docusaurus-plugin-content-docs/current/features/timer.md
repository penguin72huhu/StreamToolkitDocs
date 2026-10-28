---
sidebar_position: 11
---

# Bộ đếm thời gian

Hiển thị bộ đếm ngược hoặc đồng hồ bấm giờ trên luồng trực tiếp. Bộ đếm ngược có thể được cộng hoặc trừ thời gian bằng các nút bạn nhấp, hoặc tự động từ lượt theo dõi, đăng ký, Bits trên Twitch và các khoản quyên góp.

Trang có hai thẻ: **Cài đặt** và **Tạo bộ đếm giờ**. Hãy tạo bộ đếm giờ trước, sau đó điều khiển nó từ **Cài đặt**.

## Bước 1: Tạo bộ đếm giờ

1. Mở **Bộ đếm thời gian** ở thanh bên trái và chuyển sang thẻ **Tạo bộ đếm giờ**
2. Trong mục **Bộ đếm giờ của tôi**, nhấp **Thêm**. Một bộ đếm ngược mới được tạo với thời gian ban đầu là 10 phút và ba tùy chọn thời gian (+30 giây, +1 phút, +5 phút)
3. Nhấp vào thẻ bộ đếm giờ để chỉnh sửa. Nhấp **✕** trên thẻ để xóa bộ đếm giờ đó

Phần **Xem trước** hiển thị giao diện của bộ đếm giờ đang chọn. Dùng ô màu bên cạnh để đổi màu nền của bản xem trước.

Bên dưới bản xem trước, chuyển đổi giữa **Cài đặt bộ đếm giờ** và **Giao diện**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Bước 2: Cài đặt bộ đếm giờ

### Chế độ đếm giờ

- **Đếm ngược**: đếm ngược từ thời gian ban đầu
- **Bấm giờ**: đếm lên từ 0 và có thể ghi lại các vòng. Chế độ bấm giờ không có thời gian ban đầu, thời gian cảnh báo, âm thanh kết thúc hay tùy chọn thời gian

### Tên

Tên hiển thị trong danh sách bộ đếm giờ, các danh sách thả xuống và Công cụ nhanh.

### Thời gian ban đầu

Thời gian bắt đầu của bộ đếm ngược, tính bằng giờ, phút và giây. Tổng số giây được hiển thị bên cạnh.

### Thời gian cảnh báo

Khi thời gian còn lại đạt đến giá trị này, chữ của bộ đếm giờ sẽ chuyển sang màu **Cảnh báo** được đặt trong **Giao diện**. Để ở 0 nếu không cần cảnh báo.

### Âm thanh khi đếm ngược kết thúc

Âm thanh được phát khi bộ đếm ngược về 0. Chọn **Không** hoặc một trong các âm thanh có sẵn (**Chuông gió**, **Tiền xu**, **Chuông**, **Bốp**, **Kèn báo**). Nhấp **▶** để nghe thử. Để dùng tệp của riêng bạn, nhấp **Chọn âm thanh** và chọn một tệp từ trình quản lý tài nguyên.

Âm thanh được phát bởi nguồn trình duyệt OBS, vì vậy hãy bật **Điều khiển âm thanh qua OBS** cho nguồn bộ đếm giờ. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source).

### Tùy chọn thời gian

Tùy chọn thời gian là các nút cộng/trừ thời gian của bộ đếm ngược. Mỗi bộ đếm giờ có thể có tối đa 20 tùy chọn.

Để thêm, điền vào biểu mẫu **Thêm tùy chọn thời gian**:

1. **Nguồn kích hoạt**: chọn điều gì sẽ tự động áp dụng tùy chọn này
   - **Thủ công**: chỉ áp dụng khi bạn nhấp vào nút
   - **Theo dõi**: áp dụng với mỗi lượt theo dõi mới trên Twitch
   - **Twitch Bits**: áp dụng khi có lượt cheer Bits
   - **Đăng ký mới Twitch**: áp dụng khi có lượt đăng ký Twitch
   - **Ủng hộ**: áp dụng khi có khoản quyên góp. Dùng **Nền tảng ủng hộ** để chọn tính những nền tảng nào trong **YouTube**, **O'Pay**, **ECPay** và **PayPal**
2. Với **Twitch Bits** và **Ủng hộ**, đặt thêm:
   - **Ngưỡng kích hoạt**: số Bits hoặc số tiền quyên góp cho một bước
   - **Cách quy đổi**: **Kích hoạt theo bội số nguyên** hoặc **Quy đổi theo tỷ lệ** (xem ví dụ bên dưới)
3. **Thêm thời gian**: chọn **＋** hoặc **－**, sau đó đặt giờ, phút và giây
4. Nhấp **Thêm**

Để thay đổi một tùy chọn, nhấp **Chỉnh sửa** của tùy chọn đó, thay đổi biểu mẫu, rồi nhấp **Lưu** (hoặc **Hủy**). Nhấp **✕** để xóa. Các tùy chọn có kích hoạt tự động được đánh dấu bằng 🔗 kèm tên nguồn kích hoạt.

**Ví dụ quy đổi**: Ngưỡng kích hoạt 100 bits, Thêm thời gian +1 phút, và một người xem cheer 250 bits:

- **Kích hoạt theo bội số nguyên**: chỉ tính các bội số đầy đủ của ngưỡng → 2 × 1 phút = **+2 phút**
- **Quy đổi theo tỷ lệ**: 250 ÷ 100 × 1 phút → **+2 phút 30 giây**

Với khoản quyên góp, số tiền được quy đổi sang tiền tệ đã chọn trong Cài đặt của ứng dụng trước khi so sánh với ngưỡng.

:::note
- Kích hoạt tự động chỉ ảnh hưởng đến bộ đếm ngược
- Các tùy chọn thời gian có kích hoạt tự động vẫn xuất hiện dưới dạng nút trong bảng điều khiển, nên bạn cũng có thể nhấp thủ công
- **Đăng ký mới Twitch** áp dụng một lần cho mỗi sự kiện đăng ký: một lần tặng nhiều gói đăng ký chỉ áp dụng một lần. Đăng ký lại chỉ được áp dụng khi bật **Tính cả đăng ký lại** trong [Thanh mục tiêu Twitch](./goal)
:::

### Phím tắt điều khiển

Đặt phím tắt cho bộ đếm giờ này:

- **Bắt đầu／Tạm dừng**
- **Phím tắt chia vòng** (chỉ bấm giờ)
- **Phím tắt đặt lại**

Xem thêm [Phím tắt](./hotkeys).

## Bước 3: Giao diện

| Cài đặt | Mô tả |
|---------|-------------|
| **Phông chữ** | Phông chữ của chữ hiển thị thời gian |
| **Cỡ chữ** | 12–300 px |
| **Màu chữ** | **Bình thường**: **Màu đơn** hoặc **Chuyển sắc** (hai màu và **Góc**). **Cảnh báo** (chỉ đếm ngược): màu được dùng khi đã đạt thời gian cảnh báo |
| **Màu nền** | Nền phía sau thời gian |
| **Viền** | Màu viền, **Độ trong suốt** và **Độ dày** (0–20 px) |
| **Đổ bóng** | Màu bóng, **Độ trong suốt**, **Làm mờ** và độ lệch **X** / **Y** |

## Bước 4: Chọn chế độ hiển thị và thêm nguồn OBS

Chuyển sang thẻ **Cài đặt**. Trong mục **Bảng điều khiển**, chọn **Chế độ hiển thị**:

| Chế độ | Mô tả | URL nguồn OBS |
|------|-------------|----------------|
| **Một bộ đếm giờ** | OBS chỉ hiển thị bộ đếm giờ đang chọn. Chuyển bộ đếm giờ bằng danh sách thả xuống **Bộ đếm giờ hiện tại** | `http://127.0.0.1:7272/timer` |
| **Nhiều bộ đếm giờ** | Mỗi bộ đếm giờ có URL riêng và có thể thêm vào OBS riêng lẻ | `http://127.0.0.1:7272/timer/<timer ID>` |

Ở chế độ **Nhiều bộ đếm giờ**, chọn bộ đếm giờ từ **Thêm vào hiển thị**. Mỗi bộ đếm giờ được thêm sẽ có thẻ riêng kèm **URL nguồn OBS** của nó. Nhấp **Sao chép** để sao chép. Nhấp **✕** trên thẻ để gỡ khỏi hiển thị.

Thêm URL đã sao chép vào OBS dưới dạng nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source).

:::tip
Hãy bật thêm công tắc bên cạnh **Bộ đếm thời gian** ở thanh bên trái (**Bật hiển thị trên OBS**). Khi công tắc tắt, bộ đếm giờ sẽ bị ẩn trong OBS.
:::

## Bước 5: Điều khiển bộ đếm giờ

Mỗi thẻ bộ đếm giờ trong thẻ **Cài đặt** có:

- **Bắt đầu** / **Tạm dừng**: với đồng hồ bấm giờ, nút tạm dừng hiển thị **Dừng**. Bộ đếm ngược đã về 0 không thể bắt đầu cho đến khi bạn đặt lại hoặc thêm thời gian
- **Chia vòng** (chỉ bấm giờ): ghi lại một vòng khi đang chạy. Các vòng được liệt kê bên dưới thẻ kèm thời gian và chênh lệch so với vòng trước
- **Đặt lại**: dừng bộ đếm giờ và đưa về thời gian ban đầu (0 với đồng hồ bấm giờ), xóa các vòng
- **Thêm thời gian** (chỉ đếm ngược): mỗi tùy chọn thời gian có một nút

Thời gian đang chạy chỉ hiển thị trên overlay OBS, không hiển thị trên trang cài đặt. Bạn cũng có thể điều khiển bộ đếm giờ từ cửa sổ [Công cụ nhanh](./quick-tools), nơi cũng hiển thị thời gian hiện tại.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Giới hạn phiên bản dùng thử
Bạn chỉ có thể tạo **1** bộ đếm giờ. Xem chi tiết tại [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
