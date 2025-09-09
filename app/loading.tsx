import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div>
      <div id="elevate-load">
        <div className="loader-wrapper">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loading