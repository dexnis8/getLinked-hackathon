import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

export const RegSuccessModal = ({ open, close }) => {
  return (
    <div>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#150e28ed]" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[669px] transform overflow-hidden rounded-2xl bg-transparent border-[1px] border-primary px-6 pt-4 pb-8 lg:pb-16 lg:px-12 text-left align-middle shadow-xl transition-all">
                  <header className="grid gap-4 text-center place-items-center">
                    <img
                      src="/assets/congratulation.svg"
                      alt="Congratulations"
                      className="max-w-[258px] lg:max-w-[472px]"
                    />
                    <Dialog.Title
                      as="h1"
                      className="lg:text-[32px] font-semibold text-white md:font-bold"
                    >
                      Congratulations <br /> you have successfully Registered!
                    </Dialog.Title>
                  </header>
                  <div className="mt-4 lg:font-semibold text-[12px] lg:text-[14px] text-white text-center">
                    <p>Yes, it was easy and you did it!</p>
                    <p>
                      check your mail box for next step{" "}
                      <img
                        src="/assets/wink-emoji.svg"
                        alt="Wink Emoji"
                        className="inline"
                      />
                    </p>
                  </div>
                  <div className="mt-8">
                    <button
                      type="button"
                      className="w-full btn-gradient py-3 text-white rounded-lg"
                      onClick={close}
                    >
                      Back
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
