// utils/mockData.js

export const mockTasks = [
  {
    id: 1,
    title: 'Fix login issue',
    description: 'Fix the issue where users can\'t log in with correct credentials.',
    priority: 'High',
    status: 'Open',
    createdAt: new Date('2024-10-01T10:00:00').toISOString(),
    updatedAt: null,
    timeSpent: 20,
  },
  {
    id: 2,
    title: 'Update homepage UI',
    description: 'Revamp the UI of the homepage to improve user experience.',
    priority: 'Medium',
    status: 'In Progress',
    createdAt: new Date('2024-10-02T14:30:00').toISOString(),
    updatedAt: null,
    timeSpent: 30,
  },
  {
    id: 3,
    title: 'Fix broken links on the website',
    description: 'Find and fix all broken links on the website.',
    priority: 'Low',
    status: 'Closed',
    createdAt: new Date('2024-10-03T09:15:00').toISOString(),
    updatedAt: new Date('2024-10-04T10:45:00').toISOString(),
    timeSpent: 40,
  },
];

export function getTasks() {
  return mockTasks;
}
