import React from 'react';

function DialogBody(props: any) {
  return <div className="modal-body relative p-4">{props.children}</div>;
}

export default DialogBody;
