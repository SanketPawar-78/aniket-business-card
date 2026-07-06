document.addEventListener('DOMContentLoaded', () => {
    const addContactBtn = document.getElementById('add-contact-btn');

    addContactBtn.addEventListener('click', () => {
        const isAndroid = /android/i.test(navigator.userAgent || navigator.vendor || window.opera);

        if (isAndroid) {
            // Use Android Intent to bypass download and open Contacts directly
            const intentUrl = "intent://insert/#Intent;" +
                "action=android.intent.action.INSERT;" +
                "type=vnd.android.cursor.dir/contact;" +
                "S.name=" + encodeURIComponent("Aniket Waghmare") + ";" +
                "S.phone=" + encodeURIComponent("+917350791816") + ";" +
                "S.company=" + encodeURIComponent("Acuron Ai Solutions Pvt. Ltd.") + ";" +
                "S.email=" + encodeURIComponent("contact@acuronai.com") + ";" +
                "end;";
            window.location.href = intentUrl;
            return;
        }

        // vCard data for iOS and Desktop (Safari handles this natively without a messy download prompt)
        const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Aniket Waghmare
ORG:Acuron Ai Solutions Pvt. Ltd.
TEL;TYPE=WORK,VOICE:+917350791816
EMAIL:contact@acuronai.com
ADR;TYPE=WORK:;;Office No. 716, 7th Floor, KP Square, Telco Road;Chinchwad Pune;Maharastra;411019;India
URL:https://www.acuronai.com
END:VCARD`;

        // Convert to Base64 to bypass some strict browser download restrictions
        const base64Vcard = window.btoa(unescape(encodeURIComponent(vcardData)));
        const dataUrl = 'data:text/x-vcard;base64,' + base64Vcard;

        // Navigate directly to the vCard data. 
        // On many modern mobile browsers (especially iOS Safari), this skips the background download
        // and immediately pops up the native "Add to Contacts" screen.
        window.location.href = dataUrl;
    });
});
