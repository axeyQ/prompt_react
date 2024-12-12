import IMG1 from "../../../assets/images/video-img.png"
import IMG2 from "../../../assets/images/video-bg-2.png"
import IMG3 from "../../../assets/images/video-bg-1.png"
import Play from "../../../assets/images/play.svg"

const VideoSection = () => {
  return (
    <>
    <div className="video" id="video">
    <div className="video__wrapper">
      <div className="container">
        <div className="video__play d-none">
          <button type="button" data-toggle="modal" data-target="#videoModal">
        <img src={Play} alt="Play Icon" width={"100px"}/>
          </button>
          <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-close">
                  <button type="button" data-dismiss="modal" style={{display:"none"}}aria-label="Close">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ytdefer yt-video" style={{width:"100%",height:"100%"}} data-src="2BrCE_zxM0U"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video__background d-flex justify-content-center align-items-center">


<div className="videoPara">
  <p className="videoPara-1">It makes no difference where you are!</p>
  <p className="videoPara-2">APP System, Not Needed!</p>
  <p className="videoPara-3">Just launch it on your browser and use it as you would any other daily task.
  Keeping its handiness is one of its key characteristics.</p>
</div>
          <img src={IMG1} alt="texture 2 " className="phone"/>
          <img src={IMG2} alt="texture3" className="texture-2"/>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default VideoSection