const SearchSection = () => {
    return (

        <div className="mt-16">

            {/* Search Box */}
            <div
                className="
        bg-white
        flex
        items-center
        overflow-hidden
        h-16
        shadow-xl
        "
            >

                {/* Keyword */}
                <input
                    type="text"
                    placeholder="Keywords or Title"
                    className="
          flex-1
          h-full
          px-28
          outline-none
          text-gray-700
          border-r
          "
                />

                {/* Category */}
                <select
                    className="
          flex-1
          h-full
          px-28
          outline-none
          text-gray-500
          border-r
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
          px-28
          border-r
          h-full
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
          h-full
          px-16
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
            <div className="mt-5">

                <button
                    className="
          text-white
          text-lg
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