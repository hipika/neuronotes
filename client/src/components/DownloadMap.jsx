import { Panel, useReactFlow, getNodesBounds, getViewportForBounds } from "@xyflow/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { toPng } from "html-to-image";


const downloadImage = (dataUrl) => {
    const a = document.createElement("a"); // creating tag a 
    a.setAttribute("download", "nodemap.png");
    a.setAttribute("href", dataUrl);
    a.click();

}

const imageWidth = 1024;
const imageHeight = 768;

const DownloadMap = () => {
    const { getNodes } = useReactFlow();
    const onClick = () => {
        // get boundary of all nodes
        const nodesBounds = getNodesBounds(getNodes());
        // get viewport boundary - bounds, width, height, zoom min, max
        const viewport = getViewportForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 2);
        
        // convert to png
        toPng(document.querySelector(".react-flow__viewport"),{
            backgroundColor: "white",
            width: imageWidth,
            height: imageHeight,
            style: {
                width: imageWidth,
                height: imageHeight,
                transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
            },
        }).then(downloadImage)
    };  
 
 return (
    <>

              <button
                type="submit"
                onClick={onClick}
                className="flex justify-center w-24 bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-black/60 focus-visible:outline-2 cursor-pointer focus-visible:outline-offset-2"
              >
                Download
              </button>


    </>
  )
}

export default DownloadMap