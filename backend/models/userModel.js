import mongoose from 'mongoose';

/* User Schema */

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true, dropDups: true},
  password: { type: String, required: true},
  isAdmin: { type: Boolean, required: true, default: false}

})

/* Model */

const userModel = mongoose.model("User", userSchema);

export default userModel;

/* dropDups: true    note this is deprecated*/