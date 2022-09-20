import express from "express";
const router = express.Router();

import {
	getProductGroups,
	getProductGroupById,
	createProductGroup,
} from "../controllers/productGroup.js";
router.get("/composite/product-group", getProductGroups);
router.get("/composite/product-group/:id", getProductGroupById);
router.post("/composite/product-group", createProductGroup);
// router.post("/signup", signup);

export default router;
