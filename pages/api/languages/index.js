import dbConnect from "../../../lib/dbConnect";
import Language from "../../../models/Language";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const language = await Language.find({});
        res.status(200).json({ success: true, data: language });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const language = req.body;
        await Language.create(language);
        res.status(200).json({
          success: true,
          message: `${language.locale} language added to db.`
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(404).json({ success: false });
      break;
  }
}
