---
sidebar_position: 3
---

# การเปรียบเทียบเวอร์ชันทดลอง / เวอร์ชันเต็ม

Stream Toolkit มี **เวอร์ชันทดลองใช้งานฟรี** และ **เวอร์ชันเต็ม** โดยเวอร์ชันทดลองไม่มีข้อจำกัดด้านเวลาและสามารถใช้งานฟังก์ชันโต้ตอบส่วนใหญ่ได้ตลอดชีพเพื่อให้คุณได้รับประสบการณ์การใช้งานอย่างเต็มที่ ส่วนเวอร์ชันเต็มจะปลดล็อกการเชื่อมต่อระบบชำระเงิน, Steam Workshop, การปรับแต่งขั้นสูง และข้อจำกัดด้านจำนวนต่างๆ

<div className="edition-table-wrap">

<table className="edition-table">
  <thead>
    <tr>
      <th className="feat-col">ฟังก์ชัน項目</th>
      <th className="trial-col">เวอร์ชันทดลองใช้งาน<br/><span className="col-sub">Demo</span></th>
      <th className="pro-col">เวอร์ชันเต็ม<br/><span className="col-sub">Pro</span></th>
    </tr>
  </thead>
  <tbody>
    <tr className="section-row"><td colSpan={3}>การเชื่อมต่อแพลตฟอร์มไลฟ์สตรีม</td></tr>
    <tr>
      <td>Twitch</td>
      <td className="trial-cell"><span className="dot ok"></span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>
    <tr>
      <td>YouTube Live</td>
      <td className="trial-cell"><span className="dot ok"></span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>

    <tr className="section-row"><td colSpan={3}>ระบบชำระเงินสนับสนุน</td></tr>
    <tr>
      <td>การเชื่อมต่อระบบชำระเงินจริง (PayPal / Stripe / O'Pay / ECPay)</td>
      <td className="trial-cell"><span className="dash">—</span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>

    <tr className="section-row"><td colSpan={3}>การปรับแต่งและรูปลักษณ์</td></tr>
    <tr>
      <td>การตั้งค่ารูปลักษณ์ (สี / ฟอนต์ / ขนาด)</td>
      <td className="trial-cell"><span className="dot ok"></span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>
    <tr>
      <td>CSS แบบกำหนดเอง</td>
      <td className="trial-cell"><span className="dash">—</span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>
    <tr>
      <td>Steam Workshop (สมัครรับข้อมูล / อัปโหลดธีม)</td>
      <td className="trial-cell"><span className="dash">—</span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>
    <tr>
      <td>ลายน้ำ Overlay</td>
      <td className="trial-cell">แสดง</td>
      <td className="pro-cell"><span className="dot ok"></span> ไม่มีลายน้ำ</td>
    </tr>

    <tr className="section-row"><td colSpan={3}>เครื่องมือโต้ตอบ</td></tr>
    <tr>
      <td>แปลแชทอัตโนมัติ</td>
      <td className="trial-cell">ใช้งานได้ (มีลายน้ำ)</td>
      <td className="pro-cell"><span className="dot ok"></span> ไม่มีลายน้ำ</td>
    </tr>
    <tr>
      <td>คำบรรยายการแปลเสียง</td>
      <td className="trial-cell">แปลเป็นภาษาอังกฤษได้เท่านั้น</td>
      <td className="pro-cell"><span className="dot ok"></span> รองรับ 20+ ภาษา</td>
    </tr>
    <tr>
      <td>โพลสด</td>
      <td className="trial-cell"><span className="dot ok"></span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>
    <tr>
      <td>การจับรางวัล</td>
      <td className="trial-cell"><span className="dot ok"></span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>
    <tr>
      <td>นาฬิกา</td>
      <td className="trial-cell"><span className="dot ok"></span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>
    <tr>
      <td>กำแพงอิโมจิ</td>
      <td className="trial-cell"><span className="dot ok"></span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>
    <tr>
      <td>แถบเป้าหมาย Twitch</td>
      <td className="trial-cell"><span className="dot ok"></span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>
    <tr>
      <td>ตัวทำเครื่องหมายไฮไลต์สตรีม</td>
      <td className="trial-cell"><span className="dot ok"></span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>
    <tr>
      <td>วงล้อสุ่ม</td>
      <td className="trial-cell">สร้างได้เพียง 1 อันเท่านั้น</td>
      <td className="pro-cell"><span className="dot ok"></span> ไม่จำกัดจำนวน</td>
    </tr>
    <tr>
      <td>ตัวจับเวลา</td>
      <td className="trial-cell">สร้างได้เพียง 1 อันเท่านั้น</td>
      <td className="pro-cell"><span className="dot ok"></span> ไม่จำกัดจำนวน</td>
    </tr>
    <tr>
      <td>ขอเพลงผ่านแชทผู้ชม</td>
      <td className="trial-cell"><span className="dash">—</span></td>
      <td className="pro-cell"><span className="dot ok"></span></td>
    </tr>
    <tr>
      <td>Media Board (รูปภาพ / วิดีโอ / เสียง)</td>
      <td className="trial-cell">เพิ่มได้เพียงอย่างละ 1 อันเท่านั้น</td>
      <td className="pro-cell"><span className="dot ok"></span> ไม่จำกัดจำนวน</td>
    </tr>
  </tbody>
</table>

</div>

:::info เกี่ยวกับการอัปเกรด
เวอร์ชันทดลองใช้งานและเวอร์ชันเต็มเป็นสองแอปพลิเคชันที่แยกจากกันบน Steam หลังจากซื้อเวอร์ชันเต็มแล้วจะต้องติดตั้งแยกต่างหาก โดยการตั้งค่าและบันทึกข้อมูลของทั้งสองเวอร์ชันจะไม่สามารถใช้ร่วมกันได้
:::