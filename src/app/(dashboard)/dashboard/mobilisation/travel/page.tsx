"use client";

import { Button } from "@/components/ui/button";
import { TravelBookingTable } from "@/components/mobilisation/travel-booking-table";
import { TravelBookingForm } from "@/components/mobilisation/travel-booking-form";
import { Modal } from "@/components/ui/modal";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TravelLogisticsPage() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [projectFilter, setProjectFilter] = useState("All");
  const [destinationFilter, setDestinationFilter] = useState("All");

  const handleNewBooking = (data: any) => {
    // In a real app, this would save the data to the database
    console.log("New travel booking:", data);
    setShowBookingModal(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Travel & Logistics</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage flight bookings, accommodation, and travel arrangements for mining operations personnel
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
            onClick={() => setShowBookingModal(true)}
          >
            Book New Travel
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
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Confirmed Bookings</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">198</p>
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
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Approval</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">31</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Quote Requests</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">18</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Cost (Month)</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">$142,780</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Travel Logistics Management</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Track flight bookings, accommodation arrangements, and travel costs for mining operations personnel.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Status Filters */}
            <div className="flex gap-1">
              {["All", "Confirmed", "Pending", "Quote Requested"].map((status) => (
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
            
            {/* Project Filter */}
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
            
            {/* Destination Filter */}
            <select
              value={destinationFilter}
              onChange={(e) => setDestinationFilter(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="All">All Destinations</option>
              <option value="Pilbara">Pilbara, Western Australia</option>
              <option value="Ulaanbaatar">Ulaanbaatar, Mongolia</option>
              <option value="Salt Lake City">Salt Lake City, Utah</option>
              <option value="Yellowknife">Yellowknife, Canada</option>
              <option value="Conakry">Conakry, Guinea</option>
              <option value="Salta">Salta, Argentina</option>
            </select>
          </div>
        </div>
        
        {/* Travel Booking Table */}
        <TravelBookingTable 
          statusFilter={statusFilter}
          projectFilter={projectFilter}
          destinationFilter={destinationFilter}
        />
      </div>

      {/* Book Travel Modal */}
      <Modal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        title="Book New Travel & Logistics"
      >
        <TravelBookingForm
          onSubmit={handleNewBooking}
          onCancel={() => setShowBookingModal(false)}
        />
      </Modal>
    </div>
  );
}