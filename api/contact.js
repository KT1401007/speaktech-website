export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    console.log("REQUEST BODY:", req.body);

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email: req.body.email,
        attributes: {
          FIRSTNAME: req.body.fullName,
          PHONE: req.body.phone,
          SERVICE: req.body.service,
          DESCRIPTION: req.body.description
        },
        listIds: [8],
        updateEnabled: true
      })
    });

    const data = await response.json();

    console.log("BREVO STATUS:", response.status);
    console.log("BREVO RESPONSE:", data);

    if (!response.ok) {
      return res.status(400).json({
        error: "Brevo failed",
        details: data
      });
    }

    return res.status(200).json({
      success: true,
      brevo: data
    });

  } catch (err) {

    console.log("SERVER ERROR:", err);

    return res.status(500).json({
      error: err.message
    });
  }
}