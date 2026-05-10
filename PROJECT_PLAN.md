# Errorku - Debugging Lebih Manusiawi

Errorku adalah platform inovatif yang dirancang khusus untuk programmer pemula, mahasiswa IT, dan siswa coding yang sering merasa teritimidasi oleh pesan error teknis yang rumit. Platform ini menggunakan AI untuk menerjemahkan pesan error menjadi penjelasan bahasa manusia yang sederhana dan langkah-langkah solusi yang mudah diikuti.

## 1. Analisis Project
*   **Tujuan Project**: Menurunkan hambatan belajar coding dengan menghilangkan rasa takut terhadap pesan error.
*   **Masalah yang Diselesaikan**: Pesan error standard (seperti di C++ atau Python) seringkali terlalu teknis dan sulit dipahami pemula (ex: "Segmentation fault", "List index out of range").
*   **Target User**: Mahasiswa semester awal, siswa SMK IT, peserta Bootcamp, dan orang awam yang sedang belajar coding secara otodidak.
*   **Kelebihan**: Menggunakan bahasa yang santai ("kayak temen"), mendukung banyak bahasa pemrograman, dan gratis.
*   **Peluang Masa Depan**: Integrasi langsung ke VS Code Extension, sistem level/gamifikasi, dan komunitas mentoring.

## 2. Fitur Utama
*   **MVP (Fitur Dasar)**:
    *   **Input Error**: Form untuk paste pesan error.
    *   **AI Error Explainer**: Penjelasan sederhana kenapa error terjadi.
    *   **Solusi Pintar**: Langkah-langkah fix error.
*   **Menengah**:
    *   **Auto-Detect Language**: Mendeteksi otomatis apakah itu Python, JS, C++, dll.
    *   **Upload Screenshot**: Menggunakan OCR untuk membaca error dari foto.
    *   **History**: Menyimpan riwayat error yang pernah ditanyakan.
*   **Advanced AI**:
    *   **AI Debugging Mentor**: Chatbot interaktif untuk guiding step-by-step.
    *   **Gamifikasi**: User naik level berdasarkan jumlah error yang berhasil mereka pahami.

## 3. Alur Sistem
1.  **Input**: User memasukkan teks/gambar error.
2.  **Preprocessing**: Sistem membersihkan teks dan mendeteksi bahasa.
3.  **AI Analysis**: Prompt dikirim ke Gemini AI dengan instruksi "Jelaskan dengan bahasa manusia paling sederhana".
4.  **Output**: User menerima penjelasan, tingkat kesulitan, dan solusi.

## 4. Teknologi Stack
*   **Frontend**: React + Vite + Tailwind CSS + Framer Motion (Untuk UI modern).
*   **Backend**: Node.js (Express) - Ideal untuk scalability.
*   **Database**: Firebase Firestore (Real-time, mudah untuk pemula).
*   **AI**: Google Gemini API (Sangat kuat untuk pemahaman bahasa).
*   **OCR**: Tesseract.js atau Google Vision API (Untuk fitur upload screenshot).

## 5. Struktur Database (Firestore Ready)
*   **Users**: `{uid, username, level, exp, joinDate}`
*   **Errors**: `{id, originalText, language, difficulty}`
*   **Solutions**: `{errorId, simpleText, stepByStepListing}`
*   **History**: `{userId, errorId, timestamp}`

## 6. Desain UI/UX
*   **Konsep**: "Clean Technical" - Menggunakan font Monospace untuk input dan font Sans-serif yang lega untuk penjelasan.
*   **Warna**: Indigo (#4F46E5) sebagai warna utama (membangun kepercayaan) dan Gray-900 sebagai background terminal (memberikan kesan 'pro').

## 7. Roadmap Pengerjaan
*   **Fase 1 (Minggu 1)**: UI Landing Page & Integrasi Dasar Gemini API.
*   **Fase 2 (Minggu 2)**: Sistem Auth & Database History.
*   **Fase 3 (Minggu 3)**: Fitur OCR & Komunitas Discussion.
*   **Fase 4 (Minggu 4)**: Gamifikasi & Final Deployment.

## 8. Fitur Inovatif Unik
*   **"Explain Like I'm Five" (ELI5) Mode**: Toggle untuk mendapatkan penjelasan yang sangat sangat sederhana (misal menggunakan analogi masak atau mengemudi).
*   **Debugging Buddy**: Avatar AI yang menyemangati user saat mereka dapat banyak error.

## 9. Tantangan & Solusi
*   **Tantangan**: Prompt injection (user memasukkan hal aneh).
*   **Solusi**: Gunakan system instruction yang ketat pada AI.

## 10. Struktur Folder
```text
/src
  /components     # UI Reusable
  /services       # AI & Database logic
  /pages          # Halaman utama
  /hooks          # State logic
  /types          # TypeScript definitions
```
