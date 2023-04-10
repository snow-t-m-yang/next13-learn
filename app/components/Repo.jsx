import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/snow-t-m-yang/${name}`,
  );
  const repo = await response.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2>
        {repo.name}
        <p>{repo.descripttion}</p>
      </h2>
    </>
  );
};
export default Repo;
