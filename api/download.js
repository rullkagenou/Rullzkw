import axios from "axios";

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL tidak ditemukan" });
  }

  try {
    const response = await axios.get("https://tiktok-download-without-watermark.p.rapidapi.com/analysis", {
      params: {
        url,
        hd: "0"
      },
      headers: {
        "x-rapidapi-host": "tiktok-download-without-watermark.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "Gagal mengambil data",
      detail: error.message
    });
  }
}
