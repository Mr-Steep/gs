import {CalendarDaysIcon, HandRaisedIcon} from '@heroicons/react/24/outline'

export default function Example() {
    return (
        <div className="conic m-2">
            <label htmlFor="email-address" className="sr-only">
                Email address
            </label>
            <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="off"
                className="w-full flex-auto rounded-3xl border-0 bg-white/5 px-4 py-3.5 focus:outline-none text-white text-sm "
                placeholder="Enter Your email"
            />
            <button
                type="submit"
                className="absolute rounded-3xl -ml-24 mt-1 px-3 py-2.5 text-sm  bg-white/5  text-white shadow-sm hover:bg-white/10 transform-gpu transition-transform duration-200 ease-in-out hover:scale-95 focus:scale-95 active:scale-95 "
            >
                Subscribe
            </button>
        </div>
    )
}
