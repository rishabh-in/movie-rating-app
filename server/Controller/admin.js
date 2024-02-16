import userModel from "../Model/UserModel.js";
import AdminRequestModel from "../Model/AdminRequestModel.js"
import {v4} from "uuid";


export const uploadMedia = async (req, res) => {
  try {
    // let {}
  } catch (error) {
    console.log(error);
  }
}

export const requestForRoleUpgrade = async (req, res) => {
  try {
    let {email} = req.body;
    let request = await AdminRequestModel.create({requestedBy: email, status: "Pending", requestId: v4()});
    if(request) {
      res.json({
        message: "Request raised successfully",
      })
    } else {
      res.status(400).json({
        message: "Failed tp send request"
      })
    }
  } catch (error) {
    console.log(error);
  }
}

export const updateRequest = async (req, res) => {
  try {
    let {status, email} = req.body;
    if(!email) {
      res.json({
        message: "Email required"
      })
    }
    await AdminRequestModel.updateOne({requestedBy: email}, {$set: {status}});
    res.json({
      message: "Request Updated"
    })
  } catch (error) {
    console.log(error);
  }
}