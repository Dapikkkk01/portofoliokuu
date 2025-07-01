// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Contact form submission to WhatsApp
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form untuk refresh halaman

    // Ambil nilai dari input form
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    // Validasi sederhana: pastikan semua field terisi
    if (!name || !email || !message) {
        alert('Mohon lengkapi semua field!');
        return;
    }

    // Nomor WhatsApp tujuan (ganti dengan nomor Anda, tanpa +)
    const phoneNumber = '6285859441421'; // GANTI DENGAN NOMOR WHATSAPP ANDA

    // Buat pesan WhatsApp
    const whatsappMessage = `Halo Dafiq Yusron Habibi, saya ${name} (${email}).%0A%0A${message}`;
    // %0A adalah kode URL untuk baris baru (newline)

    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${+6285859441421}?text=${encodeURIComponent(whatsappMessage)}`;
    // encodeURIComponent() memastikan pesan diformat dengan benar untuk URL

    // Buka link WhatsApp di tab baru
    window.open(whatsappURL, '_blank');

    // Opsional: Berikan feedback kepada pengguna setelah mengarahkan ke WhatsApp
    alert('Anda akan diarahkan ke WhatsApp untuk mengirim pesan. Terima kasih!');

    // Kosongkan form setelah pesan dikirim
    this.reset();
});