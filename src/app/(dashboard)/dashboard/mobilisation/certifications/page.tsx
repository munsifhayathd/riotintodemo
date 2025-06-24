"use client";

import { Button } from "@/components/ui/button";
import { CertificationTable } from "@/components/mobilisation/certification-table";
import { CertificationForm } from "@/components/mobilisation/certification-form";
import { Modal } from "@/components/ui/modal";
import { motion } from "framer-motion";
import { useState } from "react";
import { CertificationData } from "@/types/mobilisation";

export default function SafetyCertificationsPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [projectFilter, setProjectFilter] = useState("All");
  const [certificationFilter, setCertificationFilter] = useState("All");

  const handleAddCertification = (data: CertificationData) => {
    // In a real app, this would save the data to the database
    console.log("New certification:", data);
    setShowAddModal(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Safety Certifications & Compliance</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Track mining safety certifications, monitor expiry dates, and verify compliance
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
            onClick={() => setShowAddModal(true)}
          >
            Add New Certification
          </Button>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Valid</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">287</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-500 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Expiring Soon</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">24</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-red-500 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Expired</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">12</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Compliance Rate</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">96.8%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Mining Safety Certification Management</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Monitor mining safety certification status, expiry dates, and compliance requirements for all mining operations personnel.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Status Filters */}
            <div className="flex gap-1">
              {["All", "Valid", "Expiring Soon", "Expired"].map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                  className={statusFilter === status ? "bg-primary text-white" : ""}
                >
                  {status}
                </Button>
              ))}
            </div>
            
            {/* Project Filters */}
            <div className="flex gap-1">
              <select
                value={projectFilter}
                onChange={(e) => setProjectFilter(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="All">All Mining Operations</option>
                <option value="Iron Ore Western Australia">Iron Ore Western Australia</option>
                <option value="Oyu Tolgoi Mongolia">Oyu Tolgoi Mongolia</option>
                <option value="Kennecott Utah">Kennecott Utah</option>
                <option value="Diavik Diamond Mine">Diavik Diamond Mine</option>
                <option value="Simandou Guinea">Simandou Guinea</option>
                <option value="Rincon Lithium">Rincon Lithium</option>
              </select>
            </div>
            
            {/* Certification Type Filters */}
            <div className="flex gap-1">
              <select
                value={certificationFilter}
                onChange={(e) => setCertificationFilter(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="All">All Safety Certifications</option>
                <option value="Mine Safety">Mine Safety Training</option>
                <option value="Heavy Equipment">Heavy Equipment Operation</option>
                <option value="First Aid">First Aid & CPR</option>
                <option value="Confined Space">Confined Space Entry</option>
                <option value="Working at Height">Working at Height</option>
                <option value="Hazmat">Hazardous Materials Handling</option>
                <option value="Blasting">Blasting & Explosives</option>
                <option value="Respiratory">Respiratory Protection</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Certification Table */}
        <CertificationTable 
          statusFilter={statusFilter}
          projectFilter={projectFilter}
          certificationFilter={certificationFilter}
        />
      </div>

      {/* Add Certification Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Safety Certification"
      >
        <CertificationForm
          onSubmit={handleAddCertification}
          onCancel={() => setShowAddModal(false)}
        />
      </Modal>
    </div>
  );
}