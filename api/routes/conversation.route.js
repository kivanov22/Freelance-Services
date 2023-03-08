import express from "express"
import {
    getConversations,
    createConversation,
    getSingleConversation,
    updateConversation
} from "../controllers/conversation.controller.js";
import veirfyToken from "../middlewares/jwt.js";

const router = express.Router()

router.get("/",veirfyToken,getConversations);
router.post("/",veirfyToken,createConversation);
router.get("/single/:id",veirfyToken,getSingleConversation);
router.post("/:id",veirfyToken,updateConversation);

export default router;