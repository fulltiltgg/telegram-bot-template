import { model, Schema } from "./../mongoose.ts";

export const UserSchema = new Schema({
  id: { type: Number, index: true, unique: true },
  languageCode: { type: String, default: "en" },
  value: { type: Number, default: 0 },
});

export const Users = model("Users", UserSchema);
