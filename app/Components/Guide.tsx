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
    <div className="space-y-6 p-8">
      {guide.map((guides) => (
        <div
          key={guides.id}
          className="rounded-lg border-[#252B36] p-[16px] shadow bg-[#151922]"
        >
          <h2 className="text-2xl font-bold text-[#F3F4F6]">
            {guides.name}
          </h2>

          {guides.install.arch && (
            <>
              <h3 className="mt-4 mb-2 font-semibold text-[#9CA3AF]">
                Arch Linux
              </h3>

              {guides.install.arch.map((command, index) => (
                <pre
                  key={index}
                  className="bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto bg-[#0B0F16] border-[#1E293B] text-[#4ADE80] py-[10px] px-[12px]"
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
