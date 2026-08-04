type GuideType = {
  id: string;
  name: string;
  install: {
    arch?: string[];
  };
};

type GuideProps = {
  guide: GuideType[];
};

export default function Guide({ guide }: GuideProps) {
  if (guide.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">
      {guide.map((guides) => (
        <div
          key={guides.id}
          className="rounded-lg border p-4 shadow"
        >
          <h2 className="text-2xl font-bold">
            {guides.name}
          </h2>

          {guides.install.arch && (
            <>
              <h3 className="mt-4 mb-2 font-semibold">
                Arch Linux
              </h3>

              {guides.install.arch.map((command, index) => (
                <pre
                  key={index}
                  className="bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto"
                >
                  <code>{command}</code>
                </pre>
              ))}
            </>
          )}

        {guides.install.ubuntu && (
            <>
              <h3 className="mt-4 mb-2 font-semibold">
                Ubuntu
              </h3>

              {guides.install.ubuntu.map((command, index) => (
                <pre
                  key={index}
                  className="bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto"
                >
                  <code>{command}</code>
                </pre>
              ))}
            </>
          )}

           {guides.install.all && (
            <>
              <h3 className="mt-4 mb-2 font-semibold">
                All
              </h3>

              {guides.install.all.map((command, index) => (
                <pre
                  key={index}
                  className="bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto"
                >
                  <code>{command}</code>
                </pre>
              ))}
            </>
          )}

        </div>
      ))}
    </div>
  );
}
