"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PersonnelAllocationFormProps, PersonnelAllocationData } from "@/types/mobilisation";

export function PersonnelAllocationForm({ onSubmit, onCancel }: PersonnelAllocationFormProps) {
  const [formData, setFormData] = useState<Omit<PersonnelAllocationData, 'id' | 'status'>>({
    personnelName: "",
    role: "",
    project: "",
    startDate: "",
    endDate: "",
    location: "",
    reportingManager: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
      ...formData, 
      status: "Pending", 
      id: Date.now().toString() 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="personnelName">Personnel Name</Label>
          <Input
            id="personnelName"
            name="personnelName"
            value={formData.personnelName}
            onChange={handleChange}
            placeholder="Enter personnel name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select a role</option>
            <option value="Mine Manager">Mine Manager</option>
            <option value="Mining Engineer">Mining Engineer</option>
            <option value="Safety Officer">Safety Officer</option>
            <option value="Equipment Operator">Equipment Operator</option>
            <option value="Geologist">Geologist</option>
            <option value="Metallurgist">Metallurgist</option>
            <option value="Environmental Engineer">Environmental Engineer</option>
            <option value="Maintenance Technician">Maintenance Technician</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="project">Mining Operation</Label>
          <select
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select mining operation</option>
            <option value="Iron Ore Western Australia">Iron Ore Western Australia</option>
            <option value="Oyu Tolgoi Mongolia">Oyu Tolgoi Mongolia</option>
            <option value="Kennecott Utah">Kennecott Utah</option>
            <option value="Diavik Diamond Mine">Diavik Diamond Mine</option>
            <option value="Simandou Guinea">Simandou Guinea</option>
            <option value="Rincon Lithium">Rincon Lithium</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select location</option>
            <option value="Pilbara, WA">Pilbara, Western Australia</option>
            <option value="Ulaanbaatar, Mongolia">Ulaanbaatar, Mongolia</option>
            <option value="Salt Lake City, Utah">Salt Lake City, Utah</option>
            <option value="Yellowknife, Canada">Yellowknife, Canada</option>
            <option value="Conakry, Guinea">Conakry, Guinea</option>
            <option value="Salta, Argentina">Salta, Argentina</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="reportingManager">Reporting Manager</Label>
          <Input
            id="reportingManager"
            name="reportingManager"
            value={formData.reportingManager}
            onChange={handleChange}
            placeholder="Enter reporting manager name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="endDate">End Date</Label>
          <Input
            id="endDate"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Create Allocation
        </Button>
      </div>
    </form>
  );
}