import Header from "@/components/Header";
import TabbedView from "../../components/TabbedView";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <Header />
        <TabbedView />
      </div>
    </main>
  );
}
