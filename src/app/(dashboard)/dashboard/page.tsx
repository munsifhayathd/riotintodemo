"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const mobilisationStats = [
  { 
    name: "Active Personnel", 
    value: "247",
    change: "+15.2%",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  { 
    name: "Pending Mobilisations", 
    value: "34",
    change: "-8.1%",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  { 
    name: "Safety Compliance", 
    value: "98.7%",
    change: "+2.3%",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  { 
    name: "Travel Logistics", 
    value: "156",
    change: "+12.7%",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
];

const projectData = [
  { name: 'Iron Ore Western Australia', personnel: 145, pending: 18, completed: 127 },
  { name: 'Oyu Tolgoi Mongolia', personnel: 89, pending: 12, completed: 77 },
  { name: 'Kennecott Utah', personnel: 67, pending: 8, completed: 59 },
  { name: 'Diavik Diamond Mine', personnel: 45, pending: 6, completed: 39 },
  { name: 'Simandou Guinea', personnel: 32, pending: 8, completed: 24 },
  { name: 'Rincon Lithium', personnel: 24, pending: 4, completed: 20 },
];

const complianceData = [
  { name: 'Safety Compliant', value: 243, color: '#ea0e30' },
  { name: 'Pending Review', value: 12, color: '#4D4D4F' },
  { name: 'Requires Training', value: 6, color: '#B87333' },
];

const mobilisationTrend = [
  { month: 'Jan', mobilisations: 52, completions: 48, travelBookings: 44 },
  { month: 'Feb', mobilisations: 58, completions: 54, travelBookings: 50 },
  { month: 'Mar', mobilisations: 65, completions: 61, travelBookings: 57 },
  { month: 'Apr', mobilisations: 72, completions: 68, travelBookings: 64 },
  { month: 'May', mobilisations: 69, completions: 71, travelBookings: 62 },
  { month: 'Jun', mobilisations: 78, completions: 74, travelBookings: 71 },
];

const travelCostData = [
  { project: 'Iron Ore Western Australia', cost: 145000, bookings: 58 },
  { project: 'Oyu Tolgoi Mongolia', cost: 189000, bookings: 42 },
  { project: 'Kennecott Utah', cost: 98000, bookings: 34 },
  { project: 'Diavik Diamond Mine', cost: 134000, bookings: 28 },
  { project: 'Simandou Guinea', cost: 167000, bookings: 24 },
  { project: 'Rincon Lithium', cost: 78000, bookings: 18 },
];

const certificationExpiry = [
  { month: 'This Month', expiring: 22, renewed: 18 },
  { month: 'Next Month', expiring: 28, renewed: 12 },
  { month: 'In 3 Months', expiring: 35, renewed: 8 },
  { month: 'Beyond', expiring: 186, renewed: 5 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Mining Operations Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Personnel mobilisation across global mining operations</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          Export Report
        </motion.button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mobilisationStats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 cursor-pointer"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 opacity-0"
              whileHover={{ opacity: 0.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <motion.p 
                  className="text-sm font-medium text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {stat.name}
                </motion.p>
                <motion.p 
                  className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}
                </motion.p>
              </div>
              <motion.div 
                className="rounded-full bg-primary/10 p-3 text-primary dark:bg-primary/20"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
            </div>
            <motion.div 
              className={`mt-4 flex items-center text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + 0.4 }}
            >
              <motion.svg 
                className="mr-1 h-4 w-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ 
                  y: stat.change.startsWith('+') ? [-2, 2, -2] : [2, -2, 2]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.change.startsWith('+') ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} />
              </motion.svg>
              {stat.change}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {/* Personnel by Project Chart */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            delay: 0.6,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { duration: 0.2 }
          }}
          className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personnel by Project</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={projectData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Bar dataKey="personnel" fill="#D71638" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Compliance Status Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            delay: 0.8,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            rotateY: 2,
            transition: { duration: 0.3 }
          }}
          className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Compliance Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={complianceData}
                cx="50%"
                cy="50%"
                outerRadius={70}
                dataKey="value"
                label={({ name, value }) => `${value}`}
              >
                {complianceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value} personnel`, name]} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Travel Cost by Project */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateZ: 5 }}
          animate={{ opacity: 1, x: 0, rotateZ: 0 }}
          transition={{ 
            delay: 1.0,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            rotateZ: -1,
            transition: { duration: 0.3 }
          }}
          className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Travel Costs by Project</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={travelCostData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" fontSize={12} />
              <YAxis dataKey="project" type="category" width={80} fontSize={10} />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Cost']} />
              <Bar dataKey="cost" fill="#0072BC" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Mobilisation Trend Chart */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.02,
            y: -5,
            transition: { duration: 0.2 }
          }}
          className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mobilisation & Travel Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mobilisationTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="mobilisations" stroke="#D71638" strokeWidth={3} name="Mobilisations" />
              <Line type="monotone" dataKey="completions" stroke="#0072BC" strokeWidth={3} name="Completions" />
              <Line type="monotone" dataKey="travelBookings" stroke="#4D4D4F" strokeWidth={2} name="Travel Bookings" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Certification Expiry Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.02,
            rotateY: -2,
            transition: { duration: 0.3 }
          }}
          className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-bl from-green-500/5 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute -top-4 -left-4 w-28 h-28 bg-green-500/10 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 10, 0],
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Certification Expiry Timeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={certificationExpiry}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="expiring" fill="#D71638" name="Expiring" radius={[4, 4, 0, 0]} />
              <Bar dataKey="renewed" fill="#0072BC" name="Renewed" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Mobilisation Activity */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="flex items-center justify-between mb-6 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h2 
            className="text-lg font-semibold text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Recent Mobilisation Activity
          </motion.h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" size="sm">View All</Button>
          </motion.div>
        </motion.div>
        <div className="flow-root">
          <ul className="space-y-4">
            {[
              { action: "Personnel Allocated", detail: "Sarah Johnson allocated to Iron Ore Western Australia as Safety Officer", time: "2 hours ago", type: "allocation", priority: "high" },
              { action: "Travel Booked", detail: "Flight and accommodation confirmed for Michael Brown to Oyu Tolgoi Mongolia", time: "4 hours ago", type: "travel", priority: "medium" },
              { action: "Certification Verified", detail: "BOSIET certification verified for James Anderson", time: "6 hours ago", type: "certification", priority: "low" },
            ].map((activity, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="relative flex gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-full relative z-10 ${
                    activity.type === 'allocation' ? 'bg-primary/10' : 
                    activity.type === 'travel' ? 'bg-blue-100' : 'bg-green-100'
                  }`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  {activity.type === 'allocation' && (
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {activity.type === 'travel' && (
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                  {activity.type === 'certification' && (
                    <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </motion.div>
                <div className="flex-auto min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{activity.action}</h3>
                      {activity.priority === 'high' && (
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                          High Priority
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 truncate">
                    {activity.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}