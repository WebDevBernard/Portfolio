import { FC } from "react";
interface RefObject<T> {
  readonly current: T | null;
}
const Footer: FC<{ contactRef: RefObject<HTMLHeadingElement> }> = ({
  contactRef,
}) => {
  return (
    <div
      ref={contactRef}
      className="flex flex-col items-center justify-between border-t border-black p-4 md:flex-row "
    >
      <div className=" flex flex-row text-xs pr-6 divide-x divide-slate-600">
        <p className="pr-6">Built with Next.js and Tailwind CSS</p>
        <a
          className="px-6"
          href="https://storyset.com/web"
          target="_blank"
          rel="noreferrer"
        >
          Web illustrations by Storyset
        </a>
        <a
          className="pl-6"
          href="https://icons8.com/icon/63701/xbox-b"
          target="_blank"
          rel="noreferrer"
        >
          Xbox B icon by Icons8
        </a>
      </div>
      <div className="mt-20 md:mt-0 text-sm">
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/bernard-yang/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          className="px-6 hover:underline"
          href="https://www.github.com/webdevbernard"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="hover:underline"
          href="https://stackoverflow.com/users/16270686/webdevbernard"
          target="_blank"
          rel="noreferrer"
        >
          Stack Overflow
        </a>
      </div>
    </div>
  );
};

export default Footer;
