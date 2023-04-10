import { Suspense } from "react";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";

const RepoPage = ({ params: { name } }) => {
  return (
    <div>
      <Link href="/repos">Back to Repos</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <RepoDirs name={name} />
      </Suspense>
      <p>Details</p>
    </div>
  );
};
export default RepoPage;
