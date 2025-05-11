import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectContext } from '../context/ProjectContext';
import FundingForm from '../components/FundingForm';

export default function ProjectDetails() {
  const { id } = useParams();
  const { projects } = useContext(ProjectContext);
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <img src={project.image} alt={project.title} className="img-fluid mb-3" />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </Col>
        <Col md={4}>
          <FundingForm project={project} />
        </Col>
      </Row>
    </Container>
  );
}
