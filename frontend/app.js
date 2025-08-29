let walletAddress = null;

document.getElementById("connectBtn").onclick = async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    walletAddress = await signer.getAddress();
    document.getElementById("wallet").innerText = "Connected: " + walletAddress;
    document.getElementById("generateBtn").disabled = false;
  } else {
    alert("Please install MetaMask!");
  }
};

document.getElementById("generateBtn").onclick = async () => {
  const res = await fetch("http://localhost:5000/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ walletAddress })
  });

  const data = await res.json();
  document.getElementById("cert").innerText = JSON.stringify(data.cert, null, 2);
};
