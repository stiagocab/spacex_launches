import React, { useEffect, useState } from "react";
import { Container } from "../../containers";
import LaunchBox from "../../components/LaunchBox";
import Loading from "../../components/Loading";
import Pagination from "./Pagination";
import { GET_LAUNCH } from "../../queries";
import useRouterQuery from "../../hooks/useRouterQuery";
import { useQuery } from "@apollo/react-hooks";

export default function HomePage() {
  let urlPage = useRouterQuery().get("page") ?? 1;
  const [offset, setOffset] = useState(0);
  const { error, data, loading } = useQuery(GET_LAUNCH, {
    variables: { offset: offset },
  });

  useEffect(() => {
    let nextOffset = urlPage === 1 ? 0 : (urlPage - 1) * 10;
    setOffset(nextOffset);
  }, [urlPage]);

  if (error) return `Error! ${error}`;
  return (
    <Container>
      <section className="flex flex-wrap justify-between py-5">
        {loading ? (
          <Loading />
        ) : error ? (
          `Error! ${error}`
        ) : (
          React.Children.toArray(
            data.launchesPast.map((launch) => <LaunchBox data={launch} />)
          )
        )}

        <Pagination current={Number(urlPage)} />
      </section>
    </Container>
  );
}
