import React from "react";

function Blog() {
  return (
    <div class="bg-slate-200">
      <h2>Latest News</h2>
      <p>
        Keep everything update, from entrepreneur from all around the world.
      </p>
      <div class="flex">
        <div>
          <img
            src="https://neojb.brickthemes.com/wp-content/uploads/2018/08/happy-colleagues-in-office-using-computer-1024x683.jpg"
            alt=""
            class="rounded h"
          />
          <h4>Tips For Relocating For A Job</h4>
          <p>
            Education & E-learning, Information Technology, Job hunt Nulla ut
            tortor
          </p>
          <button>Read More</button>
        </div>
        <div>
          <img
            src="https://neojb.brickthemes.com/wp-content/uploads/2018/08/cozy-studio-apartment-1024x683.jpg"
            alt=""
          />
          <h4>Negotiate A Job Offer & Close The Deal</h4>
          <p>Information Technology, News Nulla ut tortor</p>
          <a href="mailto:danielkngetich@gmail.com"><button>send mail</button></a>
        </div>
        <div>
          <img
            src="https://neojb.brickthemes.com/wp-content/uploads/2018/08/happy-friends-eating-fruits-and-drinking-on-a-min-1024x683.jpg"
            alt=""
          />
          <h4>How You Can Give Someone A Second Chance</h4>
          <p>Job hunt Nulla ut tortor</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
