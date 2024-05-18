"use client";
import React, { ReactNode } from "react";
import { useParams } from "next/navigation";
import MSBENTER from "./_projectDetailComponents/projects/MSBENTER";
import styles from "@/app/main.module.scss";

interface ProjectsDetailMapping {
  [key: string]: ReactNode;
}

const ProjectDetail = () => {
  const { project_detail }: { project_detail: string } = useParams();
  const projectsDetailMapping: ProjectsDetailMapping = {
    msbenter: <MSBENTER />,
  };

  const selectedDetail = projectsDetailMapping[project_detail];

  return <main className={styles.main}>{/* {selectedDetail} */}</main>;
};

export default ProjectDetail;
