/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { BsChevronDown, BsSearch } from "react-icons/bs";


const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Example() {
  const [selected, setSelected] = useState(people[3])
  const [count, setCount] = useState(people[4])
  const [pound, setPound] = useState(people[5])
  const [sound, setSound] = useState(people[6])
  return (

    <div className='flex justify-around flex-col w-[80%] h-[215px] m-auto '>



      <div className='flex  justify-around items-center'>
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (


            <div className="relative mt-1  w-[340px]">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-[#B7B7B7] bg-white h-[50px] py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <BsChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-[#68A834]' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                            {person.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>

          )}
        </Listbox>


        <Listbox value={count} onChange={setCount}>
          {({ open }) => (

            <>
              <div className="relative mt-1  w-[340px]">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-[#B7B7B7] bg-white h-[50px] py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm">
                  <span className="block truncate">{count.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <BsChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-[#68A834]' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={person}
                      >
                        {({ count, active }) => (
                          <>
                            <span className={classNames(count ? 'font-semibold' : 'font-normal', 'block truncate')}>
                              {person.name}
                            </span>

                            {count ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>

            </>
          )}
        </Listbox>



        <Listbox value={pound} onChange={setPound}>
          {({ open }) => (

            <>
              <div className="relative mt-1  w-[340px]">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-[#B7B7B7] bg-white h-[50px] py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm">
                  <span className="block truncate">{pound.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <BsChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-[#68A834]' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={person}
                      >
                        {({ pound, active }) => (
                          <>
                            <span className={classNames(pound ? 'font-semibold' : 'font-normal', 'block truncate')}>
                              {person.name}
                            </span>

                            {pound ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>

            </>
          )}
        </Listbox>

        <Listbox value={sound} onChange={setSound}>
          {({ open }) => (

            <>
              <div className="relative mt-1  w-[340px]">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-[#B7B7B7] bg-white h-[50px] py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm">
                  <span className="block truncate">{sound.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <BsChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-[#68A834]' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={person}
                      >
                        {({ sound, active }) => (
                          <>
                            <span className={classNames(sound ? 'font-semibold' : 'font-normal', 'block truncate')}>
                              {person.name}
                            </span>

                            {sound ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>

            </>
          )}
        </Listbox>

      

        <button className='bg-[#68A834] rounded-[5px] h-[50px] w-[50px] flex justify-center items-center'><BsSearch className='text-white  text-[20px]' /></button>
      </div>


      <div className='flex justify-center gap-6'>
        <input type="text" placeholder='OEM koda görə axtar' className='border-[#B7B7B7] w-[319px] h-[50px] px-4 border rounded-[5px]' />
        <button className='bg-[#68A834] rounded-[5px] h-[50px] w-[50px] flex justify-center items-center'><BsSearch className='text-white  text-[20px]' /></button>
      </div>









    </div>


  )
}
