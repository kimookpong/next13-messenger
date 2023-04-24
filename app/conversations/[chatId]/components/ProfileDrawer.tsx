'use client';

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Avatar from '@/app/components/Avatar';
import { BellSlashIcon, EnvelopeIcon, TrashIcon } from '@heroicons/react/24/solid';
import ConfirmModal from './ConfirmModal';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <ConfirmModal isOpen={confirmOpen} onClose={() => setConfirmOpen(false)} />
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-end">
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={onClose}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="flex flex-col items-center">
                          <div>
                            <Avatar large src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                          </div>
                          <div>
                            Leslie Alexander
                          </div>
                          <div className="text-sm text-gray-500">
                            Active
                          </div>
                          <div className="flex gap-10 my-8">
                            <div className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75">
                              <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                                <BellSlashIcon className="h-5" />
                              </div>
                              <div className="text-sm font-light text-neutral-600">
                                Mute
                              </div>
                            </div>
                            <div onClick={() => setConfirmOpen(true)} className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75">
                              <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                                <TrashIcon className="h-5" />
                              </div>
                              <div className="text-sm font-light text-neutral-600">
                                Delete
                              </div>
                            </div>
                          </div>
                        <div className="px-4 pb-5 pt-5 sm:px-0 sm:pt-0">
                        <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Bio</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                              <p>
                                Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
                                feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum
                                aenean arcu.
                              </p>
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Location</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">New York, NY, USA</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">erdeljac.antonio@gmail.com</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Joined</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                              <time dateTime="1988-06-23">June 23, 1988</time>
                            </dd>
                          </div>
                        </dl>
                      </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default ProfileDrawer;