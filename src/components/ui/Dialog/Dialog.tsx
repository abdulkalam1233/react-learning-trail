import React from 'react';

function Dialog(props: { dialogId: string; children: any }) {
  return (
    <div
      className="modal fade fixed top-0 left-0 show w-full h-full outline-none overflow-x-hidden overflow-y-auto text-black"
      id={props.dialogId}
      tabIndex={-1}
      aria-labelledby={props.dialogId}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Dialog;
