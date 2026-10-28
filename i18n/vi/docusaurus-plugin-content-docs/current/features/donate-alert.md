---
sidebar_position: 8
---

# Thông báo quyên góp

Hiển thị thông báo kèm hình ảnh, âm thanh, tên người ủng hộ, số tiền và lời nhắn khi có người quyên góp.

## URL nguồn OBS

```
http://127.0.0.1:7272/donate-alert
```

Sao chép URL ở đầu trang **Cài đặt Thông báo quyên góp** và thêm vào OBS dưới dạng Nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source).

:::warning
Thông báo có phát âm thanh. Hãy tích chọn **Điều khiển âm thanh qua OBS** trong thuộc tính nguồn trình duyệt, nếu không âm thanh sẽ không phát trên luồng trực tiếp.
:::

Dùng công tắc bên cạnh **Thông báo quyên góp** ở thanh bên trái để bật hoặc tắt thông báo. Khi công tắc tắt, không có thông báo nào được hiển thị (kể cả thông báo thử), nhưng các khoản quyên góp vẫn được ghi lại trên [Bảng quyên góp](./sponsors).

Khi nhiều khoản quyên góp đến gần nhau, các thông báo sẽ được xếp hàng và hiển thị lần lượt.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Thẻ Cài đặt

### Nền tảng kết nối

Tích chọn các nền tảng sẽ kích hoạt thông báo: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Dấu chấm xanh lá nghĩa là nền tảng đã được kết nối; nếu chưa, dòng đó hiển thị **(Chưa kết nối)**. Các ô đánh dấu này chỉ ảnh hưởng đến thông báo, không ảnh hưởng đến Thanh mục tiêu quyên góp hay Bảng quyên góp.

**Twitch ⚙️** (hiển thị khi Twitch đã kết nối và được tích chọn):

1. Chọn **Tính cả Bits và đăng ký**, **Chỉ tính Bits** hoặc **Chỉ tính đăng ký**
2. **Tính cả đăng ký lại**: có kích hoạt thông báo khi đăng ký lại hay không (hiển thị khi có tính đăng ký)
3. **Dưới [N] Bits sẽ không được tính**: tích chọn và nhập mức tối thiểu để các lượt cheer nhỏ hơn không kích hoạt thông báo (hiển thị khi có tính Bits)
4. Nhấp **Lưu**

**YouTube ⚙️**:

- **Hiển thị tên người xem thay vì @handle**: chỉ dùng được sau khi bạn đăng nhập bằng Google.
- **Sự kiện được tính**: **Super Chat**, **Super Sticker**, **Hội viên mới**, **Gia hạn hội viên**, **Hội viên được tặng**, **Đá quý**. **Đá quý** cần đăng nhập Google.

Nếu phòng chat trực tiếp YouTube chưa được liên kết, dòng đó hiển thị **Chưa kết nối URL phòng chat** cùng **Kết nối tự động** (cần đăng nhập Google) và **Tự nhập** (đưa bạn đến trường URL phòng chat trong Cài đặt). Nếu đã tích chọn một sự kiện hội viên nhưng chưa đặt giá hội viên, hãy nhấp **⚠ Chưa đặt giá hội viên** để đi đến phần thiết lập. Xem [Cài đặt YouTube](../platforms/youtube-settings).

Để kết nối PayPal, Stripe, O'Pay hoặc ECPay, xem [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) và [ECPay](../payments/ecpay).

### Cài đặt

| Trường | Mô tả |
|-------|-------------|
| **Tự động quy đổi sang tiền tệ của bạn** | Mặc định bật. Hiển thị số tiền đã quy đổi sang **Tiền tệ ủng hộ** được đặt trong trang Cài đặt. |
| **Thời gian hiển thị** | Thời gian mỗi thông báo hiển thị trên màn hình, tính bằng giây. Mặc định: 6. |

## Thẻ Giao diện

### Xem trước

Bản xem trước dùng cùng trang với nguồn OBS. Dùng bộ chọn màu bên cạnh **Xem trước** để đổi màu nền bản xem trước, và nhấp **▶ Phát lại hiệu ứng** để phát lại hiệu ứng thông báo.

### Kiểu thống nhất / Riêng từng nền tảng

