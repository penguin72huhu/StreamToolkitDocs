---
sidebar_position: 1
---

# การรับ DeepL API Key

DeepL API Key ใช้สำหรับการแปลอัตโนมัติสำหรับฟีเจอร์ต่อไปนี้:
- **แปลเสียง** — แปลอัตโนมัติหลังจากแปลงเสียงเป็นข้อความ
- **ห้องแชท** — แปลข้อความผู้ชมอัตโนมัติ

## ขั้นตอนที่ 1: ลงชื่อเข้าใช้บัญชี DeepL

ไปที่ [DeepL](https://www.deepl.com) และลงชื่อเข้าใช้บัญชีของคุณ หากคุณยังไม่มีบัญชี คุณต้องลงทะเบียนก่อน

## ขั้นตอนที่ 2: ไปที่การตั้งค่า Account

คลิกที่ **ไอคอนโปรไฟล์** ที่มุมขวาบน แล้วเลือก **Account**

![Open Account settings](./deepl-api-img/step2.png)

## ขั้นตอนที่ 3: สลับไปที่แท็บ API Keys & limits

คลิกที่แท็บ **API Keys & limits**

![API Keys & limits tab](./deepl-api-img/step3.png)

## ขั้นตอนที่ 4: สร้าง API Key ใหม่

1. คลิก **Create key +**
2. **Name your key**: ใส่ชื่ออะไรก็ได้ (เช่น `Stream Toolkit`)
3. **Permissions**: เลือก **All access**
4. คลิก **Create Key**

![Create API Key](./deepl-api-img/step4.png)

![API Key created](./deepl-api-img/step4-1.png)

## ขั้นตอนที่ 5: คัดลอกและวางลงใน App

1. คัดลอก API Key ที่สร้างขึ้น
2. กลับไปที่ Stream Toolkit และวางลงในช่อง **DeepL API Key** ที่เกี่ยวข้อง

![Paste API Key](./deepl-api-img/step5.png)

## คำถามที่พบบ่อย

**Q: DeepL รุ่นทดลองใช้ฟรีมีขีดจำกัดการใช้งานหรือไม่?**
ใช่ รุ่นทดลองใช้ฟรีให้โควตา 1,000,000 ตัวอักษรและจำกัดไว้ภายในหนึ่งเดือน หากต้องการใช้การแปลคุณภาพสูงอย่างต่อเนื่อง โปรดสมัครแผนชำระเงินของ DeepL

**Q: ถ้า API Key รั่วไหลต้องทำอย่างไร?**
กลับไปที่ DeepL Account → API Keys & limits ลบ Key เก่าทิ้งแล้วสร้างใหม่
