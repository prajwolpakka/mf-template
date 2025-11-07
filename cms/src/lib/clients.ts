export type ClientRecord = {
  id: string;
  name: string;
  company: string;
  industry: string;
  status: "Active" | "At Risk" | "Prospect";
  accountManager: string;
  lastInteraction: string;
  notes: string;
};

export const clients: ClientRecord[] = [
  {
    id: "c-1001",
    name: "Emily Carter",
    company: "Northwind Traders",
    industry: "E-commerce",
    status: "Active",
    accountManager: "Alex Morgan",
    lastInteraction: "2024-02-10",
    notes: "Planning Q2 expansion into EMEA region.",
  },
  {
    id: "c-1002",
    name: "Samuel Lee",
    company: "Globex Corporation",
    industry: "FinTech",
    status: "Prospect",
    accountManager: "Jordan Lee",
    lastInteraction: "2024-02-08",
    notes: "Pilot environment provisioned; awaiting legal review.",
  },
  {
    id: "c-1003",
    name: "Ana Rodrigues",
    company: "Initech",
    industry: "SaaS",
    status: "At Risk",
    accountManager: "Priya Shah",
    lastInteraction: "2024-02-03",
    notes: "Reported integration latency after latest release.",
  },
  {
    id: "c-1004",
    name: "Michael Chen",
    company: "Stark Industries",
    industry: "Manufacturing",
    status: "Active",
    accountManager: "Alex Morgan",
    lastInteraction: "2024-02-06",
    notes: "Renewal at 95% probability; expansion opportunity identified.",
  },
];
