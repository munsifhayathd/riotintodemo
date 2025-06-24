"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Mock data for certifications
const mockCertifications = [
  {
    id: "1",
    personnelName: "John Smith",
    certificationType: "BOSIET",
    issueDate: "2024-01-15",
    expiryDate: "2027-01-15",
    status: "Valid",
    project: "Scarborough LNG",
  },
  {
    id: "2",
    personnelName: "Sarah Johnson",
    certificationType: "Helicopter Safety",
    issueDate: "2023-06-20",
    expiryDate: "2025-06-20",
    status: "Expiring Soon",
    project: "Pluto Expansion",
  },
  {
    id: "3",
    personnelName: "Michael Brown",
    certificationType: "First Aid",
    issueDate: "2024-03-10",
    expiryDate: "2026-03-10",
    status: "Valid",
    project: "Scarborough LNG",
  },
  {
    id: "4",
    personnelName: "Emma Taylor",
    certificationType: "BOSIET",
    issueDate: "2022-11-05",
    expiryDate: "2025-11-05",
    status: "Expiring Soon",
    project: "North West Shelf",
  },
  {
    id: "5",
    personnelName: "James Anderson",
    certificationType: "Confined Space",
    issueDate: "2023-12-01",
    expiryDate: "2024-12-01",
    status: "Expired",
    project: "Wheatstone",
  },
  {
    id: "6",
    personnelName: "David Wilson",
    certificationType: "Working at Height",
    issueDate: "2024-05-10",
    expiryDate: "2027-05-10",
    status: "Valid",
    project: "Browse FLNG",
  },
  {
    id: "7",
    personnelName: "Lisa Chen",
    certificationType: "Fire Safety",
    issueDate: "2023-08-15",
    expiryDate: "2025-08-15",
    status: "Expiring Soon",
    project: "Scarborough LNG",
  },
  {
    id: "8",
    personnelName: "Robert Garcia",
    certificationType: "BOSIET",
    issueDate: "2024-02-20",
    expiryDate: "2027-02-20",
    status: "Valid",
    project: "Pluto Expansion",
  },
  {
    id: "9",
    personnelName: "Maria Rodriguez",
    certificationType: "First Aid",
    issueDate: "2022-10-05",
    expiryDate: "2024-10-05",
    status: "Expired",
    project: "North West Shelf",
  },
  {
    id: "10",
    personnelName: "Kevin Lee",
    certificationType: "Helicopter Safety",
    issueDate: "2024-04-12",
    expiryDate: "2026-04-12",
    status: "Valid",
    project: "Wheatstone",
  },
];

interface CertificationTableProps {
  statusFilter?: string;
  projectFilter?: string;
  certificationFilter?: string;
}

export function CertificationTable({ statusFilter = "All", projectFilter = "All", certificationFilter = "All" }: CertificationTableProps) {
  const [certifications, setCertifications] = useState(mockCertifications);

  // Filter certifications based on active filters
  const filteredCertifications = certifications.filter(cert => {
    const statusMatch = statusFilter === "All" || cert.status === statusFilter;
    const projectMatch = projectFilter === "All" || cert.project === projectFilter;
    const certMatch = certificationFilter === "All" || cert.certificationType === certificationFilter;
    
    return statusMatch && projectMatch && certMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Valid":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Expiring Soon":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "Expired":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const getDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
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
                Certification
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Project
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Issue Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Expiry Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Days Left
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
            {filteredCertifications.map((cert) => {
              const daysLeft = getDaysUntilExpiry(cert.expiryDate);
              return (
                <tr key={cert.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {cert.personnelName}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {cert.certificationType}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {cert.project}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {cert.issueDate}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {cert.expiryDate}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {daysLeft > 0 ? `${daysLeft} days` : `${Math.abs(daysLeft)} days ago`}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Badge 
                      variant="outline"
                      className={getStatusColor(cert.status)}
                    >
                      {cert.status}
                    </Badge>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      View
                    </Button>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Renew
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}