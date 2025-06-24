"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { TravelBookingFormProps, TravelBookingData } from "@/types/mobilisation";

export function TravelBookingForm({ onSubmit, onCancel }: TravelBookingFormProps) {
  const [formData, setFormData] = useState<Omit<TravelBookingData, 'id' | 'status' | 'estimatedCost'>>({
    personnelName: "",
    project: "",
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    flightClass: "",
    accommodationType: "",
    specialRequirements: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
      ...formData, 
      status: "Quote Requested", 
      estimatedCost: Math.floor(Math.random() * 5000) + 1000,
      id: Date.now().toString() 
    });
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
            <option value="David Wilson">David Wilson</option>
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
          <Label htmlFor="origin">Origin City</Label>
          <select
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select origin city</option>
            <option value="Perth">Perth, Australia</option>
            <option value="Brisbane">Brisbane, Australia</option>
            <option value="Sydney">Sydney, Australia</option>
            <option value="Melbourne">Melbourne, Australia</option>
            <option value="Adelaide">Adelaide, Australia</option>
            <option value="Darwin">Darwin, Australia</option>
            <option value="Vancouver">Vancouver, Canada</option>
            <option value="Salt Lake City">Salt Lake City, USA</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select destination</option>
            <option value="Pilbara">Pilbara, Western Australia</option>
            <option value="Ulaanbaatar">Ulaanbaatar, Mongolia</option>
            <option value="Salt Lake City">Salt Lake City, Utah</option>
            <option value="Yellowknife">Yellowknife, Canada</option>
            <option value="Conakry">Conakry, Guinea</option>
            <option value="Salta">Salta, Argentina</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="departureDate">Departure Date</Label>
          <Input
            id="departureDate"
            name="departureDate"
            type="date"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="returnDate">Return Date</Label>
          <Input
            id="returnDate"
            name="returnDate"
            type="date"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="flightClass">Flight Class</Label>
          <select
            id="flightClass"
            name="flightClass"
            value={formData.flightClass}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="">Select flight class</option>
            <option value="Economy">Economy</option>
            <option value="Premium Economy">Premium Economy</option>
            <option value="Business">Business</option>
            <option value="First">First Class</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="accommodationType">Accommodation Type</Label>
          <select
            id="accommodationType"
            name="accommodationType"
            value={formData.accommodationType}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="">Select accommodation</option>
            <option value="Hotel - Standard">Hotel - Standard</option>
            <option value="Hotel - Premium">Hotel - Premium</option>
            <option value="Serviced Apartment">Serviced Apartment</option>
            <option value="Mining Camp">Mining Camp</option>
            <option value="Company Lodge">Company Lodge</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="specialRequirements">Special Requirements</Label>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements || ""}
          onChange={handleChange}
          placeholder="Any special dietary, accessibility, or other requirements..."
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          rows={3}
        />
      </div>
      
      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Request Booking
        </Button>
      </div>
    </form>
  );
}