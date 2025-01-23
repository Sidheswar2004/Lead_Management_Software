import React from 'react';
// import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { User, Mail, Phone, Building, MapPin, Briefcase } from 'lucide-react';

const ProfileCard = () => {
    const userProfile = {


        name: "John Smith",
        businessType: "Senior Software Engineer",
        offerBudget: "john.smith@example.com",
        phone: "+1 (555) 123-4567",
        clientType: "Tech Solutions Inc.",
        referredBy: "Engineering",
        address: "New York, NY",
        status: "PENDING"

    };

    return (
        <div className="max-w-md mx-auto m-10 mt-16 p-10 bg-white shadow-lg">
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">{userProfile.name}</h2>
                    </div>
                </div>
            </div>
            
            <div className="space-y-4 mt-6 ml-6">
                {/* Contact & Work Info */}
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        {/* <Mail className="h-5 w-5 text-gray-500" /> */}
                        <span className="text-gray-700">Status : {userProfile.status}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        {/* <Mail className="h-5 w-5 text-gray-500" /> */}
                        <span className="text-gray-700">BusinessType : {userProfile.businessType}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        {/* <Mail className="h-5 w-5 text-gray-500" /> */}
                        <span className="text-gray-700">OfferBudget : {userProfile.offerBudget}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        {/* <Phone className="h-5 w-5 text-gray-500" /> */}
                        <span className="text-gray-700">Phone : {userProfile.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        {/* <Building className="h-5 w-5 text-gray-500" /> */}
                        <span className="text-gray-700">ClientType : {userProfile.clientType}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        {/* <Briefcase className="h-5 w-5 text-gray-500" /> */}
                        <span className="text-gray-700">RefferedBy : {userProfile.referredBy}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        {/* <MapPin className="h-5 w-5 text-gray-500" /> */}
                        <span className="text-gray-700">Address : {userProfile.address}</span>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default ProfileCard;