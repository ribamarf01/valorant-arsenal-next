const Layout = ({ children }) => {
  return (
    <div className="flex justify-center relative w-full h-screen overflow-hidden">
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        className="absolute z-10 w-auto min-w-full min-h-screen max-w-none -top-16"
      >
        <source
          src="video/ContractGlitches.webm"
          type="video/webm"
        />
      </video>
      <div className="absolute z-30 w-full min-h-screen">
        { children }
      </div>
    </div>
  )
}

export default Layout