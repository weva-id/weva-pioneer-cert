console.log("File app.js loaded successfully!");

// Tangkap element HTML
const connectBtn = document.getElementById('connectBtn');
const generateBtn = document.getElementById('generateBtn');
const walletAddressElement = document.getElementById('walletAddress');
const certElement = document.getElementById('cert');

// 1. Fungsi untuk Connect Wallet
connectBtn.addEventListener('click', async () => {
    console.log("Connect button clicked!");
    
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask ditemukan!');
        try {
            // Minta akses ke akun
            const accounts = await window.ethereum.request({ 
                method: 'eth_requestAccounts' 
            });
            const account = accounts[0];
            
            // Tampilkan alamat wallet (yang disingkat)
            const shortenedAddress = `${account.substring(0, 6)}...${account.substring(account.length - 4)}`;
            walletAddressElement.textContent = `Wallet: ${shortenedAddress}`;
            walletAddressElement.style.color = "green";
            
            // Aktifkan tombol generate
            generateBtn.disabled = false;
            generateBtn.style.opacity = "1";
            console.log("Wallet terhubung:", account);
            
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
            walletAddressElement.textContent = "Error: " + error.message;
            walletAddressElement.style.color = "red";
        }
    } else {
        const errorMsg = "MetaMask tidak terdeteksi! Silakan install extension MetaMask.";
        console.error(errorMsg);
        walletAddressElement.textContent = errorMsg;
        walletAddressElement.style.color = "red";
    }
});

// 2. Fungsi untuk Generate Certificate
generateBtn.addEventListener('click', () => {
    console.log("Generate button clicked!");
    
    // Buat certificate data
    const certificate = {
        type: "WevaPioneer",
        title: "Sertifikat Pioneer Weva Ecosystem",
        description: "Diploma ini diberikan sebagai pengakuan atas kontribusi sebagai pioneer pertama Weva Ecosystem",
        issueDate: new Date().toISOString(),
        recipient: walletAddressElement.textContent.replace('Wallet: ', ''),
        status: "Active",
        achievement: "Early Adopter",
        signature: "weva-ecosystem-signature-2024"
    };

    // Tampilkan certificate di screen
    certElement.textContent = JSON.stringify(certificate, null, 2);
    certElement.style.border = "2px solid #007bff";
    console.log("Sertifikat dibuat:", certificate);
});
