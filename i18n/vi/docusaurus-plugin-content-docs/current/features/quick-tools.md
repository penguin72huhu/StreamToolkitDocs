---
sidebar_position: 1
---

# Công cụ nhanh

**Công cụ nhanh** là một cửa sổ điều khiển nhỏ mà bạn có thể mở sẵn bên cạnh game hoặc OBS. Cửa sổ này cho phép bạn bật/tắt các tính năng và dùng các điều khiển thường dùng nhất của chúng mà không cần quay lại cửa sổ chính.

## Mở Công cụ nhanh

Dùng một trong hai cách sau:

- Nhấp **⚡ Công cụ nhanh** ở đầu thanh bên trái trong cửa sổ chính
- Nhấp chuột phải vào biểu tượng Stream Toolkit ở khay hệ thống và chọn **Mở công cụ nhanh**

Nếu cửa sổ đã mở, nó sẽ được đưa lên phía trước thay vì mở thêm cửa sổ thứ hai.

{/* TODO: 截圖 — 快速工具視窗 */}

## Cửa sổ

- **Di chuyển**: kéo thanh tiêu đề
- **📌 Ghim lên trên / Bỏ ghim**: giữ cửa sổ nằm trên các cửa sổ khác. Chế độ ghim được bật khi cửa sổ mở ra
- **✕**: đóng cửa sổ

Cửa sổ dùng theo chủ đề và ngôn ngữ giao diện của ứng dụng.

## Bảng Bật/tắt nhanh

Nhấp mũi tên **›** ở cạnh trái để kéo bảng **Bật/tắt nhanh** ra. Bảng này liệt kê mọi tính năng:

- Công tắc dùng để bật hoặc tắt tính năng (giống công tắc bên cạnh mỗi tính năng ở thanh bên của cửa sổ chính)
- **⚙** (**Mở cài đặt**) đưa cửa sổ chính đến trang cài đặt của tính năng đó

Nhấp ra ngoài bảng hoặc nhấp lại mũi tên để đóng.

Các tính năng được liệt kê theo cùng thứ tự với thanh bên chính. Để thay đổi thứ tự, kéo tay nắm **⠿** bên cạnh một tính năng ở thanh bên của cửa sổ chính.

## Thẻ tính năng

Mỗi tính năng đang bật có điều khiển sẽ xuất hiện dưới dạng một thẻ. Các thẻ ban đầu ở trạng thái thu gọn — nhấp vào tiêu đề thẻ để mở rộng hoặc thu gọn. Nếu không có tính năng nào trong số này được bật, cửa sổ sẽ hiển thị **Chưa bật chức năng nào**.

| Tính năng | Thẻ cung cấp gì |
|---------|---------------------|
| [Điều khiển cảnh OBS](./obs-scene) | Trạng thái kết nối, cùng một nút cho mỗi mục chuyển cảnh hoặc bật/tắt nguồn đã thiết lập (cảnh hiện tại được làm nổi bật). Các nút bị vô hiệu hóa khi chưa kết nối. Thẻ chỉ xuất hiện khi có ít nhất một mục phím tắt |
| [Dịch giọng nói](./voice-translate) | Nút **REC** — giữ để ghi âm, thả ra để dịch |
| [Đánh dấu khoảnh khắc nổi bật của stream](./highlight) | Nút **MARK**. Sau khi đánh dấu, biểu tượng nền tảng và mốc thời gian sẽ hiển thị trong 5 giây |
| [Thanh mục tiêu quyên góp](./donate) | Số tiền hiện tại / mục tiêu kèm thanh tiến độ, ô **Thêm số tiền thủ công** với nút **Thêm**, và **Về 0** |
| [Bộ đếm thời gian](./timer) | Với mỗi bộ đếm đang hiển thị: tên, thời gian, **Bắt đầu** / **Tạm dừng**, **Đặt lại**, và các nút cộng thời gian bạn đã thiết lập. Đồng hồ bấm giờ thì hiển thị **Dừng** và **Vòng đơn** |
| [Vòng quay](./turntable) | Với mỗi vòng quay đang hiển thị: **Khởi động** và **Đặt lại** |
| [Media Board](./multimedia) | Các nút cho hình ảnh đã ghim (hiện / ẩn), video đã ghim (phát) và âm thanh đã ghim (phát) |
| [Yêu cầu bài hát](./song-request) | **Phát** / **Tạm dừng**, **Dừng**, **Bài tiếp** |

Nếu một điều khiển đã được gán phím tắt, phím tắt sẽ hiển thị trên nút của nó.

Các tính năng không có gì để thao tác ở đây (Phòng chat, Thanh mục tiêu Twitch, Thông báo quyên góp, Bảng quyên góp, Đồng hồ, Tường biểu cảm, Bình chọn trực tiếp, Quay thưởng, Bot trò chuyện) chỉ có công tắc bật/tắt trong bảng Bật/tắt nhanh.

:::tip
Nút **Về 0** trên thẻ Thanh mục tiêu quyên góp cần nhấp hai lần: lần nhấp đầu tiên đổi nút thành **Xác nhận về 0**, và lần nhấp thứ hai trong vòng 10 giây sẽ đưa số tiền về 0.
:::

:::info
Bộ đếm thời gian và vòng quay theo **Chế độ hiển thị** của từng tính năng: với **Một bộ đếm giờ** / **Một vòng quay** chỉ hiển thị cái đang được chọn; với **Nhiều bộ đếm giờ** / **Nhiều vòng quay** chỉ hiển thị những cái bạn đã thêm. Nếu không có cái nào, thẻ sẽ hiển thị **Chưa có bộ đếm giờ** / **Chưa có vòng quay**.
:::
