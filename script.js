document.addEventListener('DOMContentLoaded', () => {
    const addContactBtn = document.getElementById('add-contact-btn');
    const isAndroid = /android/i.test(navigator.userAgent || navigator.vendor || window.opera);

    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Aniket Waghmare
ORG:Acuron Ai Solutions Pvt. Ltd.
TEL;TYPE=WORK,VOICE:+917350791816
EMAIL:contact@acuronai.com
ADR;TYPE=WORK:;;Office No. 716, 7th Floor, KP Square, Telco Road;Chinchwad;Maharastra;411019;India
URL:https://www.acuronai.com
END:VCARD`;

    if (isAndroid) {
        // Use an Android Intent URL directly on the anchor tag.
        // This ensures the browser handles it natively without blocking the popup.
        const intentUrl = "intent://insert/#Intent;" +
            "action=android.intent.action.INSERT;" +
            "type=vnd.android.cursor.dir/contact;" +
            "S.name=" + encodeURIComponent("Aniket Waghmare") + ";" +
            "S.phone=" + encodeURIComponent("+917350791816") + ";" +
            "S.company=" + encodeURIComponent("Acuron Ai Solutions Pvt. Ltd.") + ";" +
            "S.email=" + encodeURIComponent("contact@acuronai.com") + ";" +
            "end;";
        addContactBtn.href = intentUrl;
    } else {
        // Fallback for iOS/Desktop using a native data URL
        const base64Vcard = window.btoa(unescape(encodeURIComponent(vcardData)));
        addContactBtn.href = 'data:text/x-vcard;base64,' + base64Vcard;
    }
});
