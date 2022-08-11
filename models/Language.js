import mongoose from "mongoose";

const LanguageSchema = new mongoose.Schema({
  locale: { type: String, unique: true },
  landing: { name: String, title: String },
  about: {
    title: String,
    tagline: String,
    image: String,
    description: String,
    links: [{ name: String, link: String }]
  },
  contact: {
    title: String,
    tagline: String,
    phone: String,
    email: String,
    links: [{ name: String, link: String }]
  },
  education: {
    title: String,
    tagline: String,
    education: [
      {
        title: String,
        company: String,
        description: String,
        startYear: String,
        endYear: String,
        syllabus: { name: String, link: String }
      }
    ]
  },
  experience: {
    title: String,
    tagline: String,
    jobs: [
      {
        title: String,
        company: String,
        description: String,
        startYear: String,
        endYear: String
      }
    ]
  },
  skills: {
    title: String,
    tagline: String,
    skills: [{ name: String, list: [String] }]
  },
  portfolio: {
    title: String,
    tagline: String,
    projects: [
      {
        image: String,
        name: String,
        title: String,
        description: String,
        website: String,
        github: String
      }
    ]
  }
});

module.exports =
  mongoose.models.Language || mongoose.model("Language", LanguageSchema);
