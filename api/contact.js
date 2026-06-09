export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
        email: email,
        attributes: {
          FIRSTNAME: fullName,
          PHONE: phone,
          SERVICE: service,
          DESCRIPTION: description
        },
        listIds: [],   // ⚠️ IMPORTANT: replace if your list ID is NOT 2
        updateEnabled: true
      })
    });

    const data = await response.json();

    // 🔴 IMPORTANT: show real Brevo response
    if (!response.ok) {
      return res.status(400).json({
        error: "Brevo failed",
        details: data
      });
    }

    return res.status(200).json({
      success: true,
      data
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
}