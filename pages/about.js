import { Layout } from "../components/Layout";

export default function About() {
  return (
    <Layout title="About">
      <main>
        <h2 className="text-3xl font-bold p-4 text-center">
          This is The Nexus.
        </h2>
        <p className="text-xl font-medium p-4 text-left">
          Technology is weird.
          <br />
          We love it, like it, hate it.
          <br />
          It’s all technology.
          <br />
          Everything is technology.
          <br />
          This is the <em>technological convergence</em>.
        </p>
        <p className="p-2">
          <a
            title="Ryan Rampersad"
            href="http://thenexus.tv/person/ryan-rampersad/"
          >
            Ryan Rampersad
          </a>{" "}
          and{" "}
          <a
            title="Matthew Petschl"
            href="http://thenexus.tv/person/matthew-petschl/"
          >
            Matthew Petschl
          </a>{" "}
          recorded the first podcast on The Nexus on November 13th, 2011. Ryan
          founded the network thirteen weeks later naming it <em>The Nexus</em>{" "}
          and the premiere podcast{" "}
          <a href="http://thenexus.tv/category/atn/">At The Nexus</a>.
        </p>
        <p>
          The Nexus is a network of podcasts where we talk about the
          manifestations of the <em>technological convergence</em>: consumer
          technology reviews, developer news, and discussions of issues facing
          our digital society. We love discussing, speculating, and exploring
          the future.
        </p>
        <hr />
        <h3>Platform</h3>
        <p>
          The Nexus runs on WordPress. Ryan loves the platform but hates the
          codebase. You can see all the magic behind The Nexus in the{" "}
          <a title="Nexus Core" href="https://github.com/thenexustv/nexus-core">
            Nexus Core
          </a>{" "}
          and{" "}
          <a title="Coprime" href="https://github.com/thenexustv/coprime">
            Coprime
          </a>
          .
        </p>
      </main>
    </Layout>
  );
}
