"use client";

import useSWR from "swr";

export default function page() {
  const fetcher = async (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("https://randomuser.me/api/?results=3", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <div className="m-8">
      <h1 className="text-5xl">Random Users</h1>
      <ul>
        {data.results.map((randomUser) => (
          <li className="mt-5 mb-5" key={randomUser.name.first}>
            <h4 className="font-bold">
              {randomUser.name.first} {randomUser.name.last}
            </h4>
            <img src={randomUser.picture.thumbnail} alt="" />
            <h6>{randomUser.email}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
}
