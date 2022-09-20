import express from "express";
import pool from "../../../../db/index.js";
const router = express.Router();
import validator from "validator";

export const getProductGroups = async (req, res) => {
	try {
		const result = await pool.query(
			"SELECT * FROM product_group ORDER BY prod_grp_code"
		);
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: error.message });
	}
};

export const getProductGroupById = async (req, res) => {
	const { id } = req.params;

	try {
		const result = await pool.query(
			"SELECT * FROM product_group WHERE prod_grp_id = $1",
			[id]
		);
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: error.message });
	}
};

export const createProductGroup = async (req, res) => {
	const request = req.body;
	console.log(request);
	console.log(validator.isEmail(request.email));

	// const newSample = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
};

// export const getSample = async (req, res) => {
//     const { id } = req.params;

//     try {
//         // const post = await PostMessage.findById(id);

//         res.status(200).json(post);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// export const createSample = async (req, res) => {
//     const post = req.body;
//     const newSample = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
// }

// export const updateSample = async (req, res) => {
//     const { id } = req.params;
//     const { title, message } = req.body;
//     res.json(updatedPost);
// }

// export const deleteSample = async (req, res) => {
//     const { id } = req.params;
// }

export default router;
