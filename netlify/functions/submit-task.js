import Airtable from "airtable";
import {
  airtableBase,
  getSnapshot,
  saveSnapshot,
  saveProofUrl,
  findMemberByEmail,
  toRecord,
  json,
} from "../lib/snapshot.js";

export default async (req) => {
  if (req.method !== "POST") return json({ error: "Method Not Allowed" }, 405);
