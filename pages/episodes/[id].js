import Head from "next/head";
import { Layout } from "../../components/Layout";
import { useRouter } from "next/router";

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:3000/api/episode/${id}`);
  const episode = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      episode,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "5835" } }],
    fallback: true,
  };
}

export default function Episode({ episode: data }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Layout title="Episode">
        <div>
          <img
            className="mt-8 w-32 mx-auto block nx-spin"
            src="/images/nx-logo-gray.svg"
            alt="the nexus is loading"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Episode">
      <div>
        <div className="flex justify-betweem items-center mt-8">
          <h1 className="text-3xl">
            <span>#{data.episode.meta.nexus_episode_number}</span>:&nbsp;
            <span
              dangerouslySetInnerHTML={{ __html: data.episode.title.rendered }}
            />
          </h1>
          <img
            className="border-4 bg-white shadow"
            src={data.episode.meta.album_art.src}
            alt={data.episode.meta.album_art.alt}
          />
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data?.episode?.content?.rendered }}
        />
      </div>
    </Layout>
  );
}
