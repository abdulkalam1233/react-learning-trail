import React from 'react';

function DialogFooter(props: any) {
  return (
    <div className="modal-footer flex flex-shrink-0 gap-2 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
      {props.children}
    </div>
  );
}

export default DialogFooter;
