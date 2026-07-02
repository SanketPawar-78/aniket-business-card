import qrcode

# The URL of your Vercel deployment goes here.
# For example, if your vercel app is https://pratik-card.vercel.app, replace the below string:
vercel_url = "https://your-vercel-app-url.vercel.app"

# Generate the Dynamic QR Code (it's dynamic because it points to the URL which you can update via Vercel later)
qr = qrcode.make(vercel_url)

# Save the QR Code image
qr.save("Dynamic_Business_Card_QR.png")

print("QR Code successfully generated!")
print(f"It points to: {vercel_url}")
print("When users scan this, they will be taken to your Digital Business Card hosted on Vercel.")
