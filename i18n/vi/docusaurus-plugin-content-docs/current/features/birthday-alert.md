---
sidebar_position: 8.2
---

# Thông báo sinh nhật người xem

Thêm ngày sinh nhật của người xem vào danh sách. Khi một người xem trong danh sách nhắn trong phòng chat lúc bạn đang phát trực tiếp, vào đúng ngày sinh nhật hoặc ít ngày sau đó, thông báo sinh nhật sẽ hiện lên trên luồng trực tiếp. Mỗi người xem chỉ nhận một thông báo cho mỗi lần sinh nhật.

## URL nguồn OBS

```
http://127.0.0.1:7272/birthday-alert
```

Sao chép URL ở đầu trang **Cài đặt Thông báo sinh nhật người xem** và thêm vào OBS dưới dạng Nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source).

:::warning
Thông báo có phát âm thanh. Hãy tích chọn **Điều khiển âm thanh qua OBS** trong thuộc tính nguồn trình duyệt, nếu không âm thanh sẽ không phát trên luồng trực tiếp.
:::

Bật công tắc bên cạnh **Thông báo sinh nhật người xem** ở thanh bên trái. Chỉ khi công tắc đang bật, ứng dụng mới kết nối phòng chat và kiểm tra sinh nhật. Các nút **Thử thông báo** và **Phát lại** vẫn hoạt động khi công tắc đang tắt.

Trang có ba thẻ: **Cài đặt**, **Người xem** và **Giao diện**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Cách hoạt động

- Người xem trong danh sách nhắn tin từ ngày sinh nhật cho đến hết số ngày bạn đặt sau đó sẽ nhận được thông báo. Trước ngày sinh nhật sẽ không có gì hiện ra.
- Mỗi người xem chỉ nhận một thông báo cho mỗi lần sinh nhật. Sinh nhật ngày 12/28 được thông báo vào ngày 1/2 vẫn được tính là sinh nhật của năm trước.
- Thông báo chỉ hiện khi nền tảng mà người xem nhắn tin đang phát trực tiếp. Khi bạn chưa phát, hoặc khi ứng dụng chưa xác định được bạn có đang phát hay không, việc nhắn tin sẽ không hiện cũng không ghi nhận thông báo; thông báo sẽ hiện vào lần tới họ nhắn trong lúc phát.
- Lịch sử trò chuyện được tải về khi phòng chat YouTube kết nối sẽ không được tính, vì vậy khởi động lại ứng dụng sẽ không thông báo cho những người đã nhắn trong lúc ứng dụng đóng.
- Sinh nhật ngày 2/29 sẽ được tính vào ngày 2/28 trong những năm không nhuận.

## Thẻ Cài đặt

### Kết nối trò chuyện

Hiển thị khi tính năng đang bật. Mỗi nền tảng cho biết phòng chat đã được kết nối hay chưa:

- **Twitch**: nếu chưa đặt kênh, dòng này hiển thị **Chưa đặt kênh Twitch — hãy liên kết Twitch trước** cùng nút **Đi tới cài đặt**. Hãy kết nối Twitch trước: [Cài đặt Twitch](../platforms/twitch).
- **YouTube**: nếu phòng chat chưa kết nối, dòng này hiển thị **Kết nối tự động** và **Tự nhập** (đưa bạn đến trường URL phòng chat trong Cài đặt). Nếu bạn dùng kết nối tự động và đã đăng nhập bằng Google, dòng này hiển thị **Nếu đã phát trực tiếp mà vẫn chưa kết nối, hãy bấm Kết nối ở trang Trò chuyện**. Xem [Cài đặt YouTube](../platforms/youtube-settings) và [Phòng chat](./chat).

Khi một nền tảng đã kết nối, dòng đó còn hiển thị **Đang phát**, **Chưa phát** hoặc **Không xác định được đang phát**. Thông báo chỉ hiện khi ở trạng thái **Đang phát**.

### Cài đặt

| Trường | Mô tả |
|-------|-------------|
| **Số ngày sau sinh nhật vẫn tính** | 0–30. Mặc định: 7. 0 = chỉ đúng ngày sinh nhật. |
| **Thời gian hiển thị** | Thời gian mỗi thông báo hiển thị trên màn hình, tính bằng giây (1–60). Mặc định: 6. |

### Thử thông báo

Nhấp **Thử thông báo** để gửi một thông báo mẫu đến OBS, dùng một người xem thử và ngày hôm nay. Thông báo này chỉ hiện trên OBS và không bao giờ được ghi lại, đồng thời vẫn hoạt động khi công tắc ở thanh bên trái đang tắt. Nút sẽ đổi thành **Đã gửi** trong giây lát.

## Thẻ Người xem

### Thêm người xem

Có hai cách để thêm người xem:

