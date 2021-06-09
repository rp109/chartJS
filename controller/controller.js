const path = require('path');
const models = require('../models/models');
const index = (req, res, next) => {
    console.log('Index API called!');
    res.sendFile(path.join(__dirname, "..", "public", "chat.html"));
}
const insertChartDetails = async (req, res, next) => {
    console.log("Insert Chart Details!");
    let data = req.body;
    console.log("req.body: ", req.body)
    const result = await models.insertMany(data);
    if (result) {
        return res.json({
            success: true,
            message: 'Chart Details Submitted Successfully!',
            data: result
        })
    } else {
        return res.json({
            success: false,
            message: 'Oops! Error Occured',
            data: result
        })
    }
}

const getChartDetails = async (req, res, next) => {
    console.log("get Chart details API called!");
    const result = await models.find();
    if (result) {
        return res.json({
            success: true,
            message: 'Chart Details Found!',
            data: result
        })
    } else {
        return res.json({
            success: false,
            message: "Oops! Error Occured..",
            data: result
        })
    }
}

module.exports = {
    index,
    insertChartDetails,
    getChartDetails
}