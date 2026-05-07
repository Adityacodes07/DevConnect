import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import DashboardClient from "@/components/DashboardClient";

export default async function DashboardPage() {

  //  CHECK LOGIN
  const session = await getServerSession();

  //  NOT LOGGED IN
  if (!session) {
    redirect("/login");
  }

  //  LOGGED IN
  return (
    <DashboardClient />
  );
}