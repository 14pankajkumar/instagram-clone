import { useRecoilState } from "recoil";
import { menuState, modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const MenuModal = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useRecoilState(menuState);
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <Transition.Root show={menuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto"
        onClose={setMenuOpen}
      >
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duratation-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the brower centering the modal contents */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className="mt-5 sm:mt-6 flex justify-between items-center">
                <HomeIcon className="menuBtn" />
                {session ? (
                  <>
                    <PaperAirplaneIcon className="menuBtn rotate-45" />

                    <PlusCircleIcon
                      onClick={() => setOpen(true)}
                      className="menuBtn"
                    />
                    <UserGroupIcon className="menuBtn" />
                    <HeartIcon className="menuBtn" />
                    <button
                      className="outline-none text-red-500"
                      onClick={signOut}
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button className="outline-none" onClick={signIn}>
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MenuModal;
