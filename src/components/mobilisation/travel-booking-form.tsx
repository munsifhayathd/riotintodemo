"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface TravelBookingFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export function TravelBookingForm({ onSubmit, onCancel }: TravelBookingFormProps) {
  const [formData, setFormData] = useState({
    personnelName: "",
    project: "",
    departure: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    flightPreference: "",
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
      flightStatus: "Quote Requested", 
      accommodationStatus: "Quote Requested",
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
          <Label htmlFor="departure">Departure City</Label>
          <select
            id="departure"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          >
            <option value="">Select departure city</option>
            <option value="Perth">Perth</option>
            <option value="Brisbane">Brisbane</option>
            <option value="Sydney">Sydney</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Adelaide">Adelaide</option>
            <option value="Darwin">Darwin</option>
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
            <option value="Karratha">Karratha</option>
            <option value="Port Hedland">Port Hedland</option>
            <option value="Onslow">Onslow</option>
            <option value="Broome">Broome</option>
            <option value="Dampier">Dampier</option>
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
          <Label htmlFor="flightPreference">Flight Preference</Label>
          <select
            id="flightPreference"
            name="flightPreference"
            value={formData.flightPreference}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="">Select preference</option>
            <option value="Economy">Economy</option>
            <option value="Premium Economy">Premium Economy</option>
            <option value="Business">Business</option>
            <option value="Morning Departure">Morning Departure</option>
            <option value="Afternoon Departure">Afternoon Departure</option>
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
            <option value="Company Accommodation">Company Accommodation</option>
            <option value="Camp Accommodation">Camp Accommodation</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="specialRequirements">Special Requirements</Label>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
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