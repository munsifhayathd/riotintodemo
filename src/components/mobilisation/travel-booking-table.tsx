"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Mock data for travel bookings
const mockTravelBookings = [
  {
    id: "1",
    personnelName: "John Smith",
    project: "Iron Ore Western Australia",
    departure: "Perth",
    destination: "Pilbara",
    departureDate: "2025-07-01",
    returnDate: "2025-07-15",
    flightStatus: "Confirmed",
    accommodationStatus: "Confirmed",
    totalCost: "$2,450",
  },
  {
    id: "2",
    personnelName: "Sarah Johnson",
    project: "Weipa Bauxite",
    departure: "Brisbane",
    destination: "Weipa",
    departureDate: "2025-07-10",
    returnDate: "2025-07-24",
    flightStatus: "Pending",
    accommodationStatus: "Confirmed",
    totalCost: "$2,890",
  },
  {
    id: "3",
    personnelName: "Michael Brown",
    project: "Iron Ore Western Australia",
    departure: "Sydney",
    destination: "Port Hedland",
    departureDate: "2025-08-01",
    returnDate: "2025-08-30",
    flightStatus: "Confirmed",
    accommodationStatus: "Pending",
    totalCost: "$3,120",
  },
  {
    id: "4",
    personnelName: "Emma Taylor",
    project: "Yarwun Alumina Refinery",
    departure: "Melbourne",
    destination: "Gladstone",
    departureDate: "2025-07-20",
    returnDate: "2025-08-05",
    flightStatus: "Confirmed",
    accommodationStatus: "Confirmed",
    totalCost: "$2,750",
  },
  {
    id: "5",
    personnelName: "David Wilson",
    project: "Bell Bay Aluminium",
    departure: "Adelaide",
    destination: "Launceston",
    departureDate: "2025-09-01",
    returnDate: "2025-09-15",
    flightStatus: "Quote Requested",
    accommodationStatus: "Quote Requested",
    totalCost: "$2,980",
  },
];

interface TravelBookingTableProps {
  statusFilter?: string;
  projectFilter?: string;
  destinationFilter?: string;
}

export function TravelBookingTable({ statusFilter = "All", projectFilter = "All", destinationFilter = "All" }: TravelBookingTableProps) {
  const [bookings, setBookings] = useState(mockTravelBookings);

  // Filter bookings based on active filters
  const filteredBookings = bookings.filter(booking => {
    const statusMatch = statusFilter === "All" || booking.flightStatus === statusFilter || booking.accommodationStatus === statusFilter;
    const projectMatch = projectFilter === "All" || booking.project === projectFilter;
    const destinationMatch = destinationFilter === "All" || booking.destination === destinationFilter;
    
    return statusMatch && projectMatch && destinationMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "Quote Requested":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Personnel
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Project
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Route
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Travel Dates
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Flight Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Accommodation
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Total Cost
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {booking.personnelName}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {booking.project}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {booking.departure} → {booking.destination}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {booking.departureDate} to {booking.returnDate}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <Badge 
                    variant="outline"
                    className={getStatusColor(booking.flightStatus)}
                  >
                    {booking.flightStatus}
                  </Badge>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <Badge 
                    variant="outline"
                    className={getStatusColor(booking.accommodationStatus)}
                  >
                    {booking.accommodationStatus}
                  </Badge>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {booking.totalCost}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    View
                  </Button>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Modify
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}