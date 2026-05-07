import { users } from "@/lib/db/db";
import { notFound } from "next/navigation";
import ProfileCard from "@/components/ProfileCars";

export default async function Profile({ params }) {
  const { username } = await params;
  const user = users[username];

  if (!user) notFound();

  return <ProfileCard user={user} />;
}