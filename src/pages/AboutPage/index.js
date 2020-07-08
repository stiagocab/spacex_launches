import React from "react";
import Container from "../../containers/Container";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../components/Loading";
import { GET_ABOUT } from "../../queries";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export default function AboutPage() {
  const { data, loading } = useQuery(GET_ABOUT);
  return (
    <Container>
      <section className="flex flex-wrap justify-between py-5">
        {loading ? <Loading /> : <About data={data} />}
      </section>
    </Container>
  );
}

const About = ({ data }) => (
  <div className="w-full flex flex-col md:flex-row flex-wrap">
    <div className="w-full md:w-1/2 md:pr-10">
      {/* ABOUT SPACEX */}
      <h3 className="text-primary font-bold text-xl mb-4">
        Whats {data.company.name}?
      </h3>
      <p className="text-gray-600 mb-8">{data.company.summary}</p>
      <p className="text-gray-600">
        CEO & founder: <span className="font-bold">{data.company.ceo}</span>
      </p>
      <p className="text-gray-600">
        Founded: <span className="font-bold">{data.company.founded}</span>
      </p>

      <p className="text-gray-600">
        Valuation:{" "}
        <span className="font-bold">
          {formatter.format(data.company.valuation)}
        </span>
      </p>

      {/* SOCIAL */}
      <p className="text-gray-700 mt-4">Learn more at:</p>
      <div className="flex mb-6 md:mb-0">
        <p className="text-primary mr-2">
          <a className="font-bold" href={data.company.links.twitter}>
            Twitter
          </a>
        </p>

        <p className="text-primary mr-2">
          <a className="font-bold" href={data.company.links.flickr}>
            Flickr
          </a>
        </p>
        <p className="text-primary">
          <a className="font-bold" href={data.company.links.website}>
            {data.company.links.website
              .replace("https://", "")
              .replace("/", "")}
          </a>
        </p>
      </div>
    </div>

    {/* ELON MUSK */}
    <div className="w-full md:w-1/2 md:pl-10 flex justify-center items-center ">
      <img
        alt="elon_musk"
        src="https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2020/05/12/elon-musk-director-de-testa-y-spacex.r_d.302-72-11389.jpeg"
        className="w-full object-cover"
      />
    </div>
    {/* IMAGES */}
    <div className="w-full lg:pr-10 flex flex-wrap mt-10">
      {React.Children.toArray(
        Object.keys(data.launchesPast[0].links.flickr_images).map((x) => {
          let src = data.launchesPast[0].links.flickr_images[x].replace(
            "o.jpg",
            "w.jpg"
          );
          return (
            <img
              alt="spacex"
              src={src}
              className="w-1/2 md:w-1/4 object-cover"
            />
          );
        })
      )}
    </div>
  </div>
);
