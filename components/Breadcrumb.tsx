import React from 'react'

type Props = {
    name: string
    url: string
}

const Breadcrumb = ({name, url}: Props) => {
  return (
    <div>
        <div className="rts-bread-crumb-area bg_image bg-breadcrumb">
        <div className="container ptb--65">
            <div className="row">
                <div className="col-lg-12">
                    <div className="con-tent-main">
                        <div className="wrapper">
                            <span className="bg-text-stok">{name}</span>
                            <div className="title skew-up">
                                <a href={url}>{name}</a>
                            </div>
                            <div className="slug skew-up">
                                <a href="/">HOME /</a>
                                <a className="active" href="#index.html">{name}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Breadcrumb