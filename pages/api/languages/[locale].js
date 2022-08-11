import dbConnect from "../../../lib/dbConnect";
import Language from "../../../models/Language";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const { locale } = req.query;
        const language = await Language.findOne({ locale: locale });
        res.status(200).json({ success: true, language });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(404).json({ success: false });
      break;
  }
}
