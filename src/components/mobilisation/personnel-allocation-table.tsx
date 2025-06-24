"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Mock data for personnel allocations
const mockAllocations = [
  {
    id: "1",
    name: "John Smith",
    role: "Project Manager",
    project: "Scarborough LNG",
    startDate: "2025-07-01",
    endDate: "2025-12-31",
    status: "Confirmed",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Safety Officer",
    project: "Pluto Expansion",
    startDate: "2025-07-15",
    endDate: "2025-10-15",
    status: "Pending",
  },
  {
    id: "3",
    name: "Michael Brown",
    role: "Engineer",
    project: "Scarborough LNG",
    startDate: "2025-08-01",
    endDate: "2026-02-28",
    status: "Confirmed",
  },
  {
    id: "4",
    name: "Emma Taylor",
    role: "Technician",
    project: "North West Shelf",
    startDate: "2025-06-15",
    endDate: "2025-11-30",
    status: "Confirmed",
  },
  {
    id: "5",
    name: "David Wilson",
    role: "Engineer",
    project: "Wheatstone",
    startDate: "2025-08-10",
    endDate: "2026-01-15",
    status: "Pending",
  },
  {
    id: "6",
    name: "Lisa Chen",
    role: "Safety Officer",
    project: "Browse FLNG",
    startDate: "2025-09-01",
    endDate: "2026-03-01",
    status: "Confirmed",
  },
  {
    id: "7",
    name: "Robert Garcia",
    role: "Project Manager",
    project: "Pluto Expansion",
    startDate: "2025-07-20",
    endDate: "2025-12-20",
    status: "Pending",
  },
];

interface PersonnelAllocationTableProps {
  projectFilter?: string;
  roleFilter?: string;
  statusFilter?: string;
}

export function PersonnelAllocationTable({ projectFilter = "All", roleFilter = "All", statusFilter = "All" }: PersonnelAllocationTableProps) {
  const [allocations, setAllocations] = useState(mockAllocations);

  // Filter allocations based on active filters
  const filteredAllocations = allocations.filter(allocation => {
    const projectMatch = projectFilter === "All" || allocation.project === projectFilter;
    const roleMatch = roleFilter === "All" || allocation.role === roleFilter;
    const statusMatch = statusFilter === "All" || allocation.status === statusFilter;
    
    return projectMatch && roleMatch && statusMatch;
  });

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Project
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                End Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
            {filteredAllocations.map((allocation) => (
              <tr key={allocation.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {allocation.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {allocation.role}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {allocation.project}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {allocation.startDate}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {allocation.endDate}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <Badge 
                    variant={allocation.status === "Confirmed" ? "default" : "outline"}
                    className={allocation.status === "Confirmed" ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"}
                  >
                    {allocation.status}
                  </Badge>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800">
                    Delete
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