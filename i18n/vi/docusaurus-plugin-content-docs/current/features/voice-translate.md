---
sidebar_position: 4
---

# Dịch giọng nói

Giữ phím tắt và nói. Stream Toolkit sẽ chuyển lời nói của bạn thành văn bản, dịch nó, và hiển thị cả hai dòng dưới dạng phụ đề trong OBS.

Nhận dạng giọng nói chạy ngay trên máy tính của bạn bằng mô hình Whisper. Sau đó văn bản được dịch bằng MyMemory.

Trang có hai thẻ: **Cài đặt** và **Giao diện**.

## Bước 1: Thêm nguồn OBS

URL nguồn OBS được hiển thị ở đầu trang:

```
http://127.0.0.1:7272/voice-translate
```

Nhấp **Sao chép** và thêm vào OBS dưới dạng nguồn trình duyệt. Xem [Cách thêm nguồn trong OBS](../getting-started/obs-source). Dịch giọng nói không phát âm thanh, vì vậy bạn không cần bật "Điều khiển âm thanh qua OBS".

Phụ đề xuất hiện ở phía dưới nguồn: văn bản gốc ở trên và bản dịch ở dưới. Phụ đề sẽ mờ dần sau **Thời gian hiển thị phụ đề**.

:::tip
Bật công tắc bên cạnh **Dịch giọng nói** ở thanh bên trái (**Bật hiển thị trên OBS**). Phím tắt chỉ hoạt động khi công tắc đang bật.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Bước 2: Đặt phím tắt

Trong mục **Phím tắt (giữ để ghi âm, thả để nhận dạng)**:

1. Nhấp **Nhấn để thiết lập phím tắt**
2. Nhấn tổ hợp phím bạn muốn, rồi thả ra. Nhấn **Esc** để hủy
3. Để gỡ phím tắt, nhấp **Xóa**

Nếu tổ hợp phím đã được tính năng khác sử dụng, nút sẽ hiển thị **Xung đột phím tắt** và phím tắt không được lưu.

Phím tắt vẫn hoạt động ngay cả khi Stream Toolkit không phải là cửa sổ đang hoạt động. **Giữ** phím trong khi nói, sau đó **thả** ra để nhận dạng và dịch. Việc ghi âm sẽ tự động dừng sau 15 giây.

Bạn cũng có thể giữ nút **REC** bên dưới phím tắt bằng chuột. Nút này hoạt động tương tự: nhấn để ghi âm, thả ra để dịch. Cửa sổ [Công cụ nhanh](./quick-tools) cũng có nút **REC** giống vậy.

## Bước 3: Cài đặt nhận dạng

| Trường | Mô tả |
|-------|-------------|
| **Trạng thái mô hình** | Hiển thị **Đang tải xx%**, **Đã sẵn sàng** hoặc **Tải mô hình thất bại**. Bạn có thể ghi âm khi trạng thái là **Đã sẵn sàng** |
| **Mô hình Whisper** | **Tiny (nhanh nhất, khoảng 40MB)**, **Base (khuyến nghị, khoảng 75MB)** (mặc định) hoặc **Small (chính xác nhất, khoảng 245MB)**. Mô hình được tải xuống ở lần sử dụng đầu tiên. Đổi mô hình sẽ tải lại mô hình |
| **Ngôn ngữ giọng nói** | Ngôn ngữ bạn nói. Mặc định là Tiếng Trung phồn thể |
| **Micro** | Micro dùng để ghi âm. **Mặc định hệ thống** dùng thiết bị đầu vào mặc định của Windows |

## Bước 4: Cài đặt dịch

| Trường | Mô tả |
|-------|-------------|
| **Thời gian hiển thị phụ đề** | Thời gian phụ đề hiển thị trên màn hình, 1–30 giây. Mặc định là 5 |
| **Ngôn ngữ đích** | Ngôn ngữ cần dịch sang. Mặc định là Tiếng Anh |
| **Dùng Whisper để dịch khi ngôn ngữ đích là English** | Khi ngôn ngữ đích là tiếng Anh, Whisper sẽ dịch thay cho MyMemory. (Miễn phí và không giới hạn hạn mức, nhưng độ trễ cao hơn.) Tùy chọn này không có tác dụng với các ngôn ngữ đích khác |
| **Dịch vụ dịch** | MyMemory |

### Email (không bắt buộc)

MyMemory miễn phí. Hạn mức hằng ngày phụ thuộc vào việc bạn có nhập email hay không:

- Không có email: 5.000 ký tự/ngày
- Có email: 50.000 ký tự/ngày (miễn phí, không cần đăng ký MyMemory)

Nhập email và nhấp **Lưu**. Email này được **Dùng chung với dịch phòng chat**.

Thanh bên dưới hiển thị **Đã dùng hôm nay (ước tính, đặt lại lúc 08:00 UTC mỗi ngày)**. Khi hết hạn mức, thanh hiển thị **Đã dùng hết**.

## Bước 5: Giao diện

Trong thẻ **Giao diện**, bạn có thể thay đổi cách hiển thị phụ đề. Các thay đổi được lưu ngay lập tức.

- **Xem trước**: hiển thị phụ đề mẫu. Ô màu bên cạnh chỉ thay đổi màu nền của bản xem trước
- **Căn chỉnh**: **Căn trái** (mặc định), **Căn giữa** hoặc **Căn phải**
- **Phông chữ**: một hàng cho **Ngôn ngữ gốc** (văn bản gốc) và một hàng cho **Ngôn ngữ đích** (bản dịch). Mỗi hàng có phông chữ, màu và cỡ chữ (8–120 px). Mặc định là 14 px cho văn bản gốc và 22 px cho bản dịch
- **Đổ bóng**: màu bóng của chữ
- **Khôi phục mặc định**: khôi phục giao diện mặc định

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Giới hạn phiên bản dùng thử
**Ngôn ngữ đích** được cố định là tiếng Anh. Trang sẽ hiển thị "Bản Demo chỉ hỗ trợ dịch sang tiếng Anh".

Xem chi tiết tại [So sánh phiên bản dùng thử / phiên bản chính thức](../getting-started/trial-comparison).
:::

## Câu hỏi thường gặp

**Q: Tôi giữ phím tắt nhưng không có gì xảy ra.**
Kiểm tra công tắc bên cạnh **Dịch giọng nói** ở thanh bên trái đã bật, và **Trạng thái mô hình** hiển thị **Đã sẵn sàng**.

**Q: Ghi âm hoạt động, nhưng không có phụ đề nào xuất hiện trong OBS.**
Nếu MyMemory không thể dịch (ví dụ đã hết hạn mức trong ngày), phụ đề sẽ không được hiển thị. Hãy kiểm tra thanh **Đã dùng hôm nay**. Nhập email sẽ tăng hạn mức. Nếu ngôn ngữ đích của bạn là tiếng Anh, bạn cũng có thể bật **Dùng Whisper để dịch khi ngôn ngữ đích là English**, tùy chọn này không giới hạn hạn mức.
