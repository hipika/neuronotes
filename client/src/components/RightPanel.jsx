import DownloadMap from './DownloadMap'
const RightPanel = ({ children }) => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-2 z-50">
        {children}
        <DownloadMap />

    </div>
  )
}

export default RightPanel