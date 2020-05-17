export function Footer() {
  return (
    <div className="bg-gray-900 text-gray-200">
      <footer className="container mx-auto px-4">
        <p className="text-sm text-gray-500 text-center py-4">
          About The Nexus The Nexus podcasts discuss a variety of topics
          including consumer technology news, developer news, gaming news and
          occasionally scientific news. We love talking, learning and exploring
          the future.
        </p>
        <p className="text-xs text-gray-600 text-center py-4">
          &copy; {new Date().getFullYear()}
          The Nexus
        </p>
      </footer>
    </div>
  );
}
