"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface CertificationFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export function CertificationForm({ onSubmit, onCancel }: CertificationFormProps) {
  const [formData, setFormData] = useState({
    personnelName: "",
    certificationType: "",
    project: "",
    issueDate: "",
    expiryDate: "",
    certificationNumber: "",
    issuingAuthority: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, status: "Valid", id: Date.now().toString() });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="personnelName">Personnel Name</Label>
          <select
            id="personnelName"
            name="personnelName"
            value={formData.personnelName}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select personnel</option>
            <option value="John Smith">John Smith</option>
            <option value="Sarah Johnson">Sarah Johnson</option>
            <option value="Michael Brown">Michael Brown</option>
            <option value="Emma Taylor">Emma Taylor</option>
            <option value="James Anderson">James Anderson</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="certificationType">Certification Type</Label>
          <select
            id="certificationType"
            name="certificationType"
            value={formData.certificationType}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select certification</option>
            <option value="BOSIET">BOSIET</option>
            <option value="Helicopter Safety">Helicopter Safety</option>
            <option value="First Aid">First Aid</option>
            <option value="Confined Space">Confined Space</option>
            <option value="Working at Height">Working at Height</option>
            <option value="Fire Safety">Fire Safety</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="project">Project</Label>
          <select
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select project</option>
            <option value="Scarborough LNG">Scarborough LNG</option>
            <option value="Pluto Expansion">Pluto Expansion</option>
            <option value="North West Shelf">North West Shelf</option>
            <option value="Wheatstone">Wheatstone</option>
            <option value="Browse FLNG">Browse FLNG</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="certificationNumber">Certification Number</Label>
          <Input
            id="certificationNumber"
            name="certificationNumber"
            value={formData.certificationNumber}
            onChange={handleChange}
            placeholder="Enter certification number"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="issuingAuthority">Issuing Authority</Label>
          <Input
            id="issuingAuthority"
            name="issuingAuthority"
            value={formData.issuingAuthority}
            onChange={handleChange}
            placeholder="Enter issuing authority"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="issueDate">Issue Date</Label>
          <Input
            id="issueDate"
            name="issueDate"
            type="date"
            value={formData.issueDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="expiryDate">Expiry Date</Label>
          <Input
            id="expiryDate"
            name="expiryDate"
            type="date"
            value={formData.expiryDate}
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
          Add Certification
        </Button>
      </div>
    </form>
  );
}