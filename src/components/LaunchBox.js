import React from "react";
import moment from "moment";

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default function LaunchBox({ data }) {
  const { mission_name, launch_success, links, launch_date_local } = data;

  const uriImg =
    links?.flickr_images.length === 0
      ? "https://cdn.images.express.co.uk/img/dynamic/151/590x/spacex-launch-today-how-to-see-spacex-starlink-uk-tonight-1301292.jpg?r=1593156651221"
      : links.flickr_images[
          randomIntFromInterval(0, links.flickr_images.length - 1)
        ].replace("o.jpg", "w.jpg");

  return (
    <article className="w-full md:w-1/4 px-2 mb-10">
      <div className="shadow-lg rounded-md overflow-hidden">
        {links && (
          <img
            src={uriImg}
            alt="launch"
            className="w-full h-64 md:h-32 lg:h-64 object-cover bg-gray-300"
          />
        )}
        <div className="p-2 flex flex-col">
          {/* name */}
          <p
            className={`text-base truncate mb-1 ${
              launch_success ? "text-green-500" : "text-red-600"
            }`}
          >
            {mission_name}
          </p>

          {/* description */}
          <p className="text-sm text-gray-700 self-end text-detail text-left">
            {textDetailt}
          </p>
          <div className="flex justify-between items-center mt-2">
            {/* launch date */}
            <p className="text-xs text-gray-600 p-1">
              {moment(launch_date_local).format("MMMM Do YYYY, h:mm a")}
            </p>
            {/* wikipedia */}
            {links.wikipedia && (
              <a
                href={links.wikipedia}
                target="_blanck"
                className="text-xs text-gray-500 p-1 self-end"
              >
                Read more...
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

const textDetailt =
  "SpaceX launches GPS Block III Space Vehicle 03 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This is the third GPS III satellite and the second launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission is expected to land on an ASDS.";
