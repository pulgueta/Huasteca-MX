import { ArticleTable } from "../components";

export const ArticleMonitor = () => {
  return (
    <div className="bg-neutral-300 min-h-[calc(100vh-56px)] flex items-start justify-center">
      <div>
        <ArticleTable />
      </div>
    </div>
  );
};
