import mongoose from "mongoose";

const AdminRequestSchema = mongoose.Schema({
  requestId: String,
  requestedBy: String,
  status: {
    type: String,
    enum: ["Approved", "Pending", "Rejected"]
  }
})

const AdminRequestModel = mongoose.model("AdminRequest", AdminRequestSchema);

export default AdminRequestModel;