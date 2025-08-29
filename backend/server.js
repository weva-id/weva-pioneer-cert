const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// pastikan folder certs ada
const certDir = path.join(__dirname, "certs");
if (!fs.existsSync(certDir)) {
  fs.mkdirSync(certDir);
}

// Endpoint buat generate sertifikat JSON
app.post("/generate", (req, res) => {
  const { walletAddress } = req.body;

  if (!walletAddress) {
    return res.status(400).json({ error: "Wallet address required" });
  }

  const cert = {
    id: Date.now(),
    wallet: walletAddress,
    issuedAt: new Date().toISOString(),
    issuer: "Weva Pioneer Program"
  };

  const filePath = path.join(certDir, `${cert.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(cert, null, 2));

  res.json({ success: true, cert });
});

app.listen(PORT, () =>
  console.log(`✅ Backend running on http://localhost:${PORT}`)
);