- **Kiểu thống nhất**: tất cả nền tảng dùng cùng một kiểu thông báo.
- **Riêng từng nền tảng**: mỗi nền tảng có kiểu riêng. Chọn nền tảng bằng các nút bên dưới (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) rồi chỉnh cài đặt của nền tảng đó. Khi chuyển sang lần đầu, các nền tảng chưa tùy chỉnh sẽ sao chép kiểu thống nhất hiện tại, mỗi nền tảng có màu thanh đếm ngược riêng.

**Khôi phục mặc định** khôi phục kiểu mặc định cho kiểu bạn đang chỉnh sửa.

### Hình ảnh

- **Chọn hình ảnh**: chọn một hình ảnh từ trình quản lý tài nguyên. Nếu không chọn, biểu tượng cảm xúc trái tim sẽ được hiển thị. **Xóa** để bỏ hình ảnh.
- **Kích thước hình ảnh**: 1–400 px.
- **Vị trí hình ảnh**: **Bên trái**, **Bên phải**, **Phía trên** hoặc **Phía dưới**.

### Âm thanh

Chọn một âm thanh có sẵn: **Không**, **Chuông gió** (mặc định), **Tiền xu**, **Chuông**, **Bốp**, **Kèn báo**. Nhấp **▶** để nghe thử. Nhấp **Chọn âm thanh** để dùng tệp âm thanh của riêng bạn từ trình quản lý tài nguyên.

### Hiển thị văn bản

- **Mặc định**: số tiền, tên người ủng hộ và lời nhắn được hiển thị trên các dòng riêng.
- **Văn bản tùy chỉnh**: tự viết dòng chữ của bạn. Dùng `{name}` cho tên người ủng hộ và `{amount}` cho số tiền, ví dụ `Cảm ơn {name} đã ủng hộ {amount}!`

### Văn bản và màu sắc

- **Văn bản**: đặt phông chữ, cỡ chữ và màu cho **Số tiền**, **Tên người ủng hộ** và **Lời nhắn** (cùng **Văn bản tùy chỉnh** ở chế độ Văn bản tùy chỉnh).
- **Màu sắc**: **Nền**, **Đổ bóng** và **Thanh đếm ngược**.

### CSS tùy chỉnh

Mở rộng **CSS tùy chỉnh** để chỉnh CSS của kiểu bạn đang chỉnh sửa (kiểu thống nhất hoặc nền tảng đang chọn). **Khôi phục mặc định** khôi phục CSS mẫu, còn **Quản lý tài nguyên** mở trình quản lý tài nguyên. Bạn cũng có thể áp dụng chủ đề Steam Workshop tại đây. Khi đang áp dụng một chủ đề, CSS sẽ ở chế độ chỉ đọc. Xem [Chủ đề giao diện](./themes).

## Thử thông báo

Trong trang **Cài đặt**, nhấp **Thông báo thử** bên cạnh **Kết nối nền tảng ủng hộ**:

1. Điền **Tên thử**, **Lời nhắn thử** và **Số tiền thử**, chọn **Nền tảng thử**
2. Nhấp **Gửi thông báo thử**

Mục **Thử Super Chat YouTube** cho phép bạn nhập **Chuỗi số tiền** thô (ví dụ `$5.00`, `¥500`, `NT$150`) rồi nhấp **Gửi Super Chat thử** để kiểm tra việc nhận dạng số tiền và quy đổi tiền tệ.

:::note
Thông báo thử được xử lý giống như một khoản quyên góp thật: nó cũng được cộng vào [Thanh mục tiêu quyên góp](./donate) và [Bảng quyên góp](./sponsors) nếu nền tảng đó được tích chọn ở các tính năng này.
:::

:::info Phiên bản dùng thử
CSS tùy chỉnh chỉ có ở phiên bản chính thức. Không thể dùng các cổng thanh toán thực tế (PayPal / Stripe / O'Pay / ECPay), các sự kiện hội viên và Đá quý của YouTube trong bản dùng thử, đồng thời thông báo hiển thị hình mờ (watermark) trên OBS. Xem [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::

## Câu hỏi thường gặp

**Q: Không có âm thanh trên luồng trực tiếp?**
Kiểm tra xem **Điều khiển âm thanh qua OBS** đã được tích chọn trong thuộc tính nguồn trình duyệt chưa và nguồn đó có bị tắt tiếng trong bộ trộn âm thanh của OBS không. Đồng thời kiểm tra **Âm thanh** không được đặt là **Không**.

**Q: Tôi thêm nguồn OBS muộn. Các thông báo trước đó có được phát lại không?**
Không. Nguồn vừa mở chỉ hiển thị những thông báo đến sau khi nó kết nối.
