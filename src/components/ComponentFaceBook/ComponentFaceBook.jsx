import React from "react"

const ComponentFaceBook = () => {
  return <div style={{width: "300px", height: "500px", overflow: "hidden"}}>
      <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhuetourism&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="340"
          height="900"
          style={{ border: "none", transform: "scale(0.88)", transformOrigin: "0 0" }}
          scrolling="no"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
  </div>
}


export default ComponentFaceBook