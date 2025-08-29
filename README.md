# Weva Pioneer Certificate

> 🔐 Prototype sederhana untuk bikin dan nyimpan sertifikat pionir pake MetaMask. Ini adalah langkah pertama menuju Weva Ecosystem.

## 🎯 Tujuan
Tujuan utama project ini adalah **belajar sambil membangun** dan membuat proof-of-concept dasar untuk:
- Menghubungkan website ke dompet MetaMask user.
- Menerbitkan Verifiable Credential (VC) sederhana.
- Menyimpan dan memverifikasi VC yang diterbitkan.

## 🧠 Kenapa Project Ini?
Ini adalah **batu bata pertama** Weva Ecosystem. Fokusnya adalah menguasai alur dasar penerbitan dan verifikasi identitas sebelum pindah ke fitur yang lebih kompleks seperti integrasi AI, DIDs, dan identitas yang bisa dipakai di mana saja.

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Library Web3:** Ethers.js (untuk koneksi dompet)
- **Backend:** Node.js + Express (untuk menerbitkan credential)
- **Format:** JSON (simulasi Verifiable Credential)

## 📁 Struktur Project

weva-pioneer-cert/
├── public/ # File static (HTML, CSS, JS)
│ ├── index.html
│ ├── styles.css
│ └── app.js
├── server.js # Express server untuk API
├── package.json # Dependencies project
└── README.md # File ini


## 🚀 Cara Menjalankan
1.  **Clone repo ini:**
    ```bash
    git clone https://github.com/weva-id/weva-pioneer-cert.git
    cd weva-pioneer-cert
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Jalankan server:**
    ```bash
    node server.js
    ```

4.  **Buka browser:**
    Buka `http://localhost:3000` untuk liat aplikasinya.

## 🔌 Fitur (Rencana)
- [ ] **Connect Wallet:** Tombol untuk connect MetaMask dan tampilkan alamat dompet.
- [ ] **Issue Certificate:** Tombol untuk minta sertifikat pionir (VC) dari server.
- [ ] **Download Certificate:** Download VC sebagai file JSON.
- [ ] **Verify Certificate:** Halaman sederhana untuk upload dan verifikasi sertifikat.

## 📝 Target Belajar
- [ ] Paham cara interaksi dengan MetaMask pake Ethers.js.
- [ ] Belajar pembuatan API backend dasar dengan Node.js/Express.
- [ ] Paham struktur dasar Verifiable Credential.
- [ ] Latihan komunikasi frontend-backend.

## 🔗 Link Penting
- **Journal Utama Weva:** 
 [https://github.com/<weva-id/weva-journal1>/weva-journal1]
 (https://github.com/<weva-id/weva-journal1>/weva-journal1) (Private)
- **Dokumentasi Ethers.js:** [https://docs.ethers.org/v5/](https://docs.ethers.org/v5/)

## 👨‍💻 Developer
- **Nama:** [Arjuna]
- **Fokus:** Belajar Web3 & Pondasi Identitas Digital

## 📄 License
Project ini untuk tujuan belajar dan bagian dari visi besar Weva Ecosystem.