- **+ Thêm từ người trò chuyện gần đây**: chọn một người vừa nhắn gần đây. Biểu mẫu sẽ mở ra với tên của họ làm tên ghi chú, tài khoản đã được liên kết sẵn và ngày hôm nay làm ngày sinh nhật.
- **+ Thêm theo tên**: tự nhập tên tài khoản.

**Người trò chuyện gần đây** liệt kê những người xem đã nhắn trong lúc phòng chat được kết nối (tối đa 200 người, lưu trong 30 ngày). Nhấp **Làm mới** để cập nhật. Người xem đã có trong danh sách sẽ hiển thị **Đã thêm** và không thể chọn lại. Ô tìm kiếm sẽ xuất hiện khi danh sách dài.

Điền vào biểu mẫu:

1. **Tên ghi chú**: tên bạn dùng để nhận ra họ, ví dụ `Alex`. Không bắt buộc.
2. **Sinh nhật**: tháng và ngày (không có năm).
3. **Tài khoản**: ít nhất một tài khoản. Một người xem có thể có nhiều tài khoản, ví dụ cả Twitch và YouTube.
   - **＋ Nhập tài khoản**: chọn **Twitch** hoặc **YouTube** rồi nhập tên. Với Twitch, dùng tên đăng nhập hoặc tên hiển thị; với YouTube, dùng @tên định danh hoặc tên kênh.
   - **＋ Từ người trò chuyện gần đây**: thêm một tài khoản đã được liên kết sẵn.
   - **✕** để bỏ một tài khoản.
4. Nhấp **Lưu** (hoặc nhấn Enter). **Hủy** (hoặc Esc) để đóng biểu mẫu.

### Tên tự nhập và liên kết

Tên bạn nhập sẽ được liên kết với tài khoản vào lần đầu người xem đó nhắn. Việc so khớp không phân biệt chữ hoa/chữ thường và bỏ qua ký tự `@` ở đầu. Tên có thể trùng, nên chọn từ người trò chuyện gần đây sẽ chắc hơn.

Với YouTube, hãy nhập @tên định danh: nếu chưa bật **Hiển thị tên người xem thay vì @handle** ở trang Phòng chat, tên kênh có thể không bao giờ khớp.

Mỗi tài khoản trong danh sách hiển thị:

- **Đã liên kết: [tên]**: tài khoản đã được liên kết.
- **Đang chờ “[tên]” nhắn**: tên tự nhập chưa được liên kết.
- **Mới liên kết**: ứng dụng đã tự động liên kết tài khoản này khi người xem nhắn. Hãy kiểm tra có đúng người không, rồi nhấp **✓ Đúng người**, hoặc nhấp **Hủy liên kết** nếu không đúng.
- **Tài khoản này đã có ở “[tên]”**: tên tự nhập khớp với một tài khoản thuộc về người xem khác trong danh sách. Mỗi tài khoản chỉ thuộc về một người xem, vì vậy hãy đổi tên ở đây hoặc xóa một trong hai.

**Hủy liên kết** sẽ mở một ô bên dưới tài khoản. Sau khi hủy liên kết, tên trong ô sẽ được dùng để so khớp (bạn có thể đổi tên này), và tài khoản sẽ liên kết lại khi người xem đó nhắn lần tới.

### Danh sách

Những người xem đang đến dịp thông báo sinh nhật được xếp trước, tiếp theo là các sinh nhật sắp tới. Ô tìm kiếm sẽ xuất hiện khi có hơn 5 người xem. Mỗi người xem hiển thị:

- **Chờ nhắn**: đang là dịp sinh nhật của họ; thông báo sẽ hiện ngay khi họ nhắn.
- **🎂 Đã hiện [ngày]**: thông báo cho lần sinh nhật này đã được hiển thị.
- **▶ Phát lại**: hiển thị lại thông báo của người xem này trên OBS. Dùng được bất cứ lúc nào và không bao giờ được ghi lại.
- **Chỉnh sửa**: thay đổi tên ghi chú, ngày sinh nhật hoặc tài khoản. Đổi ngày sinh nhật sẽ cho phép thông báo hiện lại theo ngày mới.
- **Xóa**: nhấp **Xóa**, sau đó nhấp **Xác nhận xóa**.

## Thẻ Giao diện

### Xem trước

Bản xem trước dùng cùng trang với nguồn OBS. Dùng bộ chọn màu bên cạnh **Xem trước** để đổi màu nền bản xem trước, và nhấp **▶ Phát lại hiệu ứng** để phát lại hiệu ứng thông báo.

### Kiểu thống nhất / Riêng từng nền tảng

