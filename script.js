document.addEventListener('DOMContentLoaded', () => {
    const addContactBtn = document.getElementById('add-contact-btn');

    addContactBtn.addEventListener('click', () => {
        // vCard data matching the provided details
        const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Waghmare;Aniket;;;
FN:Aniket Waghmare
ORG:Acuron Ai Solutions Pvt. Ltd.
TITLE:Founder
TEL;TYPE=WORK,VOICE:+917350791816
EMAIL;TYPE=WORK:contact@acuronai.com
URL:https://www.acuronai.com
ADR;TYPE=WORK:;;716\\, KP Square\\, Chinchwad;Pune;Maharashtra;411019;India
END:VCARD`;

        // The most reliable way for mobile browsers (iOS/Android)
        // Convert to Base64 to bypass some strict browser download restrictions
        const base64Vcard = window.btoa(unescape(encodeURIComponent(vcardData)));
        const dataUrl = 'data:text/x-vcard;base64,' + base64Vcard;
        
        // Navigate directly to the vCard data. 
        // On many modern mobile browsers (especially iOS Safari), this skips the background download
        // and immediately pops up the native "Add to Contacts" screen.
        window.location.href = dataUrl;
    });
});
