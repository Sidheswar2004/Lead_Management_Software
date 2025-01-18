import Client from "../model/Client.js";
import express from 'express';
const Leadrouter = express.Router({ mergeParams: true });


const createClient = async (req, res) => {
    try {
        const { name, mobile, address, businessType, offerBudget, clientType, referredBy, important } = req.body;

        const newClient = new Client({
            name,
            mobile,
            address,
            businessType,
            offerBudget,
            clientType,
            referredBy,
            important,
        });

        await newClient.save();
        return res.status(201).json({ message: 'Client created successfully!' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: error.message });
    }
}


router.post('/add', createClient);
router.get('/',async (req, res) => {
    try {
        const clients = await Client.find();
        return res.status(200).json( clients );
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: error.message });
    }
});

// router.get



// const getAllNewClients = async (req, res) => {
//     try {

//         const page = parseInt(req.query.page) || 1;
//         const limit = parseInt(req.query.limit) || 50;

//         const skip = (page - 1) * limit;

//         const clients = await Client.find({ status: 'PENDING' }).limit(limit).skip(skip).sort({ createdAt: -1 });

//         const countDocuments = await Client.find({ status: 'PENDING' }).countDocuments();
//         const totalPages = Math.ceil(countDocuments / limit);

//         return res.status(200).json({ message: 'New Clients fetched successfully!', clients, totalPages });
//     } catch (error) {
//         console.error(error)
//         return res.status(500).json({ error: error.message });
//     }
// }

// export { Leadrouter }