- **Kiểu thống nhất**: Twitch và YouTube dùng cùng một kiểu thông báo.
- **Riêng từng nền tảng**: mỗi nền tảng có kiểu riêng. Chọn **Twitch** hoặc **YouTube** bằng các nút bên dưới rồi chỉnh cài đặt của nền tảng đó. Khi chuyển sang lần đầu, các nền tảng chưa tùy chỉnh sẽ sao chép kiểu thống nhất hiện tại, mỗi nền tảng có màu thanh đếm ngược riêng.

**Khôi phục mặc định** khôi phục kiểu mặc định cho kiểu bạn đang chỉnh sửa.

### Hình ảnh

- **Chọn hình ảnh**: chọn một hình ảnh từ trình quản lý tài nguyên. Nếu không chọn, biểu tượng cảm xúc bánh sinh nhật sẽ được hiển thị. **Xóa** để bỏ hình ảnh.
- **Kích thước hình ảnh**: 1–400 px.
- **Vị trí hình ảnh**: **Bên trái**, **Bên phải**, **Phía trên** hoặc **Phía dưới**.

### Âm thanh

Chọn một âm thanh có sẵn: **Không**, **Chuông gió** (mặc định), **Tiền xu**, **Chuông**, **Bốp**, **Kèn báo**. Nhấp **▶** để nghe thử. Nhấp **Chọn âm thanh** để dùng tệp âm thanh của riêng bạn từ trình quản lý tài nguyên.

### Văn bản tùy chỉnh

Viết dòng chữ hiển thị trên thông báo. Để trống để dùng câu mặc định: `Chúc mừng sinh nhật {name}!` Bạn có thể dùng:

| Biến thay thế | Được thay bằng |
|-------------|---------------|
| `{name}` | Tên người xem trong phòng chat |
| `{label}` | Tên ghi chú của bạn (dùng tên trong phòng chat nếu tên ghi chú trống) |
| `{birthday}` | Ngày sinh nhật, ví dụ `10/20` |
| `{MM}` `{DD}` | Tháng và ngày hai chữ số, để tự ghép định dạng, ví dụ `{DD}/{MM}` |
| `{date}` | Ngày sinh nhật theo ngôn ngữ của overlay |
| `{platform}` | Tên nền tảng |

### Văn bản và màu sắc

- **Văn bản**: đặt phông chữ, cỡ chữ và màu cho **Văn bản tùy chỉnh** và **Tên người xem**.
- **Màu sắc**: **Nền**, **Đổ bóng** và **Thanh đếm ngược**.

### CSS tùy chỉnh

Mở rộng **CSS tùy chỉnh** để chỉnh CSS của kiểu bạn đang chỉnh sửa (kiểu thống nhất hoặc nền tảng đang chọn). **Khôi phục mặc định** khôi phục CSS mẫu, còn **Quản lý tài nguyên** mở trình quản lý tài nguyên. Bạn cũng có thể áp dụng chủ đề Steam Workshop tại đây. Khi đang áp dụng một chủ đề, CSS sẽ ở chế độ chỉ đọc. Xem [Chủ đề giao diện](./themes).

:::info Phiên bản dùng thử
- Tối đa 3 người xem trong danh sách. Nếu danh sách có nhiều hơn (ví dụ từ dữ liệu lưu của phiên bản chính thức), những người xem vượt quá sẽ bị khóa 🔒: họ không bao giờ kích hoạt thông báo và không thể chỉnh sửa hay phát lại.
- CSS tùy chỉnh chỉ có ở phiên bản chính thức.
- Thông báo hiển thị hình mờ (watermark) trên OBS.

Xem [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::

## Câu hỏi thường gặp

**Q: Không có âm thanh trên luồng trực tiếp?**
Kiểm tra xem **Điều khiển âm thanh qua OBS** đã được tích chọn trong thuộc tính nguồn trình duyệt chưa và nguồn đó có bị tắt tiếng trong bộ trộn âm thanh của OBS không. Đồng thời kiểm tra **Âm thanh** không được đặt là **Không**.

**Q: Người xem đã nhắn vào ngày sinh nhật nhưng không có thông báo nào hiện ra.**
Kiểm tra công tắc ở thanh bên trái đã bật, **Kết nối trò chuyện** trong thẻ **Cài đặt** hiển thị **Đang phát** cho nền tảng đó, và tài khoản trong danh sách hiển thị **Đã liên kết** hoặc tên tự nhập khớp với tên trong phòng chat của họ. Nếu thông báo đã hiện trong lúc OBS chưa mở, hãy dùng **▶ Phát lại**.

**Q: Tôi thêm nguồn OBS muộn. Các thông báo trước đó có được phát lại không?**
Không. Nguồn vừa mở chỉ hiển thị những thông báo đến sau khi nó kết nối. Dùng **▶ Phát lại** trong thẻ **Người xem** để hiển thị lại một thông báo.
