import { Layout } from "../../components/Layout";
import Link from "next/link";

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/person");
  const person = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      people: person.person,
    },
  };
}

export default function ({ people }) {
  return (
    <Layout title="People">
      <h1 className="text-3xl font-bold px-4 py-4 text-center">People</h1>

      <p className="text-xl font-medium py-4 px-4 text-center">
        Meet the Hosts and Guests that make The Nexus incredible.
      </p>

      <p className="text-md py-4 text-center">
        <img
          className="inline bg-white h-4 w-auto"
          src="/images/nx-logo-color.svg"
          alt="The Nexus logo"
        />{" "}
        indicates that the person is a host.
      </p>

      <ul className="list-none px-2 sm:px-4 flex flex-wrap">
        {people &&
          people.map((person) => (
            <li
              key={person.id}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4"
            >
              <Link href={`/people/${person.id}`}>
                <a className="relative">
                  <div className="mb-2 shadow rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <img
                      className="w-auto h-auto block"
                      src={person.meta.avatar}
                      alt={`Avatar of${person.title.rendered}`}
                    />
                    {person.meta.host && (
                      <img
                        className="absolute bg-white opacity-75 rounded top-0 right-0 m-1 p-1 h-6 w-auto"
                        src="/images/nx-logo-color.svg"
                        title={`${person.title.rendered} is a host`}
                        alt={`${person.title.rendered} is a host`}
                      />
                    )}
                  </div>
                  <p
                    className="text-center text-sm sm:text-base text-gray-700 hover:text-gray-800"
                    dangerouslySetInnerHTML={{ __html: person.title.rendered }}
                  />
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  );
}
