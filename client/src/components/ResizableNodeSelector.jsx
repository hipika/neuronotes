import { memo } from 'react';
import { Handle, Position, NodeResizer } from '@xyflow/react';

const ResizableNodeSelector = ({ data, selected }) => {
  return (
    <>
      <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={30} />
      <Handle type="target" position={Position.Left} />
      <div className="
  p-[10px]
  w-full
  h-full
  box-border
  bg-white
  border border-[#1a192b]
  rounded-[3px]
  flex items-center justify-center
  text-[12px]
  font-sans
  text-[#1a192b]
  shadow-sm
">{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(ResizableNodeSelector);
