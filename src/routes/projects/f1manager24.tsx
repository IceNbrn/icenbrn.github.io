import { createFileRoute } from '@tanstack/react-router'
import ProjectHeader from "../../components/ProjectHeader.tsx";
import {commercialProjects} from "../../data";
import type {ProjectDetails} from "../../types/Project.ts";

export const Route = createFileRoute('/projects/f1manager24')({
  component: F1manager24,
})

function F1manager24() {


  return (
      <>
        <ProjectHeader data={commercialProjects.find(c => c.name.includes("F1 Manager 24")) as ProjectDetails}/>

        <div className="album py-5 bg-icen">
          <div className="container text-start">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1">
              <div className="col">
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-6 text-center">
                      <div className="video-wrapper">
                        <iframe src="https://www.youtube.com/embed/OOaZZyoJdT4"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 card-icen container">
                    <div className="card-body">
                      <h3></h3>
                      <p className="card-text">F1 Manager 24, AAA game from Frontier Developments where I worked as a
                        Graduate Programmer.</p>
                      <p className="card-text">I worked in the <b>Create A Team</b> feature, I had to <b>work closely
                        with the UI Team and Designers</b>.</p>
                      <p className="card-text">While I worked where, I was part of <b>Code Reviews</b>, <b>Feature
                        Development</b>, <b>Bug Fixing</b>, <b>Prototyping</b>, <b>Profiling</b> and <b>Optimization</b>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
