---
sidebar_position: 8.1
---

# Thông báo người theo dõi mới

Hiển thị thông báo trên luồng trực tiếp khi có người theo dõi bạn trên Twitch hoặc đăng ký kênh YouTube của bạn.

## URL nguồn OBS

```
http://127.0.0.1:7272/fan-alert
```

Sao chép URL ở đầu trang **Cài đặt Thông báo người theo dõi mới** và thêm vào OBS dưới dạng Nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source).

:::warning
Thông báo có phát âm thanh. Hãy tích chọn **Điều khiển âm thanh qua OBS** trong thuộc tính nguồn trình duyệt, nếu không âm thanh sẽ không phát trên luồng trực tiếp.
:::

Dùng công tắc bên cạnh **Thông báo người theo dõi mới** ở thanh bên trái để bật hoặc tắt thông báo. Khi công tắc tắt, người theo dõi mới sẽ không được hiển thị cũng không được ghi lại, và các nút thử cũng không hoạt động.

Khi nhiều người theo dõi đến gần nhau, các thông báo sẽ được xếp hàng và hiển thị lần lượt. Overlay này có hàng đợi riêng, nên không bao giờ phải chờ sau [Thông báo quyên góp](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Thẻ Cài đặt

### Nền tảng kết nối

Tích chọn các nền tảng sẽ kích hoạt thông báo: **Twitch** và **YouTube** (mặc định đều được tích chọn). Dấu chấm xanh lá nghĩa là nền tảng đã được kết nối; nếu chưa, dòng đó hiển thị **Chưa ủy quyền**.

- **Twitch**: mỗi lượt theo dõi mới sẽ kích hoạt thông báo ngay lập tức. Hãy kết nối Twitch trước: [Cài đặt Twitch](../platforms/twitch).
- **YouTube**: người đăng ký mới. Hãy đăng nhập bằng Google trước: [Cài đặt YouTube](../platforms/youtube-settings).

Cách tìm người đăng ký YouTube:

- YouTube không có sự kiện "người đăng ký mới" theo thời gian thực, vì vậy ứng dụng hỏi YouTube danh sách người đăng ký gần đây nhất của bạn mỗi 1,5 phút.
- Ứng dụng chỉ kiểm tra khi bạn đang phát trực tiếp và phòng chat trực tiếp YouTube đã được kết nối với buổi phát đó. Ứng dụng không kiểm tra trong phòng chờ hoặc sau khi buổi phát đã kết thúc.
- Những người đã đăng ký trước khi buổi phát bắt đầu (hơn khoảng 5 phút trước khi bắt đầu kiểm tra) sẽ không được thông báo.
- Như gợi ý trên trang có ghi, **YouTube chỉ thông báo người xem công khai lượt đăng ký, có thể trễ vài phút đến vài giờ.**

### Cài đặt

| Trường | Mô tả |
|-------|-------------|
| **Thời gian hiển thị** | Thời gian mỗi thông báo hiển thị trên màn hình, tính bằng giây (1–60). Mặc định: 5. |
| **Cùng một người xem tối đa một lần mỗi 24 giờ** | Mặc định tắt. Khi bật, cùng một người xem theo dõi lại trong vòng 24 giờ (ví dụ bỏ theo dõi rồi theo dõi lại) sẽ không được hiển thị và không được ghi lại. |

### Thử thông báo

Nhấp **Thử thông báo (Twitch)** hoặc **Thử thông báo (YouTube)** để gửi một thông báo mẫu đến OBS. Thông báo thử không được thêm vào lịch sử.

Nếu Thông báo người theo dõi mới đang tắt, thông báo thử sẽ không phát và trang hiển thị **Hãy bật Thông báo người theo dõi mới trong công tắc nhanh trước**.

## Thẻ Giao diện

### Xem trước

Bản xem trước dùng cùng trang với nguồn OBS. Dùng bộ chọn màu bên cạnh **Xem trước** để đổi màu nền bản xem trước, và nhấp **▶ Phát lại hiệu ứng** để phát lại hiệu ứng thông báo.

### Kiểu thống nhất / Riêng từng nền tảng

- **Kiểu thống nhất**: Twitch và YouTube dùng cùng một kiểu thông báo.
- **Riêng từng nền tảng**: mỗi nền tảng có kiểu riêng. Chọn **Twitch** hoặc **YouTube** bằng các nút bên dưới rồi chỉnh cài đặt của nền tảng đó. Khi chuyển sang lần đầu, các nền tảng chưa tùy chỉnh sẽ sao chép kiểu thống nhất hiện tại, mỗi nền tảng có màu thanh đếm ngược riêng.

**Khôi phục mặc định** khôi phục kiểu mặc định cho kiểu bạn đang chỉnh sửa.

### Hình ảnh

- **Chọn hình ảnh**: chọn một hình ảnh từ trình quản lý tài nguyên. Nếu không chọn, biểu tượng cảm xúc trái tim sẽ được hiển thị. **Xóa** để bỏ hình ảnh.
- **Kích thước hình ảnh**: 1–400 px.
- **Vị trí hình ảnh**: **Bên trái**, **Bên phải**, **Phía trên** hoặc **Phía dưới**.

### Âm thanh

Chọn một âm thanh có sẵn: **Không**, **Chuông gió** (mặc định), **Tiền xu**, **Chuông**, **Bốp**, **Kèn báo**. Nhấp **▶** để nghe thử. Nhấp **Chọn âm thanh** để dùng tệp âm thanh của riêng bạn từ trình quản lý tài nguyên.

### Văn bản tùy chỉnh

Viết dòng chữ hiển thị trên thông báo. Dùng `{name}` cho tên người theo dõi và `{platform}` cho tên nền tảng. Để trống để dùng câu mặc định: `Chào mừng {name}, cảm ơn đã theo dõi!`

### Văn bản và màu sắc

- **Văn bản**: đặt phông chữ, cỡ chữ và màu cho **Văn bản tùy chỉnh** và **Tên người theo dõi**.
- **Màu sắc**: **Nền**, **Đổ bóng** và **Thanh đếm ngược**.

### CSS tùy chỉnh

Mở rộng **CSS tùy chỉnh** để chỉnh CSS của kiểu bạn đang chỉnh sửa (kiểu thống nhất hoặc nền tảng đang chọn). **Khôi phục mặc định** khôi phục CSS mẫu, còn **Quản lý tài nguyên** mở trình quản lý tài nguyên. Bạn cũng có thể áp dụng chủ đề Steam Workshop tại đây. Khi đang áp dụng một chủ đề, CSS sẽ ở chế độ chỉ đọc. Xem [Chủ đề giao diện](./themes).

## Thẻ Lịch sử

Liệt kê những người theo dõi mới gần đây từ cả hai nền tảng, mới nhất ở trên cùng: nền tảng, tên và thời gian. Lịch sử chỉ hiển thị trong ứng dụng, không bao giờ hiển thị trên overlay.

- Lưu tối đa 100 người theo dõi, và các mục cũ hơn 30 ngày sẽ được tự động xóa.
- Nhấp **Xóa** để làm trống danh sách.

:::info Phiên bản dùng thử
CSS tùy chỉnh chỉ có ở phiên bản chính thức, và thông báo hiển thị hình mờ (watermark) trên OBS. Xem [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::

## Câu hỏi thường gặp

**Q: Không có âm thanh trên luồng trực tiếp?**
Kiểm tra xem **Điều khiển âm thanh qua OBS** đã được tích chọn trong thuộc tính nguồn trình duyệt chưa và nguồn đó có bị tắt tiếng trong bộ trộn âm thanh của OBS không. Đồng thời kiểm tra **Âm thanh** không được đặt là **Không**.

**Q: Một người đăng ký YouTube không nhận được thông báo.**
Chỉ những lượt đăng ký công khai mới được báo về, và YouTube có thể mất từ vài phút đến vài giờ để báo. Ứng dụng cũng chỉ kiểm tra khi bạn đang phát trực tiếp và phòng chat trực tiếp YouTube đã được kết nối.

**Q: Tôi thêm nguồn OBS muộn. Các thông báo trước đó có được phát lại không?**
Không. Nguồn vừa mở chỉ hiển thị những thông báo đến sau khi nó kết nối. Những người theo dõi trước đó vẫn có trong thẻ **Lịch sử**.
