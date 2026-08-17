# Lucky Key & Fuji Ya — Restaurant PWA

A mobile-first web app for guests of **Lucky Key & Fuji Ya**.

📍 4135 Lavista Rd #310, Tucker, GA 30084
🌐 www.luckykeyfujiya.com

## Features

- 🥡 To-Go & To-out ordering (primary)
- 🛵 Delivery (DoorDash link)
- 🗓️ Table reservation with date/time picker
- 💳 Auto-pay with saved card or Apple Pay
- ✦ Points & loyalty rewards system
- 📱 PWA — installable on iPhone & Android

## Tech Stack

- Vanilla HTML / CSS / JavaScript
- Firebase (menu, orders, reservations)
- Stripe (payments)
- Hosted on Vercel (via GitHub)

---

## Deploy in 3 Steps

### 1. Push to a new GitHub repo

Create a new repo (e.g. `lucky-key-fuji-ya`) and push this project to it.

### 2. Connect Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import the new GitHub repo
3. Framework Preset: **Other**
4. Root Directory: `.` (leave default)
5. Add environment variables (Firebase, Stripe keys)
6. Click **Deploy** 🎉

### 3. Your live URL

Vercel will give you a URL like `https://lucky-key-fuji-ya.vercel.app`, then point `luckykeyfujiya.com` at it via DNS.

---

## Project Structure

```
lucky-key-fuji-ya/
├── index.html          ← Main app shell
├── hero.jpg            ← Hero image (TODO: replace with restaurant photo)
├── logo.png            ← Logo (TODO: replace with Lucky Key & Fuji Ya logo)
├── manifest.json       ← PWA manifest
├── sw.js               ← Service worker
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── app.js          ← All logic & menu data
│   └── firebase-menu.js
├── pages/
│   └── admin.html      ← Admin panel
└── api/                ← Serverless API routes
```

## ⚠️ Still TODO before launch

- [x] **Firebase**: `luckykeyfujiya-3fd7c` 프로젝트 config 반영 완료 (Firestore Database 활성화 및 보안 규칙 설정은 확인 필요)
- [ ] **Menu data**: replace the placeholder `menuData` in `js/app.js` (still Hsu's menu) with Lucky Key & Fuji Ya's real menu — send it over whenever it's ready and it'll be wired in
- [ ] **Phone number**: replace placeholder `(404) 577-0888` reference in `js/app.js` and `api/notify-order.js`
- [ ] **DoorDash link**: update `openDoorDash()` in `js/app.js` (still points to Hsu's DoorDash store)
- [ ] **Cloudinary**: create/confirm an upload preset for this restaurant in `pages/admin.html` (`CLOUDINARY_PRESET`, `CLOUDINARY_CLOUD`)
- [ ] **Stripe**: add this restaurant's own Stripe keys as environment variables in Vercel
- [ ] **Logo / hero image**: replace `logo.png` and `hero.jpg`
- [ ] **Admin login allowlist**: update authorized admin emails in `pages/admin.html`
- [ ] **Categories/sections**: currently seeded with Hsu's default categories (Lunch/Appetizers/Soup/Noodles/Entrées/Sides/Beverages) on first Firebase run — adjust once the real menu structure (Chinese + Japanese/sushi) is known

## Customization

- **Menu items**: Edit `menuData` in `js/app.js` or via Admin panel
- **Colors**: Change CSS variables at top of `css/style.css`
- **Business hours**: Update in `js/app.js`
- **Address / phone**: Search & replace `4135 Lavista Rd #310, Tucker, GA 30084`
