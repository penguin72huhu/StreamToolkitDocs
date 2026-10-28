---
sidebar_position: 7
---

# Thanh mục tiêu quyên góp

Hiển thị thanh tiến độ hướng tới mục tiêu quyên góp trên luồng trực tiếp. Các khoản quyên góp từ những nền tảng bạn chọn sẽ được tự động cộng vào tổng.

## URL nguồn OBS

```
http://127.0.0.1:7272/donate
```

Sao chép URL ở đầu trang **Cài đặt Thanh mục tiêu quyên góp** và thêm vào OBS dưới dạng Nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source).

Dùng công tắc bên cạnh **Thanh mục tiêu quyên góp** ở thanh bên trái để hiện hoặc ẩn thanh trong OBS. Khi công tắc tắt, thanh sẽ bị ẩn.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Tiền tệ

Thanh dùng **Tiền tệ ủng hộ** được đặt trong trang **Cài đặt**. Các khoản quyên góp bằng tiền tệ khác sẽ được quy đổi sang tiền tệ này trước khi cộng vào. Nếu tiền tệ của một khoản quyên góp không thể quy đổi, khoản đó sẽ không được cộng vào thanh (Thông báo quyên góp và Bảng quyên góp vẫn hiển thị bằng tiền tệ gốc).

## Thẻ Cài đặt

### Nền tảng kết nối

Tích chọn các nền tảng có khoản quyên góp được tính vào thanh:

- **Twitch** — Bits và đăng ký
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Dấu chấm xanh lá nghĩa là nền tảng đã được kết nối; nếu chưa, dòng đó hiển thị **(Chưa kết nối)**. Các ô đánh dấu này chỉ quyết định những gì thanh tính vào. Chúng không ảnh hưởng đến Thông báo quyên góp hay Bảng quyên góp, vốn có danh sách nền tảng riêng.

- **YouTube**: nếu phòng chat trực tiếp chưa được liên kết, dòng đó hiển thị **Chưa kết nối URL phòng chat** cùng hai nút: **Kết nối tự động** (cần đăng nhập Google) và **Tự nhập** (đưa bạn đến trường URL phòng chat trong Cài đặt). Xem [Cài đặt YouTube](../platforms/youtube-settings).
- **YouTube ⚙️**: chọn **Sự kiện được tính** nào được cộng vào thanh: **Super Chat**, **Super Sticker**, **Hội viên mới**, **Gia hạn hội viên**, **Hội viên được tặng**, **Đá quý**. **Đá quý** cần đăng nhập Google.
- Nếu có sự kiện hội viên nào được tích chọn nhưng chưa đặt giá hội viên, **⚠ Chưa đặt giá hội viên** sẽ xuất hiện. Nhấp vào đó để đi đến Cài đặt và nhập giá từng cấp trong **Cài đặt quy đổi** của YouTube.
- Giá trị của Bits và đăng ký Twitch được đặt trong Cài đặt → Twitch → **Cài đặt quy đổi**. Xem [Cài đặt Twitch](../platforms/twitch).
- Để kết nối PayPal, Stripe, O'Pay hoặc ECPay, xem [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) và [ECPay](../payments/ecpay).

### Tiến độ hiện tại

Hiển thị tổng hiện tại, mục tiêu và phần trăm.

| Trường | Mô tả |
|-------|-------------|
| **Tiêu đề** | Không bắt buộc. Hiển thị phía trên thanh. |
| **Số tiền mục tiêu** | Số tiền mục tiêu, tính bằng tiền tệ ủng hộ của bạn. |
| **Thêm thủ công** | Nhập số tiền và nhấp **Thêm** (hoặc nhấn Enter) để cộng vào tổng. |
| **Về 0** | Đưa tổng hiện tại về 0. Một hộp xác nhận sẽ xuất hiện trước. Thao tác này không thể hoàn tác. |

## Thẻ Giao diện

### Xem trước

Bản xem trước hiển thị thanh với số tiền mẫu. Dùng bộ chọn màu bên cạnh **Xem trước** để đổi màu nền bản xem trước. Tích chọn **Xem trước khi đạt** để xem thanh ở trạng thái đã hoàn thành.

### Phông chữ và màu sắc

Nhấp **Khôi phục mặc định** để khôi phục giao diện mặc định.

- **Phông chữ**: đặt phông chữ, màu và cỡ chữ (8–72 px) cho **Tiêu đề**, **Số tiền** và **Phần trăm**.
- **Màu sắc**: đặt **Nền**, **Thanh mục tiêu** (màu tô) và **Thanh mục tiêu khi đạt** (màu tô khi đã đạt mục tiêu).

### CSS tùy chỉnh

Mở rộng **CSS tùy chỉnh** để chỉnh CSS của thanh. **Khôi phục mặc định** khôi phục CSS mặc định, còn **Quản lý tài nguyên** mở trình quản lý tài nguyên cho các hình ảnh bạn muốn dùng trong CSS. Bạn cũng có thể áp dụng chủ đề Steam Workshop tại đây. Khi đang áp dụng một chủ đề, CSS sẽ ở chế độ chỉ đọc cho đến khi bạn khôi phục. Xem [Chủ đề giao diện](./themes).

:::info Phiên bản dùng thử
CSS tùy chỉnh chỉ có ở phiên bản chính thức. Không thể dùng các cổng thanh toán thực tế (PayPal / Stripe / O'Pay / ECPay), các sự kiện hội viên và Đá quý của YouTube trong bản dùng thử, đồng thời overlay hiển thị hình mờ (watermark). Xem [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::

## Câu hỏi thường gặp

**Q: Tổng tăng lên sau khi tôi gửi thông báo thử.**
**Thông báo thử** trong trang Cài đặt được tính như một khoản quyên góp thật, nên nó được cộng vào thanh (nếu nền tảng đó được tích chọn). Sau khi thử xong, nhấp **Về 0** để đưa tổng về 0.
