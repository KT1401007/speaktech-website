export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const {
    fullName,
    email,
    phone,
    service,
    description
  } = req.body;

  try {

    const response = await fetch(
      "https://api.brevo.com/v3/contacts",
      {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "api-key": process.env.BREVO_API_KEY
        },
        body: JSON.stringify({
          email,
          attributes: {
            PHONE: phone,
            SERVICE: service,
            DESCRIPTION: description
          },
          listIds: [2],
          updateEnabled: true
        })
      }
    );

    const data = await response.json();

    return res.status(200).json(data);

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }

}