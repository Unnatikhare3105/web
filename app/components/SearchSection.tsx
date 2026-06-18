//app/components/SearchSection.tsx

const SearchSection = () => {
    return (

        <div className="mt-10 sm:mt-16 w-full max-w-4xl px-4 sm:px-0">

            {/* Search Box */}
            <div
                className="h-full w-full bg-white flex flex-col sm:flex-row items-stretch
        sm:items-center
        overflow-hidden
        shadow-xl
        "
            >

                {/* Keyword */}
                <input
                    type="text"
                    placeholder="Keywords or Title"
                    className="
          flex-1
          h-14
          


          sm:h-16
          p-2

          sm:px-8
          lg:px-12
          outline-none
          text-gray-700
          border-b
          sm:border-b-0
          sm:border-r
          "
                />

                {/* Category */}
                <select
                    className="
          flex-1
          h-14
          sm:h-16
          p-2
          sm:p-5
          lg:p-8
          outline-none
          text-gray-500
          border-b
          sm:border-b-0
          sm:border-r
          "
                >
                    <option>Categories</option>
                    <option>Frontend</option>
                    <option>Backend</option>
                </select>

                {/* City */}
                <div
                    className="
          flex
          items-center
          flex-1
          p-2
          sm:px-8
          lg:px-12
          border-b
          sm:border-b-0
          sm:border-r
          h-14
          sm:h-16
          "
                >
                    <input
                        type="text"
                        placeholder="City State or zip"
                        className="w-full outline-none"
                    />

                    <span className="text-gray-500">
                        ⌖
                    </span>
                </div>

                {/* Button */}
                <button
                    className="
          bg-[#d6c313]
          h-14
          sm:h-16
          px-8
          sm:px-16
          text-black
          font-semibold
          hover:bg-[#c5b510]
          transition
          "
                >
                    Find Jobs
                </button>

            </div>

            {/* Advanced Search */}
            <div className="mt-5 text-center sm:text-left">

                <button
                    className="
          text-white
          text-base
          sm:text-lg
          hover:text-green-500
          "
                >
                    + Advanced Search
                </button>

            </div>

        </div>

    )   
}

export default SearchSection