import { Logo } from '@/public/icons';

const Footer = () => {
  return (
    <footer className="container-xl pb-safe text-sm text-gray-500">
      <hr className="my-8 lg:my-10" />
      <div className="flex flex-col justify-between gap-6 pb-10 sm:flex-row">
        <div className="flex-1">
          <div className="mb-3 flex items-center">
            <Logo className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold text-gray-900">ChaeChae Korea</span>
          </div>
          <p className="">&copy; 2023. ChaeChae Life. All rights reserved.</p>
        </div>

        <div className="flex flex-col justify-between gap-6 leading-normal sm:flex-row lg:flex-1">
          <nav className="flex flex-col">
            <header className="mb-1 font-semibold uppercase text-gray-600">Team</header>
            <a
              href="https://chaechae.life"
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-2 hover:underline"
            >
              About us
            </a>
            <a
              href="mailto:chaechae.couple@gmail.com"
              className="underline-offset-2 hover:underline"
            >
              chaechae.couple@gmail.com
            </a>
          </nav>

          <nav className="flex flex-col">
            <header className="mb-1 font-semibold uppercase text-gray-600">Family Site</header>
            <a
              href="https://ev-charge.kr"
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-2 hover:underline"
            >
              전기차G - 전기차 충전소 찾기
            </a>
            <a
              href="https://messagebot.chaechae.life"
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-2 hover:underline"
            >
              메시지봇 - 인사말 생성 AI 챗봇
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
