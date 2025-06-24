"use client";

import { Button } from "@/components/ui/button";
import { PersonnelAllocationTable } from "@/components/mobilisation/personnel-allocation-table";
import { PersonnelAllocationForm } from "@/components/mobilisation/personnel-allocation-form";
import { Modal } from "@/components/ui/modal";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PersonnelAllocationPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleAddAllocation = (data: any) => {
    // In a real app, this would save the data to the database
    console.log("New allocation:", data);
    setShowAddModal(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Personnel Allocation</h1>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
            onClick={() => setShowAddModal(true)}
          >
            Add New Allocation
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Manage Personnel Allocations</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Allocate personnel to specific roles and projects, track allocations, and manage notifications.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Project Filter */}
            <select
              value={projectFilter}
              onChange={(e) => setProjectFilter(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="All">All Projects</option>
              <option value="Scarborough LNG">Scarborough LNG</option>
              <option value="Pluto Expansion">Pluto Expansion</option>
              <option value="North West Shelf">North West Shelf</option>
              <option value="Wheatstone">Wheatstone</option>
              <option value="Browse FLNG">Browse FLNG</option>
            </select>
            
            {/* Role Filter */}
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="All">All Roles</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Engineer">Engineer</option>
              <option value="Safety Officer">Safety Officer</option>
              <option value="Technician">Technician</option>
            </select>
            
            {/* Status Filter */}
            <div className="flex gap-1">
              {["All", "Confirmed", "Pending"].map((status) => (
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
          </div>
        </div>
        
        {/* Personnel Allocation Table */}
        <PersonnelAllocationTable 
          projectFilter={projectFilter}
          roleFilter={roleFilter}
          statusFilter={statusFilter}
        />
      </div>

      {/* Add Allocation Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Personnel Allocation"
      >
        <PersonnelAllocationForm
          onSubmit={handleAddAllocation}
          onCancel={() => setShowAddModal(false)}
        />
      </Modal>
    </div>
  );
}