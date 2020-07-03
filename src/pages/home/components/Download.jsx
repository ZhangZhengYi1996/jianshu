import React, { PureComponent } from 'react'

 class Download extends PureComponent {
    render() {
        return (
            <div className="download-wrapper">
                <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt="qr" className="download-qr"/>
                <div className="download-info">
                    <p className="download-info-title">下载简书手机App&nbsp;&gt;</p>
                    <p className="download-info-desc">随时随地发现和创造内容</p>
                </div>
            </div>
        )
    }
}
export default Download;
