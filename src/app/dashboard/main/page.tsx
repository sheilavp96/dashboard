import { WidgetsGrid } from "@/components";

export const metadata = {
  title: "Admin dashboard",
  desciption: "TITLE",
};
const MainPage = () => {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>
      <div className="flex flex-wrap p-2">
        <WidgetsGrid />
      </div>
    </div>
  );
};
export default MainPage;
