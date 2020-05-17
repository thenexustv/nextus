import Head from "next/head";
import { Layout } from "../../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:3000/api/person/${id}`);
  const person = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      person: {
        ...person.person,
        links: [
          { title: "test1", url: "#1" },
          { title: "test2", url: "#2" },
        ],
        episodes: [
          {
            title: "weeeeeee1",
            url: "#1",
          },
          {
            title: "weeeeeee2",
            url: "#2",
          },
          {
            title: "weeeeeee3",
            url: "#3",
          },
          {
            title: "weeeeeee4",
            url: "#4",
          },
          {
            title: "weeeeeee5",
            url: "#5",
          },
        ],
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "5835" } }],
    fallback: true,
  };
}

export default function Person({ person }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Layout title="Person">
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
    <Layout title={person.title.rendered}>
      <>
        <div className="w-full lg:max-w-full lg:flex px-2">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none mr-4 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              background: `center / contain no-repeat url(${person.meta.avatar})`,
            }}
            title={`Avatar of${person.title.rendered}`}
          ></div>
          <div className="flex flex-col justify-between leading-normal md:text-left text-center">
            <div className="mb-8">
              {person.meta.host && (
                <div className="flex items-center">
                  <img
                    className="w-3 h-3 mr-1 block"
                    src="/images/nx-logo-gray.svg"
                    alt="The Nexus logo"
                  />
                  <p className="text-sm md:text-lg text-gray-600 text-center">
                    Host
                  </p>
                </div>
              )}
              <Link href={`/people/${person.id}`}>
                <a
                  className="hover:underline text-gray-900 font-bold text-xl md:text-3xl mb-2"
                  dangerouslySetInnerHTML={{ __html: person.title.rendered }}
                />
              </Link>
              {person.links && person.links.length > 0 && (
                <ul className="my-2 list-none flex sm:flex-start justify-center">
                  {person.links.map((link) => (
                    <li key={link.url} className="mr-4">
                      <a
                        href={link.url}
                        className="hover:underline text-sm p-2 bg-purple-800 hover:bg-purple-900 text-white rounded"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <p
                className="text-gray-700 text-base content text-left"
                dangerouslySetInnerHTML={{ __html: person.content?.rendered }}
              />
            </div>
          </div>
        </div>

        <h2 className="text-gray-800 font-bold mb-2">
          Episodes with{" "}
          <span dangerouslySetInnerHTML={{ __html: person.title.rendered }} />
        </h2>

        <ul className="list-square column-count-2 pl-8">
          {person.episodes.map((link) => (
            <li key={link.url}>
              <a href={link.url} className="hover:underline">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </>
    </Layout>
  );
}
