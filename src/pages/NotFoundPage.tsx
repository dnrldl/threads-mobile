import { Link } from "react-router-dom";
import MainBottomNav from "../components/MainBottomNav";
import MainHeader from "../components/MainHeader";
import MainLayout from "../layouts/MainLayout";

function NotFoundPage() {
  return (
    <MainLayout header={<MainHeader />} bottomNav={<MainBottomNav />}>
      <section className="app-panel my-auto px-8 py-12 text-center shadow-[0_24px_60px_-50px_rgba(0,0,0,0.8)]">
        <h2 className="text-2xl font-semibold text-white">404</h2>
        <p className="mt-3 text-sm text-neutral-400">
          요청하신 페이지가 존재하지 않거나 이동되었어요.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            replace
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}

export default NotFoundPage;
