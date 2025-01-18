import mongoose from 'mongoose';
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["NEW",'REJECTED', 'FOLLOWUP', 'ONBOARD', 'PENDING', 'CONFIRM' ],
    default: 'PENDING',
  },
  address: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    required: true,
  },
  offerBudget: {
    type: Number,
  },
  clientType: {
    type: String,
  },
  referredBy: {
    type: String,
  },
  followUpDate: {
    type: Date,
  },
  confirmDate: {
    type: Date,
  },
  important: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true});

const Client = mongoose.model('Client', ClientSchema);

const sampleClients = [
  {
    name: "John Doe",
    mobile: 9876543210,
    status: "PENDING",
    address: "123 Main St, Springfield",
    businessType: "Retail",
    offerBudget: 5000,
    clientType: "Premium",
    referredBy: "Jane Smith",
    followUpDate: new Date("2025-01-20"),
    confirmDate: null,
    important: true,
  },
  {
    name: "Alice Johnson",
    mobile: 9123456780,
    status: "ONBOARD",
    address: "45 Elm St, Shelbyville",
    businessType: "E-commerce",
    offerBudget: 12000,
    clientType: "Regular",
    referredBy: "Online Ad",
    followUpDate: null,
    confirmDate: new Date("2025-01-15"),
    important: false,
  },
  {
    name: "Robert Brown",
    mobile: 8899001122,
    status: "FOLLOWUP",
    address: "78 Oak St, Capital City",
    businessType: "Consulting",
    offerBudget: 8000,
    clientType: "Potential",
    referredBy: "Networking Event",
    followUpDate: new Date("2025-01-25"),
    confirmDate: null,
    important: true,
  },
  {
    name: "Emily Davis",
    mobile: 9988776655,
    status: "REJECTED",
    address: "101 Pine St, Ogdenville",
    businessType: "Manufacturing",
    offerBudget: null,
    clientType: "Unqualified",
    referredBy: "Referral Program",
    followUpDate: null,
    confirmDate: null,
    important: false,
  },
  {
    name: "Michael Wilson",
    mobile: 7788991122,
    status: "CONFIRM",
    address: "456 Maple St, North Haverbrook",
    businessType: "Hospitality",
    offerBudget: 15000,
    clientType: "High-Value",
    referredBy: "Social Media",
    followUpDate: null,
    confirmDate: new Date("2025-01-10"),
    important: true,
  },
];


// async function Save(){
//   await Client.insertMany(sampleClients);
// }
// Save().then(()=>{
//   console.log("Data inserted")
// }).catch((error)=>{
//   console.log(error)
// });

export default Client;
