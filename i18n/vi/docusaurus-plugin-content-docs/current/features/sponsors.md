---
sidebar_position: 9
---

# Bảng quyên góp

Hiển thị danh sách các khoản quyên góp gần đây trên luồng trực tiếp: biểu tượng nền tảng, tên người ủng hộ, số tiền và lời nhắn.

## URL nguồn OBS

```
http://127.0.0.1:7272/sponsors
```

Sao chép URL ở đầu trang **Cài đặt Bảng quyên góp** và thêm vào OBS dưới dạng Nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source).

Dùng công tắc bên cạnh **Bảng quyên góp** ở thanh bên trái để hiện hoặc ẩn bảng trong OBS. Khi công tắc tắt, bảng sẽ mờ dần và biến mất. Các khoản quyên góp vẫn được ghi lại khi công tắc tắt.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Thẻ Cài đặt

### Nền tảng kết nối

Tích chọn các nền tảng có khoản quyên góp cần được ghi lại: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Dấu chấm xanh lá nghĩa là nền tảng đã được kết nối; nếu chưa, dòng đó hiển thị **(Chưa kết nối)**. Các ô đánh dấu này chỉ ảnh hưởng đến bảng, không ảnh hưởng đến Thanh mục tiêu quyên góp hay Thông báo quyên góp.

**Twitch ⚙️** (hiển thị khi Twitch đã kết nối và được tích chọn):

1. Chọn **Tính cả Bits và đăng ký**, **Chỉ tính Bits** hoặc **Chỉ tính đăng ký**
2. **Tính cả đăng ký lại**: có ghi lại đăng ký lại hay không (hiển thị khi có tính đăng ký)
3. **Dưới [N] Bits sẽ không được tính**: tích chọn và nhập mức tối thiểu để các lượt cheer nhỏ hơn không được ghi lại (hiển thị khi có tính Bits)
4. Nhấp **Lưu**

**YouTube ⚙️**:

- **Hiển thị tên người xem thay vì @handle**: chỉ dùng được sau khi bạn đăng nhập bằng Google.
- **Sự kiện được tính**: **Super Chat**, **Super Sticker**, **Hội viên mới**, **Gia hạn hội viên**, **Hội viên được tặng**, **Đá quý**. **Đá quý** cần đăng nhập Google. Quà tặng Đá quý được hiển thị bằng biểu tượng đá quý kèm số lượng đá quý thay vì số tiền.

Nếu phòng chat trực tiếp YouTube chưa được liên kết, dòng đó hiển thị **Chưa kết nối URL phòng chat** cùng **Kết nối tự động** (cần đăng nhập Google) và **Tự nhập** (đưa bạn đến trường URL phòng chat trong Cài đặt). Nếu đã tích chọn một sự kiện hội viên nhưng chưa đặt giá hội viên, hãy nhấp **⚠ Chưa đặt giá hội viên** để đi đến phần thiết lập. Xem [Cài đặt YouTube](../platforms/youtube-settings).

Để kết nối PayPal, Stripe, O'Pay hoặc ECPay, xem [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) và [ECPay](../payments/ecpay).

### Cài đặt

| Trường | Mô tả |
|-------|-------------|
| **Tự động quy đổi sang tiền tệ của bạn** | Mặc định bật. Hiển thị số tiền đã quy đổi sang **Tiền tệ ủng hộ** được đặt trong trang Cài đặt. |
| **Hiển thị tối đa** | Số bản ghi được giữ lại (1–100). Mặc định: 20. Khi có khoản quyên góp mới vượt quá giới hạn này, bản ghi cũ nhất sẽ bị xóa. |

## Thẻ Giao diện

### Xem trước

Dùng bộ chọn màu bên cạnh **Xem trước** để đổi màu nền bản xem trước. Nhấp **Thử hoạt ảnh khi thêm** để phát hoạt ảnh xuất hiện với một bản ghi mẫu. Bản ghi mẫu không được lưu vào lịch sử.

Nhấp **Khôi phục mặc định** để khôi phục giao diện mặc định.

### Cài đặt hiển thị

- **Hiển thị icon nền tảng**: hiển thị biểu tượng của nền tảng trên mỗi bản ghi.
- **Hướng xuất hiện**: **Trên xuống dưới** (mặc định), **Dưới lên trên**, **Trái sang phải** hoặc **Phải sang trái**.

### Phông chữ

Đặt phông chữ, màu và cỡ chữ (8–72 px) cho **Tiêu đề** (tên người ủng hộ), **Nội dung** (lời nhắn) và **Số tiền**.

### Màu nền

- **Mặc định**: màu nền cho mọi bản ghi.
- **+ Thêm khoảng**: thêm một màu với khoảng **Số tiền** (**Thấp nhất** ~ **Cao nhất**). Các bản ghi có số tiền nằm trong khoảng sẽ dùng màu đó thay thế. Để trống Thấp nhất hoặc Cao nhất để không giới hạn ở phía đó. Nhấp **✕** để xóa một khoảng.

Khi bật **Tự động quy đổi sang tiền tệ của bạn**, khoảng sẽ được so sánh với số tiền đã quy đổi.

### CSS tùy chỉnh

Mở rộng **CSS tùy chỉnh** để chỉnh CSS của bảng. **Khôi phục mặc định** khôi phục CSS mặc định, còn **Quản lý tài nguyên** mở trình quản lý tài nguyên. Bạn cũng có thể áp dụng chủ đề Steam Workshop tại đây. Khi đang áp dụng một chủ đề, CSS sẽ ở chế độ chỉ đọc. Xem [Chủ đề giao diện](./themes).

## Thẻ Lịch sử

### Thêm thủ công (để thử)

Chọn một nền tảng, nhập **Tên**, **Số tiền** và **Lời nhắn (không bắt buộc)**, sau đó nhấp **Thêm**. Bản ghi chỉ được thêm nếu nền tảng đó được tích chọn trong **Nền tảng kết nối**. Số tiền được tính theo tiền tệ ủng hộ của bạn.

### Lịch sử

Liệt kê các bản ghi đã lưu kèm số lượng bản ghi.

- Nhấp **🗑** rồi nhấp **Xác nhận xóa** để xóa một bản ghi.
- Nhấp **Xóa** để xóa tất cả bản ghi. Một hộp xác nhận sẽ xuất hiện trước. Thao tác này không thể hoàn tác.

:::info Phiên bản dùng thử
CSS tùy chỉnh chỉ có ở phiên bản chính thức. Không thể dùng các cổng thanh toán thực tế (PayPal / Stripe / O'Pay / ECPay), các sự kiện hội viên và Đá quý của YouTube trong bản dùng thử, đồng thời bảng hiển thị hình mờ (watermark) trên OBS. Xem [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::

## Câu hỏi thường gặp

**Q: Thông báo thử xuất hiện trên bảng.**
**Thông báo thử** trong trang Cài đặt được xử lý như một khoản quyên góp thật, nên nó cũng được ghi lại ở đây nếu nền tảng đó được tích chọn. Hãy xóa nó trong thẻ **Lịch sử**.
