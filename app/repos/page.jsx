import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/snow-t-m-yang/repos",
  );
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="grid">
      <h2 className="text-3xl p-7">Repositories</h2>
      <ul className="grid gap-10 px-3">
        {repos.map((repo) => (
          <li key={repo.id} className="gap-3 p-5 text-black bg-white/30">
            <Link href={`/repos/${repo.name}`}>
              <h3 className="text-2xl">{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="flex items-center justify-center gap-12 p-7 ">
                <span className="flex items-center justify-center gap-3">
                  <FaStar />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center justify-center gap-3">
                  <FaCodeBranch />
                  {repo.forks_count}
                </span>
                <span className="flex items-center justify-center gap-3">
                  <FaEye />
                  {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ReposPage;
