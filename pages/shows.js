import { Layout } from "../components/Layout";

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/shows");
  const shows = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      series: shows.shows,
    },
  };
}

export default function ({ series }) {
  return (
    <Layout title="Shows">
      <h1 className="text-3xl font-bold px-4 py-4 text-center">Shows</h1>
      <p className="text-xl font-medium py-4 px-4 text-center">
        The Nexus podcasts discuss a variety of topics including consumer
        technology news, developer news, gaming news and occasionally scientific
        news. We love talking, learning and exploring the future.
      </p>

      <div className="px-2">
        {series &&
          series.map((serie) => (
            <div key={serie.id} className="flex py-12 auto-border-top">
              <div className="w-1/3 sm:w-1/4">
                <img
                  className="w-auto h-auto pr-2 sm:pr-8"
                  src={`https://via.placeholder.com/400?text=${serie.name}`}
                  alt={`${serie.name} cover art`}
                />
              </div>
              <div className="w-2/3 sm:w-3/4">
                <h2
                  className="text-xl font-bold"
                  dangerouslySetInnerHTML={{ __html: serie.name }}
                />
                <p className="uppercase text-sm text-gray-600 mb-2">
                  Hosted by{" "}
                  <span className="font-medium text-gray-900 tracking-wide">
                    Brian Mitchell
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-gray-900 tracking-wide">
                    Brandon Mitchell
                  </span>
                </p>
                <p
                  className="text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: serie.description }}
                />
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}
