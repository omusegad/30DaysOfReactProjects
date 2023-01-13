import React from 'react'

export default function ErroLoader() {
  return (
    <>
        <div className="spin-bx">
                <div className="spinner-grow text-primary ml-2" role="status">
                   <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-secondary ml-2" role="status">
                   <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-success ml-2" role="status">
                     <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-danger ml-2" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
    </>
  )
}
