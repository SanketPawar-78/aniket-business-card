document.addEventListener('DOMContentLoaded', () => {
    const addContactBtn = document.getElementById('add-contact-btn');

    addContactBtn.addEventListener('click', () => {
        const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Aniket Waghmare
ORG:Acuron Ai Solutions Pvt. Ltd.
TITLE:Co-Founder & CEO
TEL;TYPE=WORK,VOICE:+917350791816
EMAIL:contact@acuronai.com
ADR;TYPE=WORK:;;Office No. 716, 7th Floor, KP Square, Telco Road;Chinchwad, Pune;Maharastra;411019;India
URL:https://www.acuronai.com
END:VCARD`;

        const base64Vcard = window.btoa(unescape(encodeURIComponent(vcardData)));
        const dataUrl = 'data:text/x-vcard;base64,' + base64Vcard;
        
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'Aniket_Waghmare.vcf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
