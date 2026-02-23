"use client"
import { Filter, Search } from 'lucide-react';
import { use, useState } from 'react';


const SearchComponent = () => {
      const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <div className="relative max-w-3xl mx-auto">
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                          <Search className="h-6 w-6 text-teal-600" />
                        </div>
                        <input
                          type="text"
                          placeholder="Search by name, specialty or disease..."
                          className="w-full p-5 pl-14 rounded-2xl border-none shadow-2xl focus:ring-4 focus:ring-emerald-400/40 outline-none text-gray-900 text-lg placeholder:text-gray-400 transition-all font-medium"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="absolute right-3 top-2.5 bottom-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-8 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2">
                          <Filter className="w-4 h-4" />
                          Find
                        </button>
                      </div>
        </div>
    );
};

export default SearchComponent;