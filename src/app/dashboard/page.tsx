import { redirect } from 'next/navigation';
export default function DashboardHome() {
  redirect('/dashboard/contacts');
  return null;
}
