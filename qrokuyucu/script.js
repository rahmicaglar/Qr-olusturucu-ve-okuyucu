// QR Kod Üretme
document.getElementById('generate-btn').addEventListener('click', function() {
    var qrInput = document.getElementById('qr-input').value;
    var qrcodeContainer = document.getElementById('qrcode');

    // QR kod alanını temizleyin
    qrcodeContainer.innerHTML = "";

    if (qrInput.trim() !== "") {
        // Yeni QR kod oluştur
        var qrcode = new QRCode(qrcodeContainer, {
            text: qrInput,
            width: 256,
            height: 256
        });
    }
});

// QR Kod Okuma
QrScanner.WORKER_PATH = 'https://cdn.jsdelivr.net/npm/qr-scanner@1.2.0/qr-scanner-worker.min.js';

document.getElementById('qr-file').addEventListener('change', function(e) {
    var file = e.target.files[0];
    if (file) {
        QrScanner.scanImage(file)
            .then(result => {
                document.getElementById('qr-result').innerText = 'QR Kod İçeriği: ' + result;
            })
            .catch(error => {
                document.getElementById('qr-result').innerText = 'QR Kod okunamadı: ' + error;
            });
    }
});