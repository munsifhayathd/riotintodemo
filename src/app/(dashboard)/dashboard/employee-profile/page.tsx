"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

// Mock employee data
const employeeData = {
  id: "EMP001",
  firstName: "Sarah",
  lastName: "Johnson",
  email: "sarah.johnson@woodside.com.au",
  phone: "+61 8 9348 4000",
  position: "Senior Safety Officer",
  department: "Health, Safety & Environment",
  employeeNumber: "WS-2019-0847",
  startDate: "2019-03-15",
  manager: "David Wilson",
  location: "Perth, WA",
  profileImage: "/images/profiles/sarah-johnson.jpg",
  
  // Personal Information
  dateOfBirth: "1985-07-22",
  nationality: "Australian",
  emergencyContact: {
    name: "Michael Johnson",
    relationship: "Spouse",
    phone: "+61 412 345 678"
  },
  
  // Passport & Travel Documents
  passport: {
    number: "N1234567",
    country: "Australia",
    issueDate: "2020-01-15",
    expiryDate: "2030-01-14",
    placeOfIssue: "Perth"
  },
  
  // Visa Information
  visas: [
    {
      country: "United States",
      type: "B1/B2",
      number: "US123456789",
      expiryDate: "2026-05-20",
      status: "Valid"
    },
    {
      country: "United Kingdom",
      type: "Standard Visitor",
      number: "UK987654321",
      expiryDate: "2025-12-10",
      status: "Valid"
    }
  ],
  
  // Current Certifications
  certifications: [
    {
      name: "BOSIET",
      issuer: "OPITO",
      issueDate: "2024-01-15",
      expiryDate: "2027-01-15",
      status: "Valid"
    },
    {
      name: "Helicopter Safety",
      issuer: "CAA",
      issueDate: "2023-06-20",
      expiryDate: "2025-06-20",
      status: "Expiring Soon"
    },
    {
      name: "First Aid",
      issuer: "St John Ambulance",
      issueDate: "2024-03-10",
      expiryDate: "2026-03-10",
      status: "Valid"
    }
  ],
  
  // Current Assignment
  currentAssignment: {
    project: "Scarborough LNG",
    role: "Lead Safety Officer",
    startDate: "2024-06-01",
    endDate: "2025-05-31",
    location: "Karratha, WA",
    status: "Active"
  },
  
  // Skills & Competencies
  skills: [
    "Risk Assessment",
    "Safety Management Systems",
    "Incident Investigation",
    "Emergency Response",
    "Offshore Safety",
    "Regulatory Compliance",
    "Training & Development"
  ]
};

export default function EmployeeProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Valid":
      case "Active":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Expiring Soon":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "Expired":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Employee Profile</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Comprehensive employee information and documentation
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">
            Edit Profile
          </Button>
        </motion.div>
      </div>

      {/* Profile Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800"
      >
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="h-12 w-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-white"></div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {employeeData.firstName} {employeeData.lastName}
              </h2>
              <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                Active
              </Badge>
            </div>
            
            <p className="text-primary font-medium mb-1">{employeeData.position}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{employeeData.department}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-500 dark:text-gray-400">Employee ID:</span>
                <p className="font-medium">{employeeData.employeeNumber}</p>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Location:</span>
                <p className="font-medium">{employeeData.location}</p>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Start Date:</span>
                <p className="font-medium">{employeeData.startDate}</p>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Manager:</span>
                <p className="font-medium">{employeeData.manager}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "documents", label: "Travel Documents" },
            { id: "certifications", label: "Certifications" },
            { id: "assignment", label: "Current Assignment" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Email:</span>
                  <span className="font-medium">{employeeData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Phone:</span>
                  <span className="font-medium">{employeeData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Date of Birth:</span>
                  <span className="font-medium">{employeeData.dateOfBirth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Nationality:</span>
                  <span className="font-medium">{employeeData.nationality}</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Emergency Contact</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Name:</span>
                  <span className="font-medium">{employeeData.emergencyContact.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Relationship:</span>
                  <span className="font-medium">{employeeData.emergencyContact.relationship}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Phone:</span>
                  <span className="font-medium">{employeeData.emergencyContact.phone}</span>
                </div>
              </div>
            </div>

            {/* Skills & Competencies */}
            <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills & Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {employeeData.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "documents" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Passport Information */}
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Passport Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Passport Number:</span>
                  <span className="font-medium">{employeeData.passport.number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Country:</span>
                  <span className="font-medium">{employeeData.passport.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Issue Date:</span>
                  <span className="font-medium">{employeeData.passport.issueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Expiry Date:</span>
                  <span className="font-medium">{employeeData.passport.expiryDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Place of Issue:</span>
                  <span className="font-medium">{employeeData.passport.placeOfIssue}</span>
                </div>
              </div>
            </div>

            {/* Visa Information */}
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Visa Information</h3>
              <div className="space-y-4">
                {employeeData.visas.map((visa, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{visa.country}</h4>
                      <Badge variant="outline" className={getStatusColor(visa.status)}>
                        {visa.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Type: {visa.type}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Number: {visa.number}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Expires: {visa.expiryDate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "certifications" && (
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {employeeData.certifications.map((cert, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{cert.name}</h4>
                    <Badge variant="outline" className={getStatusColor(cert.status)}>
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Issuer: {cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Issued: {cert.issueDate}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Expires: {cert.expiryDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "assignment" && (
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Assignment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Project:</span>
                  <span className="font-medium">{employeeData.currentAssignment.project}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Role:</span>
                  <span className="font-medium">{employeeData.currentAssignment.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Location:</span>
                  <span className="font-medium">{employeeData.currentAssignment.location}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Start Date:</span>
                  <span className="font-medium">{employeeData.currentAssignment.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">End Date:</span>
                  <span className="font-medium">{employeeData.currentAssignment.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Status:</span>
                  <Badge variant="outline" className={getStatusColor(employeeData.currentAssignment.status)}>
                    {employeeData.currentAssignment.status}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}