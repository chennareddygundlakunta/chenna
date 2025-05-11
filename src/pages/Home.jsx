import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import { ProjectContext } from '../context/ProjectContext';
import bgImage from '../assets/funding.jpeg'; 

const containerStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
 
 
};

export default function Home() {
  const { projects } = useContext(ProjectContext);

  return (
    <Container style={containerStyle} className="mt-4">
      <h2 className="mb-4">Discover Projects</h2>
      <Row>
        {projects.map(project => (
          <Col md={4} key={project.id} className="mb-4">
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
