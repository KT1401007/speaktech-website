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
        listIds: [8], // keep your current one for now
        updateEnabled: true
      })
    });

    const data = await response.json();

    // 🔴 THIS IS THE IMPORTANT PART
    if (!response.ok) {
      return res.status(400).json({
        error: "Brevo failed",
        brevo_status: response.status,
        brevo_response: data
      });
    }

    return res.status(200).json({
      success: true,
      brevo_response: data
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}