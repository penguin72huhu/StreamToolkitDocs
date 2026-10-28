---
sidebar_position: 19
---

# Cài đặt

Nhấp **⚙️ Cài đặt** ở cuối menu bên trái. Trang này chứa các tùy chọn chung cho toàn ứng dụng, kết nối nền tảng và các cổng thanh toán quyên góp.

## Chung

| Tùy chọn | Chức năng | Mặc định |
|------|------|------|
| **Chủ đề** | Chế độ hiển thị giao diện: **Xám tối** hoặc **Sáng** | Xám tối |
| **Ngôn ngữ** | Ngôn ngữ giao diện; chuyển đổi ngay lập tức | — |
| **Thu nhỏ xuống khay khi nhấn X** | Đóng cửa sổ sẽ thu nhỏ xuống khay hệ thống thay vì thoát | Bật |
| **Tiền tệ ủng hộ** | Đơn vị tiền tệ toàn cục, dùng cho thanh quyên góp, thông báo và mọi hiển thị số tiền khác | Được đặt ở lần khởi động đầu tiên theo ngôn ngữ hệ thống của bạn (ví dụ Tiếng Trung phồn thể (Đài Loan) → TWD, Tiếng Nhật → JPY, ngôn ngữ khác → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Kết nối nền tảng

### Twitch

Nhấp **Kết nối tài khoản** và ủy quyền trên trình duyệt. Sau khi kết nối, trang hiển thị **Đã kết nối @tên-của-bạn** cùng nút **Ngắt kết nối**. Các bước đầy đủ: [Cài đặt Twitch](../platforms/twitch).

Sau khi kết nối, **▸ Cài đặt quy đổi** dùng để đặt giá trị của Bits và gói đăng ký theo tiền tệ ủng hộ của bạn:

- **Cơ chế chia doanh thu**: **50 / 50** hoặc **70 / 30**
- **Mỗi 100 Bits**, **Đăng ký Tier 1**, **Đăng ký Tier 2**, **Đăng ký Tier 3**
- **Lưu** để lưu các giá trị cho tiền tệ hiện tại; **Khôi phục mặc định** điền các giá trị có sẵn cho tiền tệ đó

### YouTube

1. Nhấp **Kết nối tài khoản** và đăng nhập bằng Google. Hướng dẫn từng bước: [Cài đặt YouTube](../platforms/youtube-settings)
2. Sau khi kết nối, trang hiển thị **Đã kết nối: tên kênh**. **Ngắt kết nối** để hủy liên kết tài khoản
3. Chọn cách tìm phòng chat trực tiếp:
   - **Tự phát hiện buổi phát trực tiếp**: cần đăng nhập Google. Nhấp **Kết nối** để tìm buổi phát hiện tại hoặc sắp diễn ra trên kênh của bạn. Nếu có nhiều buổi phát, hãy chọn một buổi từ danh sách
   - **Tự nhập URL**: dán **URL phòng chat**
4. **Nhắc nhập URL phòng chat mỗi lần mở chương trình**: không bắt buộc

**▸ Cài đặt quy đổi** bên dưới YouTube dùng để đặt giá trị của hội viên (YouTube không gửi số tiền cho hội viên):

- **Cài đặt cấp hội viên**: thêm tên từng cấp và giá trị của cấp đó. Tên cấp phải trùng khớp hoàn toàn với kênh YouTube của bạn
- **Cấp không có trong danh sách**: giá trị dùng cho cấp không có trong bảng
- **Cấp hội viên được tặng**: hội viên được tặng sẽ được tính theo cấp nào
- Các cấp xuất hiện trong sự kiện nhưng chưa có trong bảng sẽ được liệt kê kèm **Thêm vào bảng** / **Bỏ qua**

## Kết nối nền tảng ủng hộ

Nhấp vào một cổng thanh toán để mở rộng. Mỗi cổng đều có liên kết **Nhấn để xem hướng dẫn** dẫn đến hướng dẫn thiết lập:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Thông báo thử

Nút **Thông báo thử** bên cạnh tiêu đề sẽ mở cửa sổ thử nghiệm:

- Điền **Tên thử**, **Lời nhắn thử**, **Số tiền thử**, chọn **Nền tảng thử**, sau đó nhấp **Gửi thông báo thử**
- **Thử Super Chat YouTube**: nhập **Chuỗi số tiền** như `$5.00` hoặc `NT$150` rồi nhấp **Gửi Super Chat thử** để kiểm tra việc nhận dạng số tiền và quy đổi tiền tệ

## Giới thiệu

Nhấp nút **i** bên cạnh "Stream Toolkit" ở đầu menu bên trái để xem phiên bản, tác giả và liên kết đến tài liệu chính thức.

:::info Giới hạn phiên bản dùng thử
- **Kết nối nền tảng ủng hộ** chỉ có ở phiên bản chính thức
- **Cài đặt quy đổi** hội viên YouTube chỉ có ở phiên bản chính thức

Xem [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::
