const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModal");


const cerateInventoryCOntroller = async (req, res) => {
    try {
        const { email, inventoryType } = req.body;
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found'
            })
        }
        if (inventoryType === "in" && user.role !== "donar") {
            return res.status(404).send({
                success: false,
                message: "Not a donar account"
            })
        }
        if (inventoryType === "out" && user.role !== "hospital") {
            return res.status(404).send({
                success: false,
                message: 'Not a hospital'
            })
        }
        const inventory = new inventoryModel(req.body)
        await inventory.save();
        return res.status(200).send({
            success: true,
            message: "New Blood Record Added."
        })


    } catch (errors) {
        console.log(errors);
        return res.status(500).send({
            success: false,
            message: "Errors In Create Inventory API",
            errors
        })

    }

}

const getInventoryCOntroller = async (req, res) => {
    try {
        const inventory = await inventoryModel.findOne({ organisation: req.body.organisation })
        return res.status(200).send({
            success: true,
            message: "All record seccussfully",
            inventory

        })

    } catch (errors) {
        // console.log(errors);
        return res.status(500).send({
            success: false,
            message: "Errors In Create Inventory API",
            errors
        })

    }
}
module.exports = { cerateInventoryCOntroller, getInventoryCOntroller }