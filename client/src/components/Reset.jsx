const Reset = ({ onClick }) => {
  return (
    <>
              <button
                type="submit"
                onClick={onClick}
                className="flex justify-center w-24 bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-black/60 focus-visible:outline-2 cursor-pointer focus-visible:outline-offset-2"
              >
                Reset
              </button>

    </>
  )
}

export default Reset