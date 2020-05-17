import { Layout } from "../components/Layout";
import Link from "next/link";

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/episodes");
  const episodes = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      episodes: episodes.episode,
    },
  };
}

export default function Episodes({ episodes }) {
  return (
    <Layout title="Episodes">
      <h1 className="text-3xl font-bold px-4 py-4 text-center">Episodes</h1>

      {episodes?.map((episode) => (
        <div
          key={episode.id}
          className="bg-gray-100 border-b-4 border-gray-400 mb-8 rounded p-2"
        >
          <Link href={`/episodes/${episode.id}`}>
            <a>
              <h2 className="text-2xl mb-4">
                <span>#{episode.meta.nexus_episode_number}</span>:&nbsp;
                <span
                  dangerouslySetInnerHTML={{ __html: episode.title.rendered }}
                />
              </h2>
            </a>
          </Link>
          <div className="flex">
            <img
              className="mr-4 border-4 bg-white shadow"
              src={episode.meta.album_art.src}
              alt={episode.meta.album_art.alt}
            />

            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: episode?.excerpt.rendered }}
            />
          </div>
        </div>
      ))}
    </Layout>
  );
}
