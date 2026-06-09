export default async function handler(req, res) {

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      email: req.body.email,
      listIds: [8],
      updateEnabled: true
    })
  });

  const data = await response.json();

  return res.status(response.status).json(data);
}