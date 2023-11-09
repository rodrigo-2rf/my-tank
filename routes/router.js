import { express } from "express";
let router = express.Router();

import fishController from "./FishController.js";
import tankController from "./TankController.js";
import biotopeController from "./BiotopeController.js";
import amountController from "./AmountController.js";

router.get("/", function(req, res) {
    console.log("OLÁ");
    res.status(200).json({ message: "Status 200 OK" });
});

router.user("/", fishController);
router.user("/", tankController);
router.user("/", amountController);
router.user("/", biotopeController);