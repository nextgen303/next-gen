// src/pages/projects/[id].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import projectsData from '@/pages/api/projectsData'; // Adjust the path if necessary
import Image from 'next/image';
import Layout from '@/components/Layout';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectsData[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Layout>
      <div className="project-details-container">
        <h1 className="project-title">{project.title}</h1>
        <Image src={project.img} alt={project.title} width={800} height={450} />
        <p className="project-summary">{project.summary}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Live Project
        </a>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
