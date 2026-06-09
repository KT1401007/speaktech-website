export default async function handler(req, res) {

  try {

    const { fullName, email, phone, service, description } = req.body;

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email,
        listIds: [8], // 🔴 CHANGE THIS
        updateEnabled: true
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(400).json({
        error: "Brevo failed",
        details: data
      });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}