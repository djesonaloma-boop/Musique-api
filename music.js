// ============================================================
// JASON MUSIC API
// Endpoint : /api/music
// ============================================================

export default async function handler(req, res) {
  // Autoriser le frontend
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Utilise la méthode POST."
    });
  }

  try {
    const {
      title = "Ma chanson",
      style = "Pop",
      mood = "Émotion",
      lyrics = ""
    } = req.body || {};

    if (!lyrics.trim()) {
      return res.status(400).json({
        success: false,
        error: "Les paroles sont obligatoires."
      });
    }

    /*
      ==========================================================
      IMPORTANT

      C'est ici que tu dois connecter TON véritable fournisseur
      de génération musicale.

      Exemple :

      const response = await fetch("URL_DE_TON_SERVICE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.MUSIC_API_KEY}`
        },
        body: JSON.stringify({
          title,
          style,
          mood,
          lyrics
        })
      });

      const data = await response.json();

      return res.status(200).json({
        success: true,
        audioUrl: data.audioUrl
      });
      ==========================================================
    */

    return res.status(501).json({
      success: false,
      error:
        "Le serveur JASON MUSIC fonctionne, mais aucun moteur musical n'est encore connecté."
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Erreur interne du serveur."
    });
  }
}