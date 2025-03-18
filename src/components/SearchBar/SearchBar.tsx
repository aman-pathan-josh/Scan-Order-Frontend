import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <form className="flex items-center max-w-lg mx-auto p-5">
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search size={20} className="text-gray-500"/>
                </div>
                <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Menu Items, Meals, Food Items, Dessert..." required />
            </div>
        </form>
    )
}
