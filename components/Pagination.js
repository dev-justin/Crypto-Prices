import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Pagination({ getCoins, currentPage }) {
  const resultRange = {
    start: getCoins.length * currentPage - getCoins.length + 1,
    end: getCoins.length * currentPage,
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 pt-3 ">
      <div className="flex flex-1 justify-between sm:hidden">
        {(Number(currentPage) > 1 && (
          <Link href={`?page=${Number(currentPage) - 1}`}>
            <a className="relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </a>
          </Link>
        )) || <div></div>}
        {(Number(currentPage) < 5 && (
          <Link href={`?page=${Number(currentPage) + 1}`}>
            <a className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </a>
          </Link>
        )) || <div></div>}
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{resultRange.start}</span> to{" "}
            <span className="font-medium">{resultRange.end}</span> of{" "}
            <span className="font-medium">100</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link href={`?page=${Number(currentPage) - 1}`}>
              <a className="relative inline-flex items-center rounded-l-md border border-gray-300 px-2 py-2 text-sm">
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </Link>
            <Link href="/">
              <a
                aria-current="page"
                className="relative z-10 inline-flex items-center border px-4 py-2 text-sm"
              >
                <span
                  className={
                    currentPage == 1
                      ? " border-brand-a1 border-b-4 animate-pulse"
                      : ""
                  }
                >
                  1
                </span>
              </a>
            </Link>
            <Link href="?page=2">
              <a className="relative inline-flex items-center border px-4 py-2 text-sm">
                <span
                  className={
                    currentPage == 2
                      ? " border-brand-a1 border-b-4 animate-pulse"
                      : ""
                  }
                >
                  2
                </span>
              </a>
            </Link>
            <Link href="?page=3">
              <a className="relative inline-flex items-center border px-4 py-2 text-sm">
                <span
                  className={
                    currentPage == 3
                      ? " border-brand-a1 border-b-4 animate-pulse"
                      : ""
                  }
                >
                  3
                </span>
              </a>
            </Link>
            <Link href="?page=4">
              <a className="relative inline-flex items-center border px-4 py-2 text-sm">
                <span
                  className={
                    currentPage == 4
                      ? " border-brand-a1 border-b-4 animate-pulse"
                      : ""
                  }
                >
                  4
                </span>
              </a>
            </Link>
            <Link href="?page=5">
              <a className="relative inline-flex items-center border px-4 py-2 text-sm">
                <span
                  className={
                    currentPage == 5
                      ? " border-brand-a1 border-b-4 animate-pulse"
                      : ""
                  }
                >
                  5
                </span>
              </a>
            </Link>
            <Link href={`?page=${Number(currentPage) + 1}`}>
              <a className="relative inline-flex items-center rounded-r-md border px-2 py-2 text-sm">
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
