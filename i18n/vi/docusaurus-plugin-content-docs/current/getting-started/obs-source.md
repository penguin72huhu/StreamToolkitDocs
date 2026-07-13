---
sidebar_position: 2
---

# Cách thêm nguồn trong OBS

Hầu hết các tính năng của Stream Toolkit đều yêu cầu thêm "Nguồn trình duyệt" (Browser Source) trong OBS để hiển thị trên luồng trực tiếp.

## Bước 1: Sao chép URL tính năng

Trong Stream Toolkit, mỗi trang tính năng đều hiển thị URL cục bộ tương ứng theo định dạng:

```
http://127.0.0.1:7272/feature-name
```

Sao chép URL tính năng bạn muốn thêm.

## Bước 2: Thêm nguồn trình duyệt trong OBS

1. Trong phần **Nguồn** (Sources) của OBS, nhấp vào nút **+** ở dưới cùng
2. Chọn **Trình duyệt**
3. Chọn **Tạo mới**, nhập tên nguồn (ví dụ: "Thanh mục tiêu quyên góp") và nhấp vào **OK**
4. Dán URL đã sao chép từ Bước 1 vào trường **URL**
5. Điều chỉnh **Chiều rộng** và **Chiều cao** theo nhu cầu
6. Nhấp vào **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Các tính năng bên dưới yêu cầu tích chọn "Điều khiển âm thanh qua OBS"

Bao gồm đầu ra âm thanh; bạn phải tích chọn **Điều khiển âm thanh qua OBS** trong cài đặt nguồn trình duyệt để âm thanh xuất hiện chính xác trên luồng trực tiếp:

- **Media Board** — Video, Âm thanh
- **Thông báo quyên góp**
- **Yêu cầu bài hát**

Cách tích chọn:
1. Trong danh sách nguồn của OBS, nhấp chuột phải vào nguồn trình duyệt đó
2. Chọn **Thuộc tính**
3. Tìm **Điều khiển âm thanh qua OBS** và tích chọn
4. Nhấp vào **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Nếu đã tích chọn mà vẫn không có âm thanh, hãy kiểm tra xem nguồn đó có bị tắt tiếng trong bộ trộn âm thanh của OBS hay không.
:::
