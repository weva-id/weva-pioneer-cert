// app.js - Frontend Logic

// Tangkap element HTML
const connectBtn = document.getElementById('connectBtn');
const generateBtn = document.getElementById('generateBtn');
const walletAddressElement = document.getElementById('walletAddress');
const certElement = document.getElementById('cert');

// 1. Fungsi untuk Connect Wallet
connectBtn.addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask ditemukan!');
        try {
            // Minta akses ke akun
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            
            // Tampilkan alamat wallet (yang disingkat)
            const shortenedAddress = `${account.substring(0, 6)}...${account.substring(account.length - 4)}`;
            walletAddressElement.textContent = `Wallet: ${shortenedAddress}`;
            
            // Aktifkan tombol generate
            generateBtn.disabled = false;
            console.log("Wallet terhubung:", account);
            
        } catch (error) {
            console.error("User menolak koneksi:", error);
            alert("Gagal connect ke wallet! Pastikan kamu approve koneksinya di MetaMask.");
        }
    } else {
        alert("MetaMask tidak terdeteksi! Silakan install extension MetaMask.");
    }
});

// 2. Fungsi untuk Generate Certificate (Buat Sementara)
generateBtn.addEventListener('click', () => {
    // Untuk sementara, kita buat data dummy dulu
    const dummyCert = {
        type: "WevaPioneer",
        message: "Ini adalah sertifikat percobaan!",
        issuedAt: new Date().toISOString()
    };
    // Tampilkan data dummy di screen
    certElement.textContent = JSON.stringify(dummyCert, null, 2);
    console.log("Sertifikat dummy dibuat:", dummyCert);
});
